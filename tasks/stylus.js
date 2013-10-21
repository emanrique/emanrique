/**
 * Publico
 */
module.exports = function(grunt) {
  var dest;

  // cargo dependencias
  grunt.loadNpmTasks('grunt-contrib-stylus');

  // condiciono destino del build
  if (grunt.option('prod')) {
    dest = grunt.config.get('custom').stag_dirdeploy + '/static';
  }

  else {
    dest = grunt.config.get('custom').dev_dirdeploy + '/static';
  }


  // configuro tarea
  grunt.config.set('stylus', {
    compile: {
      options: {
        compress: true
      },
      files: [
        {
          expand: true,

          // TODO: revisar watch, "static" se suprime del path
          // cuando se quiere compilar un solo archivo
          cwd: 'static',

          src: [
            '**.styl',
            '**/**.styl',
            '!**/modules/**'
          ],
          dest: dest,
          ext: '.css'
        }
      ]
    }
  });

};
