require.config({
    baseUrl: '/js/',
    paths: {
        jquery: 'lib/jquery-2.1.1.min',
        handlebars: 'lib/handlebars-v4.0.11',
        flexible: 'lib/flexible',
        index: '../dist/index'
    }
})

require(['flexible'])