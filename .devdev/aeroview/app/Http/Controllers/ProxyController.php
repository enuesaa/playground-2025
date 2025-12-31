<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\Resource;
use App\Services\Nasa\Nasa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

final class ProxyController extends Controller
{
    public function __construct(
        protected Nasa $nasa,
    ) {
    }

    /**
     * @return \Illuminate\Http\Response|\Illuminate\Contracts\Support\Responsable
     */
    public function view(Request $req)
    {
        $url = $req->query('url');
        if (!$url) {
            return new Resource([]); // TODO: err
        }

        $data = Cache::remember('proxy:'.$url, now()->addMinutes(10), function () use ($url) {
            $response = Http::get($url);

            if ($response->failed()) {
                abort($response->status(), 'failed');
            }

            return [
                'body' => $response->body(),
                'headers' => $response->headers(),
            ];
        });
        $res = response($data['body'], 200);

        if (array_key_exists('Content-Type', $data['headers'])) {
            $res->header('Content-Type', $data['headers']['Content-Type']);
        }
        return $res;
    }
}
