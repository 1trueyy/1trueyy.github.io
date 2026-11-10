const list=document.getElementById("music-list");const spotlight=document.getElementById("spotlight");const search=document.getElementById("search");const filters=[...document.querySelectorAll(".filter")];let activeKind="all";let catalog=[];const escapeHTML=(value)=>String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));const spotifySearch=(title)=>"https://open.spotify.com/search/"+encodeURIComponent("Truey "+title);function typeName(t){return t.kind==="feature"?"COLLABORATION":t.kind==="project"?"PROJECT":t.kind==="track"?"ALBUM TRACK":"SINGLE"}function renderSpotlight(){const names=["Off Da Porch","Fake Killas","Shit Crazy","NOBODY SAFE (feat. SafeHouseChris)"];const chosen=names.map(n=>catalog.find(t=>t.title===n)).filter(Boolean);spotlight.innerHTML=chosen.map(t=>'<article class="spotlight"><img loading="lazy" alt="'+escapeHTML(t.title)+' release artwork" src="'+escapeHTML(t.art)+'"><div class="spotlight-body"><small>'+escapeHTML(t.year)+' / '+typeName(t)+'</small><h3>'+escapeHTML(t.title)+'</h3><div class="spotlight-links"><a target="_blank" rel="noopener noreferrer" href="'+escapeHTML(t.apple)+'">APPLE ↗</a><a target="_blank" rel="noopener noreferrer" href="'+escapeHTML(spotifySearch(t.title))+'">SPOTIFY ↗</a></div></div></article>').join("")}function renderTracks(){const q=search.value.trim().toLowerCase();const shown=catalog.filter(t=>(activeKind==="all"||t.kind===activeKind)&&[t.title,t.artist,t.album].join(" ").toLowerCase().includes(q));list.innerHTML=shown.length?shown.map(t=>'<article class="music-row"><img alt="" loading="lazy" src="'+escapeHTML(t.art)+'"><div><h3 class="row-title">'+escapeHTML(t.title)+'</h3><div class="row-details">'+escapeHTML(t.artist||"Truey")+' · '+escapeHTML(t.year)+(t.album?' · '+escapeHTML(t.album):'')+'</div></div><span class="row-kind">'+typeName(t)+'</span><div class="music-links"><a target="_blank" rel="noopener noreferrer" href="'+escapeHTML(t.apple)+'">APPLE ↗</a><a target="_blank" rel="noopener noreferrer" href="'+escapeHTML(spotifySearch(t.title))+'">SPOTIFY ↗</a></div></article>').join(""):'<p class="footnote">No matching songs. Try another search.</p>'}for(const b of filters){b.addEventListener("click",()=>{activeKind=b.dataset.kind;filters.forEach(f=>{const on=f===b;f.classList.toggle("active",on);f.setAttribute("aria-pressed",String(on))});renderTracks()})}search.addEventListener("input",renderTracks);document.getElementById("features-link").addEventListener("click",()=>{const b=filters.find(b=>b.dataset.kind==="feature");b?.click();search.value="";renderTracks()});fetch("catalog.json",{cache:"no-cache"}).then(r=>{if(!r.ok)throw new Error("Music catalog could not load");return r.json()}).then(data=>{catalog=data;renderSpotlight();renderTracks()}).catch(()=>{list.innerHTML='<p class="footnote">The music catalog is temporarily unavailable. Visit <a href="https://music.apple.com/us/artist/truey/1632518016">Truey on Apple Music ↗</a>.</p>'});

// The music itself must stay inside Payhip's protected digital delivery service,
// not in this publicly accessible GitHub Pages repository.
// Once verified checkout URLs are set in checkout-config.json, convert placeholders
// into working links. Until then, nobody can accidentally pay for a missing file.
async function initializePayhipCheckout(){
  try{
    const response=await fetch("checkout-config.json",{cache:"no-store"});
    if(!response.ok)return;
    const config=await response.json();
    for(const [key,rawUrl] of Object.entries(config.products||{})){
      if(typeof rawUrl!=="string"||!rawUrl.trim())continue;
      let url;
      try{url=new URL(rawUrl)}catch{continue}
      if(url.protocol!=="https:"||url.hostname!=="payhip.com"||!((url.pathname.startsWith("/b/")&&url.pathname.length>3)||(url.pathname==="/buy"&&url.searchParams.has("link"))))continue;
      const placeholder=document.querySelector('[data-checkout-product="'+key+'"]');
      if(!placeholder)continue;
      const link=document.createElement("a");
      link.className="purchase-cta purchase-live";
      link.href=url.href;
      link.setAttribute("aria-label","Secure checkout for "+(key==="fake-killas"?"Fake Killas":"Shit Crazy"));
      link.innerHTML="<span>BUY DIGITAL DOWNLOAD / $1.99</span><small>SECURE CHECKOUT ↗</small>";
      placeholder.replaceWith(link);
    }
    const pending=document.querySelectorAll(".purchase-pending").length;
    if(!pending){const footer=document.querySelector(".store-footer span:last-child");if(footer)footer.textContent="SECURE CHECKOUT BY PAYHIP · AUTOMATIC DOWNLOAD DELIVERY";}
  }catch(error){console.warn("Payhip checkout configuration not available",error)}
}
initializePayhipCheckout();
