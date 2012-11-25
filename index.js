
var os = module.exports;
var _networkInterfaces;
var regIPv4 = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))/;

var onNetworkList = function( networkInterfaces ) {
	_networkInterfaces = {};
	networkInterfaces.forEach( function( nInterface ) {
		addInterface( nInterface.name, nInterface.address );
	});
};

var addInterface = function( name, address ) {
	if ( !( name in _networkInterfaces ) ) {
		_networkInterfaces[ name ] = [];	
	}
	_networkInterfaces[ name ].push( {
		address: address,
	       	family: getAddressFamily( address ), 
		internal: false
	});

};

var getAddressFamily = function( address ) {
	if ( address.match( regIPv4 ) ) {
		return 'IPv4';
	}else{
		return 'IPv6';
	}
};

os.networkInterfaces = function(){
	return _networkInterfaces;
}

chrome.socket.getNetworkList( onNetworkList );

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
'EOL'].forEach(function (name) {
  exports[name] = function () {
    console.error('sorry,' + name + 'is not implemented yet' );
  }
})
