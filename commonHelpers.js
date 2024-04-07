import{a as M,i as f,S as P}from"./assets/vendor-09d7c26e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();async function u(t,s){const r="https://pixabay.com/api/",i={key:"43180958-6b06a0884e2ebb29e4f1cb8bf",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:s};try{return(await M.get(r,{params:i})).data}catch(e){throw console.error("Error occurred while fetching images:",e),e}}function l(t){return t.map(({webformatURL:s,largeImageURL:r,tags:i,likes:e,views:o,comments:n,downloads:S})=>`<li class="list-item">
       <a class="gallery-link" href ="${r}">
       <img src="${s}" alt="${i}" class="gallery-image"
       </a>
       
        <ul class="information-list">
          <li class="item-information-container">
            <h2 class="main-info"> Likes </h2>
              <p class="info">${e}</p>
            
          </li>
          <li class="item-information-container">
            <h2 class="main-info"> Views </h2>
              <p class="info">${o}</p>
            
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
     
      </li>`).join("")}let c,a=1,d=0;const p=15,q=document.querySelector(".search-form"),h=document.querySelector(".list"),y=document.querySelector(".loader"),g=document.querySelector(".btn-load-more");q.addEventListener("submit",v);async function v(t){t.preventDefault(),c=t.target.elements.search.value.trim(),h.innerHTML="",a=1,m();const s=await u(c,a);if(d=Math.ceil(s.totalHits/p),l(s.hits),c===""){f.error({backgroundColor:"lightred",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Please, fill the field!"});return}try{const r=await u(c,a);d=Math.ceil(r.totalHits/p),l(r.hits),m(),r.hits&&r.hits.length===0&&f.error({backgroundColor:"red",progressBar:!1,close:!1,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});const i=l(r.hits);h.innerHTML=i,new P(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}catch(r){console.error("Error occurred while fetching images:",r),f.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Sorry, an error occurred while fetching images. Please try again!"}),b()}t.target.reset(),w()}g.addEventListener("click",$);async function $(){a+=1,m();try{const t=await u(c,a);h.insertAdjacentHTML("beforeend",l(t.hits)),l(t.hits),a>=d&&(L(),f.show({color:"green",message:"We're sorry, but you've reached the end of search results.",position:"topCenter",timeout:1e3}))}catch(t){console.log(t)}b(),w()}function k(){g.classList.remove("hidden")}function L(){g.classList.add("hidden")}function m(){y.classList.remove("hidden")}function b(){y.classList.add("hidden")}function w(){a>=d?L():k()}
//# sourceMappingURL=commonHelpers.js.map
