"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[7892,1385],{21385:(t,e,s)=>{s.r(e),s.d(e,{ISettings:()=>l,Settings:()=>o});var a=s(64588),r=s(20998),i=s(60850);const n="JupyterLite Storage";class o{constructor(t){this._storageName=n,this._storageDrivers=null,this._localforage=t.localforage,this._storageName=t.storageName||n,this._storageDrivers=t.storageDrivers||null,this._ready=new r.PromiseDelegate}get ready(){return this._ready.promise}get storage(){return this.ready.then((()=>this._storage))}async initialize(){await this.initStorage(),this._ready.resolve(void 0)}async initStorage(){this._storage=this.defaultSettingsStorage()}get defaultStorageOptions(){var t;const e=(null===(t=this._storageDrivers)||void 0===t?void 0:t.length)?this._storageDrivers:null;return{version:1,name:this._storageName,...e?{driver:e}:{}}}defaultSettingsStorage(){return this._localforage.createInstance({description:"Offline Storage for Settings",storeName:"settings",...this.defaultStorageOptions})}async get(t){return(await this.getAll()).settings.find((e=>e.id===t))}async getAll(){const t=await this._getAll("all.json");let e=[];try{e=await this._getAll("all_federated.json")}catch{}const s=t.concat(e),a=await this.storage;return{settings:await Promise.all(s.map((async t=>{var e;const{id:s}=t,r=null!==(e=await a.getItem(s))&&void 0!==e?e:t.raw;return{...g.override(t),raw:r,settings:i.parse(r)}})))}}async save(t,e){await(await this.storage).setItem(t,e)}async _getAll(t){var e;const s=null!==(e=a.PageConfig.getOption("settingsUrl"))&&void 0!==e?e:"/";return await(await fetch(a.URLExt.join(s,t))).json()}}var g;!function(t){const e=JSON.parse(a.PageConfig.getOption("settingsOverrides")||"{}");t.override=function(t){if(e[t.id]){t.schema.properties||(t.schema.properties={});for(const[s,a]of Object.entries(e[t.id]||{}))t.schema.properties[s].default=a}return t}}(g||(g={}));const l=new r.Token("@jupyterlite/settings:ISettings")}}]);
//# sourceMappingURL=7892.7c2eccd.js.map