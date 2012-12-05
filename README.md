os-chromify
===========

This is ( could be the beginnings of ) a wrapper for the core Node.js OS lib. 

* I started this so I could 'chromify' a node module that required core OS for os.networkInterfaces() but I've added a few others. 
* The Chrome APIs are async and I'm not sure how browserify should handle this? 
* So far none of the mappings are quite the same.
* To run the test on your machine install the package using 'npm install' and then run the 'grunt'. This will run dump a node-os.js into the test/app folder. If you then install the Chrome App you should see how the output compares. 
