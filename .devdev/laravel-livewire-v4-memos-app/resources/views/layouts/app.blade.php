<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.min.css" />

        <title>{{ $title ?? 'Page Title' }}</title>
    </head>

    <body class="min-h-screen bg-slate-50 text-slate-900 antialiased">

        <livewire:common.header />

        <main class="max-w-4xl mx-auto p-4 min-h-dvh">
            <div class="space-y-6">
                {{ $slot }}
            </div>
        </main>

        <livewire:common.footer />
    </body>
</html>
