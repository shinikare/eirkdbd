define(['backbone'], function (Backbone) {
    var model = Backbone.Model.extend({
        defaults: {
            id: 0,
            name: '',
            avatar: null,
            attributes: {
                age: 0,
                weight: 0,
                height: 0
            }
        }/*,
        urlRoot : 'misc/sample.json',
        url : function () {
            var id  = this.get('id');
            if (id) {
                return this.urlRoot +'/'+id;
            }
            return this.urlRoot;
        }*/
    });

    return {
        single : function (init) {
            return model(init || {});
        },
        collection : function () {
            return Backbone.Collection.extend({
                model: model,
                url : 'misc/sample.json'
            });
        }
    }
});