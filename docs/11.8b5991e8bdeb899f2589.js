(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{HBpd:function(t,e,a){"use strict";a.r(e),a.d(e,"ServiceGetSetBasedModule",function(){return f});var n=a("ofXK"),c=a("tyNb");const r={title:"Angular Service (Get/Set) ",subTitle:"Service based via getter/setter methods"};var s=a("fXoL");let o=(()=>{class t{constructor(){this.isEnable=!1}setData(t){this.isEnable=t}getData(){return this.isEnable}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var i=a("1vAT");let b=(()=>{class t{constructor(t){this.dataService=t,this.contactData=r}ngOnInit(){this.changeValue=this.dataService.getData()}changeCondition(){this.changeValue=!this.changeValue,this.dataService.setData(this.changeValue),alert("Done, Now click on Go to Parent")}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(o))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-child"]],decls:12,vars:1,consts:[[1,"space-30"],["routerLink","/",1,"primary-btn"],[3,"data"],[1,"secondary-btn",3,"click"],["routerLink","/service-based",1,"primary-btn"]],template:function(t,e){1&t&&(s.Mb(0,"div",0),s.Qb(1,"button",1),s.sc(2,"Back"),s.Pb(),s.Mb(3,"app-contact",2),s.Qb(4,"p"),s.sc(5,"child works!"),s.Pb(),s.Qb(6,"button",3),s.Xb("click",function(){return e.changeCondition()}),s.sc(7,"Change Condition"),s.Pb(),s.Mb(8,"br"),s.Mb(9,"br"),s.Qb(10,"a",4),s.sc(11," <<< Go to Parent"),s.Pb()),2&t&&(s.zb(3),s.ec("data",e.contactData))},directives:[c.a,i.a,c.b],styles:[""]}),t})();const l=function(t,e){return{true:t,false:e}};let u=(()=>{class t{constructor(t){this.dataService=t}ngOnInit(){this.getData()}getData(){this.show_flag=this.dataService.getData()}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(o))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-parent"]],decls:9,vars:5,consts:[[1,"ak-title"],[3,"ngClass"],["routerLink","child",1,"primary-btn"]],template:function(t,e){1&t&&(s.Qb(0,"p"),s.sc(1,"parent works!"),s.Pb(),s.Qb(2,"h2",0),s.sc(3,"This is a "),s.Qb(4,"span",1),s.sc(5),s.Pb(),s.sc(6," condition"),s.Pb(),s.Qb(7,"a",2),s.sc(8,"Go to child >>>"),s.Pb()),2&t&&(s.zb(4),s.ec("ngClass",s.hc(2,l,e.show_flag,!e.show_flag)),s.zb(1),s.tc(e.show_flag?"True":"False"))},directives:[n.i,c.b],styles:[".true[_ngcontent-%COMP%]{color:green}.false[_ngcontent-%COMP%]{color:#ff4545}"]}),t})();const p=[{path:"",pathMatch:"full",component:(()=>{class t{constructor(){this.contactData=r}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["app-service-get-set-based"]],decls:6,vars:1,consts:[[1,"space-30"],["routerLink","/",1,"primary-btn"],[3,"data"]],template:function(t,e){1&t&&(s.Mb(0,"div",0),s.Qb(1,"button",1),s.sc(2,"Back"),s.Pb(),s.Mb(3,"app-contact",2),s.Mb(4,"router-outlet"),s.Mb(5,"app-parent")),2&t&&(s.zb(3),s.ec("data",e.contactData))},directives:[c.a,i.a,c.d,u],styles:[""]}),t})()},{path:"child",component:b},{path:"parent",component:u}];let d=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[c.c.forChild(p)],c.c]}),t})();var h=a("PCNd");let f=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[n.b,d,h.a]]}),t})()}}]);