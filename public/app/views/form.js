define(['backbone', 'template', 'views/personsListView'], function (
    Backbone, Template, PersonsListView) {

    var View = Backbone.View.extend({
        render : function () {
            var $def = new $.Deferred(),
                that = this;

            Template('form', {}).done(function (tpl) {

                that.$el.html(tpl);
                $def.resolve();
            }).fail(function () {
                $def.reject();
            });
            return $def.promise();
        },

        events : {
            // submit form event - send data via ajax
            'submit #search-form': function (e) {
                var $target = $(e.target);

                PersonsListView.initialize({
                    $container: $('#persons-list', this.$el),
                    data: $target.serializeJSON()
                });
                return false;
            }
        }
    });

    return {
        initialize: function (container) {
            var view = new View({
                el: container
            });
            return view.render();
        }
    }
});