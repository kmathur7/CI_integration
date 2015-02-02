module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      options: {
        unused:true,
        
        //reporterOutput: 'jshint.html'
          //reporter: require('checkstyle')
      },
      all: ['Gruntfile.js', 'src/*.js']
  }
  });

  // Load the plugin that provides the "uglify" task.
 require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['jshint','uglify']);

};