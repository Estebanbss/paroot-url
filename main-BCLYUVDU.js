import{Da as d,Ea as p,Fa as s,Ga as f,Ia as u,Ja as g,Ka as h,Ma as y,Z as l,l as a,ma as c,p as i,r as m,u as n}from"./chunk-3ZYGTGP3.js";var v=[{path:"",loadComponent:()=>import("./chunk-OLAOMVST.js")}];var S={providers:[d(p()),h(v),u(),n(s,y)]};var k=(()=>{let e=class e{constructor(){}getTheme(){return typeof localStorage<"u"&&localStorage.getItem("theme")?localStorage.getItem("theme"):(typeof localStorage<"u"&&(localStorage.setItem("theme","dark"),document.body.classList.add("dark")),"dark")}veryfyTheme(){typeof localStorage<"u"&&localStorage.getItem("theme")&&(localStorage.getItem("theme")==="dark"?document.body.classList.add("dark"):document.body.classList.remove("dark"))}toggleTheme(){typeof localStorage<"u"&&localStorage.getItem("theme")&&(localStorage.getItem("theme")==="dark"?(localStorage.setItem("theme","light"),document.body.classList.remove("dark")):(localStorage.setItem("theme","dark"),document.body.classList.add("dark")))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var I=(()=>{let e=class e{constructor(){this.title="paroot",this.theme=i(k)}ngOnInit(){this.theme.veryfyTheme()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[c],decls:1,vars:0,template:function(o,b){o&1&&l(0,"router-outlet")},dependencies:[g]});let t=e;return t})();f(I,S).catch(t=>console.error(t));
