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
        unused:true,      /* warns when you define and never use your variables. */
        curly:true,       /* requires you to always put curly braces around blocks in loops and conditionals. */
        camelcase:true,   /* force all identifiers (function, variable and property) to either be written in camel case or in uppercase with underscores */
        funcscope:false,  /* option suppresses warnings about declaring variables inside of control structures while accessing them later from the outside. */
        latedef:true,     /* option prohibits the use of a variable before it was defined. */
        nonbsp:true,      /* option warns about "non-breaking whitespace" characters. */
        debug:false,      /* suppresses warnings about the debugger statements in your code. */
        eqnull:false      /* option suppresses warnings about == null comparisons. */
        
        
        
        //reporterOutput: 'jshint.html'
          //reporter: require('checkstyle')
      },
      all: ['Gruntfile.js', 'src/*.js']
  },
  csslint: {
    strict: {
      options: {
        import: 2
      },
      src: ['styles/**/*.css']
    },
    lax: {
      options: {
        import: false
      },
      src: ['styles/**/*.css']
    }
  },
  cssmin: {
    target: {
      files: [{
        expand: true,
        cwd: 'styles/css',
        src: ['*.css', '!*.min.css'],
        dest: 'build/css'
        
      }]
    }
  },
  karma: {
  unit: {
    configFile: 'my.conf.js'
  },
  continuous: {
    configFile: 'my.conf.js',
    singleRun: true,
    browsers: ['Chrome']
  }
}
  });

  // Load the plugin that provides the "uglify" task.
 require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['jshint','uglify','csslint','cssmin']);
  grunt.registerTask('validate', ['jshint','csslint']);
  grunt.registerTask('test', ['karma']);
  

};