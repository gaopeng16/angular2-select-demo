/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

    var paths = {
        'npm:': 'node_modules/'
    }

    // map tells the System loader where to look for things
    var map = {
        'app': 'app',

        // angular bundles
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

        'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
        'rxjs': 'npm:rxjs',
        'angular2-select': 'npm:angular2-select'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { 
            main: './main.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        },
        'angular2-in-memory-web-api': {
            main: './index.js', 
            defaultExtension: 'js'
        },
        'angular2-select': {
            main: './index.js',
            defaultExtension: 'js'
        }
    };

    var config = {
        paths: paths,
        map: map,
        packages: packages
    };

    System.config(config);

})(this);

