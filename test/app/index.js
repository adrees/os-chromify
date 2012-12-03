onload = function() {

    var os = require('os');
    
    setTimeout(function(){
	console.dir( os.networkInterfaces() );
	console.dir( os.arch() );
	console.dir( os.totalmem() );
	console.dir( os.freemem() );
	console.dir( os.hostname() );
    }, 500 );

};
