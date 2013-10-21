/**
 * Publico
 */
module.exports = function(grunt) {
  var dest;

  // cargo dependencias
  grunt.loadNpmTasks('grunt-glue');

  // condiciono destino del build
  if (grunt.option('prod')) {
    dest = grunt.config.get('custom').stag_dirdeploy + '/static/sprites/';
  }

  else {
    dest = grunt.config.get('custom').dev_dirdeploy + '/static/sprites/';
  }

  // configuro tarea
  grunt.registerTask('sprites', 'Compile sprites', function() {
    var items = grunt.file.expand({}, [
          'static/sprites/*', '!static/sprites/**.*'
        ]),
        i = items.length - 1,
        sprites = {};

    for (i; i > -1; --i) {
      sprites['sprite' + i] = {
        src: [ items[i] ],
        options: '--css=' + dest +
          ' --img=' + dest +
          ' --cachebuster --namespace=sp --url=../sprites/ --margin=10'
      };
    }
    grunt.config.set('glue', sprites);

    grunt.config.set('stylus.glue', {
      options: {
        '-C': true
      },
      files: [
        {
          expand: true,
          cwd: dest,
          src: [
            '*.css'
          ],
          dest: 'static/styles/modules',
          ext: '.sprite.styl'
        }
      ]
    });

    grunt.task.run('glue');
    grunt.task.run('stylus:glue');
  });
};
