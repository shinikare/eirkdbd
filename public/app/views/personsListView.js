define(['backbone', 'template', 'model/person'], function (Backbone, Template, PersonModel) {
    var PersonsListView = Backbone.View.extend({
        initialize: function (settings) {
            var that = this;
            // fetch model
            this.collection = new (PersonModel.collection());
            // this.collection.bind('change', this.render);
            this.collection.fetch({
                method: 'POST',
                contentType: 'application/json; encoding=utf-8',
                data: JSON.stringify(settings.data),
                success: function () {
                    that.render();
                }
            });
        },

        render : function () {

            var collection = this.collection;
            Template('person', {}).done(function (tpl, data, compiled) {
                console.log(collection.length, collection);
                collection.each(function (col) {
                    $(compiled(col.toJSON())).appendTo('#persons-list');
                })
            });
        }
    });

    return {
        initialize : function ($container, data) {
            new PersonsListView({
                el : $container,
                data: data
            });
        }
    }
});