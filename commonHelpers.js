import{a as M,i as d,S as P}from"./assets/vendor-09d7c26e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function u(t,s){const o="https://pixabay.com/api/",i={key:"43180958-6b06a0884e2ebb29e4f1cb8bf",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:s};try{return(await M.get(o,{params:i})).data}catch(e){throw console.error("Error occurred while fetching images:",e),e}}function l(t){return t.map(({webformatURL:s,largeImageURL:o,tags:i,likes:e,views:r,comments:n,downloads:S})=>`<li class="list-item">
       <a class="gallery-link" href ="${o}">
       <img src="${s}" alt="${i}" class="gallery-image"
       </a>
       
        <ul class="information-list">
          <li class="item-information-container">
            <h2 class="main-info"> Likes </h2>
              <p class="info">${e}</p>
            
          </li>
          <li class="item-information-container">
            <h2 class="main-info"> Views </h2>
              <p class="info">${r}</p>
            
          </li>
          <li class="item-information-container">
            <h2 class="main-info"> Comments </h2>
              <p class="info">${n}</p>
            
          </li>
          <li class="item-information-container">
            <h2 class="main-info"> Downloads </h2>
              <p class="info">${S}</p>
          </li>
        </ul>
     
      </li>`).join("")}let c,a=1,f=0;const p=15,q=document.querySelector(".search-form"),h=document.querySelector(".list"),y=document.querySelector(".loader"),g=document.querySelector(".btn-load-more");q.addEventListener("submit",v);async function v(t){t.preventDefault(),c=t.target.elements.search.value.trim(),h.innerHTML="",a=1,m();const s=await u(c,a);if(f=Math.ceil(s.totalHits/p),l(s.hits),c===""){d.error({backgroundColor:"lightred",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Please, fill the field!"});return}try{const o=await u(c,a);f=Math.ceil(o.totalHits/p),l(o.hits),m(),o.hits&&o.hits.length===0&&d.error({backgroundColor:"red",progressBar:!1,close:!1,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});const i=l(o.hits);h.innerHTML=i,new P(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}catch(o){console.error("Error occurred while fetching images:",o),d.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Sorry, an error occurred while fetching images. Please try again!"}),b()}t.target.reset(),w()}g.addEventListener("click",C);async function C(){a+=1,m();try{const t=await u(c,a);h.insertAdjacentHTML("beforeend",l(t.hits)),l(t.hits),a>=f&&(L(),d.show({color:"green",message:"We're sorry, but you've reached the end of search results.",position:"topCenter",timeout:1e3}))}catch(t){console.log(t)}$(),b(),w()}function B(){g.classList.remove("hidden")}function L(){g.classList.add("hidden")}function m(){y.classList.remove("hidden")}function b(){y.classList.add("hidden")}function w(){a>=f?L():B()}function $(){const t=h.firstChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
