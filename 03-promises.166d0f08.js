var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");function i(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}function l({position:e,delay:t}){r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}function f({position:e,delay:t}){r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(e.currentTarget),o={};for(const[e,n]of t.entries())o[e]=Number(n);let{amount:n,step:r,delay:s}=o;for(let e=1;e<=n;e+=1)s+=r,i(e,s).then(f).catch(l);e.target.reset()}));
//# sourceMappingURL=03-promises.166d0f08.js.map
