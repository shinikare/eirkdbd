define(['handlebars'], function (Handlebars){
    var templates = [];
    return function (file, data) {
        var $def = $.Deferred();
        if (templates[file] !== undefined) {
            $def.resolve(templates[file](data), data, templates[file]);
        } else {
            $.ajax({
                url : 'templates/'+file+'.hbs',
                success : function (data) {
                    templates[file] = Handlebars.compile(data);
                    $def.resolve(templates[file](data), data, templates[file]);
                },
                error : function () {
                    $def.reject();
                }
            })
        }
        return $def.promise();
    }
});