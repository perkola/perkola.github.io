(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const M=globalThis,D=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol(),q=new WeakMap;let ne=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==Y)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(D&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=q.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&q.set(t,e))}return e}toString(){return this.cssText}};const oe=r=>new ne(typeof r=="string"?r:r+"",void 0,Y),ae=(r,e)=>{if(D)r.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const s=document.createElement("style"),i=M.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},W=D?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return oe(t)})(r):r;const{is:le,defineProperty:he,getOwnPropertyDescriptor:ce,getOwnPropertyNames:de,getOwnPropertySymbols:pe,getPrototypeOf:ue}=Object,H=globalThis,V=H.trustedTypes,me=V?V.emptyScript:"",ge=H.reactiveElementPolyfillSupport,S=(r,e)=>r,O={toAttribute(r,e){switch(e){case Boolean:r=r?me:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},L=(r,e)=>!le(r,e),K={attribute:!0,type:String,converter:O,reflect:!1,useDefault:!1,hasChanged:L};Symbol.metadata??=Symbol("metadata"),H.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=K){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&he(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=ce(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){const l=i?.call(this);n?.call(this,o),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??K}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const e=ue(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const t=this.properties,s=[...de(t),...pe(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(W(i))}else e!==void 0&&t.push(W(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ae(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const n=(s.converter?.toAttribute!==void 0?s.converter:O).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:O;this._$Em=i;const l=o.fromAttribute(t,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){const i=this.constructor,n=this[e];if(s??=i.getPropertyOptions(e),!((s.hasChanged??L)(n,t)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,n]of s){const{wrapped:o}=n,l=this[i];o!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[S("elementProperties")]=new Map,_[S("finalized")]=new Map,ge?.({ReactiveElement:_}),(H.reactiveElementVersions??=[]).push("2.1.1");const I=globalThis,U=I.trustedTypes,F=U?U.createPolicy("lit-html",{createHTML:r=>r}):void 0,ee="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,te="?"+$,$e=`<${te}>`,v=document,w=()=>v.createComment(""),P=r=>r===null||typeof r!="object"&&typeof r!="function",z=Array.isArray,fe=r=>z(r)||typeof r?.[Symbol.iterator]=="function",N=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J=/-->/g,G=/>/g,f=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Z=/'/g,Q=/"/g,se=/^(?:script|style|textarea|title)$/i,ye=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),u=ye(1),b=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),X=new WeakMap,y=v.createTreeWalker(v,129);function ie(r,e){if(!z(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return F!==void 0?F.createHTML(e):e}const ve=(r,e)=>{const t=r.length-1,s=[];let i,n=e===2?"<svg>":e===3?"<math>":"",o=x;for(let l=0;l<t;l++){const a=r[l];let c,p,h=-1,m=0;for(;m<a.length&&(o.lastIndex=m,p=o.exec(a),p!==null);)m=o.lastIndex,o===x?p[1]==="!--"?o=J:p[1]!==void 0?o=G:p[2]!==void 0?(se.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=f):p[3]!==void 0&&(o=f):o===f?p[0]===">"?(o=i??x,h=-1):p[1]===void 0?h=-2:(h=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?f:p[3]==='"'?Q:Z):o===Q||o===Z?o=f:o===J||o===G?o=x:(o=f,i=void 0);const g=o===f&&r[l+1].startsWith("/>")?" ":"";n+=o===x?a+$e:h>=0?(s.push(c),a.slice(0,h)+ee+a.slice(h)+$+g):a+$+(h===-2?l:g)}return[ie(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class k{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,o=0;const l=e.length-1,a=this.parts,[c,p]=ve(e,t);if(this.el=k.createElement(c,s),y.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=y.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(ee)){const m=p[o++],g=i.getAttribute(h).split($),T=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:T[2],strings:g,ctor:T[1]==="."?be:T[1]==="?"?Ae:T[1]==="@"?xe:R}),i.removeAttribute(h)}else h.startsWith($)&&(a.push({type:6,index:n}),i.removeAttribute(h));if(se.test(i.tagName)){const h=i.textContent.split($),m=h.length-1;if(m>0){i.textContent=U?U.emptyScript:"";for(let g=0;g<m;g++)i.append(h[g],w()),y.nextNode(),a.push({type:2,index:++n});i.append(h[m],w())}}}else if(i.nodeType===8)if(i.data===te)a.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf($,h+1))!==-1;)a.push({type:7,index:n}),h+=$.length-1}n++}}static createElement(e,t){const s=v.createElement("template");return s.innerHTML=e,s}}function A(r,e,t=r,s){if(e===b)return e;let i=s!==void 0?t._$Co?.[s]:t._$Cl;const n=P(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??=[])[s]=i:t._$Cl=i),i!==void 0&&(e=A(r,i._$AS(r,e.values),i,s)),e}class _e{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??v).importNode(t,!0);y.currentNode=i;let n=y.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new C(n,n.nextSibling,this,e):a.type===1?c=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(c=new Se(n,this,e)),this._$AV.push(c),a=s[++l]}o!==a?.index&&(n=y.nextNode(),o++)}return y.currentNode=v,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class C{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),P(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==b&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):fe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=k.createElement(ie(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{const n=new _e(i,this),o=n.u(this.options);n.p(t),this.T(o),this._$AH=n}}_$AC(e){let t=X.get(e.strings);return t===void 0&&X.set(e.strings,t=new k(e)),t}k(e){z(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new C(this.O(w()),this.O(w()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(e,t=this,s,i){const n=this.strings;let o=!1;if(n===void 0)e=A(this,e,t,0),o=!P(e)||e!==this._$AH&&e!==b,o&&(this._$AH=e);else{const l=e;let a,c;for(e=n[0],a=0;a<n.length-1;a++)c=A(this,l[s+a],t,a),c===b&&(c=this._$AH[a]),o||=!P(c)||c!==this._$AH[a],c===d?e=d:e!==d&&(e+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!i&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class be extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class Ae extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class xe extends R{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=A(this,e,t,0)??d)===b)return;const s=this._$AH,i=e===d&&s!==d||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Se{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}}const Ee=I.litHtmlPolyfillSupport;Ee?.(k,C),(I.litHtmlVersions??=[]).push("3.3.1");const we=(r,e,t)=>{const s=t?.renderBefore??e;let i=s._$litPart$;if(i===void 0){const n=t?.renderBefore??null;s._$litPart$=i=new C(e.insertBefore(w(),n),n,void 0,t??{})}return i._$AI(r),i};const B=globalThis;class E extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=we(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return b}}E._$litElement$=!0,E.finalized=!0,B.litElementHydrateSupport?.({LitElement:E});const Pe=B.litElementPolyfillSupport;Pe?.({LitElement:E});(B.litElementVersions??=[]).push("4.2.1");const ke=r=>(e,t)=>{t!==void 0?t.addInitializer((()=>{customElements.define(r,e)})):customElements.define(r,e)};const Ce={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:L},Te=(r=Ce,e,t)=>{const{kind:s,metadata:i}=t;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(t.name,r),s==="accessor"){const{name:o}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,r)},init(l){return l!==void 0&&this.C(o,void 0,r,l),l}}}if(s==="setter"){const{name:o}=t;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+s)};function Me(r){return(e,t)=>typeof t=="object"?Te(r,e,t):((s,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,s),o?Object.getOwnPropertyDescriptor(i,n):void 0})(r,e,t)}function Oe(r){return Me({...r,state:!0,attribute:!1})}var Ue=Object.defineProperty,He=Object.getOwnPropertyDescriptor,re=(r,e,t,s)=>{for(var i=s>1?void 0:s?He(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Ue(e,t,i),i};let j=class extends E{constructor(){super(...arguments),this.themeMode="system",this.fullName="William Perkola",this.jobTitle="Product owner & Software Engineer",this.email="hej@perko.la",this.location="Stockholm, Sweden",this.linkedin="linkedin.com/in/perkola",this.github="github.com/perkola",this.summary=`Passionate software developer with expertise in modern web technologies.
    Experienced in building scalable applications and leading technical projects.`,this.experience=[{company:"Tech Company Inc.",positions:[{title:"Senior Software Developer",period:"2021 - Present",description:["Managing an inner sourced design system at OSTTRA through a tight collaboration with product teams and the UX department.","Engaging stakeholders, prioritizing work, managing quality and maintaining source code.","Currently helping improve adoption across 20+ product teams at OSTTRA."],skills:["Project management","React","TypeScript","Storybook","Figma"]},{title:"Software Engineer",period:"2017 - 2023",description:["Full-stack role in a highly autonomous and experienced team, building a collateral management system and a settlement service using micro services on a private cloud infrastructure."],skills:["Go","Python","Clojure","ClojureScript","Docker","Kubernetes"]}]},{company:"Freelance",positions:[{title:"Software Consultant",period:"2015 - 2021",description:["Working with mainly non-profit organizations designing, building and maintaining websites and digital payment systems."],skills:["PHP","SQL","JavaScript"]}]},{company:"Scania Group",positions:[{title:"Master Thesis Student",period:"2017 - 2017",description:["Using machine learning, at the C-ITS (Cooperative Intelligent Transport System) R&D department, to classify short-lived distributed hazard warning messages to road vehicles."],skills:["Python","Machine Learning"]},{title:"Intern",period:"2016 - 2017",description:["A year long internship programme at the R&D department for master's students."]},{title:"Mobile Developer",period:"2016 - 2016",description:["Building a prototype for a map-based mobile application in a research project at the R&D department."],skills:["Android","React Native","C#","Microsoft Azure"]}]},{company:"Academic Work",positions:[{title:"Software Consultant",period:"2014 - 2015",description:["Part time consultancy at an advertising company. Responsibilities consisted of maintaining multiple websites while developing a job search engine using the API of the Swedish Public Employment Service (Arbetsförmedlningen)."],skills:["PHP","JavaScript","HTML","CSS"]}]}],this.education=[{degree:"Master of Engineering (M.Eng.), Computer Science",institution:"KTH Royal Institute of Technology",period:"2015 - 2017"},{degree:"Bachelor of Engineering (B.Eng.), Computer Science",institution:"KTH Royal Institute of Technology",period:"2012 - 2015"}],this.cycleTheme=()=>{const r=["light","system","dark"],e=r.indexOf(this.themeMode);this.themeMode=r[(e+1)%r.length],this.saveThemePreference(),this.applyTheme(),this.requestUpdate()}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.loadThemePreference(),this.applyTheme(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{this.themeMode==="system"&&this.applyTheme()})}loadThemePreference(){const r=localStorage.getItem("theme-mode");r&&["light","dark","system"].includes(r)&&(this.themeMode=r)}saveThemePreference(){localStorage.setItem("theme-mode",this.themeMode)}applyTheme(){const r=document.documentElement;this.themeMode==="dark"||this.themeMode==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches?r.classList.add("dark"):r.classList.remove("dark")}render(){return u`
      <div
        class="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 transition-colors duration-200"
      >
        <div
          class="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
        >
          <!-- Header -->
          ${this.renderHeader()}

          <!-- Summary -->
          ${this.renderSummary()}

          <!-- Experience -->
          ${this.renderExperience()}

          <!-- Education -->
          ${this.renderEducation()}
        </div>
      </div>
    `}renderHeader(){const r={light:"☀️",dark:"🌙",system:"💻"};return u`
      <div
        class="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-gray-900 text-white p-8 relative"
      >
        <!-- Theme toggle button -->
        <button
          @click=${this.cycleTheme}
          class="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm"
          title="Toggle theme: ${this.themeMode}"
          aria-label="Toggle theme"
        >
          <span class="text-2xl">${r[this.themeMode]}</span>
        </button>

        <h1 class="text-4xl font-bold mb-2">${this.fullName}</h1>
        <p class="text-xl mb-4 text-blue-100 dark:text-blue-200">
          ${this.jobTitle}
        </p>
        <div class="flex flex-wrap gap-4 text-sm">
          <div class="flex items-center gap-2">
            <span>📧</span>
            <a href="mailto:${this.email}" class="hover:underline"
              >${this.email}</a
            >
          </div>
          <div class="flex items-center gap-2">
            <span>📍</span>
            <span>${this.location}</span>
          </div>
          <div class="flex items-center gap-2">
            <span>💼</span>
            <a
              href="https://${this.linkedin}"
              target="_blank"
              class="hover:underline"
              >${this.linkedin}</a
            >
          </div>
          <div class="flex items-center gap-2">
            <span>🔗</span>
            <a
              href="https://${this.github}"
              target="_blank"
              class="hover:underline"
              >${this.github}</a
            >
          </div>
        </div>
      </div>
    `}renderSummary(){return u`
      <div class="p-8 border-b border-gray-200 dark:border-gray-700">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Summary
        </h2>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          ${this.summary}
        </p>
      </div>
    `}renderExperience(){return u`
      <div class="p-8 border-b border-gray-200 dark:border-gray-700">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Experience
        </h2>
        <div class="space-y-8">
          ${this.experience.map(r=>u`
              <div class="mb-8 last:mb-0">
                <!-- Company name -->
                <h3
                  class="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4"
                >
                  ${r.company}
                </h3>

                <!-- Positions with timeline -->
                <div class="relative pl-10">
                  <!-- Vertical line for all positions -->
                  ${r.positions.length>1?u`
                        <div
                          class="absolute w-0.5 bg-blue-300 dark:bg-blue-600"
                          style="left: 5px; top: 8px; height: calc(100% - 1rem);"
                        ></div>
                      `:""}
                  ${r.positions.map((e,t)=>u`
                      <div
                        class="relative ${t<r.positions.length-1?"mb-8":""}"
                      >
                        <!-- Dot -->
                        <div
                          class="absolute w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full z-10"
                          style="left: -40px; top: 2px;"
                        ></div>

                        <!-- Position content -->
                        <div>
                          <div class="flex justify-between items-start mb-2">
                            <h4
                              class="text-lg font-semibold text-gray-800 dark:text-gray-200"
                            >
                              ${e.title}
                            </h4>
                            <span
                              class="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4"
                              >${e.period}</span
                            >
                          </div>
                          <ul
                            class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mb-3"
                          >
                            ${e.description.map(s=>u`<li>${s}</li>`)}
                          </ul>
                          ${e.skills?u`
                                <div class="flex flex-wrap gap-1.5 mt-3">
                                  ${e.skills.map(s=>u`
                                      <span
                                        class="px-2 py-0.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                                      >
                                        ${s}
                                      </span>
                                    `)}
                                </div>
                              `:""}
                        </div>
                      </div>
                    `)}
                </div>
              </div>
            `)}
        </div>
      </div>
    `}renderEducation(){return u`
      <div class="p-8 border-b border-gray-200 dark:border-gray-700">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Education
        </h2>
        <div class="space-y-4">
          ${this.education.map(r=>u`
              <div>
                <div class="flex justify-between items-start mb-1">
                  <div>
                    <h3
                      class="text-xl font-semibold text-gray-800 dark:text-gray-200"
                    >
                      ${r.degree}
                    </h3>
                    <p class="text-lg text-blue-600 dark:text-blue-400">
                      ${r.institution}
                    </p>
                  </div>
                  <span
                    class="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4"
                    >${r.period}</span
                  >
                </div>
                ${r.details?u`<p class="text-gray-700 dark:text-gray-300">
                      ${r.details}
                    </p>`:""}
              </div>
            `)}
        </div>
      </div>
    `}};re([Oe()],j.prototype,"themeMode",2);j=re([ke("cv-app")],j);
