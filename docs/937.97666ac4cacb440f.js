"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[937],{937:(_,n,e)=>{e.r(n),e.d(n,{CategoriesComponent:()=>g});var c=e(6814),l=e(1120),t=e(4769),a=e(1132);const u=function(o){return["/categorydetails",o]};function s(o,p){if(1&o&&(t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"img",5),t.TgZ(3,"h3",6),t._uU(4),t.qZA()()()),2&o){const r=p.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(4,u,r._id)),t.xp6(1),t.Q6J("src",r.image,t.LSH)("alt",r.name),t.xp6(2),t.Oqu(r.name)}}let g=(()=>{class o{constructor(r){this._ProductsService=r,this.categoriesData=[]}ngOnInit(){this._ProductsService.getCategories().subscribe({next:r=>{this.categoriesData=r.data}})}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(a.s))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-categories"]],standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[[1,"py-5"],[1,"row","g-4","justify-content-center"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2"],["role","button",1,"card",3,"routerLink"],["height","250",1,"w-100",3,"src","alt"],[1,"text-center","text-main","h6","my-2"]],template:function(i,d){1&i&&(t.TgZ(0,"section",0)(1,"div",1),t.YNc(2,s,5,6,"div",2),t.qZA()()),2&i&&(t.xp6(2),t.Q6J("ngForOf",d.categoriesData))},dependencies:[c.ez,c.sg,l.rH]})}return o})()},1132:(_,n,e)=>{e.d(n,{s:()=>t});var c=e(4769),l=e(9862);let t=(()=>{class a{constructor(s){this._HttpClient=s,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getProducts(s=1){return this._HttpClient.get(this.baseUrl+`products?page=${s}`)}getCategories(){return this._HttpClient.get(this.baseUrl+"categories")}getProductDetails(s){return this._HttpClient.get(this.baseUrl+"products/"+s)}getCategoryDetails(s){return this._HttpClient.get(this.baseUrl+"categories/"+s)}static#t=this.\u0275fac=function(g){return new(g||a)(c.LFG(l.eN))};static#e=this.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);