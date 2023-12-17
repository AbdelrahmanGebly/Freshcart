"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[560],{6560:(b,u,a)=>{a.r(u),a.d(u,{RegisterComponent:()=>Q});var d=a(6814),i=a(95),e=a(4769),c=a(304),f=a(1120);function Z(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"minimum length is 3"),e.qZA())}function h(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"name is required"),e.qZA())}function T(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"maximum length is 20"),e.qZA())}function v(r,s){if(1&r&&(e.TgZ(0,"div",19),e.YNc(1,Z,2,0,"p",20),e.YNc(2,h,2,0,"p",20),e.YNc(3,T,2,0,"p",20),e.qZA()),2&r){const o=e.oxw();let n,t,l;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("name"))?null:n.getError("minlength")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("name"))?null:t.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(l=o.registerForm.get("name"))?null:l.getError("maxlength"))}}function x(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"email is required"),e.qZA())}function w(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"invalid email pattern"),e.qZA())}function I(r,s){if(1&r&&(e.TgZ(0,"div",19),e.YNc(1,x,2,0,"p",20),e.YNc(2,w,2,0,"p",20),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("email"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("email"))?null:t.getError("email"))}}function q(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"password is required"),e.qZA())}function A(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"must be at least 6 chars"),e.qZA())}function C(r,s){if(1&r&&(e.TgZ(0,"div",19),e.YNc(1,q,2,0,"p",20),e.YNc(2,A,2,0,"p",20),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("password"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("password"))?null:t.getError("pattern"))}}function U(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"repassword is required"),e.qZA())}function F(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"password confirmation is incorrect"),e.qZA())}function R(r,s){if(1&r&&(e.TgZ(0,"div",19),e.YNc(1,U,2,0,"p",20),e.YNc(2,F,2,0,"p",20),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("rePassword"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("rePassword"))?null:t.getError("mismatch"))}}function N(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"phone is required"),e.qZA())}function E(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"accept only egypt phone numbers"),e.qZA())}function J(r,s){if(1&r&&(e.TgZ(0,"div",19),e.YNc(1,N,2,0,"p",20),e.YNc(2,E,2,0,"p",20),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("phone"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("phone"))?null:t.getError("pattern"))}}function P(r,s){1&r&&e._UZ(0,"span",22)}function Y(r,s){if(1&r&&(e.TgZ(0,"p",23),e._uU(1),e.qZA()),2&r){const o=e.oxw();e.xp6(1),e.Oqu(o.errorMessage)}}let Q=(()=>{class r{constructor(o,n){this._AuthService=o,this._Router=n,this.loading=!1,this.errorMessage="",this.registerForm=new i.cw({name:new i.NI("",[i.kI.required,i.kI.minLength(3),i.kI.maxLength(20)]),email:new i.NI("",[i.kI.required,i.kI.email]),password:new i.NI("",[i.kI.required,i.kI.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),rePassword:new i.NI(""),phone:new i.NI("",[i.kI.required,i.kI.pattern(/^(01)[0125][0-9]{8}$/)])},{validators:[this.confirmPassword]})}confirmPassword(o){const n=o.get("password"),t=o.get("rePassword");""==t?.value?t.setErrors({required:!0}):n?.value!=t?.value&&t?.setErrors({mismatch:!0})}handleForm(){this.loading=!0,!0===this.registerForm.valid&&this._AuthService.register(this.registerForm.value).subscribe({next:n=>{"success"==n.message&&(this._Router.navigate(["/login"]),this.loading=!1)},error:n=>{this.errorMessage=n.error.message,this.loading=!1}})}static#e=this.\u0275fac=function(n){return new(n||r)(e.Y36(c.e),e.Y36(f.F0))};static#r=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:35,vars:9,consts:[[1,"w-75","mx-auto","shadow","my-3","bg-main-light","p-4","rounded"],[1,"my-3"],[1,"text-main"],[3,"formGroup","ngSubmit"],[1,"form-item"],["for","name"],["type","text","formControlName","name","id","name",1,"form-control"],["class","alert alert-danger w-50",4,"ngIf"],["for","email"],["type","email","formControlName","email","id","email",1,"form-control"],["for","password"],["type","password","formControlName","password","id","password",1,"form-control"],["for","rePassword"],["type","password","formControlName","rePassword","id","rePassword",1,"form-control"],["for","phone"],["type","tel","formControlName","phone","id","phone",1,"form-control"],[1,"main-btn","my-3",3,"disabled"],["class","fas fa-spin fa-spinner me-1",4,"ngIf"],["class","alert alert-danger w-50 mx-auto p-1 mb-0 text-center",4,"ngIf"],[1,"alert","alert-danger","w-50"],["class","mb-0",4,"ngIf"],[1,"mb-0"],[1,"fas","fa-spin","fa-spinner","me-1"],[1,"alert","alert-danger","w-50","mx-auto","p-1","mb-0","text-center"]],template:function(n,t){if(1&n&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2,"Register "),e.TgZ(3,"span",2),e._uU(4,"Now"),e.qZA()(),e.TgZ(5,"form",3),e.NdJ("ngSubmit",function(){return t.handleForm()}),e.TgZ(6,"div",4)(7,"label",5),e._uU(8,"name"),e.qZA(),e._UZ(9,"input",6),e.YNc(10,v,4,3,"div",7),e.qZA(),e.TgZ(11,"div",4)(12,"label",8),e._uU(13,"email"),e.qZA(),e._UZ(14,"input",9),e.YNc(15,I,3,2,"div",7),e.qZA(),e.TgZ(16,"div",4)(17,"label",10),e._uU(18,"password"),e.qZA(),e._UZ(19,"input",11),e.YNc(20,C,3,2,"div",7),e.qZA(),e.TgZ(21,"div",4)(22,"label",12),e._uU(23,"rePassword"),e.qZA(),e._UZ(24,"input",13),e.YNc(25,R,3,2,"div",7),e.qZA(),e.TgZ(26,"div",4)(27,"label",14),e._uU(28,"phone"),e.qZA(),e._UZ(29,"input",15),e.YNc(30,J,3,2,"div",7),e.qZA(),e.TgZ(31,"button",16),e.YNc(32,P,1,0,"span",17),e._uU(33,"Register "),e.qZA()(),e.YNc(34,Y,2,1,"p",18),e.qZA()),2&n){let l,m,p,_,g;e.xp6(5),e.Q6J("formGroup",t.registerForm),e.xp6(5),e.Q6J("ngIf",(null==(l=t.registerForm.get("name"))?null:l.errors)&&(null==(l=t.registerForm.get("name"))?null:l.touched)),e.xp6(5),e.Q6J("ngIf",(null==(m=t.registerForm.get("email"))?null:m.errors)&&(null==(m=t.registerForm.get("email"))?null:m.touched)),e.xp6(5),e.Q6J("ngIf",(null==(p=t.registerForm.get("password"))?null:p.errors)&&(null==(p=t.registerForm.get("password"))?null:p.touched)),e.xp6(5),e.Q6J("ngIf",(null==(_=t.registerForm.get("rePassword"))?null:_.errors)&&(null==(_=t.registerForm.get("rePassword"))?null:_.touched)),e.xp6(5),e.Q6J("ngIf",(null==(g=t.registerForm.get("phone"))?null:g.errors)&&(null==(g=t.registerForm.get("phone"))?null:g.touched)),e.xp6(1),e.Q6J("disabled",t.registerForm.invalid),e.xp6(1),e.Q6J("ngIf",1==t.loading),e.xp6(2),e.Q6J("ngIf",""!=t.errorMessage)}},dependencies:[d.ez,d.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]})}return r})()}}]);