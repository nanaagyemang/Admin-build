"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[118],{6118:(f,l,o)=>{o.r(l),o.d(l,{ChartsModule:()=>C});var i=o(6814),t=o(2934),c=o(1303),d=o(157),a=o(9468),g=o(206);const _=[{path:"",component:(()=>{class r{constructor(){this.months=["January","February","March","April","May","June","July","August","September","October","November","December"],this.chartBarData={labels:[...this.months].slice(0,7),datasets:[{label:"GitHub Commits",backgroundColor:"#f87979",data:[40,20,12,39,17,42,79]}]},this.chartLineData={labels:[...this.months].slice(0,7),datasets:[{label:"My First dataset",backgroundColor:"rgba(220, 220, 220, 0.2)",borderColor:"rgba(220, 220, 220, 1)",pointBackgroundColor:"rgba(220, 220, 220, 1)",pointBorderColor:"#fff",data:[this.randomData,this.randomData,this.randomData,this.randomData,this.randomData,this.randomData,this.randomData]},{label:"My Second dataset",backgroundColor:"rgba(151, 187, 205, 0.2)",borderColor:"rgba(151, 187, 205, 1)",pointBackgroundColor:"rgba(151, 187, 205, 1)",pointBorderColor:"#fff",data:[this.randomData,this.randomData,this.randomData,this.randomData,this.randomData,this.randomData,this.randomData]}]},this.chartLineOptions={maintainAspectRatio:!1},this.chartDoughnutData={labels:["VueJs","EmberJs","ReactJs","Angular"],datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]},this.chartPieData={labels:["Red","Green","Yellow"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},this.chartPolarAreaData={labels:["Red","Green","Yellow","Grey","Blue"],datasets:[{data:[11,16,7,3,14],backgroundColor:["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB"]}]},this.chartRadarData={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"2020",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",tooltipLabelColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"2021",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",tooltipLabelColor:"rgba(255,99,132,1)",data:[this.randomData,this.randomData,this.randomData,this.randomData,this.randomData,this.randomData,this.randomData]}]}}get randomData(){return Math.round(100*Math.random())}static#a=this.\u0275fac=function(e){return new(e||r)};static#t=this.\u0275cmp=a.Xpm({type:r,selectors:[["app-charts"]],decls:43,vars:6,consts:[["xs","12"],["href","charts"],["xs","12","lg","6"],[1,"mb-4"],["type","bar",3,"data"],["type","line",3,"data"],["type","doughnut",3,"data"],["type","pie",3,"data"],["type","polarArea",3,"data"],["type","radar",3,"data"]],template:function(e,h){1&e&&(a.TgZ(0,"c-row")(1,"c-col",0)(2,"app-docs-callout",1),a._uU(3," Angular wrapper component for Chart.js 3.6, the most popular charting library. "),a._UZ(4,"br"),a.qZA()(),a.TgZ(5,"c-col",2)(6,"c-card",3)(7,"c-card-header"),a._uU(8," Bar Chart "),a.qZA(),a.TgZ(9,"c-card-body"),a._UZ(10,"c-chart",4),a.qZA()()(),a.TgZ(11,"c-col",2)(12,"c-card",3)(13,"c-card-header"),a._uU(14," Line Chart "),a.qZA(),a.TgZ(15,"c-card-body"),a._UZ(16,"c-chart",5),a.qZA()()()(),a.TgZ(17,"c-row")(18,"c-col",2)(19,"c-card",3)(20,"c-card-header"),a._uU(21," Doughnut Chart "),a.qZA(),a.TgZ(22,"c-card-body"),a._UZ(23,"c-chart",6),a.qZA()()(),a.TgZ(24,"c-col",2)(25,"c-card",3)(26,"c-card-header"),a._uU(27," Pie Chart "),a.qZA(),a.TgZ(28,"c-card-body"),a._UZ(29,"c-chart",7),a.qZA()()()(),a.TgZ(30,"c-row")(31,"c-col",2)(32,"c-card",3)(33,"c-card-header"),a._uU(34," Polar Area Chart "),a.qZA(),a.TgZ(35,"c-card-body"),a._UZ(36,"c-chart",8),a.qZA()()(),a.TgZ(37,"c-col",2)(38,"c-card",3)(39,"c-card-header"),a._uU(40," Radar Chart "),a.qZA(),a.TgZ(41,"c-card-body"),a._UZ(42,"c-chart",9),a.qZA()()()()),2&e&&(a.xp6(10),a.Q6J("data",h.chartBarData),a.xp6(6),a.Q6J("data",h.chartLineData),a.xp6(7),a.Q6J("data",h.chartDoughnutData),a.xp6(6),a.Q6J("data",h.chartPieData),a.xp6(7),a.Q6J("data",h.chartPolarAreaData),a.xp6(6),a.Q6J("data",h.chartRadarData))},dependencies:[c.d,t.AkF,t.yue,t.nkx,t.Yp0,t.iok,g.G]})}return r})(),data:{title:"Charts"}}];let p=(()=>{class r{static#a=this.\u0275fac=function(e){return new(e||r)};static#t=this.\u0275mod=a.oAB({type:r});static#r=this.\u0275inj=a.cJS({imports:[d.Bz.forChild(_),d.Bz]})}return r})();var n=o(2328);let C=(()=>{class r{static#a=this.\u0275fac=function(e){return new(e||r)};static#t=this.\u0275mod=a.oAB({type:r});static#r=this.\u0275inj=a.cJS({imports:[i.ez,p,c.N,t.dTQ,t.zE6,t.TXv,n.E]})}return r})()},206:(f,l,o)=>{o.d(l,{G:()=>p});var i=o(4147),t=o(9468),c=o(6814),d=o(2934);function a(n,C){1&n&&t.GkF(0)}function g(n,C){if(1&n&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&n){const r=t.oxw(2);t.xp6(1),t.gL8(" An Angular ",r.name," component",r.plural?"s":""," ",r.plural?"have":"has"," been created as a native Angular version of Bootstrap ",r.name,". ",r.name," ",r.plural?"are":"is"," delivered with some new features, variants, and unique design that matches CoreUI Design System requirements. ")}}function s(n,C){if(1&n&&(t.YNc(0,g,2,6,"p",3),t.Hsn(1),t._UZ(2,"br"),t._uU(3," For more information please visit our official "),t.TgZ(4,"a",4),t._uU(5,"documentation of CoreUI Components Library for Angular."),t.qZA()),2&n){const r=t.oxw();t.Q6J("ngIf",!!r.name),t.xp6(4),t.s9C("href",r.href,t.LSH)}}const _=["*"];let p=(()=>{class n{constructor(){this.name="",this._href="https://coreui.io/angular/docs/"}get href(){return this._href}set href(r){this._href=`${i?.config?.coreui_library_docs_url??"https://coreui.io/angular/"}${r}`}get plural(){return"s"===this.name?.slice(-1)}static#a=this.\u0275fac=function(m){return new(m||n)};static#t=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-docs-callout"]],inputs:{name:"name",href:"href"},ngContentSelectors:_,decls:4,vars:1,consts:[["color","info",1,"bg-white:dark:bg-transparent"],[4,"ngTemplateOutlet"],["default",""],[4,"ngIf"],["target","_blank",3,"href"]],template:function(m,u){if(1&m&&(t.F$t(),t.TgZ(0,"c-callout",0),t.YNc(1,a,1,0,"ng-container",1),t.qZA(),t.YNc(2,s,6,2,"ng-template",null,2,t.W1O)),2&m){const e=t.MAs(3);t.xp6(1),t.Q6J("ngTemplateOutlet",e)}},dependencies:[c.O5,c.tP,d.OcB]})}return n})()},2328:(f,l,o)=>{o.d(l,{E:()=>g});var i=o(6814),t=o(157),c=o(2934),d=o(1272),a=o(9468);let g=(()=>{class s{static#a=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275mod=a.oAB({type:s});static#r=this.\u0275inj=a.cJS({imports:[i.ez,c.dGk,d.QX,t.Bz,c.P4_,c.gzQ,c.dfc]})}return s})()}}]);