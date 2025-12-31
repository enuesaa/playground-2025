<?php

use Livewire\Component;

new class extends Component
{
    public string $title;
 
    public function mount(string $title): void
    {
        $this->title = $title;
    }
};
?>

<header>
    <h1>aeroview > {{ $title }}</h1>

    <style>
        header {
            text-align: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
    </style>
</header>
