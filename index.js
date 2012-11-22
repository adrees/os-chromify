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

var  _networkInterface = ['not ready'];

chrome.socket.getNetworkList(function( networkInterfaces ){
	console.log( networkInterfaces )
		_networkInterface = networkInterfaces; 
}); 
			
var os = module.exports;


os.networkInterfaces = function(){
	return _networkInterface;
}


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

