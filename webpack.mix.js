let mix = require('laravel-mix');

mix.sass('assets/app.scss', 'css/')
    .js('assets/app.js', 'js/');