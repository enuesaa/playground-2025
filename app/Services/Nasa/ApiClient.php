<?php

declare(strict_types=1);

namespace App\Services\Nasa;

use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Middleware;
use GuzzleHttp\Psr7\Uri;
use GuzzleHttp\Utils;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

class ApiClient
{
    protected Client $client;

    protected string $baseurl;

    protected string $apikey;

    public function __construct(string $apikey)
    {
        $this->baseurl = 'https://api.nasa.gov';
        $this->apikey = $apikey;

        $this->client = $this->createClient();
    }

    protected function createClient(): Client
    {
        $stack = new HandlerStack();

        // TODO: こんなんあったかな
        $stack->setHandler(Utils::chooseHandler());

        $stack->push(Middleware::mapRequest(function (RequestInterface $req) {
            $uri = $req->getUri();
            $uri = Uri::withQueryValue($uri, 'api_key', $this->apikey);
            $req = $req->withUri($uri);

            return $req;
        }));

        return new Client(['handler' => $stack]);
    }

    /**
     * @param  string  $path  starts with '/'
     */
    public function calcUrl(string $endpoint): string
    {
        return sprintf('%s%s', $this->baseurl, $endpoint);
    }

    /**
     * TODO use PSR Message Interface
     */
    public function get(string $endpoint): ResponseInterface
    {
        $url = $this->calcUrl($endpoint);
        $res = $this->client->get($url);

        return $res;
    }
}
