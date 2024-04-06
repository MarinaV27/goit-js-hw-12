import{a as c,i as n,S as f}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function m(i,t){const o="https://pixabay.com/api/",s={key:"43180958-6b06a0884e2ebb29e4f1cb8bf",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t};try{return(await c.get(o,{params:s})).data}catch(e){throw console.error("Error occurred while fetching images:",e),e}}function u(i){return i.map(({webformatURL:t,largeImageURL:o,tags:s,likes:e,views:r,comments:a,downloads:l})=>`<li class="list-item">
       <a class="gallery-link" href ="${o}">
       <img src="${t}" alt="${s}" class="gallery-image"
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
              <p class="info">${a}</p>
            
          </li>
          <li class="item-information-container">
            <h2 class="main-info"> Downloads </h2>
              <p class="info">${l}</p>
          </li>
        </ul>
     
      </li>`).join("")}const g=document.querySelector(".search-form"),h=document.querySelector(".list"),p=document.querySelector(".loader");g.addEventListener("submit",d);async function d(i){i.preventDefault(),p.classList.add("loader");const t=i.target.elements.search.value.trim();if(t===""){n.error({backgroundColor:"lightred",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Please, fill the field!"});return}try{const o=await m(t);o.hits&&o.hits.length===0&&n.error({backgroundColor:"red",progressBar:!1,close:!1,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});const s=u(o.hits);h.innerHTML=s,new f(".gallery-link",{captionsData:"alt"}).refresh()}catch(o){console.error("Error occurred while fetching images:",o),n.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Sorry, an error occurred while fetching images. Please try again!"})}}
//# sourceMappingURL=commonHelpers.js.map
