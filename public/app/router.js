define([
    'backbone', 'alert'
], function (Backbone, Alert) {
    // create router object
    var AppRouter= Backbone.Router.extend({
        routes: {
            '*actions' : 'default'
        }
    });

    var dynamic = function (action) {
        if (!action) {
            action = 'form'; // load search form
        }
        var $container = $('#main-container'),
            $body = $('body');

        $body.addClass('loading');
        require(['views/'+action], function (View) {
            View.initialize($container).done(function () {
                // $body.removeClass('loading');
                // ok

            }).fail(function(){
                Alert.error('Error occurred at loading view process');
                $body.removeClass('loading');
            });
        }, function () {
            $body.removeClass('loading');
            Alert.error('Unable to load view.');
            // generate alert and load default view
            dynamic();
        })
    };

    // init router
    var initialize = function () {
        var router = new AppRouter;
        // on default action
        router.on('route:default', dynamic);

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});