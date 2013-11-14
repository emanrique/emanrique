/**
 * Publico
 */
module.exports = function(grunt) {

  // cargo dependencias
  grunt.loadNpmTasks('grunt-contrib-copy');

  // configuro tarea que copiara archivos libres de pre-procesos
  grunt.config.set('copy', {
    compile: {
      files: [
        { expand: true,
          src: [
            'static/typos/**/*',
            'static/images/**/*',
            '!**/*.styl'
          ],
          dest: 'build'
        }
      ]
    }
  });

  // configuro tarea
  grunt.registerTask('deploy', 'Compile project', function() {
    var dirdeploy = '';
    
    grunt.task.run(['jade:compile','sprites','stylus:compile','copy','requirejs']);
  });

};
