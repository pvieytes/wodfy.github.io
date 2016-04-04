//requirejs config as a module. You can add dynamically the baseUrl.
// It could be useful if you serve your statics from another server

console.log('load require-conf.js');

define( [], function () {
    function start(baseUrl){
        console.log('start require-conf');
        requirejs.config({
            baseUrl: baseUrl,
            paths: {

                //libs
                'jquery': 'js/libs/jquery-1.11.1.min',
                /*'jquery-clockpicker': 'js/libs/jquery-clockpicker.min',
                'jquery-ui': 'js/libs/jquery-ui',
                'bootstrap': 'js/bootstrap.min',
                'heatmap': 'js/libs/heatmap.min',
                'mustache': 'js/libs/mustache-2.2.0',*/

                //app
                'utils': 'js/app/utils',
                'ony-ear': 'js/app/ony-ear',/*
                'coords': 'js/app/coords',
                'areas': 'js/app/areas',
                'acqpoints': 'js/app/acqpoints',
                'show-heatmap': 'js/app/show-heatmap',
                'report-filter-plan': 'js/app/report-filter-plan',
                'report-filter-time': 'js/app/report-filter-time',
                'report-filter-role': 'js/app/report-filter-role',
                'people': 'js/app/people',*/

            },
            shim: {
                'jquery': {
                    exports: '$',
                }//,
                /*
                'jquery-ui': {
                    exports: "$",
                     deps: ['jquery']
                },
                'jquery-clockpicker': {
                    exports: "$",
                     deps: ['jquery-ui']
                },
                'utils': ['jquery'],
                'bootstrap': ['jquery'],*/
            }
        });
    };

    return {
        start:start,
    }
});
