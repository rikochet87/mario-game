function t(t,e,i,r){Object.defineProperty(t,e,{get:i,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},o=i.parcelRequire23d8;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in s){var e=s[t];delete s[t];var i={id:t,exports:{}};return r[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){s[t]=e},i.parcelRequire23d8=o),o.register("27Lyk",(function(e,i){var r,s;t(e.exports,"register",(()=>r),(t=>r=t)),t(e.exports,"resolve",(()=>s),(t=>s=t));var o={};r=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)o[e[i]]=t[e[i]]},s=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o("27Lyk").register(JSON.parse('{"7GeUN":"index.c7544621.js","d36Pw":"spriteRunLeft.cfa8ad89.png","hAmP3":"spriteRunRight.61ec3479.png","jVJ4c":"spriteStandLeft.7ea1b02c.png","49Gv1":"spriteStandRight.ed34b4ff.png","dYv6S":"platform.57b92eec.png","dhwsz":"hills.ad7e8040.png","puQso":"background.92b6e24f.png","gHGJ2":"platformSmallTall.8e7b7958.png"}'));var n;n=new URL(o("27Lyk").resolve("d36Pw"),import.meta.url).toString();var h;h=new URL(o("27Lyk").resolve("hAmP3"),import.meta.url).toString();var a;a=new URL(o("27Lyk").resolve("jVJ4c"),import.meta.url).toString();var d;d=new URL(o("27Lyk").resolve("49Gv1"),import.meta.url).toString();class p{constructor(){this.speed=8,this.position={x:100,y:100},this.velocity={x:0,y:0},this.width=66,this.height=150,this.image=x(e(d)),this.frames=0,this.sprites={stand:{right:x(e(d)),left:x(e(a)),cropWidth:177,width:66},run:{right:x(e(h)),left:x(e(n)),cropWidth:341,width:127.875}},this.currentSprite=this.sprites.stand.right,this.currentCropWidth=177}draw(){m.drawImage(this.currentSprite,this.currentCropWidth*this.frames,0,this.currentCropWidth,400,this.position.x,this.position.y,this.width,this.height)}update(){this.frames++,(this.frames>59&&(this.currentSprite===this.sprites.stand.right||this.currentSprite===this.sprites.stand.left)||this.frames>29&&(this.currentSprite===this.sprites.run.right||this.currentSprite===this.sprites.run.left))&&(this.frames=0),this.draw(),this.position.y+=this.velocity.y,this.position.x+=this.velocity.x,this.position.y+this.height+this.velocity.y<=f.height&&(this.velocity.y+=.7)}}class c{constructor({x:t,y:e,image:i}){this.position={x:t,y:e},this.image=i,this.width=i.width,this.height=i.height}draw(){m.drawImage(this.image,this.position.x,this.position.y)}}class l{constructor({x:t,y:e,image:i}){this.position={x:t,y:e},this.image=i,this.width=i.width,this.height=i.height}draw(){m.drawImage(this.image,this.position.x,this.position.y)}}var g;g=new URL(o("27Lyk").resolve("dYv6S"),import.meta.url).toString();var w;w=new URL(o("27Lyk").resolve("dhwsz"),import.meta.url).toString();var u;u=new URL(o("27Lyk").resolve("puQso"),import.meta.url).toString();var y;y=new URL(o("27Lyk").resolve("gHGJ2"),import.meta.url).toString();const f=document.querySelector("canvas"),m=f.getContext("2d");function x(t){const e=new Image;return e.src=t,e}f.width=1024,f.height=576;let v=x(e(g)),S=x(e(y)),R=new p,L=[new c({x:-1,y:470,image:v}),new c({x:v.width-3,y:470,image:v}),new c({x:2*v.width+100,y:470,image:v})],k=[new l({x:-1,y:-1,image:x(e(u))}),new l({x:-1,y:-1,image:x(e(w))})];const _={right:{pressed:!1},left:{pressed:!1}};let b=0;function E(){v=x(e(g)),R=new p,L=[new c({x:4*v.width+300-2+v.width-S.width,y:300,image:x(e(y))}),new c({x:-1,y:470,image:v}),new c({x:v.width-3,y:470,image:v}),new c({x:2*v.width+100,y:470,image:v}),new c({x:3*v.width+300,y:470,image:v}),new c({x:4*v.width+300-2,y:470,image:v}),new c({x:5*v.width+700-2,y:470,image:v})],k=[new l({x:-1,y:-1,image:x(e(u))}),new l({x:-1,y:-1,image:x(e(w))})],b=0}E(),function t(){requestAnimationFrame(t),m.fillStyle="white",m.fillRect(0,0,f.width,f.height),k.forEach((t=>{t.draw()})),L.forEach((t=>{t.draw()})),R.update(),_.right.pressed&&R.position.x<400?R.velocity.x=R.speed:_.left.pressed&&R.position.x>100||_.left.pressed&&0===b&&R.position.x>0?R.velocity.x=-R.speed:(R.velocity.x=0,_.right.pressed?(b+=R.speed,L.forEach((t=>{t.position.x-=R.speed})),k.forEach((t=>{t.position.x-=.66*R.speed}))):_.left.pressed&&b>0&&(b-=R.speed,L.forEach((t=>{t.position.x-=-R.speed})),k.forEach((t=>{t.position.x+=.66*R.speed})))),L.forEach((t=>{R.position.y+R.height<=t.position.y&&R.position.y+R.height+R.velocity.y>=t.position.y&&R.position.x+R.width>=t.position.x&&R.position.x<=t.position.x+t.width&&(R.velocity.y=0)})),b>5*v.width+300-2&&console.log("you win"),R.position.y>f.height&&E()}(),addEventListener("keydown",(({keyCode:t})=>{switch(t){case 65:console.log("left"),_.left.pressed=!0,R.currentSprite=R.sprites.run.left,R.currentCropWidth=R.sprites.run.cropWidth,R.width=R.sprites.run.width;break;case 83:console.log("down");break;case 68:console.log("right"),_.right.pressed=!0,R.currentSprite=R.sprites.run.right,R.currentCropWidth=R.sprites.run.cropWidth,R.width=R.sprites.run.width;break;case 87:console.log("up"),R.velocity.y-=20}})),addEventListener("keyup",(({keyCode:t})=>{switch(t){case 65:console.log("left"),_.left.pressed=!1,R.currentSprite=R.sprites.stand.left,R.currentCropWidth=R.sprites.stand.cropWidth,R.width=R.sprites.stand.left;break;case 83:console.log("down");break;case 68:console.log("right"),_.right.pressed=!1,R.currentSprite=R.sprites.stand.right,R.currentCropWidth=R.sprites.stand.cropWidth,R.width=R.sprites.stand.width;break;case 87:console.log("up"),R.velocity.y=0}}));
//# sourceMappingURL=index.c7544621.js.map
