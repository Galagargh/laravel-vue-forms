<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">

    <script src="{{ mix('js/app.js') }}" defer></script>

    <title>Forms</title>

</head>
<body class="antialiased bg-gray-100">
<div id="app" class="container">
    {{--        @include ('projects.list')--}}

    <form action="POST" action="/projects" @submit.prevent="onSubmit">
        <div class="control">
            <label for="name" class="label">Project Name:</label>

            <input type="text" id="name" name="name" class="input" v-model="name">
        </div>

        <div class="control">
            <label for="description" class="label">Project Description:</label>
            <input type="text" id="description" name="description" class="input" v-model="description">
        </div>

        <div class="control">
            <button class="button is-primary">Create</button>
        </div>
    </form>

</div>
</body>
</html>