/**
 * Publico
 */
module.exports = function(grunt) {
  var dest;

  // cargo dependencias
  grunt.loadNpmTasks('grunt-contrib-jade');

  // condiciono destino del build
  if (grunt.option('prod')) {
    dest = grunt.config.get('custom').stag_dirdeploy + '/templates';
  }

  else {
    dest = grunt.config.get('custom').dev_dirdeploy;
  }

  // configuro tarea
  grunt.config.set('jade', {
    compile: {
      options: {
        pretty: false
      },
      files: [
        {
          expand: true,

          // TODO: revisar watch, "templates/" se suprime del path
          // cuando se quiere compilar un solo archivo
          cwd: 'templates/',

          src: [
            '*.jade',
            '**/*.jade',
            '!_layout.jade',
            '!**/_layout.jade',
            '!includes/**/*.jade',
            '!mixins/**/*.jade',
            '!_*.jade'
          ],
          dest: dest,
          ext: '.html'
        }
      ]
    }
  });

};

