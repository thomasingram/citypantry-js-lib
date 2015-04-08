'use strict';

module.exports = function (grunt) {
    // Dynamically load npm tasks.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            js: {
                files: {
                    'dist/lib-es6.js': [
                        'src/module.js',
                        'src/factories/*.js',
                        'src/filters/*.js',
                        'src/services/*.js',
                    ],
                    'dist/lib-es5.js': [
                        'node_modules/grunt-6to5/node_modules/6to5/browser-polyfill.js',
                        'dist/lib-es6.js',
                    ],
                },
            },
        },

        '6to5': {
            js: {
                files: {
                    'dist/lib-es5.js': 'dist/lib-es5.js'
                }
            }
        },
    });

    grunt.registerTask('default', [
        'concat',
        '6to5',
    ]);
};
