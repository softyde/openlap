(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{hfCD:function(n,a,e){"use strict";e.r(a),e.d(a,"mdTransitionAnimation",function(){return o}),e("N8eg");var i=e("MFGO"),o=function(n,a){var e="back"===a.direction,o=a.leavingEl,r=t(a.enteringEl),c=r.querySelector("ion-toolbar"),s=Object(i.a)();if(s.addElement(r).fill("both").beforeRemoveClass("ion-page-invisible"),e?s.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):s.duration(a.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),c){var d=Object(i.a)();d.addElement(c),s.addAnimation(d)}if(o&&e){s.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var u=Object(i.a)();u.addElement(t(o)).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),s.addAnimation(u)}return s},t=function(n){return n.classList.contains("ion-page")?n:n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||n}}}]);