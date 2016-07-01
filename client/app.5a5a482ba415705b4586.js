webpackJsonp([0],{0:function(t,e,n){"use strict";var o=n(1),i=n(5),r=n(325),a=n(346),c=n(397),s=n(419),d=[a.APP_ROUTER_PROVIDER,r.HTTP_PROVIDERS,c.AuthService];i.enableProdMode(),o.bootstrap(s.AppComponent,d)},346:function(t,e,n){"use strict";var o=n(347),i=n(396),r=n(398),a=n(405),c=n(416);e.appRoutes=[{path:"",component:r.HomeComponent,terminal:!0},{path:"dashboard",component:a.DashboardComponent,canActivate:[i.AuthGuard]},{path:"video/:id",component:c.VideoDetailComponent,canActivate:[i.AuthGuard]}],e.APP_ROUTER_PROVIDER=[o.provideRouter(e.appRoutes),i.AuthGuard]},396:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=n(5),a=n(347),c=n(397),s=function(){function t(t,e){this.authService=t,this.router=e}return t.prototype.canActivate=function(t,e){return!0},t=o([r.Injectable(),i("design:paramtypes",[c.AuthService,a.Router])],t)}();e.AuthGuard=s},397:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=n(5),a=n(325),c=function(){function t(t){this.http=t,this.loggedIn=!1,this.storageKey="vpa_sessionid"}return t.prototype.login=function(t,e){var n=this,o=new a.Headers;return o.append("Content-Type","application/json"),this.http.post("/user/auth",JSON.stringify({username:t,password:e}),{headers:o}).map(function(t){return t.json()}).map(function(t){"success"===t.status&&(n.loggedIn=!0,localStorage.setItem(n.storageKey,t.sessionId))})},t.prototype.logout=function(){this.loggedIn=!1,localStorage.removeItem(this.storageKey)},t.prototype.isLoggedIn=function(){return this.loggedIn},t.prototype.sessionId=function(){return localStorage.getItem(this.storageKey)},t=o([r.Injectable(),i("design:paramtypes",[a.Http])],t)}();e.AuthService=c},398:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=n(5),a=n(347),c=n(397),s=n(399),d=function(){function t(t,e){this.authService=t,this.router=e}return t.prototype.login=function(){var t=this;this.authService.login(this.username,s(this.password)).subscribe(function(e){console.log(e),t.router.navigate(["/dashboard"])},function(t){return console.error(t)})},t=o([r.Component({selector:"home",template:n(403),styles:[n(404)]}),i("design:paramtypes",[c.AuthService,a.Router])],t)}();e.HomeComponent=d},403:function(t,e){t.exports='<div class="mdl-layout mdl-js-layout mdl-color--grey-100">\n\t<main class="mdl-layout__content">\n\t\t<div class="mdl-card mdl-shadow--6dp">\n\t\t\t<div class="mdl-card__title mdl-color--primary mdl-color-text--white">\n\t\t\t\t<h2 class="mdl-card__title-text">Acme Co.</h2>\n\t\t\t</div>\n\t  \t<div class="mdl-card__supporting-text">\n\t\t\t\t<form action="#">\n\t\t\t\t\t<div class="mdl-textfield mdl-js-textfield">\n\t\t\t\t\t\t<input [(ngModel)]="username" class="mdl-textfield__input" type="text" id="username" />\n\t\t\t\t\t\t<label class="mdl-textfield__label" for="username">Username</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="mdl-textfield mdl-js-textfield">\n\t\t\t\t\t\t<input [(ngModel)]="password" class="mdl-textfield__input" type="password" id="userpass" />\n\t\t\t\t\t\t<label class="mdl-textfield__label" for="userpass">Password</label>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class="mdl-card__actions mdl-card--border">\n\t\t\t\t<button (click)="login()" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Log in</button>\n\t\t\t</div>\n\t\t</div>\n\t</main>\n</div>\n'},404:function(t,e){t.exports=".mdl-layout {\n\talign-items: center;\n  justify-content: center;\n}\n.mdl-layout__content {\n\tpadding: 24px;\n\tflex: none;\n}\n"},405:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=n(5),a=n(347),c=n(397),s=n(406),d=n(408),l=function(){function t(t,e,n){this.router=t,this.authService=e,this.videosService=n}return t.prototype.gotoDetail=function(){},t.prototype.ngOnInit=function(){var t=this;this.videosService.getVideos().subscribe(function(e){return t.videos=e})},t.prototype.logout=function(){this.authService.logout()},t=o([r.Component({selector:"dashboard",template:n(414),styles:[n(415)],directives:[d.VideoItemComponent]}),i("design:paramtypes",[a.Router,c.AuthService,s.VideosService])],t)}();e.DashboardComponent=l},406:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=n(5),a=n(325),c=n(407),s=n(397),d=function(){function t(t,e){this.http=t,this.authService=e}return t.prototype.getVideos=function(){var t=new a.URLSearchParams;return t.set("sessionId",this.authService.sessionId()),this.http.get("/videos",{search:t}).map(function(t){return t.json()}).map(function(t){return t.data.forEach(function(t){return t.id=t._id}),t.data})},t.prototype.getVideo=function(t){var e=new a.URLSearchParams;return e.set("sessionId",this.authService.sessionId()),e.set("videoId",t),this.http.get("/video",{search:e}).map(function(t){return t.json()}).map(function(t){var e=new c.Video;return e.id=t.data._id,e.name=t.data.name,e.description=t.data.description,e.url=t.data.url,e.ratings=t.data.url,e})},t.prototype.rate=function(t,e){var n=new a.Headers;n.append("Content-Type","application/json");var o=new a.URLSearchParams;return o.set("sessionId",this.authService.sessionId()),this.http.post("/video/ratings",JSON.stringify({videoId:t,rating:e}),{headers:n,search:o}).map(function(t){return t.json()})},t=o([r.Injectable(),i("design:paramtypes",[a.Http,s.AuthService])],t)}();e.VideosService=d},407:function(t,e){"use strict";var n=function(){function t(){}return t}();e.Video=n},408:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=n(5),a=n(347),c=n(407),s=n(397),d=n(406),l=n(409),u=function(){function t(t,e,n){this.authService=t,this.videosService=e,this.router=n}return t.prototype.gotoDetail=function(){this.router.navigate(["/video",this.video.id])},t.prototype.rated=function(t){this.videosService.rate(this.video.id,t).subscribe(function(t){return console.log(t)})},o([r.Input(),i("design:type",c.Video)],t.prototype,"video",void 0),t=o([r.Component({selector:"video-item",template:n(412),styles:[n(413)],directives:[l.RatingBarComponent]}),i("design:paramtypes",[s.AuthService,d.VideosService,a.Router])],t)}();e.VideoItemComponent=u},409:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=n(5),a=function(){function t(){this.rated=new r.EventEmitter}return t.prototype.rate=function(t){this.rated.emit(t)},o([r.Input(),i("design:type",Number)],t.prototype,"rating",void 0),o([r.Output(),i("design:type",Object)],t.prototype,"rated",void 0),t=o([r.Component({selector:"rating-bar",template:n(410),styles:[n(411)]}),i("design:paramtypes",[])],t)}();e.RatingBarComponent=a},410:function(t,e){t.exports='<section class="rating-bar">\n  <i class="material-icons" (click)="rate(1)">star rate</i>\n  <i class="material-icons" (click)="rate(2)">star rate</i>\n  <i class="material-icons" (click)="rate(3)">star rate</i>\n  <i class="material-icons" (click)="rate(4)">star rate</i>\n  <i class="material-icons" (click)="rate(5)">star rate</i>\n</section>\n'},411:function(t,e){t.exports=".rating-bar > i {\n  display: inline;\n}\n"},412:function(t,e){t.exports='<section class="video-item section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">\n    <header class="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">\n        <video width="100" height="100">\n            <source [src]="video.url" type="video/mp4">\n        </video>\n    </header>\n    <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">\n        <div class="mdl-card__supporting-text">\n            <h4>{{video.name}}</h4> {{video.description}}\n        </div>\n        <div class="mdl-card__actions">\n          <h4>{{video.rating}}</h4>\n          <rating-bar (rated)="rated($event)"></rating-bar>\n        </div>\n    </div>\n</section>\n'},413:function(t,e){t.exports=".video-item {\n  margin-top: 10px;\n}\n"},414:function(t,e){t.exports='<h1>DashboardComponent</h1>\n<video-item *ngFor="let video of videos" [video]="video"></video-item>\n'},415:function(t,e){t.exports="[class*='col-'] {\n  float: left;\n}\n*, *:after, *:before {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\n[class*='col-'] {\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n    padding: 20px;\n    text-align: center;\n    color: #eee;\n    max-height: 120px;\n    min-width: 120px;\n    background-color: #607D8B;\n    border-radius: 2px;\n}\nh4 {\n  position: relative;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n    .module {\n      font-size: 10px;\n      max-height: 75px; }\n}\n@media (max-width: 1024px) {\n    .grid {\n      margin: 0;\n    }\n    .module {\n      min-width: 60px;\n    }\n}\n"},416:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=n(5),a=n(347),c=n(397),s=n(406),d=function(){function t(t,e,n){this.route=t,this.authService=e,this.videosService=n}return t.prototype.ngOnInit=function(){var t=this;this.paramsObservable=this.route.params.subscribe(function(e){var n=e.id;t.videosService.getVideo(n).subscribe(function(e){t.video=e})})},t.prototype.ngOnDestroy=function(){console.log("@@@@"),this.paramsObservable.unsubscribe()},t=o([r.Component({selector:"video-detail",template:n(417),styles:[n(418)]}),i("design:paramtypes",[a.ActivatedRoute,c.AuthService,s.VideosService])],t)}();e.VideoDetailComponent=d},417:function(t,e){t.exports='<div class="video-detail" *ngIf="video">\n    <h4>{{video.id}}</h4>\n    <h1>{{video.name}}</h1>\n    <h3>{{video.url}}</h3>\n    <p>\n        {{video.description}}\n    </p>\n    <video autoplay width="320" height="240" controls>\n      <source [src]="video.url" type="video/mp4">\n    </video>\n    <!-- <ul>\n        <li *ngFor="let rating of video.ratings">{{rating}}</li>\n    </ul> -->\n</div>\n'},418:function(t,e){t.exports=".video-detail {\n  border: 1px solid red;\n  margin: 3px;\n}\n"},419:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=n(5),a=n(347);n(420);var c=n(406),s=function(){function t(){this.title="Tour of Heroes"}return t=o([r.Component({selector:"my-app",template:n(424),styles:[n(425)],directives:[a.ROUTER_DIRECTIVES],providers:[c.VideosService]}),i("design:paramtypes",[])],t)}();e.AppComponent=s},420:function(t,e){},424:function(t,e){t.exports='<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">\n    <header class="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">\n        <div class="mdl-layout--large-screen-only mdl-layout__header-row">\n            <h3>Name &amp; Title</h3>\n            <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent" id="add">\n                <i class="material-icons" role="presentation">add</i>\n            </button>\n        </div>\n    </header>\n    <main class="mdl-layout__content">\n      <router-outlet></router-outlet>\n    </main>\n</div>\n'},425:function(t,e){t.exports="h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.router-link-active {\n  color: #039be5;\n}\n"}});
//# sourceMappingURL=app.5a5a482ba415705b4586.js.map