!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.6525595c7a9874fa10bd041275e40f17.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.ea1420b0fbc06aef5c919f5ac8f1ed15.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.c32f18973ccddcdedfa44f2602cdb867.js","recommendations/main":"https://c.disquscdn.com/next/embed/recommendations.bundle.baf6e3fc6bd5dc65efc3be8dc20f0f7d.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed",paths:["lounge/main","recommendations/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.f9de3d662c5d03c937747411c45f2ea2.js",a.body.appendChild(c)}();