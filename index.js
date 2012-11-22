//TODO: CreateTarget in Grunt.js, build npm package, link into node_modules
/*
{ lo0: 
   [ { address: '::1', family: 'IPv6', internal: true },
     { address: 'fe80::1', family: 'IPv6', internal: true },
     { address: '127.0.0.1', family: 'IPv4', internal: true } ],
  en1: 
   [ { address: 'fe80::cabc:c8ff:feef:f996', family: 'IPv6',
       internal: false },
     { address: '10.0.1.123', family: 'IPv4', internal: false } ],
  vmnet1: [ { address: '10.99.99.254', family: 'IPv4', internal: false } ],
  vmnet8: [ { address: '10.88.88.1', family: 'IPv4', internal: false } ],
  ppp0: [ { address: '10.2.0.231', family: 'IPv4', internal: false } ] }
 *
 *
 */

var os = module.exports;
var _networkInterfaces;

var regIPv4 = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))/;

os.networkInterfaces = function(){
	return _networkInterfaces;
}



chrome.socket.getNetworkList( onNetworkList );

function onNetworkList( networkInterfaces ) {
	_networkInterfaces = {};
	networkInterfaces.forEach( function( nInterface ) {
		addInterface( nInterface.name, nInterface.address );
	});
};

function addInterface( name, address ) {
	if ( !( name in _networkInterfaces ) ) {
		_networkInterfaces[ name ] = [];	
	}
	_networkInterfaces[ name ].push( {
		address: address,
	       	family: getAddressFamily( address ), 
		internal: false
	});

};

function getAddressFamily( address ) {
	if ( address.match( regIPv4 ) ) {
		return 'IPv4';
	}else{
		return 'IPv6';
	}
};


;['tmpDir'
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
,'EOL'].forEach(function (name) {
  os[name] = function () {
    console.error('sorry,' + name + 'is not implemented yet' );
  }
})

