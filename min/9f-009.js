var f=new Object();f.encode=function(b){if(typeof(b)=="string"){function a(c,d){return b.replace(c,d)}b=a(/-/g,"-a");b=a(/\[/g,"-b");b=a(/\]/g,"-c");b=a(/{/g,"-d");b=a(/}/g,"-e");b=a(/'/g,"-f");b=a(/"/g,"-g");b=a(/ /g,"-h");b=a(/,/g,"-i");b=a(/:/g,"-j")}return b};f.decode=function(b){if(typeof(b)=="string"){function a(c,d){return b.replace(c,d)}b=a(/-a/g,"-");b=a(/-b/g,"[");b=a(/-c/g,"]");b=a(/-d/g,"{");b=a(/-e/g,"}");b=a(/-f/g,"'");b=a(/-g/g,'"');b=a(/-h/g," ");b=a(/-i/g,",");b=a(/-j/g,":")}return b};f.api=function(e,b,g,a){var c=0;d();function d(){if(typeof(b)=="object"){if(c>=b.length){a();requestUrl=undefined}else{requestUrl=b[c]}}else{requestUrl=b}if(typeof(requestUrl)=="string"){var h=new XMLHttpRequest();h.open("POST",requestUrl,true);h.setRequestHeader("x-api",e);h.addEventListener("load",function(){g(h.responseText,h.responseUrl)},false);h.addEventListener("error",d,false);h.addEventListener("timeout",d,false);h.timeout=500;h.send();c++}}};f.loop=function(d,c){if(Array.isArray(d)){for(var b=0;b<d.length;b++){if(typeof(d[b])=="object"){d[b]=f.loop(d[b],c)}else{d[b]=c(d[b])}}}else{if(typeof(d)=="object"){for(var a in d){if(d.hasOwnProperty(a)){if(typeof(d[a])=="object"){nkey=c(a);d[nkey]=f.loop(d[a],c);if(a!=nkey){delete d[a]}}else{nkey=c(a);d[nkey]=c(d[a]);if(a!=nkey){delete d[a]}}}}}}return d};f.stringify=function(a){var b=JSON.stringify(f.loop(a,f.encode));return b};f.parse=function(b){var a=f.loop(JSON.parse(b),f.decode);return a};