let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */


mix.setPublicPath('../')
mix.options({
  processCssUrls: false
});

// Copy Fonts
mix.copyDirectory('resources/graindashboard/gd-icons', '../assets/css');

// CSS
mix.sass('resources/graindashboard/sass/graindashboard.scss', '../assets/css');

// JS
mix.js(
  'resources/graindashboard/js/graindashboard.js',
  '../assets/js'
);

// JS Components
mix.scripts(
  [
    // Components
    'resources/graindashboard/js/components/gd.malihu-scrollbar.js',
    'resources/graindashboard/js/components/gd.side-nav.js',
    'resources/graindashboard/js/components/gd.unfold.js',
	// Init components
    'resources/graindashboard/js/components.js',
  ],
  '../assets/js/graindashboard.vendor.js'
);
