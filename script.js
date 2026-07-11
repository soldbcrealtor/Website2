const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false')});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
if('IntersectionObserver' in window){const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}

// Free static-form delivery. FormSubmit sends submissions directly to soldbc@outlook.com.
// The first live submission triggers a one-time activation email to that inbox.
const FORM_ENDPOINT='https://formsubmit.co/ajax/soldbc@outlook.com';

document.querySelectorAll('.ajax-contact-form').forEach(form=>{
  form.addEventListener('submit',async event=>{
    event.preventDefault();
    const status=form.querySelector('.form-status');
    const button=form.querySelector('button[type="submit"]');
    if(!form.reportValidity())return;
    if(form.querySelector('[name="_honey"]')?.value)return;

    const originalText=button.textContent;
    button.disabled=true;
    button.classList.add('form-submit-loading');
    button.textContent='Sending';
    status.className='form-status';
    status.textContent='Sending your request securely…';

    try{
      const response=await fetch(FORM_ENDPOINT,{method:'POST',headers:{'Accept':'application/json'},body:new FormData(form)});
      const data=await response.json().catch(()=>({}));
      if(!response.ok||data.success===false)throw new Error(data.message||'Submission failed');
      status.classList.add('success');
      status.textContent='Thank you. Your request has been sent to Gary. He will contact you shortly.';
      form.reset();
    }catch(error){
      console.error(error);
      status.classList.add('error');
      status.textContent='Your request could not be sent. Please call Gary at 250-329-4001.';
    }finally{
      button.disabled=false;
      button.classList.remove('form-submit-loading');
      button.textContent=originalText;
    }
  });
});
