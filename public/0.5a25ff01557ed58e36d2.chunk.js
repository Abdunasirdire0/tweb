(this.webpackJsonp=this.webpackJsonp||[]).push([[0,14],{10:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));const n=r(52).a.debug,s="undefined"!=typeof window?window:self,o=n?s:{};t.b=n,n||(s.sandpitTurtle=()=>{for(let e in o)s[e]=o[e]})},14:function(e,t,r){"use strict";function n(e){if(null===e||"object"!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());if(Array.isArray(e)){return e.map(e=>n(e))}let t=new e.constructor;for(var r in e)e.hasOwnProperty(r)&&(t[r]=n(e[r]));return t}function s(e,t){const r=Object.keys,n=typeof e;return e&&t&&"object"===n&&n===typeof t?r(e).length===r(t).length&&r(e).every(r=>s(e[r],t[r])):e===t}function o(e,t){const r={writable:!0,configurable:!0},n={};t.forEach(t=>{void 0===e[t]&&(n[t]=r)}),Object.defineProperties(e,n)}function i(e,t="asc"){if(!e)return[];const r=Object.keys(e).map(e=>+e);return"asc"===t?r.sort((e,t)=>e-t):r.sort((e,t)=>t-e)}function a(e,t){if(!e)return t;for(var r in e)t.hasOwnProperty(r)||"$"===r.charAt(0)||delete e[r];for(var r in t)e[r]=t[r];return e}function c(e,t,r){"byteLength"in r[e]&&(r[e]=[...r[e]]),t&&t[e]!==r[e]&&(t[e].length=r[e].length,r[e].forEach((r,n)=>{t[e][n]=r}),r[e]=t[e])}function u(e){return"object"==typeof e&&null!==e}function l(e,t){const r=t.split(".");let n=e;return r.forEach(e=>{n=n[e]}),n}function h(e,t,r){const n=t.split(".");l(e,n.slice(0,-1).join("."))[n.pop()]=r}function d(e,t){for(const r in e)typeof t[r]!=typeof e[r]?t[r]=n(e[r]):u(e[r])&&d(e[r],t[r])}function f(e,t){if(t)for(let r in t)void 0!==t[r]&&(e[r]=t[r])}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return o})),r.d(t,"e",(function(){return i})),r.d(t,"i",(function(){return a})),r.d(t,"h",(function(){return c})),r.d(t,"f",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"j",(function(){return h})),r.d(t,"k",(function(){return d})),r.d(t,"g",(function(){return f}))},16:function(e,t,r){"use strict";r.r(t),r.d(t,"STATE_INIT",(function(){return d})),r.d(t,"AppStateManager",(function(){return v}));var n=r(42),s=r(9),o=r(63),i=r(26),a=r(14),c=r(43),u=r(2),l=r(10);const h=u.a.version,d={dialogs:[],allDialogsLoaded:{},chats:{},users:{},messages:[],contactsList:[],updates:{},filters:{},maxSeenMsgId:0,stateCreatedTime:Date.now(),recentEmoji:[],topPeers:[],recentSearch:[],version:h,authState:{_:"authStateSignIn"},hiddenPinnedMessages:{},settings:{messagesTextSize:16,sendShortcut:"enter",animationsEnabled:!0,autoDownload:{contacts:!0,private:!0,groups:!0,channels:!0},autoPlay:{gifs:!0,videos:!0},stickers:{suggest:!0,loop:!0},background:{type:"image",blur:!1,slug:"ByxGo2lrMFAIAAAAmkJxZabh8eM"},notifications:{sound:!1},nightTheme:!1},drafts:{}},f=Object.keys(d),g=["dialogs","allDialogsLoaded","messages","contactsList","stateCreatedTime","updates","maxSeenMsgId","filters","topPeers"];class v extends n.a{constructor(){super(),this.log=Object(i.b)("STATE"),this.tempId=0,this.loadSavedState()}loadSavedState(){return this.loaded?this.loaded:this.loaded=new Promise(e=>{Promise.all(f.concat("user_auth").map(e=>o.a.get(e))).then(t=>{var r;let n={};f.forEach((e,r)=>{const s=t[r];n[e]=void 0!==s?s:Object(a.a)(d[e])});const o=Date.now();if(n)if(n.version!==h)n=Object(a.a)(d);else if(n.stateCreatedTime+864e5<o){l.b&&this.log("will refresh state",n.stateCreatedTime,o),g.forEach(e=>{n[e]=Object(a.a)(d[e])});const e={},t={};(null===(r=n.recentSearch)||void 0===r?void 0:r.length)&&n.recentSearch.forEach(r=>{r<0?t[r]=n.chats[r]:e[r]=n.users[r]}),n.users=e,n.chats=t}Object(a.k)(d,n),this.state=n,this.state.version=h,s.default.settings=this.state.settings,l.b&&this.log("state res",n,Object(a.a)(n));const i=t[t.length-1];i&&(this.state.authState={_:"authStateSignedIn"},s.default.broadcast("user_auth","number"!=typeof i?i.id:i)),e(this.state)}).catch(e).finally(()=>{setInterval(()=>{this.tempId++,this.saveState()},1e4)})})}getState(){return void 0===this.state?this.loadSavedState():Promise.resolve(this.state)}saveState(){if(void 0===this.state||this.savePromise)return;const e=this.tempId;this.savePromise=Object(c.c)().then(()=>Promise.all(this.dispatchEvent("save",this.state)).then(()=>Object(c.c)()).then(()=>o.a.set(this.state)).then(()=>{this.savePromise=null,this.tempId!==e&&this.saveState()}))}setByKey(e,t){Object(a.j)(this.state,e,t),s.default.broadcast("settings_updated",{key:e,value:t})}pushToState(e,t){this.state[e]=t}setPeer(e,t){const r=e>0?this.state.users:this.state.chats;r.hasOwnProperty(e)||(r[e]=t)}resetState(){for(let e in this.state)this.state[e]=!1;o.a.set(this.state).then(()=>{location.reload()})}}v.STATE_INIT=d;const m=new v;l.a.appStateManager=m,t.default=m},20:function(e,t,r){"use strict";function n(e,t,r=!0,n=!0){let s=null;return(...o)=>{s?(clearTimeout(s),s=null):r&&e(...o),s=setTimeout(()=>{n&&e(...o),s=null},t)}}r.d(t,"a",(function(){return n})),r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return i})),r.d(t,"b",(function(){return a}));const s=e=>new Promise(t=>{setTimeout(t,e)});let o;function i(e){o?o.push(e):(o=[e],requestAnimationFrame(()=>{const e=o;o=void 0,e.forEach(e=>e())}))}function a(){return new Promise(e=>{i(()=>{i(e)})})}},26:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var n,s=r(10);!function(e){e[e.log=1]="log",e[e.warn=2]="warn",e[e.error=4]="error",e[e.debug=8]="debug"}(n||(n={}));const o=Date.now();function i(){return"["+((Date.now()-o)/1e3).toFixed(3)+"]"}function a(e,t=n.log|n.warn|n.error){function r(...r){return t&n.log&&console.log(i(),e,...r)}return s.b||(t=n.error),r.warn=function(...r){return t&n.warn&&console.warn(i(),e,...r)},r.info=function(...r){return t&n.log&&console.info(i(),e,...r)},r.error=function(...r){return t&n.error&&console.error(i(),e,...r)},r.trace=function(...r){return t&n.log&&console.trace(i(),e,...r)},r.debug=function(...r){return t&n.debug&&console.debug(i(),e,...r)},r.setPrefix=function(t){e="["+t+"]:"},r.setPrefix(e),r}},29:function(e,t,r){"use strict";function n(){let e={isFulfilled:!1,isRejected:!1,notify:()=>{},notifyAll:(...t)=>{e.lastNotify=t,e.listeners.forEach(e=>e(...t))},lastNotify:void 0,listeners:[],addNotifyListener:t=>{e.lastNotify&&t(...e.lastNotify),e.listeners.push(t)}},t=new Promise((r,n)=>{e.resolve=e=>{t.isFulfilled||(t.isFulfilled=!0,r(e))},e.reject=(...e)=>{t.isRejected||(t.isRejected=!0,n(...e))}});return t.finally(()=>{t.notify=null,t.listeners.length=0,t.lastNotify=null,t.cancel&&(t.cancel=()=>{})}),Object.assign(t,e),t}r.d(t,"a",(function(){return n}))},42:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));class n{constructor(e){this._constructor(e)}_constructor(e=!1){this.reuseResults=e,this.listeners={},this.listenerResults={}}addEventListener(e,t,r){var n;this.listenerResults.hasOwnProperty(e)&&(t(...this.listenerResults[e]),r)||(null!==(n=this.listeners[e])&&void 0!==n?n:this.listeners[e]=[]).push({callback:t,once:r})}removeEventListener(e,t){this.listeners[e]&&this.listeners[e].findAndSplice(e=>e.callback===t)}dispatchEvent(e,...t){this.reuseResults&&(this.listenerResults[e]=t);const r=[],n=this.listeners[e];if(n){n.slice().forEach(s=>{-1!==n.findIndex(e=>e.callback===s.callback)&&(r.push(s.callback(...t)),s.once&&this.removeEventListener(e,s.callback))})}return r}cleanup(){this.listeners={},this.listenerResults={}}}},43:function(e,t,r){"use strict";r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return d}));var n=r(29),s=r(20),o=r(9),i=r(10);let a=!1,c=Promise.resolve(),u=0;const l=console.log.bind(console.log,"[HEAVY-ANIMATION]:"),h=(e,t)=>{a||(c=Object(n.a)(),o.default.broadcast("event-heavy-animation-start"),a=!0,i.b&&l("start")),++u,i.b&&l("attach promise, length:",u,t);const r=[void 0!==t?Object(s.d)(t):void 0,e.finally(()=>{})].filter(Boolean),h=performance.now();return Promise.race(r).then(()=>{--u,i.b&&l("promise end, length:",u,performance.now()-h),u||(a=!1,u=0,o.default.broadcast("event-heavy-animation-end"),c.resolve(),i.b&&l("end"))}),c},d=()=>c;t.a=(e,t,r)=>{a&&e();const n=r?r.add.bind(r,o.default):o.default.addEventListener.bind(o.default),s=r?r.removeManual.bind(r,o.default):o.default.removeEventListener.bind(o.default);return n("event-heavy-animation-start",e),n("event-heavy-animation-end",t),()=>{s("event-heavy-animation-end",t),s("event-heavy-animation-start",e)}}},52:function(e,t,r){"use strict";const n={test:location.search.indexOf("test=1")>0,debug:location.search.indexOf("debug=1")>0,http:!1,ssl:!0,multipleConnections:!0,asServiceWorker:!1};t.a=n},63:function(e,t,r){"use strict";var n=r(10);const s=new(r(94).a)({storeName:"session"});n.a.appStorage=s,t.a=s},64:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return s}));const n=e=>new Promise(t=>{const r=new FileReader;r.addEventListener("loadend",e=>{t(e.srcElement.result)}),r.readAsText(e)});function s(e,t=""){let r;const n=function(e){if(-1===["image/jpeg","image/png","image/gif","image/webp","image/bmp","video/mp4","video/webm","video/quicktime","audio/ogg","audio/mpeg","audio/mp4","application/json"].indexOf(e))return"application/octet-stream";return e}(t);try{r=new Blob(e,{type:n})}catch(t){let s=new BlobBuilder;e.forEach(e=>{s.append(e)}),r=s.getBlob(n)}return r}},9:function(e,t,r){"use strict";r.r(t),r.d(t,"RootScope",(function(){return o}));var n=r(42),s=r(10);class o extends n.a{constructor(){super(),this._overlayIsActive=!1,this.myId=0,this.idle={isIDLE:!0},this.connectionStatus={},this.broadcast=(e,t)=>{this.dispatchEvent(e,t)},this.on=(e,t,r)=>{super.addEventListener(e,t,r)},this.addEventListener=this.on,this.off=(e,t)=>{super.removeEventListener(e,t)},this.removeEventListener=this.off,this.on("user_auth",e=>{this.myId=e}),this.on("connection_status_change",e=>{const t=e;this.connectionStatus[e.name]=t})}get overlayIsActive(){return this._overlayIsActive}set overlayIsActive(e){this._overlayIsActive=e,this.broadcast("overlay_toggle",e)}}const i=new o;s.a.rootScope=i,t.default=i,i.addEventListener("album_edit",e=>{}),i.addEventListener("album_edit",e=>{})},94:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n={name:"tweb"+(r(52).a.test?"_test":""),version:5,stores:[{name:"session"},{name:"stickerSets"}]},s=r(64),o=r(14),i=r(26);class a{constructor(e){this.storageIsAvailable=!0,this.log=Object(i.b)("IDB"),this.name=n.name,this.version=n.version,this.stores=n.stores,Object(o.g)(this,e),this.openDatabase(!0)}isAvailable(){return this.storageIsAvailable}openDatabase(e=!1){if(this.openDbPromise&&!e)return this.openDbPromise;try{var t=indexedDB.open(this.name,this.version);if(!t)throw new Error}catch(e){return this.log.error("error opening db",e.message),this.storageIsAvailable=!1,Promise.reject(e)}let r=!1;return setTimeout(()=>{r||t.onerror({type:"IDB_CREATE_TIMEOUT"})},3e3),this.openDbPromise=new Promise((e,n)=>{t.onsuccess=s=>{r=!0;const o=t.result;let i=!1;this.log("Opened"),o.onerror=e=>{this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),n(e)},o.onclose=e=>{this.log.error("closed:",e),!i&&this.openDatabase()},o.onabort=e=>{this.log.error("abort:",e);const t=e.target;this.openDatabase(i=!0),t.onerror&&t.onerror(e),o.close()},o.onversionchange=e=>{this.log.error("onversionchange, lol?")},e(o)},t.onerror=e=>{r=!0,this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),n(e)},t.onupgradeneeded=e=>{r=!0,this.log.warn("performing idb upgrade from",e.oldVersion,"to",e.newVersion);var t=e.target.result;this.stores.forEach(e=>{t.objectStoreNames.contains(e.name)||((e,t)=>{var r;const n=e.createObjectStore(t.name);if(null===(r=t.indexes)||void 0===r?void 0:r.length)for(const e of t.indexes)n.createIndex(e.indexName,e.keyPath,e.objectParameters)})(t,e)})}})}delete(e){return this.openDatabase().then(t=>{try{var r=t.transaction([this.storeName],"readwrite").objectStore(this.storeName).delete(e)}catch(e){return Promise.reject(e)}return new Promise((t,n)=>{const s=setTimeout(()=>{this.log.error("delete: request not finished!",e,r),t()},3e3);r.onsuccess=e=>{t(),clearTimeout(s)},r.onerror=e=>{n(e),clearTimeout(s)}})})}deleteAll(){return this.openDatabase().then(e=>{try{const r=e.transaction([this.storeName],"readwrite");var t=r.objectStore(this.storeName).clear()}catch(e){return Promise.reject(e)}return new Promise((e,r)=>{const n=setTimeout(()=>{this.log.error("deleteAll: request not finished",t)},3e3);t.onsuccess=t=>{e(),clearTimeout(n)},t.onerror=e=>{r(e),clearTimeout(n)}})})}save(e,t){return this.openDatabase().then(r=>{const n=n=>{this.log.error("save: transaction error:",e,t,r,n,n&&n.name),n&&"InvalidStateError"!==n.name||setTimeout(()=>{this.save(e,t)},2e3)};try{const o=r.transaction([this.storeName],"readwrite");o.onerror=e=>{n(o.error)};var s=o.objectStore(this.storeName).put(t,e)}catch(e){return n(e),Promise.reject(e)}return new Promise((t,r)=>{const n=setTimeout(()=>{this.log.error("save: request not finished",e,s)},1e4);s.onsuccess=e=>{t(),clearTimeout(n)},s.onerror=e=>{r(e),clearTimeout(n)}})})}saveFile(e,t){return t instanceof Blob||(t=Object(s.a)([t])),this.save(e,t)}get(e){return this.openDatabase().then(t=>{try{const n=t.transaction([this.storeName],"readonly");var r=n.objectStore(this.storeName).get(e)}catch(t){this.log.error("get error:",t,e,r,r.error)}return new Promise((t,n)=>{const s=setTimeout(()=>{this.log.error("get request not finished!",e,r),n()},3e3);r.onsuccess=function(e){const o=r.result;void 0===o?n("NO_ENTRY_FOUND"):t(o),clearTimeout(s)},r.onerror=()=>{clearTimeout(s),n()}})})}}var c=function(e,t,r,n){return new(r||(r=Promise))((function(s,o){function i(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};class u{constructor(e){this.cache={},this.useStorage=!0,this.storage=new a(e)}getCache(){return this.cache}getFromCache(e){return this.cache[e]}setToCache(e,t){return this.cache[e]=t}get(e){return c(this,void 0,void 0,(function*(){if(this.cache.hasOwnProperty(e))return this.getFromCache(e);if(this.useStorage){let t;try{t=yield this.storage.get(e)}catch(r){"NO_ENTRY_FOUND"!==r&&(this.useStorage=!1,console.error("[AS]: get error:",r,e,t))}return this.cache[e]=t}throw"something went wrong"}))}set(e,t=!1){return c(this,void 0,void 0,(function*(){for(const r in e)if(e.hasOwnProperty(r)){const n=e[r];if(this.setToCache(r,n),this.useStorage&&!t)try{yield this.storage.save(r,n)}catch(e){console.error("[AS]: set error:",e,r)}}}))}remove(e,t=!1){return c(this,void 0,void 0,(function*(){if(t||delete this.cache[e],this.useStorage)try{yield this.storage.delete(e)}catch(e){this.useStorage=!1,console.error("[AS]: remove error:",e)}}))}clear(){return this.storage.deleteAll()}}}}]);