import{a as M,S as B,i as m}from"./assets/vendor-BAQQTdrx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const g=15;async function p(t,r=1){return(await M("https://pixabay.com/api/",{params:{key:"55699245-ea32969c729087c9356aa5786",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:g}})).data}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),a=document.querySelector(".btn-load-more"),C=new B(".gallery-item",{sourceAttr:"data-origin",captionsData:"alt"});function y(t){f.insertAdjacentHTML("beforeend",t.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:o,comments:n,downloads:q})=>`<li class="gallery-item" data-origin="${s}">
              <img src='${r}' alt='${i}' />
              <div class="img-desc-container">
                <div class="img-desc-wrapper">
                    <p class="img-desc-titles">Likes</p>
                    <p>${e}</p>
                </div>
                <div class="img-desc-wrapper">
                    <p class="img-desc-titles">Views</p>
                    <p>${o}</p>
                </div>
                <div class="img-desc-wrapper">
                    <p class="img-desc-titles">Comments</p>
                    <p>${n}</p>
                </div>
                <div class="img-desc-wrapper">
                    <p class="img-desc-titles">Downloads</p>
                    <p>${q}</p>
                </div>
              </div>
          </li>`).join("")),C.refresh()}function O(){f.innerHTML=""}function L(){h.classList.add("is-open")}function v(){h.classList.remove("is-open")}function d(t){m.show({message:t,backgroundColor:"red",messageColor:"white",maxWidth:432,iconUrl:"./img/error-icon.svg",position:"bottomRight"})}function w(t){m.show({message:t,backgroundColor:"lightblue",messageColor:"white",position:"bottomRight"})}function P(){a.classList.add("is-visible")}function b(){a.classList.remove("is-visible")}const $=document.querySelector(".form");let c=1,u=0,l="";$.addEventListener("submit",x);async function x(t){if(t.preventDefault(),O(),b(),l=t.target.elements.searchtext.value.trim(),l===""){console.log("Your input is empty");return}c=1,L();try{const s=await p(l),i=s.hits;if(u=s.totalHits/g,!i.length){d("Sorry, there are no images matching your search query. Please try again!");return}y(i),c<u?(a.addEventListener("click",S),P()):w("We're sorry, but you've reached the end of search results.")}catch(s){d(s.message)}finally{v(),t.target.reset()}}async function S(){c++,a.disabled=!0,L();try{const r=(await p(l,c)).hits;if(!r.length){d("Sorry, there are no images matching your search query. Please try again!");return}y(r),E(),a.disabled=!1,c>=u&&(w("We're sorry, but you've reached the end of search results."),b(),a.removeEventListener("click",S))}catch(t){d(t.message)}finally{v()}}function E(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
