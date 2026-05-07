import{a as B,S as C,i as p}from"./assets/vendor-BAQQTdrx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const f=15;async function h(t,r=1){return(await B("https://pixabay.com/api/",{params:{key:"55699245-ea32969c729087c9356aa5786",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:f}})).data}const y=document.querySelector(".gallery"),v=document.querySelector(".loader"),c=document.querySelector(".btn-load-more"),O=new C(".gallery-link",{captionsData:"alt"});function L(t){y.insertAdjacentHTML("beforeend",t.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:o,comments:a,downloads:M})=>`<li class="gallery-item">
          <a href="${s}" class="gallery-link">
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
                    <p>${a}</p>
                </div>
                <div class="img-desc-wrapper">
                    <p class="img-desc-titles">Downloads</p>
                    <p>${M}</p>
                </div>
              </div>
              </a>
          </li>`).join("")),O.refresh()}function P(){y.innerHTML=""}function w(){v.classList.add("is-open")}function b(){v.classList.remove("is-open")}function d(t){p.show({message:t,backgroundColor:"red",messageColor:"white",maxWidth:432,iconUrl:"./img/error-icon.svg",position:"bottomRight"})}function S(t){p.show({message:t,backgroundColor:"lightblue",messageColor:"white",position:"bottomRight"})}function q(){c.classList.add("is-visible")}function u(){c.classList.remove("is-visible")}const $=document.querySelector(".form");let n=1,m=0,l="";$.addEventListener("submit",E);async function E(t){if(t.preventDefault(),P(),u(),c.removeEventListener("click",g),l=t.target.elements.searchtext.value.trim(),l===""){console.log("Your input is empty");return}n=1,w();try{const s=await h(l),i=s.hits;if(m=Math.ceil(s.totalHits/f),!i.length){d("Sorry, there are no images matching your search query. Please try again!");return}L(i),n<m?(c.addEventListener("click",g),q()):S("We're sorry, but you've reached the end of search results.")}catch(s){d(s.message)}finally{b(),t.target.reset()}}async function g(){n++,u(),w();try{const r=(await h(l,n)).hits;if(!r.length){d("Sorry, there are no images matching your search query. Please try again!");return}L(r),x(),n>=m?(S("We're sorry, but you've reached the end of search results."),u(),c.removeEventListener("click",g)):q()}catch(t){d(t.message)}finally{b()}}function x(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
