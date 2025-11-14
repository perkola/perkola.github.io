(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const T=globalThis,I=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),V=new WeakMap;let oe=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(I&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=V.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&V.set(t,e))}return e}toString(){return this.cssText}};const ne=r=>new oe(typeof r=="string"?r:r+"",void 0,X),ae=(r,e)=>{if(I)r.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const s=document.createElement("style"),i=T.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},q=I?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return ne(t)})(r):r;const{is:le,defineProperty:he,getOwnPropertyDescriptor:ce,getOwnPropertyNames:de,getOwnPropertySymbols:pe,getPrototypeOf:ue}=Object,U=globalThis,W=U.trustedTypes,me=W?W.emptyScript:"",ge=U.reactiveElementPolyfillSupport,x=(r,e)=>r,O={toAttribute(r,e){switch(e){case Boolean:r=r?me:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},L=(r,e)=>!le(r,e),F={attribute:!0,type:String,converter:O,reflect:!1,useDefault:!1,hasChanged:L};Symbol.metadata??=Symbol("metadata"),U.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=F){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&he(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:o}=ce(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){const l=i?.call(this);o?.call(this,n),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??F}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=ue(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const t=this.properties,s=[...de(t),...pe(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(q(i))}else e!==void 0&&t.push(q(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ae(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:O).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:O;this._$Em=i;const l=n.fromAttribute(t,o.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){const i=this.constructor,o=this[e];if(s??=i.getPropertyOptions(e),!((s.hasChanged??L)(o,t)||s.useDefault&&s.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s){const{wrapped:n}=o,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[x("elementProperties")]=new Map,_[x("finalized")]=new Map,ge?.({ReactiveElement:_}),(U.reactiveElementVersions??=[]).push("2.1.1");const D=globalThis,H=D.trustedTypes,Z=H?H.createPolicy("lit-html",{createHTML:r=>r}):void 0,ee="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,te="?"+f,fe=`<${te}>`,y=document,E=()=>y.createComment(""),S=r=>r===null||typeof r!="object"&&typeof r!="function",B=Array.isArray,$e=r=>B(r)||typeof r?.[Symbol.iterator]=="function",j=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,K=/-->/g,J=/>/g,$=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),G=/'/g,Y=/"/g,se=/^(?:script|style|textarea|title)$/i,ve=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),c=ve(1),b=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Q=new WeakMap,v=y.createTreeWalker(y,129);function ie(r,e){if(!B(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Z!==void 0?Z.createHTML(e):e}const ye=(r,e)=>{const t=r.length-1,s=[];let i,o=e===2?"<svg>":e===3?"<math>":"",n=w;for(let l=0;l<t;l++){const a=r[l];let d,u,h=-1,m=0;for(;m<a.length&&(n.lastIndex=m,u=n.exec(a),u!==null);)m=n.lastIndex,n===w?u[1]==="!--"?n=K:u[1]!==void 0?n=J:u[2]!==void 0?(se.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=$):u[3]!==void 0&&(n=$):n===$?u[0]===">"?(n=i??w,h=-1):u[1]===void 0?h=-2:(h=n.lastIndex-u[2].length,d=u[1],n=u[3]===void 0?$:u[3]==='"'?Y:G):n===Y||n===G?n=$:n===K||n===J?n=w:(n=$,i=void 0);const g=n===$&&r[l+1].startsWith("/>")?" ":"";o+=n===w?a+fe:h>=0?(s.push(d),a.slice(0,h)+ee+a.slice(h)+f+g):a+f+(h===-2?l:g)}return[ie(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class P{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let o=0,n=0;const l=e.length-1,a=this.parts,[d,u]=ye(e,t);if(this.el=P.createElement(d,s),v.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=v.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(ee)){const m=u[n++],g=i.getAttribute(h).split(f),M=/([.?@])?(.*)/.exec(m);a.push({type:1,index:o,name:M[2],strings:g,ctor:M[1]==="."?be:M[1]==="?"?Ae:M[1]==="@"?we:R}),i.removeAttribute(h)}else h.startsWith(f)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(se.test(i.tagName)){const h=i.textContent.split(f),m=h.length-1;if(m>0){i.textContent=H?H.emptyScript:"";for(let g=0;g<m;g++)i.append(h[g],E()),v.nextNode(),a.push({type:2,index:++o});i.append(h[m],E())}}}else if(i.nodeType===8)if(i.data===te)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(f,h+1))!==-1;)a.push({type:7,index:o}),h+=f.length-1}o++}}static createElement(e,t){const s=y.createElement("template");return s.innerHTML=e,s}}function A(r,e,t=r,s){if(e===b)return e;let i=s!==void 0?t._$Co?.[s]:t._$Cl;const o=S(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??=[])[s]=i:t._$Cl=i),i!==void 0&&(e=A(r,i._$AS(r,e.values),i,s)),e}class _e{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??y).importNode(t,!0);v.currentNode=i;let o=v.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new C(o,o.nextSibling,this,e):a.type===1?d=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(d=new xe(o,this,e)),this._$AV.push(d),a=s[++l]}n!==a?.index&&(o=v.nextNode(),n++)}return v.currentNode=y,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class C{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),S(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==b&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):$e(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&S(this._$AH)?this._$AA.nextSibling.data=e:this.T(y.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=P.createElement(ie(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{const o=new _e(i,this),n=o.u(this.options);o.p(t),this.T(n),this._$AH=o}}_$AC(e){let t=Q.get(e.strings);return t===void 0&&Q.set(e.strings,t=new P(e)),t}k(e){B(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const o of e)i===t.length?t.push(s=new C(this.O(E()),this.O(E()),this,this.options)):s=t[i],s._$AI(o),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(e,t=this,s,i){const o=this.strings;let n=!1;if(o===void 0)e=A(this,e,t,0),n=!S(e)||e!==this._$AH&&e!==b,n&&(this._$AH=e);else{const l=e;let a,d;for(e=o[0],a=0;a<o.length-1;a++)d=A(this,l[s+a],t,a),d===b&&(d=this._$AH[a]),n||=!S(d)||d!==this._$AH[a],d===p?e=p:e!==p&&(e+=(d??"")+o[a+1]),this._$AH[a]=d}n&&!i&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class be extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class Ae extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class we extends R{constructor(e,t,s,i,o){super(e,t,s,i,o),this.type=5}_$AI(e,t=this){if((e=A(this,e,t,0)??p)===b)return;const s=this._$AH,i=e===p&&s!==p||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class xe{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}}const ke=D.litHtmlPolyfillSupport;ke?.(P,C),(D.litHtmlVersions??=[]).push("3.3.1");const Ee=(r,e,t)=>{const s=t?.renderBefore??e;let i=s._$litPart$;if(i===void 0){const o=t?.renderBefore??null;s._$litPart$=i=new C(e.insertBefore(E(),o),o,void 0,t??{})}return i._$AI(r),i};const z=globalThis;class k extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ee(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return b}}k._$litElement$=!0,k.finalized=!0,z.litElementHydrateSupport?.({LitElement:k});const Se=z.litElementPolyfillSupport;Se?.({LitElement:k});(z.litElementVersions??=[]).push("4.2.1");const Pe=r=>(e,t)=>{t!==void 0?t.addInitializer((()=>{customElements.define(r,e)})):customElements.define(r,e)};const Ce={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:L},Me=(r=Ce,e,t)=>{const{kind:s,metadata:i}=t;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(t.name,r),s==="accessor"){const{name:n}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,a,r)},init(l){return l!==void 0&&this.C(n,void 0,r,l),l}}}if(s==="setter"){const{name:n}=t;return function(l){const a=this[n];e.call(this,l),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+s)};function Te(r){return(e,t)=>typeof t=="object"?Me(r,e,t):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,e,t)}function Oe(r){return Te({...r,state:!0,attribute:!1})}var He=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,re=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ue(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&He(e,t,i),i};let N=class extends k{constructor(){super(...arguments),this.themeMode="system",this.fullName="William Perkola",this.jobTitle="Product owner & Software Engineer",this.email="hej@perko.la",this.location="Stockholm, Sweden",this.linkedin="linkedin.com/in/perkola",this.github="github.com/perkola",this.experience=[{company:"Tech Company Inc.",positions:[{title:"Senior Software Developer",period:"2021 - Present",description:["Managing an inner sourced design system at OSTTRA through a tight collaboration with product teams and the UX department.","Engaging stakeholders, prioritizing work, managing quality and maintaining source code.","Currently helping improve adoption across 20+ product teams at OSTTRA."],skills:["Project management","React","TypeScript","Storybook","Figma"]},{title:"Software Engineer",period:"2017 - 2023",description:["Full-stack role in a highly autonomous and experienced team, building a collateral management system and a settlement service using micro services on a private cloud infrastructure."],skills:["Go","Python","Clojure","ClojureScript","Docker","Kubernetes"]}]},{company:"Freelance",positions:[{title:"Software Consultant",period:"2015 - 2021",description:["Working with mainly non-profit organizations designing, building and maintaining websites and digital payment systems."],skills:["PHP","SQL","JavaScript"]}]},{company:"Scania Group",positions:[{title:"Master Thesis Student",period:"2017 - 2017",description:["Using machine learning, at the C-ITS (Cooperative Intelligent Transport System) R&D department, to classify short-lived distributed hazard warning messages to road vehicles."],skills:["Python","Machine Learning"]},{title:"Intern",period:"2016 - 2017",description:["A year long internship programme at the R&D department for master's students."]},{title:"Mobile Developer",period:"2016 - 2016",description:["Building a prototype for a map-based mobile application in a research project at the R&D department."],skills:["Android","React Native","C#","Microsoft Azure"]}]},{company:"Academic Work",positions:[{title:"Software Consultant",period:"2014 - 2015",description:["Part time consultancy at an advertising company. Responsibilities consisted of maintaining multiple websites while developing a job search engine using the API of the Swedish Public Employment Service (Arbetsförmedlningen)."],skills:["PHP","JavaScript","HTML","CSS"]}]}],this.education=[{degree:"Master of Engineering (M.Eng.), Computer Science",institution:"KTH Royal Institute of Technology",period:"2015 - 2017"},{degree:"Bachelor of Engineering (B.Eng.), Computer Science",institution:"KTH Royal Institute of Technology",period:"2012 - 2015"}],this.cycleTheme=()=>{const r=["light","system","dark"],e=r.indexOf(this.themeMode);this.themeMode=r[(e+1)%r.length],this.saveThemePreference(),this.applyTheme(),this.requestUpdate()}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.loadThemePreference(),this.applyTheme(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{this.themeMode==="system"&&this.applyTheme()})}loadThemePreference(){const r=localStorage.getItem("theme-mode");r&&["light","dark","system"].includes(r)&&(this.themeMode=r)}saveThemePreference(){localStorage.setItem("theme-mode",this.themeMode)}applyTheme(){const r=document.documentElement;this.themeMode==="dark"||this.themeMode==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches?r.classList.add("dark"):r.classList.remove("dark")}render(){return c`
      <div
        class="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 transition-colors duration-200"
      >
        <div
          class="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
        >
          <!-- Header -->
          ${this.renderHeader()}

          <!-- Experience -->
          ${this.renderExperience()}

          <!-- Education -->
          ${this.renderEducation()}
        </div>

        <!-- Footer -->
        ${this.renderFooter()}
      </div>
    `}getIcon(r){return{sun:c`<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/></svg>`,moon:c`<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/></svg>`,computer:c`<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"/></svg>`,envelope:c`<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>`,mapPin:c`<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>`,briefcase:c`<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"/></svg>`,codeBracket:c`<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/></svg>`}[r]}renderHeader(){const r={light:this.getIcon("sun"),dark:this.getIcon("moon"),system:this.getIcon("computer")};return c`
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
          ${r[this.themeMode]}
        </button>

        <h1 class="text-4xl font-bold mb-2">${this.fullName}</h1>
        <p class="text-xl mb-4 text-blue-100 dark:text-blue-200">
          ${this.jobTitle}
        </p>
        <div class="flex flex-wrap gap-4 text-sm">
          <div class="flex items-center gap-2">
            ${this.getIcon("envelope")}
            <a href="mailto:${this.email}" class="hover:underline"
              >${this.email}</a
            >
          </div>
          <div class="flex items-center gap-2">
            ${this.getIcon("mapPin")}
            <span>${this.location}</span>
          </div>
          <div class="flex items-center gap-2">
            ${this.getIcon("briefcase")}
            <a
              href="https://${this.linkedin}"
              target="_blank"
              class="hover:underline"
              >${this.linkedin}</a
            >
          </div>
          <div class="flex items-center gap-2">
            ${this.getIcon("codeBracket")}
            <a
              href="https://${this.github}"
              target="_blank"
              class="hover:underline"
              >${this.github}</a
            >
          </div>
        </div>
      </div>
    `}renderExperience(){return c`
      <div class="p-8 border-b border-gray-200 dark:border-gray-700">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Experience
        </h2>
        <div class="space-y-8">
          ${this.experience.map(r=>c`
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
                  ${r.positions.length>1?c`
                        <div
                          class="absolute w-0.5 bg-blue-300 dark:bg-blue-600"
                          style="left: 5px; top: 8px; height: calc(100% - 1rem);"
                        ></div>
                      `:""}
                  ${r.positions.map((e,t)=>c`
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
                            ${e.description.map(s=>c`<li>${s}</li>`)}
                          </ul>
                          ${e.skills?c`
                                <div class="flex flex-wrap gap-1.5 mt-3">
                                  ${e.skills.map(s=>c`
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
    `}renderEducation(){return c`
      <div class="p-8 border-b border-gray-200 dark:border-gray-700">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Education
        </h2>
        <div class="space-y-4">
          ${this.education.map(r=>c`
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
                ${r.details?c`<p class="text-gray-700 dark:text-gray-300">
                      ${r.details}
                    </p>`:""}
              </div>
            `)}
        </div>
      </div>
    `}renderFooter(){const r=new Date().getFullYear();return c`
      <footer class="mt-8 py-6 px-4 text-center text-sm text-gray-600 dark:text-gray-400">
        <p class="mb-2">© ${r} ${this.fullName}. All rights reserved.</p>
        <p>
          Built with
          <a href="https://vitejs.dev/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Vite</a>,
          <a href="https://lit.dev/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Lit</a> and
          <a href="https://tailwindcss.com/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Tailwind</a> using
          <a href="https://claude.ai/code" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Claude Code</a>
        </p>
      </footer>
    `}};re([Oe()],N.prototype,"themeMode",2);N=re([Pe("cv-app")],N);
