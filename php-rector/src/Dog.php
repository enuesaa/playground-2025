<?php

namespace App;

class Dog
{
    protected $name;
    protected $weight;
    
    public function __construct($name)
    {
        $this->name = $name;
        $this->weight = 6700;
    }

    public function rename($name)
    {
        $this->name = $name;

        // dance of joy
        $this->run();
    }

    protected function run()
    {
        $this->weight -= 10;
    }
}
