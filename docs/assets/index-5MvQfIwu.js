(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const s=document.getElementById("myCanvas"),r=s.getContext("2d"),d=new Image;d.onload=()=>{r.drawImage(d,0,0),document.getElementById("bg").style.opacity=1};d.src="fg.jpg";s.style.backgroundColor="rgba(255, 0, 255, 0.0)";const a={x:0,y:0},f=i=>{a.x=i.clientX,a.y=i.clientY},u=i=>{r.globalCompositeOperation="xor";const n=s.getBoundingClientRect(),l=a.x-n.left,c=a.y-n.top;r.beginPath(),r.arc(l,c,50,0,Math.PI*2),r.fillStyle="rgba(255, 255, 255, 1.0)",r.fill();const e=r.getImageData(0,0,s.width,s.height),t=e.data;for(let o=0;o<t.length;o+=4)t[o]==255&&t[o+1]==255&&t[o+2]==255&&(t[o+3]=0);r.putImageData(e,0,0),requestAnimationFrame(u)};s.onmousemove=f;u();