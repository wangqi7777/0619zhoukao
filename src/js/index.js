define([
    'jquery', 'handlebars'
], function($, handlebars) {
    $.ajax({
        url: '/api/index',
        dataType: 'json',
        success: function(data) {
            // console.log(data);
            var compile = handlebars.compile($('.text').html());
            // console.log();
            $('.list').html(compile(data));
        }
    })

});