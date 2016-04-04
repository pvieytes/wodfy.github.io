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
              
                //app
                'utils': 'js/app/utils',
                'ony-ear': 'js/app/ony-ear',/*
               
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
