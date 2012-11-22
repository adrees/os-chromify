var os = require('os');

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
	console.log('\nName: ' + name + '\n');
	console.dir( os[name]() );
});



