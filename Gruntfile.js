module.exports = function (grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'app/'
        }
      }
    },
    watch: {
      project: {
        files: ['app/**/*.js', 'app/**/*.html', 'app/**/*.json', 'app/**/*.css'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect', 'watch']);

};
