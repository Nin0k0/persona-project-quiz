"use strict";(self.webpackChunkFinalProject=self.webpackChunkFinalProject||[]).push([[813],{6813:(Z,p,a)=>{a.r(p),a.d(p,{AuthModule:()=>v});var g=a(6895),c=a(9030),e=a(4006),t=a(4650);let f=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-invalid-snackbar"]],decls:3,vars:0,consts:[[1,"fa","fa-exclamation-triangle",2,"font-size","20px","color","red"]],template:function(o,i){1&o&&(t.TgZ(0,"span"),t._uU(1," Invalid Login! "),t._UZ(2,"i",0),t.qZA())},encapsulation:2}),n})();var d=a(8896),u=a(9833),l=a(470);let h=(()=>{class n{constructor(o,i,s,_){this.authService=o,this.router=i,this.loggedService=s,this.snackBar=_,this.loginForm=new e.cw({email:new e.NI("",[e.kI.required,e.kI.email]),password:new e.NI("",[e.kI.required])})}ngOnInit(){}login(){this.authService.login(this.loginForm.value).subscribe(i=>{i?(this.loggedService.setLoggedUser(i),this.loginForm.reset(),this.router.navigateByUrl("leaderboard")):this.openSnackBar()})}openSnackBar(){this.snackBar.openFromComponent(f,{duration:3e3})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(d.e),t.Y36(c.F0),t.Y36(u.Y),t.Y36(l.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:18,vars:1,consts:[[1,"background"],[1,"shape"],[3,"formGroup"],["for","username"],["type","text","placeholder"," ","id","username","formControlName","email"],["for","password"],["type","password","placeholder","","id","password","formControlName","password"],[3,"click"],[1,"social"],[1,"go"]],template:function(o,i){1&o&&(t.TgZ(0,"body")(1,"div",0),t._UZ(2,"div",1)(3,"div",1),t.qZA(),t.TgZ(4,"form",2)(5,"h3"),t._uU(6,"Login Here"),t.qZA(),t.TgZ(7,"label",3),t._uU(8,"Email"),t.qZA(),t._UZ(9,"input",4),t.TgZ(10,"label",5),t._uU(11,"Password"),t.qZA(),t._UZ(12,"input",6),t.TgZ(13,"button",7),t.NdJ("click",function(){return i.login()}),t._uU(14,"Log In"),t.qZA(),t.TgZ(15,"div",8)(16,"div",9),t._uU(17,"Forgot the password?"),t.qZA()()()()),2&o&&(t.xp6(4),t.Q6J("formGroup",i.loginForm))},dependencies:[e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u],styles:["body[_ngcontent-%COMP%]{background-color:#272727;width:100%;min-height:100vh}.background[_ngcontent-%COMP%]{width:430px;height:520px;position:absolute;transform:translate(-50%,-50%);left:50%;top:80%}.background[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]{height:200px;width:200px;position:absolute;border-radius:50%}.shape[_ngcontent-%COMP%]:first-child{background:linear-gradient(#a518ad,#f623b7);left:-120px;top:-80px}.shape[_ngcontent-%COMP%]:last-child{background:linear-gradient(to right,#3282eb,#4819f0);right:-120px;bottom:170px}form[_ngcontent-%COMP%]{height:400px;width:400px;background-color:#ffffff21;position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;border-radius:10px;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:2px solid rgba(255,255,255,.1);box-shadow:0 0 40px #08071099;padding:30px 40px}form[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:#fff;letter-spacing:.5px;outline:none;border:none}form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:32px;font-weight:500;line-height:42px;text-align:center;text-transform:uppercase}label[_ngcontent-%COMP%]{display:block;margin-top:15px;font-size:16px;font-weight:500}input[_ngcontent-%COMP%]{display:block;height:35px;width:100%;background-color:#ffffff12;border-radius:3px;padding:0 5px;margin-top:5px;font-size:14px;font-weight:300}[_ngcontent-%COMP%]::placeholder{color:#e5e5e5}button[_ngcontent-%COMP%]{margin-top:30px;width:100%;background-color:#fff;color:#a518ad!important;padding:15px 0;font-size:18px;font-weight:600;border-radius:5px;cursor:pointer;text-transform:uppercase}.social[_ngcontent-%COMP%]{margin-top:30px;display:flex}.social[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background:red;width:150px;border-radius:3px;padding:5px 10px 10px 5px;background-color:#ffffff45;color:#eaf0fb;text-align:center;margin:0 auto}.social[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{background-color:#ffffff78}"]}),n})(),m=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-used-email"]],decls:3,vars:0,consts:[[1,"fa","fa-exclamation-triangle",2,"font-size","20px","color","yellow"]],template:function(o,i){1&o&&(t.TgZ(0,"span"),t._uU(1," Email already Used "),t._UZ(2,"i",0),t.qZA())}}),n})(),b=(()=>{class n{constructor(o,i,s){this.authService=o,this.router=i,this.snackBar=s,this.RegisterForm=new e.cw({email:new e.NI("",[e.kI.required,e.kI.email]),password:new e.NI("",[e.kI.required]),name:new e.NI("",[e.kI.required]),lastName:new e.NI("",[e.kI.required]),score:new e.NI(0),isAdmin:new e.NI(!1,[e.kI.required])})}ngOnInit(){}signUp(){this.authService.signUp(this.RegisterForm.value).subscribe(i=>{null==i?this.openSnackBar():(this.RegisterForm.reset(),this.router.navigateByUrl("auth/login"))})}openSnackBar(){this.snackBar.openFromComponent(m,{duration:3e3})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(d.e),t.Y36(c.F0),t.Y36(l.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-registration"]],decls:27,vars:1,consts:[[1,"background"],[1,"shape"],[3,"formGroup"],["for","username"],["type","text","placeholder"," ","id","name","formControlName","name"],["type","text","placeholder"," ","id","lastname","formControlName","lastName"],["type","text","placeholder"," ","id","username","formControlName","email"],["for","password"],["type","password","placeholder","","id","password","formControlName","password"],["for","admin"],["type","checkbox","placeholder"," ","id","admin","formControlName","isAdmin",1,"checkmark"],[3,"click"],[1,"social"],[1,"go"]],template:function(o,i){1&o&&(t.TgZ(0,"body")(1,"div",0),t._UZ(2,"div",1)(3,"div",1),t.qZA(),t.TgZ(4,"form",2)(5,"h3"),t._uU(6,"Sign Up Here"),t.qZA(),t.TgZ(7,"label",3),t._uU(8,"Name"),t.qZA(),t._UZ(9,"input",4),t.TgZ(10,"label",3),t._uU(11,"Lastname"),t.qZA(),t._UZ(12,"input",5),t.TgZ(13,"label",3),t._uU(14,"Email"),t.qZA(),t._UZ(15,"input",6),t.TgZ(16,"label",7),t._uU(17,"Password"),t.qZA(),t._UZ(18,"input",8),t.TgZ(19,"label",9),t._uU(20,"Is Admin?"),t.qZA(),t._UZ(21,"input",10),t.TgZ(22,"button",11),t.NdJ("click",function(){return i.signUp()}),t._uU(23,"Sign Up"),t.qZA(),t.TgZ(24,"div",12)(25,"div",13),t._uU(26,"Forgot the password?"),t.qZA()()()()),2&o&&(t.xp6(4),t.Q6J("formGroup",i.RegisterForm))},dependencies:[e._Y,e.Fj,e.Wl,e.JJ,e.JL,e.sg,e.u],styles:["body[_ngcontent-%COMP%]{background-color:#272727;width:100%;min-height:100vh}.background[_ngcontent-%COMP%]{width:430px;height:520px;position:absolute;transform:translate(-50%,-50%);left:50%;top:80%}.background[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]{height:200px;width:200px;position:absolute;border-radius:50%}.shape[_ngcontent-%COMP%]:first-child{background:linear-gradient(#a518ad,#f623b7);left:-120px;top:-80px}.shape[_ngcontent-%COMP%]:last-child{background:linear-gradient(to right,#3282eb,#4819f0);right:-100px;bottom:40px}form[_ngcontent-%COMP%]{height:550px;width:400px;background-color:#ffffff21;position:absolute;transform:translate(-50%,-50%);top:56%;left:50%;border-radius:10px;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:2px solid rgba(255,255,255,.1);box-shadow:0 0 40px #08071099;padding:30px 40px}form[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:#fff;letter-spacing:.5px;outline:none;border:none}form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:32px;font-weight:500;line-height:42px;text-align:center;text-transform:uppercase}label[_ngcontent-%COMP%]{display:block;margin-top:15px;font-size:16px;font-weight:500}input[_ngcontent-%COMP%]{display:block;height:35px;width:100%;background-color:#ffffff12;border-radius:3px;padding:0 5px;margin-top:5px;font-size:14px;font-weight:300}[_ngcontent-%COMP%]::placeholder{color:#e5e5e5}button[_ngcontent-%COMP%]{margin-top:30px;width:100%;background-color:#fff;color:#a518ad!important;padding:15px 0;font-size:18px;font-weight:600;border-radius:5px;cursor:pointer;text-transform:uppercase}.social[_ngcontent-%COMP%]{margin-top:30px;display:flex}.social[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background:red;width:150px;border-radius:3px;padding:5px 10px 10px 5px;background-color:#ffffff45;color:#eaf0fb;text-align:center;margin:0 auto}.social[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{background-color:#ffffff78}.checkmark[_ngcontent-%COMP%]{height:20px!important;width:20px;float:left}"]}),n})(),x=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-choice"]],decls:7,vars:2,consts:[[1,"background-two","link-container"],[1,"link-two",3,"routerLink"],[1,"background-three","link-container"],[1,"link-three",3,"routerLink"]],template:function(o,i){1&o&&(t.TgZ(0,"body")(1,"div",0)(2,"a",1),t._uU(3,"LOGIN"),t.qZA()(),t.TgZ(4,"div",2)(5,"a",3),t._uU(6,"SIGN UP"),t.qZA()()()),2&o&&(t.xp6(2),t.Q6J("routerLink","login"),t.xp6(3),t.Q6J("routerLink","register"))},dependencies:[c.yS],styles:['body[_ngcontent-%COMP%]{margin:0;height:100vh;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:1fr;width:100%}.background-two[_ngcontent-%COMP%], .background-three[_ngcontent-%COMP%]{background-color:#272727}.link-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;position:relative;z-index:0}a[_ngcontent-%COMP%]{font-size:2.5em;cursor:pointer;text-decoration:none}.link-two[_ngcontent-%COMP%]{color:#ee7bf2;transition:color 1s cubic-bezier(.32,0,.67,0)}.link-two[_ngcontent-%COMP%]:hover{color:#111;transition:color 1s cubic-bezier(.33,1,.68,1)}.link-two[_ngcontent-%COMP%]:before{content:"";position:absolute;z-index:-2;width:100%;height:100%;top:0;right:0;clip-path:polygon(0% -20%,100% -30%,100% -10%,0% 0%,0% 130%,100% 120%,100% 100%,0% 110%);background-color:#ee7bf2;transition:clip-path 1s cubic-bezier(.25,1,.5,1)}.link-two[_ngcontent-%COMP%]:hover:before{clip-path:polygon(0% 10%,100% 0%,100% 20%,0% 30%,0% 100%,100% 90%,100% 70%,0% 80%)}.link-two[_ngcontent-%COMP%]:after{content:"";position:absolute;z-index:-1;width:5ch;height:5ch;top:50%;right:50%;transform:translate(50%,-50%) rotate(0) scale(0);transition:transform 1s ease;background-color:#ee7bf2}.link-two[_ngcontent-%COMP%]:hover:after{transform:translate(50%,-50%) rotate(135deg) scale(1)}.link-three[_ngcontent-%COMP%]{color:#3282eb}.link-three[_ngcontent-%COMP%]:after{content:"";position:absolute;z-index:2;width:50%;height:100%;top:0%;left:0%;transform:translateY(-50%) scaleY(0);transition:transform 1s ease;mix-blend-mode:difference;clip-path:polygon(20% 60%,100% 60%,100% 40%,20% 40%,20% 0%,60% 0%,60% 20%,20% 20%);background-color:#3282eb}.link-three[_ngcontent-%COMP%]:hover:after{transform:translate(0) scaleY(1)}.link-three[_ngcontent-%COMP%]:before{content:"";position:absolute;z-index:2;width:50%;height:100%;bottom:0%;right:0%;transform:translateY(50%) scaleY(0);transition:transform 1s ease;mix-blend-mode:difference;clip-path:polygon(80% 40%,0% 40%,0% 60%,80% 60%,80% 100%,40% 100%,40% 80%,80% 80%);background-color:#3282eb}.link-three[_ngcontent-%COMP%]:hover:before{transform:translate(0) scaleY(1)}']}),n})(),C=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.Bz.forChild([{path:"",component:x},{path:"login",component:h},{path:"register",component:b}]),c.Bz]}),n})();var k=a(529),w=a(9022),M=a(7676),O=a(7392),P=a(4385);let v=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,C,e.UX,k.JF,l.ZX,w.To,M.lN,O.Ps,P.LD]}),n})()}}]);