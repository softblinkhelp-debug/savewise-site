(() => {
 const form=document.querySelector("#checker"),input=document.querySelector("#url"),result=document.querySelector("#result");
 const title=document.querySelector("#title"),message=document.querySelector("#message"),open=document.querySelector("#open");
 const wrap=document.querySelector("#preview-wrap"),preview=document.querySelector("#preview");
 function validId(id){return typeof id==="string"&&/^[A-Za-z0-9_-]{11}$/.test(id)}
 function getId(raw){let u;try{u=new URL(raw.trim())}catch{return null}
   const host=u.hostname.toLowerCase().replace(/^www\\./,"").replace(/^m\\./,"");
   if(host==="youtu.be"){const id=u.pathname.split("/").filter(Boolean)[0];return validId(id)?id:null}
   if(host!=="youtube.com"&&!host.endsWith(".youtube.com")&&host!=="youtube-nocookie.com")return null;
   let id=u.searchParams.get("v");if(!id){const p=u.pathname.split("/").filter(Boolean);if(["shorts","embed","live"].includes(p[0]))id=p[1]}
   return validId(id)?id:null}
 form.addEventListener("submit",e=>{e.preventDefault();const id=getId(input.value);result.hidden=false;
   if(!id){title.textContent="Please enter a valid YouTube link";message.textContent="Try a youtube.com/watch?v=… or youtu.be/… link. This checker only supports YouTube URLs.";open.href="https://www.youtube.com/";wrap.hidden=true;preview.src=""}
   else{const url="https://www.youtube.com/watch?v="+id;title.textContent="YouTube link recognized";message.textContent="The link format looks valid. Preview it below, or use YouTube's official options to save videos you uploaded. SaveWise does not extract or download YouTube streams.";open.href=url;preview.src="https://www.youtube-nocookie.com/embed/"+id;wrap.hidden=false}
   result.scrollIntoView({behavior:"smooth",block:"nearest"})
 });
})();