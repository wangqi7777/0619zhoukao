define([
    'jquery', 'handlebars'
], function($, handlebars) {
    $.ajax({
        url: '/api/index',
        dataType: 'json',
        success: function(data) {
            var compile = handlebars.compile($('.text').html());
            $('.list').html(compile(data));
        }
    })

});