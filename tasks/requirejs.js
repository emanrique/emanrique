  module.exports = function(grunt) {
    var dest;
    if (grunt.option('prod')) {
      dest = grunt.config.get('custom').stag_dirdeploy + '/static/scripts';
    }
    else {
      dest = grunt.config.get('custom').dev_dirdeploy + '/static/scripts';
    }
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.config.set('requirejs', {

        deploy: {
          options: {
            appDir: 'static/scripts',
            baseUrl: '.',
            dir: dest,
            preserveLicenseComments: false,
            paths: {
              jquery: ':empty',
              async: 'libs/require.async'
            },
            modules: [
              { name: 'site.works' },
              { name: 'site.diario-dibujado' },
              { name: 'site.home' }
            ]
          }
        }
      
    });

};