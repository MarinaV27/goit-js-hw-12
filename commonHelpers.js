import{a as w,i as c,S}from"./assets/vendor-09d7c26e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function l(o,s){const i="https://pixabay.com/api/",r={key:"43180958-6b06a0884e2ebb29e4f1cb8bf",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:s};try{return(await w.get(i,{params:r})).data}catch(e){throw console.error("Error occurred while fetching images:",e),e}}function f(o){return o.map(({webformatURL:s,largeImageURL:i,tags:r,likes:e,views:t,comments:n,downloads:b})=>`<li class="list-item">
       <a class="gallery-link" href ="${i}">
       <img src="${s}" alt="${r}" class="gallery-image"
       </a>
       
        <ul class="information-list">
          <li class="item-information-container">
            <h2 class="main-info"> Likes </h2>
              <p class="info">${e}</p>
            
          </li>
          <li class="item-information-container">
            <h2 class="main-info"> Views </h2>
              <p class="info">${t}</p>
            
          </li>
          <li class="item-information-container">
            <h2 class="main-info"> Comments </h2>
              <p class="info">${n}</p>
            
          </li>
          <li class="item-information-container">
            <h2 class="main-info"> Downloads </h2>
              <p class="info">${b}</p>
          </li>
        </ul>
     
      </li>`).join("")}let m,a=1,u=0;const P=15,q=document.querySelector(".search-form"),v=document.querySelector(".list"),g=document.querySelector(".loader"),h=document.querySelector(".btn-load-more");q.addEventListener("submit",M);async function M(o){o.preventDefault();const s=o.target.elements.search.value.trim();a=1,d();const i=await l(m,a);if(u=Math.ceil(i.totalHits/P),f(i.hits),s===""){c.error({backgroundColor:"lightred",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Please, fill the field!"});return}try{const r=await l(s);d(),r.hits&&r.hits.length===0&&c.error({backgroundColor:"red",progressBar:!1,close:!1,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});const e=f(r.hits);v.innerHTML=e,new S(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}catch(r){console.error("Error occurred while fetching images:",r),c.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Sorry, an error occurred while fetching images. Please try again!"}),L()}o.target.reset(),p()}h.addEventListener("click",$);async function $(){a+=1,d();try{const o=await l(m,a);f(o.hits),a>=u&&(y(),c.show({color:"green",message:"Sorry, you have reached the end of collection.",position:"topCenter",timeout:1e3}))}catch(o){console.log(o)}L(),k()}function p(){h.classList.remove("hidden")}function y(){h.classList.add("hidden")}function d(){g.classList.remove("hidden")}function L(){g.classList.add("hidden")}function k(){a>=u?y():p()}
//# sourceMappingURL=commonHelpers.js.map
