module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
        options: {
            curly: true,
            eqeqeq: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            sub: true,
            undef: true,
            boss: true,
            eqnull: true,
            browser: true,
            plusplus: false,
            smarttabs: true,
            evil: true,
            globals: {
                global: true,
                process: true,
                console: true,
                Buffer: true,
                require: true,
                __filename: true,
                __dirname: true,
                module: true,
                exports:true,
                //for Browser
                Backbone: true,
                window: true,
                alert: true,
                $: true,
                define: true, 
                requirejs: true,
                JsSHA: true
            }
        },
        files: {
            src: [
              "Gruntfile.js",
              "server.js",
              "routes.js",
              "config.json",
              "libs/**/*.js",
              "components/**/*.js",
              "src/client/spa/**/*.js"
            ]
        }
    },
    clean: {
        build: ["public/js/spa", "build"]
    },
    copy: {
        spa: {
            files: [
                {
                    expand: true,
                    cwd: "src/client/spa/", 
                    src: ["**/*.js"], 
                    dest: "public/js/spa/"
                },
                {
                    expand: true,
                    cwd: "build/", 
                    src: ["**/*.js"], 
                    dest: "public/js/spa/"
                }
            ]
        }
    },
    uglify: {
        bootstrap: {
            files: {
                "public/js/vendor/bootstrap.min.js": ["public/js/vendor/bootstrap.js"]
            }
        }
    },
    jst: {
        compile:{
            options:{
                prettify: true,
                processName: function(longPath){
                    return longPath.substr(25);
                }
            },
            files:{
                "build/templates.js": ["src/client/spa/templates/**/*.html"]
            }
        }
    },
    less: {
        bootstrap: {
            files: {
                "public/css/vendor/bootstrap.css": "src/client/styles/bootstrap/less/bootstrap.less"
            }
        },
        compile: {
            files: {
                "public/css/default.css": "src/client/styles/default.less"
            }
        }
    },
    cssmin: {
        compress: {
            files: {
                "public/css/vendor/bootstrap.min.css": ["public/css/vendor/bootstrap.css"],
                "public/css/default.min.css": ["public/css/default.css"]
            }
        }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-jst");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask(
    "default", 
    [
      "clean:build", "jshint", "jst", "copy:spa", "less:compile", "cssmin:compress"
    ]);

};