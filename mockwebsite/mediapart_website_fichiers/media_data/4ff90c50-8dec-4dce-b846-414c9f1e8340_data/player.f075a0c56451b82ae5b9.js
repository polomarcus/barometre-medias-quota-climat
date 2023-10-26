/*! For license information please see player.f075a0c56451b82ae5b9.js.LICENSE.txt */
var Player;(self.webpackChunkPlayer=self.webpackChunkPlayer||[]).push([[35],{VNnp:(e,t,n)=>{"use strict";n.r(t),n.d(t,{init:()=>_,play:()=>y,playOtherEpisode:()=>v});const o=function(e){var t=parseInt(e/3600),n="";t>0&&(n+=t<10?"0":"",n+=t,n+=":");var o=parseInt((e-3600*t)/60);return n+=("0"+o).slice(-2),(n+=":")+("0"+parseInt(e-3600*t-60*o)).slice(-2)},i=function(e){var t=parseInt(e/3600),n="";t>0&&(n+=t,n+="h");var o=parseInt((e-3600*t)/60);return n+=o,n+="m",(n+=parseInt(e-3600*t-60*o))+"s"};var r=n("Pyar"),a=n.n(r);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){var o,i,r;o=e,i=t,r=n[t],(i=function(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==d(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===d(t)?t:String(t)}(i))in o?Object.defineProperty(o,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[i]=r})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=p(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,r=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw r}}}}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function u(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var f=function(e,t){try{for(var n={e,v:t||"",eid:window.__INITIAL_DATA__.player.playing.id,s:window.__INITIAL_DATA__.session,_:(new Date).getTime()},o="https://t.audiomeans.fr/p.gif?",i=Object.keys(n),r=0;r<i.length;r++)o+=i[r]+"="+encodeURIComponent(n[i[r]])+"&";(new Image).src=o}catch(e){}},h=function(){function e(e){var t=e.getBoundingClientRect();return t.right-t.left}function t(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,o=t.children&&t.children[0]||null;if(!o)throw"No child node found";o.style.position="relative",this.position=0,this.speed=n,this.box_width=e(t),this.inner_element_width=e(o),this.box=t,this.inner_element=o.cloneNode(!0),i.call(this)}function n(){this.box&&this.box.children[0]&&(this.box_width=e(this.box),this.inner_element_width=e(this.box.children[0]))}function o(){return Math.ceil(this.box_width/this.inner_element_width)+1}function i(){var e=o.call(this);if(e>this.box.children.length)for(var t=this.box.children.length;t<e;t++)this.box.appendChild(this.inner_element.cloneNode(!0));else if(e<this.box.children.length)for(t=e;t<this.box.children.length;t++)this.box.removeChild(this.box.lastChild)}function r(e){var t=this;n.call(this),i.call(this),0!==this.inner_element_width?(Array.prototype.forEach.call(this.box.children,(function(e){e.style.left=-t.position+"px"})),this.position+=this.speed*e/1e3,this.position>=this.inner_element_width&&(this.position=this.position%this.inner_element_width)):this._running=!1}return t.prototype={start:function(){this._running=!0;var e=this,t=null;window.requestAnimationFrame((function n(){if(e._running){var o=Date.now(),i=null===t?0:o-t;r.call(e,i),t=o,window.requestAnimationFrame(n)}}))},stop:function(){this._running=!1},resume:function(){this._running||(this._running=!0,this.start())}},t}(),y=function(e){var t=document.getElementById("audio"),n=document.getElementsByClassName("play")[0]||document.getElementById("play-btn");if(!1===window.__INITIAL_DATA__.player.loaded){var o=document.createElement("SOURCE");for(o.src=window.__INITIAL_DATA__.player.playing.audio.path;t.firstChild;)t.removeChild(t.lastChild);t.appendChild(o),n&&(n.className="play loading"),t.onended=function(){if(window.__INITIAL_DATA__.leadin&&"1"===window.__INITIAL_DATA__.leadin){var e=window.__EPISODES__.episodes.map((function(e){return e.id})),t=e.indexOf(window.__INITIAL_DATA__.episode.id)+1;t<window.__EPISODES__.episodes.length&&v(e[t])}},t.oncanplay=function(){n.className="play btn lds-ring",e&&!window.__INITIAL_DATA__.player.seeked&&(t.currentTime=e,window.__INITIAL_DATA__.player.seeked=!0),t.play()},t.load(),window.__INITIAL_DATA__.player.loaded=!0}else t.paused?(e&&(t.currentTime=e),t.play(),!1===window.__INITIAL_DATA__.player.started&&(f("play-click"),window.__INITIAL_DATA__.player.started=!0)):t.pause()},v=function(e){window.hasResizedSetup&&window.hasResizedSetup.stop();var t,n=c(document.getElementsByClassName("episode-".concat(window.__INITIAL_DATA__.episode.id)));try{for(n.s();!(t=n.n()).done;){var o=t.value;o.className=((null==o?void 0:o.className)||"").replace("current","")}}catch(e){n.e(e)}finally{n.f()}var i=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,i,r,a,s=[],l=!0,c=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(o=r.call(n)).done)&&(s.push(o.value),s.length!==t);l=!0);}catch(e){c=!0,i=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}(e,t)||p(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(window.__EPISODES__.episodes.filter((function(t){return t.id===e})),1)[0];window.__INITIAL_DATA__={episode:l({},i),session:window.__INITIAL_DATA__.session,json:window.__INITIAL_DATA__.json,color:window.__INITIAL_DATA__.color,totalTime:window.__INITIAL_DATA__.totalTime,vert:window.__INITIAL_DATA__.vert,leadin:window.__INITIAL_DATA__.leadin,podcast:(window.__INITIAL_DATA__.podcasts||[]).find((function(e){return e.id===i.PodcastId}))||window.__INITIAL_DATA__.podcast,podcasts:window.__INITIAL_DATA__.podcasts},_(!0),document.getElementById("episode-cover").src=(i.imageUrl||window.__INITIAL_DATA__.podcast.imageUrl||"").replace("s3-eu-west-1.amazonaws.com/audiomeansfiles","static.audiomeans.fr").replace("audiomeansfiles.s3.amazonaws.com","static.audiomeans.fr"),function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(document.getElementById("episode-title")),document.getElementById("episode-title").innerHTML="<span>".concat(i.title,"</span>"),g(!0),document.getElementsByClassName("sr-only")[0].innerHTML=i.title,document.getElementById("episode-title-vert").innerHTML=i.title,document.getElementById("episode-description-title").children[0].innerHTML="".concat(i.title," &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"),document.getElementById("episode-subtitle").innerHTML="".concat(window.__INITIAL_DATA__.podcast.name," • ").concat(i.publicationDate," • ").concat(i.duration),document.getElementById("episode-description").innerHTML="".concat(i.description),document.getElementById("episode-share-subtitle").innerHTML="".concat(i.title," • ").concat(i.publicationDate),document.getElementById("subscribe-podcast-name").innerHTML=window.__INITIAL_DATA__.podcast.name,document.getElementById("subscribe-rss").href="https://feeds.audiomeans.fr/feed/".concat(window.__INITIAL_DATA__.podcast.id,".xml"),document.getElementById("facebook-share").href="https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent("les-fables-de-la-fontaine-9df27d9d4e91"===window.__INITIAL_DATA__.podcast.slug?"https://podcasts.comedie-francaise.fr":"https://podcasts.audiomeans.fr/".concat(window.__INITIAL_DATA__.podcast.slug,"/").concat(i.slug))),document.getElementById("twitter-share").href="https://twitter.com/intent/tweet?url=".concat(encodeURIComponent("les-fables-de-la-fontaine-9df27d9d4e91"===window.__INITIAL_DATA__.podcast.slug?"https://podcasts.comedie-francaise.fr":"https://podcasts.audiomeans.fr/".concat(window.__INITIAL_DATA__.podcast.slug,"/").concat(i.slug)),"&text=").concat(encodeURIComponent("".concat(i.title," - ").concat(i.publicationDate))),document.getElementById("linkedin-share").href="http://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURIComponent("les-fables-de-la-fontaine-9df27d9d4e91"===window.__INITIAL_DATA__.podcast.slug?"https://podcasts.comedie-francaise.fr":"https://podcasts.audiomeans.fr/".concat(window.__INITIAL_DATA__.podcast.slug,"/").concat(i.slug)),"&title=").concat(encodeURIComponent("".concat(i.title," - ").concat(i.publicationDate)));var r,a=c(document.getElementsByClassName("episode-".concat(window.__INITIAL_DATA__.episode.id)));try{for(a.s();!(r=a.n()).done;){var s=r.value;s.className="".concat(null==s?void 0:s.className," current")}}catch(e){a.e(e)}finally{a.f()}try{document.getElementsByClassName("player-podcast-name")[0].children[0].href="les-fables-de-la-fontaine-9df27d9d4e91"===window.__INITIAL_DATA__.podcast.slug?"https://podcasts.comedie-francaise.fr":window.__INITIAL_DATA__.podcast.link||"https://podcasts.audiomeans.fr/".concat(window.__INITIAL_DATA__.podcast.slug),document.getElementsByClassName("player-podcast-name")[0].children[0].innerHTML=window.__INITIAL_DATA__.podcast.name;for(var d=document.getElementById("subscribe-links").children,u=[],m=0;m<d.length;m++)d[m].className.indexOf("external")>-1&&u.push(d[m]);for(var f=0;f<u.length;f++)document.getElementById("subscribe-links").removeChild(u[f]);for(var h=0;h<window.__INITIAL_DATA__.podcast.links.length;h++){var v=window.__INITIAL_DATA__.podcast.links[h],I=document.createElement("A");I.href=v.link,I.className="thumb external",I.target="_blank",I.innerHTML='<img src="'.concat(v.PodcastLinkApp.logo,'" /><span>').concat(v.PodcastLinkApp.name,"</span>"),document.getElementById("subscribe-links").appendChild(I)}}catch(e){}try{var T,A=c(document.getElementsByClassName("playlist-overlay"));try{for(A.s();!(T=A.n()).done;){var w=T.value;-1===w.parentNode.className.indexOf("playlist-mode")&&(w.style.display="none")}}catch(e){A.e(e)}finally{A.f()}}catch(e){}y()},g=function(e){try{window.parent.postMessage(JSON.stringify({width:window.innerWidth,mp:window.__INITIAL_DATA__.mp}),"*")}catch(e){}document.getElementById("episode-title")&&setTimeout((function(){try{if(!window.hasResizedSetup||e){try{window.hasResizedSetup.stop()}catch(e){}document.getElementById("episode-title").children[0].offsetWidth>=document.getElementById("episode-title").offsetWidth&&(window.hasResizedSetup=new h(document.getElementById("episode-title")),window.hasResizedSetup.start())}else window.hasResizedSetup.resume()}catch(e){console.log(e)}}),1e3)},_=function(){var e,t,n,r,s,l=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(window.__INITIAL_DATA__.player={loaded:!1,started:!1,playing:window.__INITIAL_DATA__.episode},void 0!==window.__INITIAL_DATA__.json&&(n=[],r=function(e,t,n,o,i,r){void 0!==d(i)&&(e.lineWidth=r.lineWidth,e.beginPath(),e.moveTo(t+o/4,r.offset),e.lineTo(t+2*o,r.offset),e.stroke(),e.closePath());var a=r.heightOffset,l=r.roundPercent,c=.8*o+.5;r.split?r.top?(s(e,t,-n,o,l*(2*n-a),c),s(e,t,l*(2*n-a)-n+a,o,(1-l)*(2*n-a),c)):(s(e,t,-n,o,(1-l)*(2*n-a),c),s(e,t,(1-l)*(2*n-a)-n+a,o,l*(2*n-a),c)):s(e,t,-n,o,2*n,c)},s=function(e,t,n,o,i,r){var a=t,s=n,l=o,c=i,d=r;e.lineJoin="round",e.lineWidth=d,e.strokeRect(a+d/2,s+d/2,l-d,c-d),e.fillRect(a+d/2,s+d/2,l-d,c-d),e.fill()},function o(){var i=document.querySelector("canvas");if(i){var a,s,l,c=parseInt((i.offsetWidth/3.5+1)/2),d=!1;e&&e.length===c||(d=!0,a=function(e){for(var t=window.__INITIAL_DATA__.json.data,n=Math.floor(t.length/e),o=[],i=0;i<e;i++){for(var r=n*i,a=0,s=-1,l=0;l<n;l++)a+=Math.abs(t[r+l]),s=Math.max(s,Math.abs(t[r+l]));o.push(a/n)}return o}(c),s=Math.max.apply(Math,u(a)),Math.min.apply(Math,u(a)),l=Math.pow(s,-1),e=a.map((function(e){return e*l})));var p=e,m=document.getElementById("audio"),f=parseFloat(m.currentTime)/parseFloat(m.duration);if(!t||t!==f||d){t=f,i.width=1*i.offsetWidth,i.height=1*i.offsetHeight;var h=i.getContext("2d");h.scale(1,1),h.translate(.5,parseInt(i.offsetHeight/2)+.5);var y=h.createLinearGradient(0,0,1*i.offsetWidth,0);y.addColorStop(0,window.__INITIAL_DATA__.color.main),isNaN(f)&&(f=0),y.addColorStop(Math.max(f-.001,0),window.__INITIAL_DATA__.color.main),y.addColorStop(f,window.__INITIAL_DATA__.color.back),y.addColorStop(1,window.__INITIAL_DATA__.color.back),h.fillStyle=y,h.strokeStyle=y;for(var v=i.offsetWidth/(2*p.length-1),g=0;g<p.length;g++){var _=2*v*g,I=Math.max(p[g]*(i.offsetHeight/2),0),T=g<p.length-1?Math.max(p[g+1]*(i.offsetHeight/2),0):void 0,A=Math.min(3,.2*I,.2*T);(void 0===n[g]||d)&&(n[g]={offset:Math.random()*(2*A)-A,split:I>.5*i.offsetHeight/2?Math.random()<.3:0,top:Math.random()<.5,lineWidth:2*Math.random()+2,roundPercent:.1*Math.random()+.15,heightOffset:3.5}),r(h,_,I,v,T,n[g])}requestAnimationFrame(o)}else requestAnimationFrame(o)}}(),l||(window.addEventListener("resize",g),g())),!l){var p=document.getElementById("audio"),m=function(e,t){e.addEventListener("click",t),e.addEventListener("keydown",(function(e){"Enter"===e.code&&t()}))},h=document.getElementsByClassName("play")[0];m(h,(function(){if(!1===window.__INITIAL_DATA__.player.loaded&&window.location.hash){var e=window.location.hash.substring(1);if(!Number.isNaN(parseFloat(e)))return void y(parseFloat(e))}y()})),document.addEventListener("keyup",(function(e){"Space"===e.code?y():"ArrowRight"===e.code?p.currentTime+=30:"ArrowLeft"===e.code&&(p.currentTime-=30)}));var v=document.getElementsByClassName("forward");v&&v.length>0&&m(v[0],(function(){p.currentTime+=30}));var _=document.getElementsByClassName("back");_&&_.length>0&&m(_[0],(function(){p.currentTime-=30}));var I=document.getElementsByClassName("back15");I.length>0&&I[0].addEventListener("click",(function(){p.currentTime-=15}));var T=document.getElementsByClassName("btn-info");T.length>0&&m(T[0],(function(){document.getElementsByClassName("description-overlay")[0].style.display="flex",document.getElementsByClassName("description-overlay")[0].focus(),document.getElementsByClassName("description")[0].scrollTop=0}));var A=document.getElementsByClassName("btn-playlist");if(A.length>0){var w,E=c(A);try{for(E.s();!(w=E.n()).done;)w.value.addEventListener("click",(function(){var e,t=c(document.getElementsByClassName("playlist-overlay"));try{for(t.s();!(e=t.n()).done;)e.value.style.display="flex"}catch(e){t.e(e)}finally{t.f()}var n,o=c(document.getElementsByClassName("playlist"));try{for(o.s();!(n=o.n()).done;)n.value.scrollTop=0}catch(e){o.e(e)}finally{o.f()}}))}catch(e){E.e(e)}finally{E.f()}}var b=document.getElementsByClassName("btn-subscribe");b.length>0&&m(b[0],(function(){document.getElementsByClassName("subscribe-overlay")[0].style.display="flex",document.getElementsByClassName("subscribe")[0].scrollTop=0}));var N=document.getElementsByClassName("btn-share");N.length>0&&m(N[0],(function(){document.getElementsByClassName("share-overlay")[0].style.display="flex",document.getElementsByClassName("share")[0].scrollTop=0}));var L=document.getElementsByClassName("btn-sound");L.length>0&&L[0].addEventListener("click",(function(){p.muted?(p.muted=!1,document.getElementsByClassName("block-pdcstnfd")[0].className=document.getElementsByClassName("block-pdcstnfd")[0].className.replace("block-pdcstnfd-muted","")):(p.muted=!0,document.getElementsByClassName("block-pdcstnfd")[0].className="".concat(document.getElementsByClassName("block-pdcstnfd")[0].className," block-pdcstnfd-muted"))}));var S=document.getElementsByClassName("btn-close");if(S.length>0)for(var D=0;D<S.length;D++)m(S[D],(function(){document.getElementsByClassName("description-overlay")[0].style.display="none";try{document.getElementsByClassName("bookmark-overlay")[0].style.display="none"}catch(e){}try{var e,t=c(document.getElementsByClassName("playlist-overlay"));try{for(t.s();!(e=t.n()).done;){var n=e.value;-1===n.parentNode.className.indexOf("playlist-mode")&&(n.style.display="none")}}catch(e){t.e(e)}finally{t.f()}}catch(e){}document.getElementsByClassName("subscribe-overlay")[0].style.display="none",document.getElementsByClassName("share-overlay")[0].style.display="none"}));p.addEventListener("playing",(function(){f("play"),setTimeout((function(){void 0===window.__INITIAL_DATA__.json?h.className="play pause loader":h.className="btn pause"}),100),document.getElementsByClassName("block-pdcstnfd").length>0&&(document.getElementsByClassName("block-pdcstnfd")[0].className="".concat(document.getElementsByClassName("block-pdcstnfd")[0].className," block-pdcstnfd-playing"))})),p.addEventListener("pause",(function(){h.className="btn play",document.getElementsByClassName("block-pdcstnfd").length>0&&(document.getElementsByClassName("block-pdcstnfd")[0].className=document.getElementsByClassName("block-pdcstnfd")[0].className.replace("block-pdcstnfd-playing",""))}));var C=document.getElementsByClassName("soundline");C&&C.length>0&&C[0].addEventListener("click",(function(e){var t=e.target.getBoundingClientRect(),n=e.clientX-t.left;p.currentTime=p.duration*n/t.width}));try{var O=1,x=document.getElementsByClassName("speed-container"),M=document.getElementsByClassName("speed")[0],B=function(){switch(O){case 1:O=1.25;break;case 1.25:O=1.5;break;case 1.5:O=2;break;case 2:O=.75;break;default:O=1}M.innerHTML="".concat(O).concat(1.25!==O&&.75!==O?"x":"");var e=document.getElementsByClassName("speed-container");e&&e.length>0&&(e[0].className="btn speed-container speed-".concat(100*O,"x")),p.playbackRate=O};x&&x.length>0?m(x[0],B):m(M,B)}catch(e){}var P=0;document.getElementById("progress")&&document.getElementsByClassName("current").length>0&&document.getElementsByClassName("duration").length>0?window.setInterval((function(){var e=document.getElementById("progress"),t=document.getElementsByClassName("current"),n=document.getElementsByClassName("duration");if(!0===window.__INITIAL_DATA__.player.loaded){if(!isNaN(parseInt(p.duration))){var i,r=c(n);try{for(r.s();!(i=r.n()).done;)i.value.innerHTML=o(p.duration)}catch(e){r.e(e)}finally{r.f()}}var a,s=c(t);try{for(s.s();!(a=s.n()).done;){var l=a.value;-1===l.className.indexOf("playlist-item")&&(l.innerHTML=o(parseInt(p.currentTime)))}}catch(e){s.e(e)}finally{s.f()}p.currentTime-P>60&&(f("time",p.currentTime),P=p.currentTime),e&&(e.innerHTML=".player .timeline .soundline::after { width: ".concat(parseFloat(p.currentTime)/parseFloat(p.duration)*100,"%; }"))}else{if(!isNaN(parseInt(p.duration))){var d,u=c(n);try{for(u.s();!(d=u.n()).done;)d.value.innerHTML=o(parseInt(window.__INITIAL_DATA__.player.playing.audio.length))}catch(e){u.e(e)}finally{u.f()}}var m,h=c(t);try{for(h.s();!(m=h.n()).done;){var y=m.value;-1===y.className.indexOf("playlist-item")&&(y.innerHTML=o(0))}}catch(e){h.e(e)}finally{h.f()}}}),500):document.getElementsByClassName("block-pdcstnfd-progress").length>0&&window.setInterval((function(){var e=document.getElementsByClassName("block-pdcstnfd-progress")[0];if(!0===window.__INITIAL_DATA__.player.loaded){if(e.style.width="".concat(parseFloat(p.currentTime)/parseFloat(p.duration)*100,"%"),document.getElementsByClassName("pdcstnfd-remaining-time").length>0){var t=p.duration-parseInt(p.currentTime);document.getElementsByClassName("pdcstnfd-remaining-time")[0].innerHTML=i(isNaN(t)?parseInt(window.__INITIAL_DATA__.player.playing.audio.length):t)}}else document.getElementsByClassName("pdcstnfd-remaining-time").length>0&&(document.getElementsByClassName("pdcstnfd-remaining-time")[0].innerHTML=i(parseInt(window.__INITIAL_DATA__.player.playing.audio.length)))}),100);try{var k=new(a().Receiver);k.on("play",(function(){try{y()}catch(e){}k.emit("play")})),k.on("pause",(function(){var e=document.getElementById("audio");try{!e||null!=e&&e.paused||e.pause()}catch(e){}k.emit("pause")})),k.on("getDuration",(function(e){return e(p.duration)})),k.on("getPaused",(function(e){return e(p.paused)})),k.on("getVolume",(function(e){return e(100*p.volume)})),k.on("setVolume",(function(e){return p.volume=e/100})),k.on("mute",(function(){return p.mute=!0})),k.on("unmute",(function(){return p.mute=!1})),k.on("getMuted",(function(e){return e(p.mute)})),k.on("getLoop",(function(e){return e(p.loop)})),k.on("setLoop",(function(e){return p.loop=e})),k.on("getCurrentTime",(function(e){return e(p.currentTime)})),k.on("setCurrentTime",(function(e){return p.currentTime=e})),p.addEventListener("ended",(function(){return k.emit("ended")})),p.addEventListener("timeupdate",(function(){k.emit("timeupdate",{seconds:p.currentTime,duration:p.duration})})),k.ready()}catch(e){console.log("Failed to implement Player.js",e)}}}},Pyar:(e,t,n)=>{var o;!function(i,r){var a={};function s(e){return function(){var t={method:e},n=Array.prototype.slice.call(arguments);/^get/.test(e)?(a.assert(n.length>0,"Get methods require a callback."),n.unshift(t)):(/^set/.test(e)&&(a.assert(0!==n.length,"Set methods require a value."),t.value=n[0]),n=[t]),this.send.apply(this,n)}}a.DEBUG=!1,a.VERSION="0.0.11",a.CONTEXT="player.js",a.POST_MESSAGE=!!i.postMessage,a.origin=function(e){return"//"===e.substr(0,2)&&(e=i.location.protocol+e),e.split("/").slice(0,3).join("/")},a.addEvent=function(e,t,n){e&&(e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n)},a.log=function(){a.log.history=a.log.history||[],a.log.history.push(arguments),i.console&&a.DEBUG&&i.console.log(Array.prototype.slice.call(arguments))},a.isString=function(e){return"[object String]"===Object.prototype.toString.call(e)},a.isObject=function(e){return"[object Object]"===Object.prototype.toString.call(e)},a.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},a.isNone=function(e){return null==e},a.has=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.indexOf=function(e,t){if(null==e)return-1;var n=0,o=e.length;if(Array.prototype.IndexOf&&e.indexOf===Array.prototype.IndexOf)return e.indexOf(t);for(;n<o;n++)if(e[n]===t)return n;return-1},a.assert=function(e,t){if(!e)throw t||"Player.js Assert Failed"},a.Keeper=function(){this.init()},a.Keeper.prototype.init=function(){this.data={}},a.Keeper.prototype.getUUID=function(){return"listener-xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))},a.Keeper.prototype.has=function(e,t){if(!this.data.hasOwnProperty(e))return!1;if(a.isNone(t))return!0;for(var n=this.data[e],o=0;o<n.length;o++)if(n[o].id===t)return!0;return!1},a.Keeper.prototype.add=function(e,t,n,o,i){var r={id:e,event:t,cb:n,ctx:o,one:i};this.has(t)?this.data[t].push(r):this.data[t]=[r]},a.Keeper.prototype.execute=function(e,t,n,o){if(!this.has(e,t))return!1;for(var i=[],r=[],s=0;s<this.data[e].length;s++){var l=this.data[e][s];a.isNone(t)||!a.isNone(t)&&l.id===t?(r.push({cb:l.cb,ctx:l.ctx?l.ctx:o,data:n}),!1===l.one&&i.push(l)):i.push(l)}0===i.length?delete this.data[e]:this.data[e]=i;for(var c=0;c<r.length;c++){var d=r[c];d.cb.call(d.ctx,d.data)}},a.Keeper.prototype.on=function(e,t,n,o){this.add(e,t,n,o,!1)},a.Keeper.prototype.one=function(e,t,n,o){this.add(e,t,n,o,!0)},a.Keeper.prototype.off=function(e,t){var n=[];if(!this.data.hasOwnProperty(e))return n;for(var o=[],i=0;i<this.data[e].length;i++){var r=this.data[e][i];a.isNone(t)||r.cb===t?a.isNone(r.id)||n.push(r.id):o.push(r)}return 0===o.length?delete this.data[e]:this.data[e]=o,n},a.Player=function(e,t){if(!(this instanceof a.Player))return new a.Player(e,t);this.init(e,t)},a.EVENTS={READY:"ready",PLAY:"play",PAUSE:"pause",ENDED:"ended",TIMEUPDATE:"timeupdate",PROGRESS:"progress",ERROR:"error"},a.EVENTS.all=function(){var e=[];for(var t in a.EVENTS)a.has(a.EVENTS,t)&&a.isString(a.EVENTS[t])&&e.push(a.EVENTS[t]);return e},a.METHODS={PLAY:"play",PAUSE:"pause",GETPAUSED:"getPaused",MUTE:"mute",UNMUTE:"unmute",GETMUTED:"getMuted",SETVOLUME:"setVolume",GETVOLUME:"getVolume",GETDURATION:"getDuration",SETCURRENTTIME:"setCurrentTime",GETCURRENTTIME:"getCurrentTime",SETLOOP:"setLoop",GETLOOP:"getLoop",REMOVEEVENTLISTENER:"removeEventListener",ADDEVENTLISTENER:"addEventListener"},a.METHODS.all=function(){var e=[];for(var t in a.METHODS)a.has(a.METHODS,t)&&a.isString(a.METHODS[t])&&e.push(a.METHODS[t]);return e},a.READIED=[],a.Player.prototype.init=function(e,t){var n=this;a.isString(e)&&(e=r.getElementById(e)),this.elem=e,a.assert("IFRAME"===e.nodeName,'playerjs.Player constructor requires an Iframe, got "'+e.nodeName+'"'),a.assert(e.src,"playerjs.Player constructor requires a Iframe with a 'src' attribute."),this.origin=a.origin(e.src),this.keeper=new a.Keeper,this.isReady=!1,this.queue=[],this.events=a.EVENTS.all(),this.methods=a.METHODS.all(),a.POST_MESSAGE?a.addEvent(i,"message",(function(e){n.receive(e)})):a.log("Post Message is not Available."),a.indexOf(a.READIED,e.src)>-1?n.loaded=!0:this.elem.onload=function(){n.loaded=!0}},a.Player.prototype.send=function(e,t,n){if(e.context=a.CONTEXT,e.version=a.VERSION,t){var o=this.keeper.getUUID();e.listener=o,this.keeper.one(o,e.method,t,n)}return this.isReady||"ready"===e.value?(a.log("Player.send",e,this.origin),!0===this.loaded&&this.elem.contentWindow.postMessage(JSON.stringify(e),this.origin),!0):(a.log("Player.queue",e),this.queue.push(e),!1)},a.Player.prototype.receive=function(e){if(a.log("Player.receive",e),e.origin!==this.origin)return!1;var t;try{t=JSON.parse(e.data)}catch(e){return!1}if(t.context!==a.CONTEXT)return!1;"ready"===t.event&&t.value&&t.value.src===this.elem.src&&this.ready(t),this.keeper.has(t.event,t.listener)&&this.keeper.execute(t.event,t.listener,t.value,this)},a.Player.prototype.ready=function(e){if(!0===this.isReady)return!1;e.value.events&&(this.events=e.value.events),e.value.methods&&(this.methods=e.value.methods),this.isReady=!0,this.loaded=!0;for(var t=0;t<this.queue.length;t++){var n=this.queue[t];a.log("Player.dequeue",n),"ready"===e.event&&this.keeper.execute(n.event,n.listener,!0,this),this.send(n)}this.queue=[]},a.Player.prototype.on=function(e,t,n){var o=this.keeper.getUUID();return"ready"===e?this.keeper.one(o,e,t,n):this.keeper.on(o,e,t,n),this.send({method:"addEventListener",value:e,listener:o}),!0},a.Player.prototype.off=function(e,t){var n=this.keeper.off(e,t);if(a.log("Player.off",n),n.length>0)for(var o in n)return this.send({method:"removeEventListener",value:e,listener:n[o]}),!0;return!1},a.Player.prototype.supports=function(e,t){a.assert(a.indexOf(["method","event"],e)>-1,'evtOrMethod needs to be either "event" or "method" got '+e),t=a.isArray(t)?t:[t];for(var n="event"===e?this.events:this.methods,o=0;o<t.length;o++)if(-1===a.indexOf(n,t[o]))return!1;return!0};for(var l=0,c=a.METHODS.all().length;l<c;l++){var d=a.METHODS.all()[l];a.Player.prototype.hasOwnProperty(d)||(a.Player.prototype[d]=s(d))}a.addEvent(i,"message",(function(e){var t;try{t=JSON.parse(e.data)}catch(e){return!1}if(t.context!==a.CONTEXT)return!1;"ready"===t.event&&t.value&&t.value.src&&a.READIED.push(t.value.src)})),a.Receiver=function(e,t){this.init(e,t)},a.Receiver.prototype.init=function(e,t){var n=this;this.isReady=!1,this.origin=a.origin(r.referrer),this.methods={},this.supported={events:e||a.EVENTS.all(),methods:t||a.METHODS.all()},this.eventListeners={},this.reject=!(i.self!==i.top&&a.POST_MESSAGE),this.reject||a.addEvent(i,"message",(function(e){n.receive(e)}))},a.Receiver.prototype.receive=function(e){if(e.origin!==this.origin)return!1;var t={};if(a.isObject(e.data))t=e.data;else try{t=i.JSON.parse(e.data)}catch(e){a.log("JSON Parse Error",e)}if(a.log("Receiver.receive",e,t),!t.method)return!1;if(t.context!==a.CONTEXT)return!1;if(-1===a.indexOf(a.METHODS.all(),t.method))return this.emit("error",{code:2,msg:'Invalid Method "'+t.method+'"'}),!1;var n=a.isNone(t.listener)?null:t.listener;if("addEventListener"===t.method)this.eventListeners.hasOwnProperty(t.value)?-1===a.indexOf(this.eventListeners[t.value],n)&&this.eventListeners[t.value].push(n):this.eventListeners[t.value]=[n],"ready"===t.value&&this.isReady&&this.ready();else if("removeEventListener"===t.method){if(this.eventListeners.hasOwnProperty(t.value)){var o=a.indexOf(this.eventListeners[t.value],n);o>-1&&this.eventListeners[t.value].splice(o,1),0===this.eventListeners[t.value].length&&delete this.eventListeners[t.value]}}else this.get(t.method,t.value,n)},a.Receiver.prototype.get=function(e,t,n){var o=this;if(!this.methods.hasOwnProperty(e))return this.emit("error",{code:3,msg:'Method Not Supported"'+e+'"'}),!1;var i=this.methods[e];"get"===e.substr(0,3)?i.call(this,(function(t){o.send(e,t,n)})):i.call(this,t)},a.Receiver.prototype.on=function(e,t){this.methods[e]=t},a.Receiver.prototype.send=function(e,t,n){if(a.log("Receiver.send",e,t,n),this.reject)return a.log("Receiver.send.reject",e,t,n),!1;var o={context:a.CONTEXT,version:a.VERSION,event:e};a.isNone(t)||(o.value=t),a.isNone(n)||(o.listener=n);var r=JSON.stringify(o);i.parent.postMessage(r,""===this.origin?"*":this.origin)},a.Receiver.prototype.emit=function(e,t){if(!this.eventListeners.hasOwnProperty(e))return!1;a.log("Instance.emit",e,t,this.eventListeners[e]);for(var n=0;n<this.eventListeners[e].length;n++){var o=this.eventListeners[e][n];this.send(e,t,o)}return!0},a.Receiver.prototype.ready=function(){a.log("Receiver.ready"),this.isReady=!0;var e={src:i.location.toString(),events:this.supported.events,methods:this.supported.methods};this.emit("ready",e)||this.send("ready",e)},a.HTML5Adapter=function(e){if(!(this instanceof a.HTML5Adapter))return new a.HTML5Adapter(e);this.init(e)},a.HTML5Adapter.prototype.init=function(e){a.assert(e,"playerjs.HTML5Adapter requires a video element");var t=this.receiver=new a.Receiver;e.addEventListener("playing",(function(){t.emit("play")})),e.addEventListener("pause",(function(){t.emit("pause")})),e.addEventListener("ended",(function(){t.emit("ended")})),e.addEventListener("timeupdate",(function(){t.emit("timeupdate",{seconds:e.currentTime,duration:e.duration})})),e.addEventListener("progress",(function(){t.emit("buffered",{percent:e.buffered.length})})),t.on("play",(function(){e.play()})),t.on("pause",(function(){e.pause()})),t.on("getPaused",(function(t){t(e.paused)})),t.on("getCurrentTime",(function(t){t(e.currentTime)})),t.on("setCurrentTime",(function(t){e.currentTime=t})),t.on("getDuration",(function(t){t(e.duration)})),t.on("getVolume",(function(t){t(100*e.volume)})),t.on("setVolume",(function(t){e.volume=t/100})),t.on("mute",(function(){e.muted=!0})),t.on("unmute",(function(){e.muted=!1})),t.on("getMuted",(function(t){t(e.muted)})),t.on("getLoop",(function(t){t(e.loop)})),t.on("setLoop",(function(t){e.loop=t}))},a.HTML5Adapter.prototype.ready=function(){this.receiver.ready()},a.JWPlayerAdapter=function(e){if(!(this instanceof a.JWPlayerAdapter))return new a.JWPlayerAdapter(e);this.init(e)},a.JWPlayerAdapter.prototype.init=function(e){a.assert(e,"playerjs.JWPlayerAdapter requires a player object");var t=this.receiver=new a.Receiver;this.looped=!1,e.on("pause",(function(){t.emit("pause")})),e.on("play",(function(){t.emit("play")})),e.on("time",(function(e){var n=e.position,o=e.duration;if(!n||!o)return!1;var i={seconds:n,duration:o};t.emit("timeupdate",i)}));var n=this;e.on("complete",(function(){!0===n.looped?e.seek(0):t.emit("ended")})),e.on("error",(function(){t.emit("error")})),t.on("play",(function(){e.play(!0)})),t.on("pause",(function(){e.pause(!0)})),t.on("getPaused",(function(t){t(e.getState().toLowerCase()!=="PLAYING".toLowerCase())})),t.on("getCurrentTime",(function(t){t(e.getPosition())})),t.on("setCurrentTime",(function(t){e.seek(t)})),t.on("getDuration",(function(t){t(e.getDuration())})),t.on("getVolume",(function(t){t(e.getVolume())})),t.on("setVolume",(function(t){e.setVolume(t)})),t.on("mute",(function(){e.setMute(!0)})),t.on("unmute",(function(){e.setMute(!1)})),t.on("getMuted",(function(t){t(!0===e.getMute())})),t.on("getLoop",(function(e){e(this.looped)}),this),t.on("setLoop",(function(e){this.looped=e}),this)},a.JWPlayerAdapter.prototype.ready=function(){this.receiver.ready()},a.MockAdapter=function(){if(!(this instanceof a.MockAdapter))return new a.MockAdapter;this.init()},a.MockAdapter.prototype.init=function(){var e={duration:20,currentTime:0,interval:null,timeupdate:function(){},volume:100,mute:!1,playing:!1,loop:!1,play:function(){e.interval=setInterval((function(){e.currentTime+=.25,e.timeupdate({seconds:e.currentTime,duration:e.duration})}),250),e.playing=!0},pause:function(){clearInterval(e.interval),e.playing=!1}},t=this.receiver=new a.Receiver;t.on("play",(function(){var t=this;e.play(),this.emit("play"),e.timeupdate=function(e){t.emit("timeupdate",e)}})),t.on("pause",(function(){e.pause(),this.emit("pause")})),t.on("getPaused",(function(t){t(!e.playing)})),t.on("getCurrentTime",(function(t){t(e.currentTime)})),t.on("setCurrentTime",(function(t){e.currentTime=t})),t.on("getDuration",(function(t){t(e.duration)})),t.on("getVolume",(function(t){t(e.volume)})),t.on("setVolume",(function(t){e.volume=t})),t.on("mute",(function(){e.mute=!0})),t.on("unmute",(function(){e.mute=!1})),t.on("getMuted",(function(t){t(e.mute)})),t.on("getLoop",(function(t){t(e.loop)})),t.on("setLoop",(function(t){e.loop=t}))},a.MockAdapter.prototype.ready=function(){this.receiver.ready()},a.VideoJSAdapter=function(e){if(!(this instanceof a.VideoJSAdapter))return new a.VideoJSAdapter(e);this.init(e)},a.VideoJSAdapter.prototype.init=function(e){a.assert(e,"playerjs.VideoJSReceiver requires a player object");var t=this.receiver=new a.Receiver;e.on("pause",(function(){t.emit("pause")})),e.on("play",(function(){t.emit("play")})),e.on("timeupdate",(function(n){var o=e.currentTime(),i=e.duration();if(!o||!i)return!1;var r={seconds:o,duration:i};t.emit("timeupdate",r)})),e.on("ended",(function(){t.emit("ended")})),e.on("error",(function(){t.emit("error")})),t.on("play",(function(){e.play()})),t.on("pause",(function(){e.pause()})),t.on("getPaused",(function(t){t(e.paused())})),t.on("getCurrentTime",(function(t){t(e.currentTime())})),t.on("setCurrentTime",(function(t){e.currentTime(t)})),t.on("getDuration",(function(t){t(e.duration())})),t.on("getVolume",(function(t){t(100*e.volume())})),t.on("setVolume",(function(t){e.volume(t/100)})),t.on("mute",(function(){e.volume(0)})),t.on("unmute",(function(){e.volume(1)})),t.on("getMuted",(function(t){t(0===e.volume())})),t.on("getLoop",(function(t){t(e.loop())})),t.on("setLoop",(function(t){e.loop(t)}))},a.VideoJSAdapter.prototype.ready=function(){this.receiver.ready()},void 0===(o=function(){return a}.call(t,n,t,e))||(e.exports=o)}(window,document)}},e=>{var t=("VNnp",e(e.s="VNnp"));Player=t}]);