onload = function() {

    var os = require('os');

    var makeprintable = function( value ){
	    if( typeof value === 'object' ) {
		    return JSON.stringify( value );
	    }
	    return value;	
    }

    var compare = function( method ){
	    var osc;
	    var pass = '';
	    var node =  nodeos[ method ];
	    try{
		    osc = os[method]();
	    }catch(e){
		    osc = e; 	
	    }
	    if ( osc === nodeos[method] ) {
		    pass = 'class="pass"';
	    }

	    return '<tr'+pass+'><td>' + method + '</td><td>' 
		    + makeprintable( nodeos[ method ] ) 
		    +'</td><td>'+ makeprintable( osc ) + '</td></tr>'; 	     	
    }    

    setTimeout(function(){

	    var methods = ['networkInterfaces',
    'totalmem',
    'hostname', 
    'freemem', 
    'arch', 
    'tmpDir', 
    'hostname', 
    'type', 
    'platform', 
    'release', 
    'uptime', 
    'loadavg', 
    'cpus', 
    'EOL'];

    var rows = '<tr><th>Method</th><th>os-chromify</th><th>node.js</th></tr>';
    methods.forEach( function( method ){ 
	    rows += compare( method );	
    });
    var table = document.getElementById( 'results' );
    table.innerHTML = rows; 	

    }, 500 );

};
