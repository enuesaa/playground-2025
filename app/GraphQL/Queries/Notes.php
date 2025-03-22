<?php

declare(strict_types=1);

namespace App\GraphQL\Queries;

final class Notes
{
    public function __invoke(mixed $root, array $args): array
    {
        logger($args);

        $note = ['name' => 'aa', 'hey' => 'hello'];

        return [$note];
    }
}
