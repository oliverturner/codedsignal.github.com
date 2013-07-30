module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    exec: {
      mocha: {
        command: function() {
          return 'echo hurrah';
        },
        stdout : true
      }
    }
  });

  grunt.registerTask('default', []);
  grunt.registerTask('test', ['exec']);
}