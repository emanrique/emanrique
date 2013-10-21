// variables globales
var connect = require('connect');
var grunt;

/**
 * staticServer
 * @param host string Direccion IP del server, por defecto localhost
 * @param port number Puerto del server, por defecto 8000
 */
function staticServer(host, port) {
    var done = this.async();
    var dirname ='';
    if (grunt.option('prod')) {
        dest = grunt.config.get('custom').stag_dirdeploy;
    }
    else {
        dest = grunt.config.get('custom').dev_dirdeploy;
    }
    host = host || 'localhost';
    port = port || 8000;
    dest = dest + dirname;
    connect()

    .use('/static/scripts', connect.static('static/scripts')
    )

    .use('/static/styles', connect.static('build/static/styles'))
    .use('/static', connect.static('static'))
    .use('/', connect.static(dest))

    .listen(port, host);

    grunt.log.write('\nStarting static web server in "%s" on port %s.', host, port);
}

/**
 * Publico
 */
module.exports = function(g) {
  grunt = g;

  grunt.registerTask('connect', 'Start a custom static webserver', staticServer);

};
