<?php

declare(strict_types=1);

namespace App\Services\Nasa\DataModels;

/**
 * DataModel は App\Services\Nasa にてイニシャライズされる
 * $this->data にはある程度期待された連想配列が入る想定し、データの存在チェックや型チェックは最小限にする
 */
class DataModel
{
    protected array $data = [];

    public function __construct(array $data)
    {
        $this->data = $data;
    }

    /**
     * @return mixed If the key does not exist, return null.
     */
    protected function get(string $key): mixed
    {
        if (array_key_exists($key, $this->data)) {
            return $this->data[$key];
        }
        return null;
    }
}