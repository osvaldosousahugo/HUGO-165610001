// self.addEventListener('install', function(event) { console.log('A new Service Worker is installing.'); });//
//Konsol membuat log A *new* Service Worker is installing //
self.addEventListener('install',	function(event)	{
		console.log('Service	worker	installing...');
		//	TODO	3.4:	Skip	waiting 
		self.skipWaiting();
});
//	I'm	a	new	service	worker , setelah melakukan install ,konsul akan masuk dan service worker aktif //
self.addEventListener('activate',	function(event)	{
		console.log('Service	worker	activating...');
});
// seletah berhasil install ,akan mengambil data pada event,selanjutnyapengambilan data tersebut akan di tampilkan pada url //
self.addEventListener('fetch',  function(event) {
        console.log('Fetching:',    event.request.url);
});

