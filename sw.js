var __wpo = {"assets":{"main":["./app.ddf7a4d680430dd7b7e5.js","./vendors.60b346afdefed6eb00b4.js","./","/"],"additional":[],"optional":[]},"externals":["/"],"hashesMap":{"4cabe775a0ef0576ea9a18fb7a9ee03d3a295da0":"./app.ddf7a4d680430dd7b7e5.js","0e1999013562d548198acf5f35e372f514bc06c9":"./vendors.60b346afdefed6eb00b4.js","4c829b9c696560248de74c49f0fd1ed9c7284e7c":"./"},"strategy":"changed","responseStrategy":"cache-first","version":"2018-10-14 16:43:36","name":"webpack-offline","pluginVersion":"5.0.5","relativePaths":true};

!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./node_modules/offline-plugin/lib/misc/sw-loader.js?json=%7B%22data_var_name%22%3A%22__wpo%22%2C%22cacheMaps%22%3A%5B%7B%22match%22%3A%22function%28url%29%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20if%20%28url.pathname%20%3D%3D%3D%20location.pathname%29%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20return%3B%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20return%20new%20URL%28%5C%22/%5C%22%2C%20location%29%3B%5Cn%20%20%20%20%20%20%20%20%7D%22%2C%22to%22%3Anull%2C%22requestTypes%22%3A%5B%22navigate%22%5D%7D%5D%2C%22navigationPreload%22%3A%22false%22%7D!./node_modules/offline-plugin/tpls/empty-entry.js")}({"./node_modules/offline-plugin/lib/misc/sw-loader.js?json=%7B%22data_var_name%22%3A%22__wpo%22%2C%22cacheMaps%22%3A%5B%7B%22match%22%3A%22function%28url%29%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20if%20%28url.pathname%20%3D%3D%3D%20location.pathname%29%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20return%3B%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20return%20new%20URL%28%5C%22/%5C%22%2C%20location%29%3B%5Cn%20%20%20%20%20%20%20%20%7D%22%2C%22to%22%3Anull%2C%22requestTypes%22%3A%5B%22navigate%22%5D%7D%5D%2C%22navigationPreload%22%3A%22false%22%7D!./node_modules/offline-plugin/tpls/empty-entry.js":function(e,n,t){"use strict";if(function(){var e=ExtendableEvent.prototype.waitUntil,n=FetchEvent.prototype.respondWith,t=new WeakMap;ExtendableEvent.prototype.waitUntil=function(n){var r=this,o=t.get(r);if(!o)return o=[Promise.resolve(n)],t.set(r,o),e.call(r,Promise.resolve().then(function e(){var n=o.length;return Promise.all(o.map(function(e){return e.catch(function(){})})).then(function(){return o.length!=n?e():(t.delete(r),Promise.all(o))})}));o.push(Promise.resolve(n))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),n.call(this,e)}}(),void 0===r)var r=!1;function o(e,n){return caches.match(e,{cacheName:n}).then(function(t){return i(t)?t:a(t).then(function(t){return caches.open(n).then(function(n){return n.put(e,t)}).then(function(){return t})})}).catch(function(){})}function i(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function a(e){return i(e)?Promise.resolve(e):("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status})})}function u(e,n){console.groupCollapsed("[SW]:",e),n.forEach(function(e){console.log("Asset:",e)}),console.groupEnd()}!function(e,n){var t=n.cacheMaps,i=n.navigationPreload,s=e.strategy,c=e.responseStrategy,l=e.assets,f=e.hashesMap,h=e.externals,d=e.prefetchRequest||{credentials:"same-origin",mode:"cors"},p=e.name,v=e.version,m=p+":"+v,g=p+"$preload",y="__offline_webpack__data";Object.keys(l).forEach(function(e){l[e]=l[e].map(function(e){var n=new URL(e,location);return n.hash="",-1===h.indexOf(e)&&(n.search=""),n.toString()})}),f=Object.keys(f).reduce(function(e,n){var t=new URL(f[n],location);return t.search="",t.hash="",e[n]=t.toString(),e},{}),h=h.map(function(e){var n=new URL(e,location);return n.hash="",n.toString()});var w=[].concat(l.main,l.additional,l.optional);function C(n){var t=l[n];return caches.open(m).then(function(r){return _(r,t,{bust:e.version,request:d,failAll:"main"===n})}).then(function(){u("Cached assets: "+n,t)}).catch(function(e){throw console.error(e),e})}function b(n){return caches.keys().then(function(e){for(var n=e.length,t=void 0;n--&&0!==(t=e[n]).indexOf(p););if(t){var r=void 0;return caches.open(t).then(function(e){return r=e,e.match(new URL(y,location).toString())}).then(function(e){if(e)return Promise.all([r,r.keys(),e.json()])})}}).then(function(t){if(!t)return C(n);var r=t[0],o=t[1],i=t[2],a=i.hashmap,s=i.version;if(!i.hashmap||s===e.version)return C(n);var c=Object.keys(a).map(function(e){return a[e]}),h=o.map(function(e){var n=new URL(e.url);return n.search="",n.hash="",n.toString()}),p=l[n],v=[],g=p.filter(function(e){return-1===h.indexOf(e)||-1===c.indexOf(e)});Object.keys(f).forEach(function(e){var n=f[e];if(-1!==p.indexOf(n)&&-1===g.indexOf(n)&&-1===v.indexOf(n)){var t=a[e];t&&-1!==h.indexOf(t)?v.push([t,n]):g.push(n)}}),u("Changed assets: "+n,g),u("Moved assets: "+n,v);var y=Promise.all(v.map(function(e){return r.match(e[0]).then(function(n){return[e[1],n]})}));return caches.open(m).then(function(t){var r=y.then(function(e){return Promise.all(e.map(function(e){return t.put(e[0],e[1])}))});return Promise.all([r,_(t,g,{bust:e.version,request:d,failAll:"main"===n,deleteFirst:"main"!==n})])})})}function P(){return caches.keys().then(function(e){var n=e.map(function(e){if(0===e.indexOf(p)&&0!==e.indexOf(m))return console.log("[SW]:","Delete cache:",e),caches.delete(e)});return Promise.all(n)})}function U(){return caches.open(m).then(function(n){var t=new Response(JSON.stringify({version:e.version,hashmap:f}));return n.put(new URL(y,location).toString(),t)})}self.addEventListener("install",function(e){console.log("[SW]:","Install event");var n=void 0;n="changed"===s?b("main"):C("main"),e.waitUntil(n)}),self.addEventListener("activate",function(e){console.log("[SW]:","Activate event");var n=function(){if(!l.additional.length)return Promise.resolve();r&&console.log("[SW]:","Caching additional");return("changed"===s?b("additional"):C("additional")).catch(function(e){console.error("[SW]:","Cache section `additional` failed to load")})}();n=(n=(n=n.then(U)).then(P)).then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),i&&self.registration.navigationPreload&&(n=Promise.all([n,self.registration.navigationPreload.enable()])),e.waitUntil(n)}),self.addEventListener("fetch",function(e){if("GET"===e.request.method&&("only-if-cached"!==e.request.cache||"same-origin"===e.request.mode)){var n=new URL(e.request.url);n.hash="";var a=n.toString();-1===h.indexOf(a)&&(n.search="",a=n.toString());var u=-1!==w.indexOf(a),s=a;if(!u){var l=function(e){var n=e.url,r=new URL(n),o=void 0;o=function(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||-1!==(e.headers.get("Accept")||"").indexOf("text/html")}(e)?"navigate":r.origin===location.origin?"same-origin":"cross-origin";for(var i=0;i<t.length;i++){var a=t[i];if(a&&(!a.requestTypes||-1!==a.requestTypes.indexOf(o))){var u=void 0;if((u="function"==typeof a.match?a.match(r,e):n.replace(a.match,a.to))&&u!==n)return u}}}(e.request);l&&(s=l,u=!0)}if(u){var f=void 0;f="network-first"===c?function(e,n,t){return q(e).then(function(e){if(e.ok)return r&&console.log("[SW]:","URL ["+n+"] from network"),e;throw e}).catch(function(e){return r&&console.log("[SW]:","URL ["+n+"] from cache if possible"),o(t,m).then(function(n){if(n)return n;if(e instanceof Response)return e;throw e})})}(e,a,s):function(e,n,t){return function(e){if(i&&"function"==typeof i.map&&e.preloadResponse&&"navigate"===e.request.mode){var n=i.map(new URL(e.request.url),e.request);n&&function(e,n){var t=new URL(e,location),r=n.preloadResponse;R.set(r,{url:t,response:r});var o=function(){return R.has(r)},i=r.then(function(e){if(e&&o()){var n=e.clone();return caches.open(g).then(function(e){if(o())return e.put(t,n).then(function(){if(!o())return caches.open(g).then(function(e){return e.delete(t)})})})}});n.waitUntil(i)}(n,e)}}(e),o(t,m).then(function(o){return o?(r&&console.log("[SW]:","URL ["+t+"]("+n+") from cache"),o):fetch(e.request).then(function(o){return o.ok?(r&&console.log("[SW]:","URL ["+n+"] from network"),t===n&&function(){var t=o.clone(),r=caches.open(m).then(function(e){return e.put(n,t)}).then(function(){console.log("[SW]:","Cache asset: "+n)});e.waitUntil(r)}(),o):(r&&console.log("[SW]:","URL ["+n+"] wrong response: ["+o.status+"] "+o.type),o)})})}(e,a,s),e.respondWith(f)}else{if("navigate"===e.request.mode&&!0===i)return void e.respondWith(q(e));if(i){var d=function(e){var n=new URL(e.request.url);if(self.registration.navigationPreload&&i&&i.test&&i.test(n,e.request)){var t=function(e){if(R){var n=void 0,t=void 0;return R.forEach(function(r,o){r.url.href===e.href&&(n=r.response,t=o)}),n?(R.delete(t),n):void 0}}(n),r=e.request;return t?(e.waitUntil(caches.open(g).then(function(e){return e.delete(r)})),t):o(r,g).then(function(n){return n&&e.waitUntil(caches.open(g).then(function(e){return e.delete(r)})),n||fetch(e.request)})}}(e);if(d)return void e.respondWith(d)}}}}),self.addEventListener("message",function(e){var n=e.data;if(n)switch(n.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}});var R=new Map;function _(e,n,t){var r=t.bust,o=!1!==t.failAll,i=!0===t.deleteFirst,u=t.request||{credentials:"omit",mode:"cors"},s=Promise.resolve();return i&&(s=Promise.all(n.map(function(n){return e.delete(n).catch(function(){})}))),Promise.all(n.map(function(e){return r&&(e=function(e,n){var t=-1!==e.indexOf("?");return e+(t?"&":"?")+"__uncache="+encodeURIComponent(n)}(e,r)),fetch(e,u).then(a).then(function(e){return e.ok?{response:e}:{error:!0}},function(){return{error:!0}})})).then(function(t){return o&&t.some(function(e){return e.error})?Promise.reject(new Error("Wrong response status")):(o||(t=t.filter(function(e){return!e.error})),s.then(function(){var r=t.map(function(t,r){var o=t.response;return e.put(n[r],o)});return Promise.all(r)}))})}function q(e){return e.preloadResponse&&!0===i?e.preloadResponse.then(function(n){return n||fetch(e.request)}):fetch(e.request)}}(__wpo,{loaders:{},cacheMaps:[{match:function(e){if(e.pathname!==location.pathname)return new URL("/",location)},to:null,requestTypes:["navigate"]}],navigationPreload:!1}),e.exports=t("./node_modules/offline-plugin/tpls/empty-entry.js")},"./node_modules/offline-plugin/tpls/empty-entry.js":function(e,n){}});