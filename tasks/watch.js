// variables globales
var grunt;
var path = require('path');

// configuro la tarea watch
var config = {
  watch: {
    template: {
      files: ['templates/**.jade', 'templates/**/*.jade', 'static/**/*'],
      options: {
        spawn: false,
        livereload: true,
        interrupt: true
      }
    }
  }
};

/**
 * onWatch, se ejecuta con cada cambio de los archivos revisados por el 
 * watcher
 * @param action string tipo de cambio
 * @param filepath string Ruta de archivo modificado
 */
function onWatch(action, filepath) {

  var ext = filepath.split('.');
  ext = ext[ext.length - 1];

  if (ext === 'jade') {
    cJade(grunt, filepath, config.jade);
  }

  else if (ext === 'styl') {
    cStylus(grunt, filepath, config.stylus);
  }

}

/**
 * Compilar Stylus, modifica los valores de la tarea stylus.js para compilar
 * solo los archivos que son modificados
 * @param grunt object instancia de grunt
 * @param filepath string Ruta de archivo modificado
 * @param default_config array Configuracion inicial de los archivos
 */
function cStylus(grunt, filepath, default_config) {
  filepath = filepath.split('static' + path.sep)[1];

  if (filepath.indexOf('modules' + path.sep ) === -1) {
    grunt.config.set('stylus.compile.files.0.src', [filepath]);
  } else {
    grunt.config.set('stylus.compile.files.0.src', default_config);
  }

  grunt.task.run('stylus:compile');
}

/**
 * Compilar Jade, modifica los valores de la tarea jade.js para compilar
 * solo los archivos que son modificados
 * @param grunt object instancia de grunt
 * @param filepath string Ruta de archivo modificado
 * @param default_config array Configuracion inicial de los archivos
 */
function cJade(grunt, filepath, default_config) {
  // path.sep, para que funcione con back slash de windows
  filepath = filepath.split('templates' + path.sep)[1];

  if ( /_(.*).jade/.test(filepath) === false) {
    grunt.config.set('jade.compile.files.0.src', [filepath]);
  } else {
    grunt.config.set('jade.compile.files.0.src', default_config);
  }

  grunt.task.run('jade:compile');
}

/**
 * Publico
 */
module.exports = function(g) {

  // asigno valor a variable glogal
  grunt = g;

  // cargo libreria
  grunt.loadNpmTasks('grunt-contrib-watch');

  // copio configuracion sin referencias
  config.jade = grunt.config.get('jade.compile.files.0.src').slice(0) || [];
  config.stylus = grunt.config.get('stylus.compile.files.0.src').slice(0) || [];

  // Configuro watch
  grunt.config.set('watch', config.watch);

  // Configuro metodo de evento
  grunt.event.on('watch', onWatch); 

};
