import{a as w,i as c,S}from"./assets/vendor-09d7c26e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();async function l(r,s){const t="https://pixabay.com/api/",i={key:"43180958-6b06a0884e2ebb29e4f1cb8bf",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:s};try{return(await w.get(t,{params:i})).data}catch(e){throw console.error("Error occurred while fetching images:",e),e}}function h(r){return r.map(({webformatURL:s,largeImageURL:t,tags:i,likes:e,views:o,comments:n,downloads:b})=>`<li class="list-item">
       <a class="gallery-link" href ="${t}">
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
              <p class="info">${b}</p>
          </li>
        </ul>
     
      </li>`).join("")}let g,a=1,d=0;const v=15,P=document.querySelector(".search-form"),m=document.querySelector(".list"),p=document.querySelector(".loader"),u=document.querySelector(".btn-load-more");P.addEventListener("submit",q);async function q(r){r.preventDefault();const s=r.target.elements.search.value.trim();if(m.innerHTML="",a=1,f(),await l(g,a),s===""){c.error({backgroundColor:"lightred",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Please, fill the field!"});return}try{const t=await l(s);f(),t.hits&&t.hits.length===0&&c.error({backgroundColor:"red",progressBar:!1,close:!1,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});const i=h(t.hits);m.innerHTML=i,new S(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}catch(t){console.error("Error occurred while fetching images:",t),c.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Sorry, an error occurred while fetching images. Please try again!"}),L()}}u.addEventListener("click",M);d=Math.ceil(data.totalResult/v);async function M(){a+=1,f();try{const r=await l(g,a);h(r),a>=d&&(y(),c.show({color:"green",message:"Sorry, you have reached the end of collection.",position:"topCenter",timeout:1e3}))}catch(r){console.log(r)}L(),k()}function $(){u.classList.remove("hidden")}function y(){u.classList.add("hidden")}function f(){p.classList.remove("hidden")}function L(){p.classList.add("hidden")}function k(){a>=d?y():$()}
//# sourceMappingURL=commonHelpers.js.map
