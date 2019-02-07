/////   !GRUNT MODULE USAGE

module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            demo: {
                options: {
                    compress: false
                },
                files: {
                    'build/styles.css': 'src/less/index.less'
                }
            }
        },
        watch: {
            css: {
                files: ["src/less/*.less"],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }
        }
    });

    /////	!LOAD PLUGINS
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-contrib-less");

    /////	!TASKS

    grunt.registerTask('default', ['less', 'watch']);

};