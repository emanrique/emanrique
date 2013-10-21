
module.exports = function(grunt) {
  try {
    handler = require('./handler.js');
 
  }
  catch(e) {
    handler = {};
  }

  grunt.config.set('custom', {
    dev_dirdeploy: 'build',
    stag_dirdeploy: 'build-site'
  });

  grunt.loadTasks('./tasks');
};

