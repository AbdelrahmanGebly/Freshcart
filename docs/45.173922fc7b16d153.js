"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[45],{6286:(f,d,i)=>{i.d(d,{N:()=>m});var p=i(5619),l=i(4769),t=i(9862);let m=(()=>{class c{constructor(r){this._HttpClient=r,this.cartNumber=new p.X(0),this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}addToCart(r){return this._HttpClient.post(this.baseUrl+"cart",{productId:r})}getUserCart(){return this._HttpClient.get(this.baseUrl+"cart")}removeCartItem(r){return this._HttpClient.delete(this.baseUrl+`cart/${r}`)}updateCartCount(r,u){return this._HttpClient.put(this.baseUrl+`cart/${r}`,{count:u})}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}checkOut(r,u){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${r}?url=http://localhost:4200`,{shippingAddress:u})}static#t=this.\u0275fac=function(u){return new(u||c)(l.LFG(t.eN))};static#n=this.\u0275prov=l.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},4045:(f,d,i)=>{i.r(d),i.d(d,{BlankLayoutComponent:()=>_});var p=i(6814),l=i(1120),t=i(4769),m=i(6286),c=i(9196);const g=["navBar"];function r(a,C){if(1&a&&(t.TgZ(0,"span",32),t._uU(1),t.qZA()),2&a){const n=t.oxw();t.xp6(1),t.Oqu(n.numberOfWishlistCards)}}function u(a,C){if(1&a&&(t.TgZ(0,"span",32),t._uU(1),t.qZA()),2&a){const n=t.oxw();t.xp6(1),t.Oqu(n.numberOfCarts)}}let v=(()=>{class a{constructor(n,e,o,s){this._Router=n,this._CartService=e,this._Renderer2=o,this._WishlistService=s,this.numberOfCarts=0,this.numberOfWishlistCards=0}onScroll(){scrollY>300?(this._Renderer2.addClass(this.navElement.nativeElement,"px-5"),this._Renderer2.addClass(this.navElement.nativeElement,"shadow")):(this._Renderer2.removeClass(this.navElement.nativeElement,"px-5"),this._Renderer2.removeClass(this.navElement.nativeElement,"shadow"))}ngOnInit(){this._CartService.cartNumber.subscribe({next:n=>{this.numberOfCarts=n}}),this._CartService.getUserCart().subscribe({next:n=>{this.numberOfCarts=n.numOfCartItems},error:n=>{console.log("from navBlank : ",n)}}),this._WishlistService.numberOfWishlistCards.subscribe({next:n=>{this.numberOfWishlistCards=n}}),this._WishlistService.getWishlist().subscribe({next:n=>{this.numberOfWishlistCards=n.count}})}signout(){localStorage.removeItem("userToken"),this._Router.navigate(["/login"])}static#t=this.\u0275fac=function(e){return new(e||a)(t.Y36(l.F0),t.Y36(m.N),t.Y36(t.Qsj),t.Y36(c.M))};static#n=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-nav-blank"]],viewQuery:function(e,o){if(1&e&&t.Gf(g,5),2&e){let s;t.iGM(s=t.CRH())&&(o.navElement=s.first)}},hostBindings:function(e,o){1&e&&t.NdJ("scroll",function(){return o.onScroll()},!1,t.Jf7)},standalone:!0,features:[t.jDz],decls:48,vars:2,consts:[[1,"navbar","navbar-expand-md","navbar-light","bg-light","fixed-top"],["navBar",""],[1,"container-fluid"],["routerLink","home",1,"navbar-brand"],["src","./assets/image/freshcart-logo.svg","alt","freshcart logo"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapsibleNavId","aria-controls","collapsibleNavId","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","d-lg-none"],[1,"navbar-toggler-icon"],["id","collapsibleNavId",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mt-2","mt-lg-0"],[1,"nav-item"],["routerLinkActive","active-link","routerLink","/home",1,"nav-link"],["routerLinkActive","active-link","routerLink","/products",1,"nav-link"],["routerLinkActive","active-link","routerLink","/categories",1,"nav-link"],[1,"navbar-nav","ms-auto","mt-2","mt-lg-0","align-items-center"],[1,"nav-item","dropdown"],["role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],[1,"fas","fa-user","fa-xl"],[1,"dropdown-menu"],["routerLink","/forgotpassword","routerLinkActive","active-link",1,"dropdown-item"],["routerLinkActive","text-danger","routerLink","/wishlist",1,"nav-link","position-relative"],[1,"fa-solid","fa-heart","fa-2x","me-2","text-black"],["class","badge bg-info position-absolute top-0 end-0",4,"ngIf"],["routerLinkActive","text-main","routerLink","/cart",1,"nav-link","position-relative"],[1,"fas","fa-cart-shopping","fa-2x","me-2"],[1,"nav-item","d-flex","gap-3"],["href",""],[1,"fab","fa-instagram"],[1,"fab","fa-facebook"],[1,"fab","fa-tiktok"],[1,"fab","fa-twitter"],[1,"fab","fa-youtube"],["role","button",1,"ms-3","signout",3,"click"],[1,"badge","bg-info","position-absolute","top-0","end-0"]],template:function(e,o){1&e&&(t.TgZ(0,"nav",0,1)(2,"div",2)(3,"a",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"button",5),t._UZ(6,"span",6),t.qZA(),t.TgZ(7,"div",7)(8,"ul",8)(9,"li",9)(10,"a",10),t._uU(11,"home"),t.qZA()(),t.TgZ(12,"li",9)(13,"a",11),t._uU(14,"products"),t.qZA()(),t.TgZ(15,"li",9)(16,"a",12),t._uU(17,"categories"),t.qZA()()(),t.TgZ(18,"ul",13)(19,"li",14)(20,"a",15),t._UZ(21,"i",16),t.qZA(),t.TgZ(22,"ul",17)(23,"li")(24,"a",18),t._uU(25,"Forgot Password"),t.qZA()()()(),t.TgZ(26,"li",9)(27,"a",19),t._UZ(28,"i",20),t.YNc(29,r,2,1,"span",21),t.qZA()(),t.TgZ(30,"li",9)(31,"a",22),t._UZ(32,"i",23),t.YNc(33,u,2,1,"span",21),t.qZA()(),t.TgZ(34,"li",24)(35,"a",25),t._UZ(36,"i",26),t.qZA(),t.TgZ(37,"a",25),t._UZ(38,"i",27),t.qZA(),t.TgZ(39,"a",25),t._UZ(40,"i",28),t.qZA(),t.TgZ(41,"a",25),t._UZ(42,"i",29),t.qZA(),t.TgZ(43,"a",25),t._UZ(44,"i",30),t.qZA()(),t.TgZ(45,"li",9)(46,"span",31),t.NdJ("click",function(){return o.signout()}),t._uU(47,"signout"),t.qZA()()()()()()),2&e&&(t.xp6(29),t.Q6J("ngIf",o.numberOfWishlistCards>0),t.xp6(4),t.Q6J("ngIf",o.numberOfCarts>0))},dependencies:[p.ez,p.O5,l.rH,l.Od],styles:[".signout[_ngcontent-%COMP%]:hover{color:red}nav[_ngcontent-%COMP%]{transition:padding 1s}"]})}return a})();var h=i(7913);const b=["topButton"];let _=(()=>{class a{constructor(n){this._Renderer2=n}onScroll(){scrollY>500?this._Renderer2.removeClass(this.topBtn.nativeElement,"d-none"):this._Renderer2.addClass(this.topBtn.nativeElement,"d-none")}goToUp(){scrollTo(0,0)}static#t=this.\u0275fac=function(e){return new(e||a)(t.Y36(t.Qsj))};static#n=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-blank-layout"]],viewQuery:function(e,o){if(1&e&&t.Gf(b,5),2&e){let s;t.iGM(s=t.CRH())&&(o.topBtn=s.first)}},hostBindings:function(e,o){1&e&&t.NdJ("scroll",function(){return o.onScroll()},!1,t.Jf7)},standalone:!0,features:[t.jDz],decls:7,vars:0,consts:[[1,"container-fluid"],["title","Go to top of the page",1,"arrow","d-none",3,"click"],["topButton",""],[1,"fa-solid","fa-arrow-up"]],template:function(e,o){1&e&&(t._UZ(0,"app-nav-blank"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet"),t.qZA(),t.TgZ(3,"button",1,2),t.NdJ("click",function(){return o.goToUp()}),t._UZ(5,"i",3),t.qZA(),t._UZ(6,"app-footer"))},dependencies:[p.ez,v,l.lC,h.c],styles:["[_nghost-%COMP%]{display:flex;min-height:100vh;flex-direction:column}.container-fluid[_ngcontent-%COMP%]{padding-top:70px}.arrow[_ngcontent-%COMP%]{position:fixed;bottom:10px;right:20px;width:40px;height:40px;border-radius:50%;z-index:2;border:green solid 1px;color:green;animation:_ngcontent-%COMP%_topDown 1s infinite}@keyframes _ngcontent-%COMP%_topDown{0%{bottom:10px}25%{bottom:15px}50%{bottom:10px}75%{bottom:15px}to{bottom:10px}}"]})}return a})()}}]);