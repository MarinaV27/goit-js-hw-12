import{a as S,i as c,S as M}from"./assets/vendor-09d7c26e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function f(r,s){const i="https://pixabay.com/api/",o={key:"43180958-6b06a0884e2ebb29e4f1cb8bf",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:s};try{return(await S.get(i,{params:o})).data}catch(e){throw console.error("Error occurred while fetching images:",e),e}}function l(r){return r.map(({webformatURL:s,largeImageURL:i,tags:o,likes:e,views:t,comments:n,downloads:w})=>`<li class="list-item">
       <a class="gallery-link" href ="${i}">
       <img src="${s}" alt="${o}" class="gallery-image"
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
              <p class="info">${w}</p>
          </li>
        </ul>
     
      </li>`).join("")}let g,a=1,h=0;const P=15,q=document.querySelector(".search-form"),d=document.querySelector(".list"),p=document.querySelector(".loader"),m=document.querySelector(".btn-load-more");q.addEventListener("submit",v);async function v(r){r.preventDefault();const s=r.target.elements.search.value.trim();d.innerHTML="",a=1,u();const i=await f(g,a);if(h=Math.ceil(i.totalHits/P),l(i.hits),s===""){c.error({backgroundColor:"lightred",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Please, fill the field!"});return}try{const o=await f(s);u(),o.hits&&o.hits.length===0&&c.error({backgroundColor:"red",progressBar:!1,close:!1,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});const e=l(o.hits);d.innerHTML=e,new M(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}catch(o){console.error("Error occurred while fetching images:",o),c.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Sorry, an error occurred while fetching images. Please try again!"}),b()}r.target.reset(),y()}m.addEventListener("click",$);async function $(){a+=1,u();try{const r=await f(g,a);d.insertAdjacentHTML("beforeend",l(r.hits)),l(r.hits),a>=h&&(L(),c.show({color:"green",message:"We're sorry, but you've reached the end of search results.",position:"topCenter",timeout:1e3}))}catch(r){console.log(r)}b(),k()}function y(){m.classList.remove("hidden")}function L(){m.classList.add("hidden")}function u(){p.classList.remove("hidden")}function b(){p.classList.add("hidden")}function k(){a>=h?L():y()}
//# sourceMappingURL=commonHelpers.js.map
