/**
 * Publico
 */
module.exports = function(grunt) {
var dest;

  // cargo dependencias
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // condiciono destino del build
  if (grunt.option('prod')) {
    dest = grunt.config.get('custom').stag_dirdeploy + '/static/images/';
  }

  else {
    dest = grunt.config.get('custom').dev_dirdeploy + '/static/images/';
  }

  // configuro tarea
  grunt.config.set('imagemin', {
    min: {
      options: {                       // Target options
        optimizationLevel: 7
      },
      files: [{
        expand:true,
        cwd: 'static/images',
        src: ['**/*.{png,jpg,gif}'],
        dest: dest
      }]
    }
  });
};
