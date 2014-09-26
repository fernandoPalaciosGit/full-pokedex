module.exports = function (grunt) {

  grunt.initConfig({
    connect: { // create node JS port to simple web servise
      server: {
        options: {
          port: 9000,
          base: 'app/'
        }
      }
    },
     sass: { // deployment with sass
      dist: {
        files: {
          'app/styles/app.css' : 'app/styles/app.scss'
        }
      }
    },
    watch: { // livereload ,no more F5
      css:{
        files: 'app/**/*.scss',
        tasks: ['sass']
      },
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
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['connect', 'watch', 'sass']);

};
