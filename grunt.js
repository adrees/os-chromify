/*global module:false*/
module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    browserify: {
      'test/app/node.js': {
        options: {
          exports: [
            'require',
            'os'
          ],
          require: {
            os: 'os-chromify'
          }
        }
      }
    }
  });

  grunt.registerTask('node-os-props', 'Write Node OS properties file for comparison', function() {
    var osprops = grunt.helper('os-props');
	grunt.file.write(  'test/app/node-os.js' , osprops ); 
  });
  
  grunt.registerHelper('os-props', function() {
	  var os = require('os');
	  var osprops = {}; 
	  ;['tmpDir'
	  ,'networkInterfaces'
	  ,'hostname'
	  ,'type'
	  ,'platform'
	  ,'arch'
	  ,'release'
	  ,'uptime'
	  ,'loadavg'
	  ,'totalmem'
	  ,'freemem'
	  ,'cpus'
	  ].forEach(function (name) {
		  osprops[ name ] = os[name]();
	  });
	  return 'var nodeos =' + JSON.stringify( osprops )+';';
  });

  grunt.loadNpmTasks('grunt-browserify');

  // Default task.
  grunt.registerTask('default', 'browserify node-os-props');

  };
