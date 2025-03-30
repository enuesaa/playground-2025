<?php

declare(strict_types=1);

namespace App\Services\Nasa;

use GuzzleHttp\Client;

class ApiClient
{
    protected Client $client;
    protected string $baseurl;
    protected string $apikey;

    public function __construct(string $apikey)
    {
        $this->client = new Client();
        $this->baseurl = 'https://api.nasa.gov';
        $this->apikey = $apikey;

        $this->setupClient();
    }

    protected function setupClient(): void
    {
    }

    /**
     * @param string $path starts with '/'
     */
    public function calcUrl(string $endpoint): string
    {
        // TODO: use Guzzle Middleware to append api_key
        $endpoint = sprintf('%s?api_key=%s', $endpoint, $this->apikey);

        return sprintf('%s%s', $this->baseurl, $endpoint);
    }

    /**
     * TODO use PSR Message Interface
     */
    public function get(string $endpoint): array
    {
        $url = $this->calcUrl($endpoint);
        $res = $this->client->get($url);
        $resbody = json_decode($res->getBody()->getContents(), associative: true);

        return $resbody;
    }
}
