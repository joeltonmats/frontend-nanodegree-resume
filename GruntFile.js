'use strict'

var ngrok = require('ngrok');

module.exports = function (grunt) {

    // Load grunt tasks
    require('load-grunt-tasks')(grunt);

    // Grunt configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // copy files -----------------------------------
        copy: {
            production: {
                files: [{ expand: true, cwd: './src', src: ['**'], dest: 'dist/' },],
            }
        },

        // minify css files -----------------------------------
        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            production: {
                files: [{
                    expand: true, cwd: 'src', src: ['**/*.css', '!*.min.css'], dest: 'dist', ext: '.min.css'
                }]
            },
            join: {
                files: {
                    'dist/css/bundle.min.css': ['dist/css/default.min.css', 'dist/css/layout.min.css', 'dist/css/media-queries.min.css', 'dist/css/maginfic-popup/magnific-popup.min.css']
                }
            }
        },

        // minify js files -----------------------------------
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            production: {
                files: [{
                    cwd: 'src',
                    expand: true,
                    src: ['**/*.js', '!**/*.min.js'],
                    dest: 'dist',
                    rename: function (dst, src) {
                        return dst + '/' + src.replace('.js', '.min.js');
                    }
                }]
            },
            join: {
                files: {
                    'dist/js/bundle.min.js': ['dist/js/lib/jQuery.min.js'
                        , 'dist/js/lib/jquery.flexslider.min.js'
                        , 'dist/js/lib/waypoints.min.js'
                        , 'dist/js/lib/jquery.fittext.min.js'
                        , 'dist/js/lib/magnific-popup.min.js'
                        , 'dist/js/lib/typedjs/typed.min.js'
                        , 'dist/js/init.min.js'
                        , 'dist/js/helper.min.js'
                        , 'dist/js/resumeBuilder.min.js']
                }
            }
        },

        // clean unecessary files -----------------------------------
        clean: {
            production: {
                src: ['dist/**/*.js', 'dist/**/*.css', '!dist/**/*.min.js', '!dist/**/*.min.css']
            }
        },

        // comment js and css dev scrips and uncomment prod scripts -----------------------------------
        replace: {
            production: {
                options: {
                    patterns:
                    [
                        { match: /<!--DEV STYLES-->/g, replacement: '<!--DEV STYLES' },
                        { match: /<!--END DEV STYLE-->/g, replacement: 'END DEV STYLE-->' },
                        { match: /<!--PROD STYLES/g, replacement: '<!--PROD STYLES-->' },
                        { match: /END PROD STYLES-->/g, replacement: '<!--END PROD STYLES-->' },
                        { match: /<!--DEV SCRIPTS-->/g, replacement: '<!--DEV SCRIPTS' },
                        { match: /<!--END DEV SCRIPTS-->/g, replacement: 'END DEV SCRIPTS-->' },
                        { match: /<!--PROD SCRIPTS/g, replacement: '<!--PROD STYLES-->' },
                        { match: /END PROD SCRIPTS-->/g, replacement: '<!--END PROD SCRIPTS-->' },
                    ]
                },
                files: [{ expand: true, cwd: 'src', src: ['**/*.html'], dest: 'dist/' }]
            },
            fixfont: {
                options: {
                    patterns:
                    [
                        { match: /url\(..\/font\//g, replacement: 'url(fontello/font/' },
                        { match: /url\(..\/fonts\//g, replacement: 'url(font-awesome/fonts/' },
                    ]
                },
                files: [{ expand: true, cwd: 'dist', src: ['**/bundle.min.css'], dest: 'dist/' }]
            }
        },

        // minify html files -----------------------------------
        htmlmin: {
            production: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: ['**/*.html'],
                    dest: 'dist'
                }]
            }
        },

        pagespeed: {
            options: {
                nokey: true,
                locale: "en_GB",
                threshold: 40
            },
            local: {
                options: {
                    strategy: "desktop"
                }
            },
            mobile: {
                options: {
                    strategy: "mobile"
                }
            }
        },
    });

    // Register customer task for ngrok
    grunt.registerTask('ngrok-config', 'Run pagespeed with ngrok', function () {
        var done = this.async();
        var port = 3000;

        ngrok.connect(port, function (err, url) {
            if (err !== null) {
                grunt.fail.fatal(err);
                return done();
            }
            grunt.config.set('pagespeed.options.url', url);
            grunt.task.run('pagespeed');
            done();
        });
    });


    // Register default tasks
    grunt.registerTask('pagespeed-score', ['ngrok-config']);
    grunt.registerTask('production', ['copy:production', 'cssmin:production', 'cssmin:join', 'uglify:production', 'uglify:join', 'clean:production', 'replace:production', 'replace:fixfont', 'htmlmin:production']);
};