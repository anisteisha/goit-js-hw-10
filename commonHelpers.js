import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-77e16229.js";const s=document.getElementById("datetime-picker"),o=document.querySelector("button[data-start]"),h=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");o.disabled=!0;let d=null;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<=new Date?(f.error({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0):(d=e,o.disabled=!1)}};m(s,S);o.addEventListener("click",()=>{if(!d)return;o.disabled=!0,s.disabled=!0;const t=setInterval(()=>{const n=d-new Date;if(n<=0){clearInterval(t),s.disabled=!1;return}const r=E(n);D(r)},1e3)});function E(t){const c=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:u,minutes:i,seconds:l}}function D({days:t,hours:e,minutes:n,seconds:r}){h.textContent=a(t),y.textContent=a(e),b.textContent=a(n),p.textContent=a(r)}function a(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
