(function(){
  const root=document.getElementById('idx-root');
  if(!root) return;
  const cfg=window.IDX_CONFIG||{mode:'pending'};
  const mode=(cfg.mode||'pending').toLowerCase();

  function showError(message){
    root.innerHTML='<div class="idx-error"><h2>Listing search unavailable</h2><p>'+message+'</p><p><a href="mailto:soldbc@outlook.com">Email Gary</a> or call <a href="tel:12503294001">250-329-4001</a>.</p></div>';
  }

  if(mode==='iframe'){
    if(!cfg.iframeUrl) return showError('The IDX iframe URL has not been added yet.');
    const frame=document.createElement('iframe');
    frame.className='idx-frame';
    frame.src=cfg.iframeUrl;
    frame.title=cfg.iframeTitle||'MLS listing search';
    frame.loading='eager';
    frame.referrerPolicy='strict-origin-when-cross-origin';
    frame.setAttribute('allow','geolocation');
    root.innerHTML='';
    root.appendChild(frame);
    return;
  }

  if(mode==='script'){
    if(!cfg.scriptUrl) return showError('The IDX provider script URL has not been added yet.');
    root.innerHTML='<div id="idx-provider-widget"></div>';
    const script=document.createElement('script');
    script.src=cfg.scriptUrl;
    script.async=true;
    Object.entries(cfg.scriptAttributes||{}).forEach(([key,value])=>script.setAttribute(key,value));
    script.onerror=()=>showError('The IDX provider script could not be loaded.');
    document.body.appendChild(script);
    return;
  }

  if(mode==='html'){
    if(!cfg.htmlEmbed) return showError('The IDX provider embed has not been added yet.');
    root.innerHTML=cfg.htmlEmbed;
  }
})();
