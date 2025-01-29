<?php

declare(strict_types=1);

namespace App\GraphQL\Queries;

final readonly class Notes
{
    /** @param  array{}  $args */
    public function __invoke(null $_, array $args)
    {
        $note = ['name' => 'aa', 'hey' => 'hello'];

        return [$note];
    }
}
