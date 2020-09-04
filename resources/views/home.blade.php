<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>webamooz blog</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <script>
        window.csrf_token = '{{ csrf_token() }}'
    </script>
    @auth
        <script>
            window.user = {
                id: {{ auth('sanctum')->user()->id }},
                name: '{{ auth('sanctum')->user()->name }}',
                profile_src: '{{ auth('sanctum')->user()->profile_src }}',
                isVerified: {{ auth('sanctum')->user()->email_verified_at === null ? 1 : 2 }},
                roles: @json(auth('sanctum')->user()->roles->pluck('name'))
            }
        </script>
    @endauth
</head>
<body>
    <div id="app">
        <v-app>
            <router-view :key="$route.fullPath"></router-view>
        </v-app>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
