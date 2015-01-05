requirejs.config({
    baseUrl: 'app',
    paths: {
        'jquery':       '../vendor/jquery/dist/jquery.min',
        'underscore':   '../vendor/underscore/underscore-min',
        'backbone':     '../vendor/backbone/backbone',
        'bootstrap':    '../vendor/bootstrap/dist/js/bootstrap.min',
        'handlebars': '../vendor/handlebars/handlebars.min',
        'jquery.serializeJSON': '../vendor/jquery.serializeJSON/jquery.serializejson.min'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        underscore: {
            exports: '_'
        },
        'jquery.serializeJSON' :{
            deps: ['jquery']
        }
    },
    deps: [
        'backbone', 'jquery.serializeJSON'
    ]
});

requirejs([
    'app'
], function (App) {
    App.initialize();
});