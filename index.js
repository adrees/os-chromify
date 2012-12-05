var os = module.exports;
var _networkInterfaces;
var _totalmem;
var _freemem;
var _arch;

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

var onMemoryInfo = function( memInfo ){
	_totalmem = memInfo.capacity;	
	_freemem = memInfo.availableCapacity;	
};

var onCpuInfo = function( cpuInfo ){
	_arch = cpuInfo.archName;
};

chrome.experimental.systemInfo.memory.get( onMemoryInfo );
chrome.experimental.systemInfo.cpu.get( onCpuInfo );
chrome.socket.getNetworkList( onNetworkList );


os.networkInterfaces = function(){
	return _networkInterfaces;
};

os.totalmem = function(){
	return _totalmem;
};

os.freemem = function(){
	return _freemem;
};

os.arch = function() {
	return _arch;
};

var unimplemented = ['tmpDir' ,'hostname' ,'type' ,'platform' ,'release' ,'uptime' ,'loadavg' ,'cpus' ,'EOL']
unimplemented.forEach(function (name) {
  os[name] = function () {
	 var msg = 'sorry, ' + name + ' is not implemented yet';
	 console.error( msg );
	 throw( msg );  
  };
});

