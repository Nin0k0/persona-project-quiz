"use strict";(self.webpackChunkFinalProject=self.webpackChunkFinalProject||[]).push([[764],{8896:(g,d,o)=>{o.d(d,{e:()=>h});var l=o(4004),u=o(4650),t=o(529);let h=(()=>{class a{constructor(r){this.http=r,this.localURL="http://localhost:3000/users"}signUp(r){return this.getUserByEmail(r.email).pipe((0,l.U)(s=>s?.email?(console.log("here"),null):this.http.post(this.localURL,r).subscribe()))}getUserByEmail(r){return this.http.get(`${this.localURL}?email=${r}`).pipe((0,l.U)(s=>s[0]||null))}login(r){return this.getUserByEmail(r.email).pipe((0,l.U)(s=>null===s?null:r.password===s.password?s:null))}updateUser(r){return this.http.put(`${this.localURL}/${r.id}`,r)}getUser(r){return this.getUserByEmail(r).pipe((0,l.U)(s=>null===s?null:s))}getAllUsers(){return this.http.get(this.localURL)}}return a.\u0275fac=function(r){return new(r||a)(u.LFG(t.eN))},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},6764:(g,d,o)=>{o.r(d),o.d(d,{LeaderboardModule:()=>m});var l=o(6895),u=o(9030),t=o(4650),h=o(8896);function a(e,i){if(1&e&&(t.TgZ(0,"div",3)(1,"tr")(2,"td",4),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA()(),t._UZ(8,"div",1),t.qZA()),2&e){const n=i.$implicit,c=i.index;t.xp6(3),t.Oqu(c+1),t.xp6(2),t.Oqu(n.name+" "+n.lastName),t.xp6(2),t.Oqu(n.score)}}let p=(()=>{class e{constructor(n){this.userService=n}ngOnInit(){this.getUsers()}getUsers(){this.userService.getAllUsers().subscribe(n=>{this.users=n,this.users=this.users.sort((c,U)=>c.score>U.score?-1:1),this.users.length>10&&(this.users=this.users.splice(0,10))})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-leaderboard"]],decls:10,vars:1,consts:[[1,"main"],[1,"line-1"],["class","userCard",4,"ngFor","ngForOf"],[1,"userCard"],[1,"place"]],template:function(n,c){1&n&&(t.TgZ(0,"div",0)(1,"tr")(2,"th"),t._uU(3,"Place"),t.qZA(),t.TgZ(4,"th"),t._uU(5,"Name"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Score"),t.qZA()(),t._UZ(8,"div",1),t.YNc(9,a,9,3,"div",2),t.qZA()),2&n&&(t.xp6(9),t.Q6J("ngForOf",c.users))},dependencies:[l.sg],styles:[".userCard[_ngcontent-%COMP%]{text-align:center}tr[_ngcontent-%COMP%]{width:50%!important;display:inline}.main[_ngcontent-%COMP%]{text-align:center;height:100vh;background-color:#272727;color:#d63afd;margin:0 auto}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{width:250px;height:40px!important;line-height:40px}.line-1[_ngcontent-%COMP%]{height:.25px;background:#d63afd;margin-right:25%;margin-left:25%}th[_ngcontent-%COMP%]{vertical-align:bottom}td[_ngcontent-%COMP%]{vertical-align:middle;text-transform:uppercase}td.place[_ngcontent-%COMP%]{font-size:35px}"]}),e})(),r=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild([{path:"",component:p}]),u.Bz]}),e})();var s=o(529);let m=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,r,s.JF]}),e})()}}]);