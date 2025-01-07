<?php
declare(strict_types=1);

namespace App\Commands;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class HelloCmd extends Command
{
    protected function configure()
    {
        $this
            ->setName('hello')
            ->setHelp('hello cmd');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln("hello!");

        return 0;
    }
}
