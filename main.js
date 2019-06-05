(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/adelaide/adelaide.component.css":
/*!*************************************************!*\
  !*** ./src/app/adelaide/adelaide.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZWxhaWRlL2FkZWxhaWRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/adelaide/adelaide.component.html":
/*!**************************************************!*\
  !*** ./src/app/adelaide/adelaide.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"text-center\">Detail of your favorite team</h1>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Id</th>\n        <th scope=\"col\">Team</th>\n        <th scope=\"col\">Logo</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>1</td>\n        <td>Adelaide</td>\n        <td><img src=\"https://squiggle.com.au/wp-content/themes/squiggle/assets/images/Adelaide.jpg\" alt=\"\"></td>\n      </tr>\n    </tbody>\n  </table>\n\n  <br>\n  <br>\n  <h2>Choosing options below to explore your favorite team</h2>\n  <br>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Prediction</th>\n        <th scope=\"col\">Result</th>\n        <th scope=\"col\">Find match</th>\n        <th scope=\"col\">Head to Head</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Predict</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Show</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Find</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">H2H</button></td>\n\n      </tr>\n    </tbody>\n  </table>\n\n  <br>\n  <br>\n  <br>\n  <div class=\"row \">\n    <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n      <img src=\"https://upload.wikimedia.org/wikipedia/commons/b/bf/Taylor_Walker_2017.jpg\" class=\"card-img-top\" alt=\"\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Taylor Walker (Captain)</p>\n        <p>Born : April 25, 1990 (29 years old), Broken Hill\n          <br> Height : 1.94 m\n          <br> Weight : 98 kg</p>\n      </div>\n    </div>\n    <div class=\"card col-sm-4 text-white bg-secondary mb-3\" style=\"width: 18rem;\">\n      <img src=\"https://upload.wikimedia.org/wikipedia/commons/e/ee/Rory_Sloane_2017.2.jpg\" class=\"card-img-top\" alt=\"\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Rory Sloane</p>\n        <p>Born : March 17, 1990 (29 years), Melbourne\n          <br> Height : 1.83 m\n          <br> Weight : 79 kg</p>\n      </div>\n    </div>\n    <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n      <img src=\"https://upload.wikimedia.org/wikipedia/commons/3/3a/Josh_Jenkins_24.02.17.jpg\" class=\"card-img-top\"\n        alt=\"\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Rory Sloane</p>\n        <p>Born : February 8, 1989 (30 years old), Victoria\n          <br> Height : 1.83 m\n          <br> Weight : 79 kg</p>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/adelaide/adelaide.component.ts":
/*!************************************************!*\
  !*** ./src/app/adelaide/adelaide.component.ts ***!
  \************************************************/
/*! exports provided: AdelaideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdelaideComponent", function() { return AdelaideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdelaideComponent = /** @class */ (function () {
    function AdelaideComponent() {
    }
    AdelaideComponent.prototype.ngOnInit = function () {
    };
    AdelaideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adelaide',
            template: __webpack_require__(/*! ./adelaide.component.html */ "./src/app/adelaide/adelaide.component.html"),
            styles: [__webpack_require__(/*! ./adelaide.component.css */ "./src/app/adelaide/adelaide.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdelaideComponent);
    return AdelaideComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html lang=\"en\">\n\n<head>\n\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n\n  <!-- Bootstrap CSS -->\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n    integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\"\n    integrity=\"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay\" crossorigin=\"anonymous\">\n</head>\n\n<body>\n  <!-- Icon NavBar-->\n\n  <!-- NavBar-->\n\n<nav class=\"navbar navbar-expand-sm navbar-dark\" style=\"background-color: navy;\">\n  <a class=\"navbar-brand active\" href=\"#\" style=\"color: red\" routerLink=\"home\"><i class=\"fas fa-football-ball\"></i> HOME</a>\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\"\n    aria-controls=\"collapsibleNavId\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"></button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"hometeams\">Team</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"schedule\">Schedule</a>\n        </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"prediction\">Prediction</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n  <br>\n  \n  \n  <!-- Schedule home page-->\n\n  <router-outlet></router-outlet>\n\n\n\n  <!-- Optional JavaScript -->\n  <!-- jQuery first, then Popper.js, then Bootstrap JS -->\n  <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"\n    integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"\n    integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"\n    integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\"\n    crossorigin=\"anonymous\"></script>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Assignemnt';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _adelaide_adelaide_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./adelaide/adelaide.component */ "./src/app/adelaide/adelaide.component.ts");
/* harmony import */ var _brisbane_brisbane_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./brisbane/brisbane.component */ "./src/app/brisbane/brisbane.component.ts");
/* harmony import */ var _carlton_carlton_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./carlton/carlton.component */ "./src/app/carlton/carlton.component.ts");
/* harmony import */ var _collingwood_collingwood_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./collingwood/collingwood.component */ "./src/app/collingwood/collingwood.component.ts");
/* harmony import */ var _essendon_essendon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./essendon/essendon.component */ "./src/app/essendon/essendon.component.ts");
/* harmony import */ var _fremantle_fremantle_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fremantle/fremantle.component */ "./src/app/fremantle/fremantle.component.ts");
/* harmony import */ var _geelong_geelong_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./geelong/geelong.component */ "./src/app/geelong/geelong.component.ts");
/* harmony import */ var _goldcoast_goldcoast_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./goldcoast/goldcoast.component */ "./src/app/goldcoast/goldcoast.component.ts");
/* harmony import */ var _sydney_sydney_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sydney/sydney.component */ "./src/app/sydney/sydney.component.ts");
/* harmony import */ var _hawthorn_hawthorn_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./hawthorn/hawthorn.component */ "./src/app/hawthorn/hawthorn.component.ts");
/* harmony import */ var _melbourne_melbourne_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./melbourne/melbourne.component */ "./src/app/melbourne/melbourne.component.ts");
/* harmony import */ var _northmelbourne_northmelbourne_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./northmelbourne/northmelbourne.component */ "./src/app/northmelbourne/northmelbourne.component.ts");
/* harmony import */ var _portadelaide_portadelaide_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./portadelaide/portadelaide.component */ "./src/app/portadelaide/portadelaide.component.ts");
/* harmony import */ var _richmond_richmond_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./richmond/richmond.component */ "./src/app/richmond/richmond.component.ts");
/* harmony import */ var _stkilda_stkilda_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./stkilda/stkilda.component */ "./src/app/stkilda/stkilda.component.ts");
/* harmony import */ var _greatersydney_greatersydney_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./greatersydney/greatersydney.component */ "./src/app/greatersydney/greatersydney.component.ts");
/* harmony import */ var _westcoast_westcoast_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./westcoast/westcoast.component */ "./src/app/westcoast/westcoast.component.ts");
/* harmony import */ var _westernbulldogs_westernbulldogs_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./westernbulldogs/westernbulldogs.component */ "./src/app/westernbulldogs/westernbulldogs.component.ts");
/* harmony import */ var _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./prediction/prediction.component */ "./src/app/prediction/prediction.component.ts");






























var routesConfig = [
    { path: 'hometeams', component: _teams_teams_component__WEBPACK_IMPORTED_MODULE_7__["TeamsComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'schedule', component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_10__["ScheduleComponent"] },
    { path: 'adelaide', component: _adelaide_adelaide_component__WEBPACK_IMPORTED_MODULE_11__["AdelaideComponent"] },
    { path: 'brisbane', component: _brisbane_brisbane_component__WEBPACK_IMPORTED_MODULE_12__["BrisbaneComponent"] },
    { path: 'carlton', component: _carlton_carlton_component__WEBPACK_IMPORTED_MODULE_13__["CarltonComponent"] },
    { path: 'collingwood', component: _collingwood_collingwood_component__WEBPACK_IMPORTED_MODULE_14__["CollingwoodComponent"] },
    { path: 'essendon', component: _essendon_essendon_component__WEBPACK_IMPORTED_MODULE_15__["EssendonComponent"] },
    { path: 'fremantle', component: _fremantle_fremantle_component__WEBPACK_IMPORTED_MODULE_16__["FremantleComponent"] },
    { path: 'geelong', component: _geelong_geelong_component__WEBPACK_IMPORTED_MODULE_17__["GeelongComponent"] },
    { path: 'goldcoast', component: _goldcoast_goldcoast_component__WEBPACK_IMPORTED_MODULE_18__["GoldcoastComponent"] },
    { path: 'greatersydney', component: _greatersydney_greatersydney_component__WEBPACK_IMPORTED_MODULE_26__["GreatersydneyComponent"] },
    { path: 'hawthorn', component: _hawthorn_hawthorn_component__WEBPACK_IMPORTED_MODULE_20__["HawthornComponent"] },
    { path: 'melbourne', component: _melbourne_melbourne_component__WEBPACK_IMPORTED_MODULE_21__["MelbourneComponent"] },
    { path: 'northmelbourne', component: _northmelbourne_northmelbourne_component__WEBPACK_IMPORTED_MODULE_22__["NorthmelbourneComponent"] },
    { path: 'portadelaide', component: _portadelaide_portadelaide_component__WEBPACK_IMPORTED_MODULE_23__["PortadelaideComponent"] },
    { path: 'richmond', component: _richmond_richmond_component__WEBPACK_IMPORTED_MODULE_24__["RichmondComponent"] },
    { path: 'sydney', component: _sydney_sydney_component__WEBPACK_IMPORTED_MODULE_19__["SydneyComponent"] },
    { path: 'stkilda', component: _stkilda_stkilda_component__WEBPACK_IMPORTED_MODULE_25__["StkildaComponent"] },
    { path: 'westcoast', component: _westcoast_westcoast_component__WEBPACK_IMPORTED_MODULE_27__["WestcoastComponent"] },
    { path: 'westernbulldogs', component: _westernbulldogs_westernbulldogs_component__WEBPACK_IMPORTED_MODULE_28__["WesternbulldogsComponent"] },
    { path: 'prediction', component: _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_29__["PredictionComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _teams_teams_component__WEBPACK_IMPORTED_MODULE_7__["TeamsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_10__["ScheduleComponent"],
                _adelaide_adelaide_component__WEBPACK_IMPORTED_MODULE_11__["AdelaideComponent"],
                _brisbane_brisbane_component__WEBPACK_IMPORTED_MODULE_12__["BrisbaneComponent"],
                _carlton_carlton_component__WEBPACK_IMPORTED_MODULE_13__["CarltonComponent"],
                _collingwood_collingwood_component__WEBPACK_IMPORTED_MODULE_14__["CollingwoodComponent"],
                _essendon_essendon_component__WEBPACK_IMPORTED_MODULE_15__["EssendonComponent"],
                _fremantle_fremantle_component__WEBPACK_IMPORTED_MODULE_16__["FremantleComponent"],
                _geelong_geelong_component__WEBPACK_IMPORTED_MODULE_17__["GeelongComponent"],
                _goldcoast_goldcoast_component__WEBPACK_IMPORTED_MODULE_18__["GoldcoastComponent"],
                _sydney_sydney_component__WEBPACK_IMPORTED_MODULE_19__["SydneyComponent"],
                _hawthorn_hawthorn_component__WEBPACK_IMPORTED_MODULE_20__["HawthornComponent"],
                _melbourne_melbourne_component__WEBPACK_IMPORTED_MODULE_21__["MelbourneComponent"],
                _northmelbourne_northmelbourne_component__WEBPACK_IMPORTED_MODULE_22__["NorthmelbourneComponent"],
                _portadelaide_portadelaide_component__WEBPACK_IMPORTED_MODULE_23__["PortadelaideComponent"],
                _richmond_richmond_component__WEBPACK_IMPORTED_MODULE_24__["RichmondComponent"],
                _stkilda_stkilda_component__WEBPACK_IMPORTED_MODULE_25__["StkildaComponent"],
                _greatersydney_greatersydney_component__WEBPACK_IMPORTED_MODULE_26__["GreatersydneyComponent"],
                _westcoast_westcoast_component__WEBPACK_IMPORTED_MODULE_27__["WestcoastComponent"],
                _westernbulldogs_westernbulldogs_component__WEBPACK_IMPORTED_MODULE_28__["WesternbulldogsComponent"],
                _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_29__["PredictionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routesConfig)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/brisbane/brisbane.component.css":
/*!*************************************************!*\
  !*** ./src/app/brisbane/brisbane.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyaXNiYW5lL2JyaXNiYW5lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/brisbane/brisbane.component.html":
/*!**************************************************!*\
  !*** ./src/app/brisbane/brisbane.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"text-center\">Detail of your favorite team</h1>\n    <table class=\"table table-responsive-lg table-bordered text-center\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Team</th>\n          <th scope=\"col\">Logo</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>2</td>\n          <td>Brisbane</td>\n          <td><img src=\"https://squiggle.com.au/wp-content/themes/squiggle/assets/images/Brisbane.jpg\" alt=\"\"></td>\n        </tr>\n      </tbody>\n    </table>\n  \n  <br>\n  <br>\n  <h2>Choosing options below to explore your favorite team</h2>\n  <br>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Prediction</th>\n        <th scope=\"col\">Result</th>\n        <th scope=\"col\">Find match</th>\n        <th scope=\"col\">Head to Head</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Predict</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Show</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Find</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">H2H</button></td>\n  \n      </tr>\n    </tbody>\n  </table>\n  \n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n    <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n      <img src=\"https://auctiondesq.sportstg.com/assets/auctiondesq/lots/images/main/20140422041048ZORKO_Dayne.jpg\" class=\"card-img-top\" alt=\"\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Dayne Zorko (Captain)</p>\n        <p>Born : February 9, 1989 (30 years old), Gold Coast\n          <br> Height : 1.75 m\n          <br> Weight : 76 kg</p>\n      </div>\n    </div>\n    <div class=\"card col-sm-4 text-white bg-secondary mb-3\" style=\"width: 18rem;\">\n      <img src=\"https://d2nzqyyfd6k6c7.cloudfront.net/styles/nova_wysiwyg_body__1400px_/s3/rockliff-portrait.jpg?itok=UsDd8m47\" class=\"card-img-top\" alt=\"\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Tom Rockliff</p>\n        <p>Born : February 22, 1990 (29 years old), Benalla\n          <br> Height : 1.83 m\n          <br> Weight : 83 kg</p>\n      </div>\n    </div>\n    <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n        <img src=\"http://www.aflplayers.com.au/wp-content/uploads/2015/01/AA140416GI0063-e1471597113342-760x438.jpg\" class=\"card-img-top\" alt=\"\">\n        <div class=\"card-body\">\n          <p class=\"card-text\">Harris Andrews</p>\n          <p>Born : December 11, 1996 (22 years), Melbourne\n            <br> Height : 1.83 m\n            <br> Weight : 79 kg</p>\n        </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/brisbane/brisbane.component.ts":
/*!************************************************!*\
  !*** ./src/app/brisbane/brisbane.component.ts ***!
  \************************************************/
/*! exports provided: BrisbaneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrisbaneComponent", function() { return BrisbaneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BrisbaneComponent = /** @class */ (function () {
    function BrisbaneComponent() {
    }
    BrisbaneComponent.prototype.ngOnInit = function () {
    };
    BrisbaneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brisbane',
            template: __webpack_require__(/*! ./brisbane.component.html */ "./src/app/brisbane/brisbane.component.html"),
            styles: [__webpack_require__(/*! ./brisbane.component.css */ "./src/app/brisbane/brisbane.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BrisbaneComponent);
    return BrisbaneComponent;
}());



/***/ }),

/***/ "./src/app/carlton/carlton.component.css":
/*!***********************************************!*\
  !*** ./src/app/carlton/carlton.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhcmx0b24vY2FybHRvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/carlton/carlton.component.html":
/*!************************************************!*\
  !*** ./src/app/carlton/carlton.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"text-center\">Detail of your favorite team</h1>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Id</th>\n        <th scope=\"col\">Team</th>\n        <th scope=\"col\">Logo</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>3</td>\n        <td>Carlton</td>\n        <td><img src=\"https://squiggle.com.au/wp-content/themes/squiggle/assets/images/Carlton.jpg\" alt=\"\"></td>\n      </tr>\n    </tbody>\n  </table>\n\n  <br>\n  <br>\n  <h2>Choosing options below to explore your favorite team</h2>\n  <br>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Prediction</th>\n        <th scope=\"col\">Result</th>\n        <th scope=\"col\">Find match</th>\n        <th scope=\"col\">Head to Head</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Predict</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Show</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Find</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">H2H</button></td>\n\n      </tr>\n    </tbody>\n  </table>\n\n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n    <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n      <img src=\"https://cdn.newsapi.com.au/image/v1/3297a4a6f3fb7be969d33a615f0ccb35?width=316\" class=\"card-img-top\"\n        alt=\"\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Jack Silvagni</p>\n        <p>Born : December 17, 1997 (21 years old), Melbourne\n          <br> Height : 1.91 m\n          <br> Weight : 89 kg</p>\n      </div>\n    </div>\n    <div class=\"card col-sm-4 text-white bg-secondary  mb-3\" style=\"width: 18rem;\">\n      <img\n        src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Paddy_Dow_2018.4.jpg/220px-Paddy_Dow_2018.4.jpg\"\n        class=\"card-img-top\" alt=\"\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Paddy Dow</p>\n        <p>Born : October 16, 1999 (age 19), Swan Hill\n          <br> Height : 1.83 m\n          <br> Weight : 83 kg</p>\n      </div>\n    </div>\n    <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n      <img\n        src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Marc_Murphy_2017.6.jpg/200px-Marc_Murphy_2017.6.jpg\"\n        class=\"card-img-top\" alt=\"\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Marc Murphy</p>\n        <p>Born : December 11, 1996 (22 years), Melbourne\n          <br> Height : 1.8 m\n          <br> Weight : 80 kg</p>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/carlton/carlton.component.ts":
/*!**********************************************!*\
  !*** ./src/app/carlton/carlton.component.ts ***!
  \**********************************************/
/*! exports provided: CarltonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarltonComponent", function() { return CarltonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarltonComponent = /** @class */ (function () {
    function CarltonComponent() {
    }
    CarltonComponent.prototype.ngOnInit = function () {
    };
    CarltonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carlton',
            template: __webpack_require__(/*! ./carlton.component.html */ "./src/app/carlton/carlton.component.html"),
            styles: [__webpack_require__(/*! ./carlton.component.css */ "./src/app/carlton/carlton.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CarltonComponent);
    return CarltonComponent;
}());



/***/ }),

/***/ "./src/app/collingwood/collingwood.component.css":
/*!*******************************************************!*\
  !*** ./src/app/collingwood/collingwood.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxpbmd3b29kL2NvbGxpbmd3b29kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/collingwood/collingwood.component.html":
/*!********************************************************!*\
  !*** ./src/app/collingwood/collingwood.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"text-center\">Detail of your favorite team</h1>\n    <table class=\"table table-responsive-lg table-bordered text-center\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Team</th>\n          <th scope=\"col\">Logo</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>4</td>\n          <td>Collingwood</td>\n          <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Collingwood.jpg\" alt=\"\"></td>\n        </tr>\n      </tbody>\n    </table>\n  \n  <br>\n  <br>\n  <h2>Choosing options below to explore your favorite team</h2>\n  <br>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Prediction</th>\n        <th scope=\"col\">Result</th>\n        <th scope=\"col\">Find match</th>\n        <th scope=\"col\">Head to Head</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Predict</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Show</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Find</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">H2H</button></td>\n  \n      </tr>\n    </tbody>\n  </table>\n  \n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n      <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://s.afl.com.au/staticfile/Samples/561500-tlslargeportrait.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Jaidyn Stephenson</p>\n            <p>January 15, 1999 (20 years old)\n              <br> Height : 1.85 m\n              <br> Weight : 78 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-secondary  mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/e/ee/Rory_Sloane_2017.2.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Jordan De Goey </p>\n            <p>Born : March 15, 1996 (23 years old)\n              <br> Height : 1.83 m\n              <br> Weight : 79 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n            <img src=\"https://upload.wikimedia.org/wikipedia/commons/3/3a/Josh_Jenkins_24.02.17.jpg\" class=\"card-img-top\" alt=\"\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Rory Sloane</p>\n              <p>Born : February 8, 1989 (30 years old), Victoria\n                <br> Height : 1.83 m\n                <br> Weight : 79 kg</p>\n            </div>\n  </div>"

/***/ }),

/***/ "./src/app/collingwood/collingwood.component.ts":
/*!******************************************************!*\
  !*** ./src/app/collingwood/collingwood.component.ts ***!
  \******************************************************/
/*! exports provided: CollingwoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollingwoodComponent", function() { return CollingwoodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CollingwoodComponent = /** @class */ (function () {
    function CollingwoodComponent() {
    }
    CollingwoodComponent.prototype.ngOnInit = function () {
    };
    CollingwoodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-collingwood',
            template: __webpack_require__(/*! ./collingwood.component.html */ "./src/app/collingwood/collingwood.component.html"),
            styles: [__webpack_require__(/*! ./collingwood.component.css */ "./src/app/collingwood/collingwood.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CollingwoodComponent);
    return CollingwoodComponent;
}());



/***/ }),

/***/ "./src/app/data-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/data-service.service.ts ***!
  \*****************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team */ "./src/app/team.ts");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game */ "./src/app/game.ts");
/* harmony import */ var _ladder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ladder */ "./src/app/ladder.ts");
/* harmony import */ var _tip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tip */ "./src/app/tip.ts");








var DataServiceService = /** @class */ (function () {
    function DataServiceService(http) {
        this.http = http;
    }
    DataServiceService.prototype.getLadders = function () {
        return this.http.get('https://api.squiggle.com.au/?q=ladder;year=2019;round=11;source=17').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.ladder.map(function (item) { return new _ladder__WEBPACK_IMPORTED_MODULE_6__["Ladder"](item.team, item.mean_rank, item.percentage, item.wins, item.year, item.updated, item.swarms, item.teamid, item.round, item.rank, item.sourceid, item.source); }); }));
    };
    DataServiceService.prototype.getTeams = function () {
        return this.http.get('https://api.squiggle.com.au/?q=teams').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.teams.map(function (item) { return new _team__WEBPACK_IMPORTED_MODULE_4__["Team"](item.logo, item.id, item.name, item.abbrev); }); }));
    };
    DataServiceService.prototype.getGames = function () {
        return this.http.get('https://api.squiggle.com.au/?q=games;year=2019;round=12').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.games.map(function (item) { return new _game__WEBPACK_IMPORTED_MODULE_5__["Game"](item.complete, item.is_grand_final, item.tz, item.hbehinds, item.ateam, item.winnerteamid, item.hgoals, item.updated, item.round, item.is_final, item.hscore, item.abehinds, item.winner, item.ascore, item.hteam, item.ateamid, item.venue, item.hteamid, item.agoals, item.year, item.date, item.id); }); }));
    };
    DataServiceService.prototype.getGames2 = function () {
        return this.http.get('https://api.squiggle.com.au/?q=games;complete=0').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.games.map(function (item) { return new _game__WEBPACK_IMPORTED_MODULE_5__["Game"](item.complete, item.is_grand_final, item.tz, item.hbehinds, item.ateam, item.winnerteamid, item.hgoals, item.updated, item.round, item.is_final, item.hscore, item.abehinds, item.winner, item.ascore, item.hteam, item.ateamid, item.venue, item.hteamid, item.agoals, item.year, item.date, item.id); }); }));
    };
    DataServiceService.prototype.getTips = function () {
        return this.http.get('https://api.squiggle.com.au/?q=tips;year=2019;source=1;complete=0').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.tips.map(function (item) { return new _tip__WEBPACK_IMPORTED_MODULE_7__["Tip"](item.confidence, item.bits, item.gameid, item.ateamid, item.venue, item.year, item.correct, item.date, item.updated, item.hteam, item.tipteamid, item.margin, item.err, item.tip, item.ateam, item.source, item.sourceid, item.hconfidence, item.hteamid, item.round); }); }));
    };
    DataServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DataServiceService);
    return DataServiceService;
}());



/***/ }),

/***/ "./src/app/essendon/essendon.component.css":
/*!*************************************************!*\
  !*** ./src/app/essendon/essendon.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vzc2VuZG9uL2Vzc2VuZG9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/essendon/essendon.component.html":
/*!**************************************************!*\
  !*** ./src/app/essendon/essendon.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"text-center\">Detail of your favorite team</h1>\n    <table class=\"table table-responsive-lg table-bordered text-center\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Team</th>\n          <th scope=\"col\">Logo</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>5</td>\n          <td>Essendon</td>\n          <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Essendon.png\" alt=\"\"></td>\n        </tr>\n      </tbody>\n    </table>\n  \n  <br>\n  <br>\n  <h2>Choosing options below to explore your favorite team</h2>\n  <br>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Prediction</th>\n        <th scope=\"col\">Result</th>\n        <th scope=\"col\">Find match</th>\n        <th scope=\"col\">Head to Head</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Predict</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Show</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Find</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">H2H</button></td>\n  \n      </tr>\n    </tbody>\n  </table>\n  \n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n      <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://pbs.twimg.com/profile_images/810659652417437697/Pr7C9mYx_400x400.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Andrew McGrath</p>\n            <p>June 2, 1998 (21 years), Mississauga, Canada\n              <br> Height : 1.78 m\n              <br> Weight : 80 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-secondary mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d9/Tom_Bellchambers_2017.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Tom Bellchambers  </p>\n            <p>July 9, 1989 (29 years), Launceston\n              <br> Height : 2 m\n              <br> Weight : 100 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n            <img src=\"https://s.afl.com.au/staticfile/Samples/507135-tlslargeportrait.jpg\" class=\"card-img-top\" alt=\"\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Darcy Parish</p>\n              <p>Born : July 25, 1997 (21 years old), \n                <br> Height : 1.83 m\n                <br> Weight : 79 kg</p>\n            </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/essendon/essendon.component.ts":
/*!************************************************!*\
  !*** ./src/app/essendon/essendon.component.ts ***!
  \************************************************/
/*! exports provided: EssendonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssendonComponent", function() { return EssendonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EssendonComponent = /** @class */ (function () {
    function EssendonComponent() {
    }
    EssendonComponent.prototype.ngOnInit = function () {
    };
    EssendonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-essendon',
            template: __webpack_require__(/*! ./essendon.component.html */ "./src/app/essendon/essendon.component.html"),
            styles: [__webpack_require__(/*! ./essendon.component.css */ "./src/app/essendon/essendon.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EssendonComponent);
    return EssendonComponent;
}());



/***/ }),

/***/ "./src/app/fremantle/fremantle.component.css":
/*!***************************************************!*\
  !*** ./src/app/fremantle/fremantle.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyZW1hbnRsZS9mcmVtYW50bGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/fremantle/fremantle.component.html":
/*!****************************************************!*\
  !*** ./src/app/fremantle/fremantle.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"text-center\">Detail of your favorite team</h1>\n    <table class=\"table table-responsive-lg table-bordered text-center\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Team</th>\n          <th scope=\"col\">Logo</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>6</td>\n          <td>Fremantle</td>\n          <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Essendon.png\" alt=\"\"></td>\n        </tr>\n      </tbody>\n    </table>\n  \n  <br>\n  <br>\n  <h2>Choosing options below to explore your favorite team</h2>\n  <br>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Prediction</th>\n        <th scope=\"col\">Result</th>\n        <th scope=\"col\">Find match</th>\n        <th scope=\"col\">Head to Head</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Predict</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Show</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Find</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">H2H</button></td>\n  \n      </tr>\n    </tbody>\n  </table>\n  \n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n      <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://s.afl.com.au/staticfile/Samples/543498-tlslargeportrait.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Nat Fyfe</p>\n            <p>September 18, 1991 (27 years), Western Australia\n              <br> Height : 1.9 m\n              <br> Weight : 88 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-secondary mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://www.fringefeed.com.au/app/uploads/timber/dd30149ab41bf80f4f90d3f4b840be0d-1600x1200-c-center.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Michael Walters  </p>\n            <p> January 7, 1991 (28 years), Western Australia\n              <br> Height : 1.77 m\n              <br> Weight : 76 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n            <img src=\"https://s.afl.com.au/staticfile/Samples/507135-tlslargeportrait.jpg\" class=\"card-img-top\" alt=\"\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Alex Pearce</p>\n              <p>Born : June 9, 1995 (age 23) \n                <br> Height : 1.97 m\n                <br> Weight : 82 kg</p>\n            </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/fremantle/fremantle.component.ts":
/*!**************************************************!*\
  !*** ./src/app/fremantle/fremantle.component.ts ***!
  \**************************************************/
/*! exports provided: FremantleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FremantleComponent", function() { return FremantleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FremantleComponent = /** @class */ (function () {
    function FremantleComponent() {
    }
    FremantleComponent.prototype.ngOnInit = function () {
    };
    FremantleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fremantle',
            template: __webpack_require__(/*! ./fremantle.component.html */ "./src/app/fremantle/fremantle.component.html"),
            styles: [__webpack_require__(/*! ./fremantle.component.css */ "./src/app/fremantle/fremantle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FremantleComponent);
    return FremantleComponent;
}());



/***/ }),

/***/ "./src/app/game.ts":
/*!*************************!*\
  !*** ./src/app/game.ts ***!
  \*************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
var Game = /** @class */ (function () {
    function Game(complete, is_grand_final, tz, hbehinds, ateam, winnerteamid, hgoals, updated, round, is_final, hscore, abehinds, winner, ascore, hteam, ateamid, venue, hteamid, agoals, year, date, id) {
        this.complete = complete;
        this.is_grand_final = is_grand_final;
        this.tz = tz;
        this.hbehinds = hbehinds;
        this.ateam = ateam;
        this.winnerteamid = winnerteamid;
        this.hgoals = hgoals;
        this.updated = updated;
        this.round = round;
        this.is_final = is_final;
        this.hscore = hscore;
        this.abehinds = abehinds;
        this.winner = winner;
        this.ascore = ascore;
        this.hteam = hteam;
        this.ateamid = ateamid;
        this.venue = venue;
        this.hteamid = hteamid;
        this.agoals = agoals;
        this.year = year;
        this.date = date;
        this.id = id;
    }
    return Game;
}());



/***/ }),

/***/ "./src/app/geelong/geelong.component.css":
/*!***********************************************!*\
  !*** ./src/app/geelong/geelong.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlZWxvbmcvZ2VlbG9uZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/geelong/geelong.component.html":
/*!************************************************!*\
  !*** ./src/app/geelong/geelong.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"text-center\">Detail of your favorite team</h1>\n    <table class=\"table table-responsive-lg table-bordered text-center\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Team</th>\n          <th scope=\"col\">Logo</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>7</td>\n          <td>Geelong</td>\n          <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Geelong.jpg\" alt=\"\"></td>\n        </tr>\n      </tbody>\n    </table>\n  \n  <br>\n  <br>\n  <h2>Choosing options below to explore your favorite team</h2>\n  <br>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Prediction</th>\n        <th scope=\"col\">Result</th>\n        <th scope=\"col\">Find match</th>\n        <th scope=\"col\">Head to Head</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Predict</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Show</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Find</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">H2H</button></td>\n  \n      </tr>\n    </tbody>\n  </table>\n  \n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n      <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://s.afl.com.au/staticfile/Samples/550563-tlslargeportrait.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Patrick Dangerfield</p>\n            <p>April 5, 1990 (29 years old), Moggs Creek\n              <br> Height : 1.89 m\n              <br> Weight : 91 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-secondary mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://www.fringefeed.com.au/app/uploads/timber/dd30149ab41bf80f4f90d3f4b840be0d-1600x1200-c-center.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Tom Hawkins  </p>\n            <p> January 7, 1991 (28 years), Western Australia\n              <br> Height : 1.77 m\n              <br> Weight : 76 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n            <img src=\"http://www.aflbetting.com.au/wp-content/uploads/2015/03/381564-joel-selwood.jpg\" class=\"card-img-top\" alt=\"\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Joel Selwood</p>\n              <p>Born :  May 26, 1988 (31 years), Bendigo\n                <br> Height : 1.82 m\n                <br> Weight : 86 kg</p>\n            </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/geelong/geelong.component.ts":
/*!**********************************************!*\
  !*** ./src/app/geelong/geelong.component.ts ***!
  \**********************************************/
/*! exports provided: GeelongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeelongComponent", function() { return GeelongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GeelongComponent = /** @class */ (function () {
    function GeelongComponent() {
    }
    GeelongComponent.prototype.ngOnInit = function () {
    };
    GeelongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-geelong',
            template: __webpack_require__(/*! ./geelong.component.html */ "./src/app/geelong/geelong.component.html"),
            styles: [__webpack_require__(/*! ./geelong.component.css */ "./src/app/geelong/geelong.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeelongComponent);
    return GeelongComponent;
}());



/***/ }),

/***/ "./src/app/goldcoast/goldcoast.component.css":
/*!***************************************************!*\
  !*** ./src/app/goldcoast/goldcoast.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvbGRjb2FzdC9nb2xkY29hc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/goldcoast/goldcoast.component.html":
/*!****************************************************!*\
  !*** ./src/app/goldcoast/goldcoast.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"text-center\">Detail of your favorite team</h1>\n    <table class=\"table table-responsive-lg table-bordered text-center\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Team</th>\n          <th scope=\"col\">Logo</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>8</td>\n          <td>Gold Coast</td>\n          <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/GoldCoast.jpg\" alt=\"\"></td>\n        </tr>\n      </tbody>\n    </table>\n  \n  <br>\n  <br>\n  <h2>Choosing options below to explore your favorite team</h2>\n  <br>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Prediction</th>\n        <th scope=\"col\">Result</th>\n        <th scope=\"col\">Find match</th>\n        <th scope=\"col\">Head to Head</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Predict</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Show</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Find</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">H2H</button></td>\n  \n      </tr>\n    </tbody>\n  </table>\n  \n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n      <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://s.afl.com.au/staticfile/Samples/569902-tlslargeportrait.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Pearce Hanley</p>\n            <p>November 15, 1988 (30 years old), Ireland\n              <br> Height : 1.85 m\n              <br> Weight : 85 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-secondary mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Anthony_Miles_26.03.18.jpg/220px-Anthony_Miles_26.03.18.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Anthony Miles  </p>\n            <p>  February 28, 1992 (27 years), Albury\n              <br> Height : 1.81 m\n              <br> Weight : 77 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n            <img src=\"https://www.aflq.com.au/wp-content/uploads/2015/02/0704_keays_01.jpg\" class=\"card-img-top\" alt=\"\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Jack Bowes</p>\n              <p>Born :  May 26, 1988 (31 years), Bendigo\n                <br> Height : 1.82 m\n                <br> Weight : 86 kg</p>\n            </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/goldcoast/goldcoast.component.ts":
/*!**************************************************!*\
  !*** ./src/app/goldcoast/goldcoast.component.ts ***!
  \**************************************************/
/*! exports provided: GoldcoastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoldcoastComponent", function() { return GoldcoastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoldcoastComponent = /** @class */ (function () {
    function GoldcoastComponent() {
    }
    GoldcoastComponent.prototype.ngOnInit = function () {
    };
    GoldcoastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-goldcoast',
            template: __webpack_require__(/*! ./goldcoast.component.html */ "./src/app/goldcoast/goldcoast.component.html"),
            styles: [__webpack_require__(/*! ./goldcoast.component.css */ "./src/app/goldcoast/goldcoast.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GoldcoastComponent);
    return GoldcoastComponent;
}());



/***/ }),

/***/ "./src/app/greatersydney/greatersydney.component.css":
/*!***********************************************************!*\
  !*** ./src/app/greatersydney/greatersydney.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyZWF0ZXJzeWRuZXkvZ3JlYXRlcnN5ZG5leS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/greatersydney/greatersydney.component.html":
/*!************************************************************!*\
  !*** ./src/app/greatersydney/greatersydney.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"text-center\">Detail of your favorite team</h1>\n    <table class=\"table table-responsive-lg table-bordered text-center\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Team</th>\n          <th scope=\"col\">Logo</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>9</td>\n          <td>Greater Western Sydney</td>\n          <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Giants.png\" alt=\"\"></td>\n        </tr>\n      </tbody>\n    </table>\n  \n  <br>\n  <br>\n  <h2>Choosing options below to explore your favorite team</h2>\n  <br>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Prediction</th>\n        <th scope=\"col\">Result</th>\n        <th scope=\"col\">Find match</th>\n        <th scope=\"col\">Head to Head</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Predict</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Show</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Find</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">H2H</button></td>\n  \n      </tr>\n    </tbody>\n  </table>\n  \n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n      <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://pbs.twimg.com/profile_images/1006395299261177856/R64WBdlN_400x400.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\"> Phil Davis</p>\n            <p>Born: August 30, 1990 (28 years), Can-be-out\n              <br> Height : 1.97 m\n              <br> Weight : 94 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-secondary mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://s.afl.com.au/staticfile/AFL%20Tenant/GWSGiants/Images/news%20images/SLIDER-POCKETPROFILEHOPPER.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Jacob Hopper </p>\n            <p>  Born: February 28, 1992 (27 years), Albury\n              <br> Height : 1.87 m\n              <br> Weight : 87 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n            <img src=\"https://s.afl.com.au/staticfile/Samples/483374-tlslargeportrait.jpg\" class=\"card-img-top\" alt=\"\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Stephen Coniglio</p>\n              <p>Born :   December 15, 1993 (25 years), Greenmount\n                <br> Height : 1.82 m\n                <br> Weight : 86 kg</p>\n            </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/greatersydney/greatersydney.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/greatersydney/greatersydney.component.ts ***!
  \**********************************************************/
/*! exports provided: GreatersydneyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreatersydneyComponent", function() { return GreatersydneyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GreatersydneyComponent = /** @class */ (function () {
    function GreatersydneyComponent() {
    }
    GreatersydneyComponent.prototype.ngOnInit = function () {
    };
    GreatersydneyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-greatersydney',
            template: __webpack_require__(/*! ./greatersydney.component.html */ "./src/app/greatersydney/greatersydney.component.html"),
            styles: [__webpack_require__(/*! ./greatersydney.component.css */ "./src/app/greatersydney/greatersydney.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GreatersydneyComponent);
    return GreatersydneyComponent;
}());



/***/ }),

/***/ "./src/app/hawthorn/hawthorn.component.css":
/*!*************************************************!*\
  !*** ./src/app/hawthorn/hawthorn.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hhd3Rob3JuL2hhd3Rob3JuLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/hawthorn/hawthorn.component.html":
/*!**************************************************!*\
  !*** ./src/app/hawthorn/hawthorn.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"text-center\">Detail of your favorite team</h1>\n    <table class=\"table table-responsive-lg table-bordered text-center\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Team</th>\n          <th scope=\"col\">Logo</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>10</td>\n          <td>Hawthorn</td>\n          <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Hawthorn.jpg\" alt=\"\"></td>\n        </tr>\n      </tbody>\n    </table>\n  \n  <br>\n  <br>\n  <h2>Choosing options below to explore your favorite team</h2>\n  <br>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Prediction</th>\n        <th scope=\"col\">Result</th>\n        <th scope=\"col\">Find match</th>\n        <th scope=\"col\">Head to Head</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Predict</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Show</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Find</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">H2H</button></td>\n  \n      </tr>\n    </tbody>\n  </table>\n  \n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n      <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Tom_Mitchell_2017.5.jpg/200px-Tom_Mitchell_2017.5.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\"> Tom Mitchell</p>\n            <p>Born: May 31, 1993 (26 years old)\n              <br> Height : 1.81 m\n              <br> Weight : 79 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-secondary mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Luke_Hodge_2017.5.jpg/200px-Luke_Hodge_2017.5.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Luke Hodge </p>\n            <p>  Born:  June 15, 1984 (34 years), Colac\n              <br> Height : 1.85 m\n              <br> Weight : 87 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n            <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Isaac_Smith_2017.4.jpg/200px-Isaac_Smith_2017.4.jpg\" class=\"card-img-top\" alt=\"\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Isaac Smith</p>\n              <p>Born :   December 30, 1988 (30 years old), \n                <br> Height : 1.82 m\n                <br> Weight : 86 kg</p>\n            </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/hawthorn/hawthorn.component.ts":
/*!************************************************!*\
  !*** ./src/app/hawthorn/hawthorn.component.ts ***!
  \************************************************/
/*! exports provided: HawthornComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HawthornComponent", function() { return HawthornComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HawthornComponent = /** @class */ (function () {
    function HawthornComponent() {
    }
    HawthornComponent.prototype.ngOnInit = function () {
    };
    HawthornComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hawthorn',
            template: __webpack_require__(/*! ./hawthorn.component.html */ "./src/app/hawthorn/hawthorn.component.html"),
            styles: [__webpack_require__(/*! ./hawthorn.component.css */ "./src/app/hawthorn/hawthorn.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HawthornComponent);
    return HawthornComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n          <img src=\"https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Files/Images/160110_Sidebar_quote_murphy.jpg.jpeg\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"https://winnersbars.com.au/wp-content/uploads/2012/05/martin-quote.jpg\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"https://winnersbars.com.au/wp-content/uploads/2012/05/gels-quote.jpg\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n    </div>\n  </div>\n  <br>\n  <br>\n<div class=\"row \">\n\n  <div class=\"col-6 text-center container\">\n    <div class=\"card-header\">\n      <h3>Up Coming Games</h3>\n      <h4>Season: 2019</h4>\n      <h4>Next Round: 12</h4>\n    </div>\n    <div class=\"card-body\">\n\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Home Team</th>\n            <th scope=\"col\">Away Team</th>\n            <th scope=\"col\">Time</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let game of games\">\n            <td>{{game.hteam}}</td>\n            <td>{{game.ateam}}</td>\n            <td>{{game.date}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    \n  </div>\n\n  <div class=\"col-6 text-center\">\n    <div class=\"card-header\">\n      <h3>Ladder</h3>\n      <h4>Season: 2019</h4>\n      <h4>After Round: 11</h4>\n    </div>\n    <div class=\"card-body\">\n\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Team ID</th>\n            <th scope=\"col\">Team</th>\n            <th scope=\"col\">Rank</th>\n            <th scope=\"col\">%</th>\n            <th scope=\"col\">Win </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let ladder of ladders\">\n            <td>{{ladder.teamid}}</td>\n            <td>{{ladder.team}}</td>\n            <td>{{ladder.rank}}</td>\n            <td>{{ladder.percentage}}</td>\n            <td>{{ladder.wins}}</td>\n          </tr>\n\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n\n</div>\n<!-- Footer -->\n<footer class=\"page-footer font-small blue\">\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">\n      <a> 18827177-TranMinhVi  <i class=\"far fa-hand-point-right\"></i> 18811331-GiaHuyTran </a>\n    </div>\n    <!-- Copyright -->\n  \n  </footer>\n  <!-- Footer -->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-service.service */ "./src/app/data-service.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService) {
        this.dataService = dataService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getGames();
        this.getLadders();
    };
    HomeComponent.prototype.getGames = function () {
        var _this = this;
        this.dataService.getGames().subscribe(function (temp) { _this.games = temp; });
    };
    HomeComponent.prototype.getLadders = function () {
        var _this = this;
        this.dataService.getLadders().subscribe(function (temp) { _this.ladders = temp; });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ladder.ts":
/*!***************************!*\
  !*** ./src/app/ladder.ts ***!
  \***************************/
/*! exports provided: Ladder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ladder", function() { return Ladder; });
var Ladder = /** @class */ (function () {
    function Ladder(team, mean_rank, percentage, wins, year, updated, swarms, teamid, round, rank, sourceid, source) {
        this.team = team;
        this.mean_rank = mean_rank;
        this.percentage = percentage;
        this.wins = wins;
        this.year = year;
        this.updated = updated;
        this.swarms = swarms;
        this.teamid = teamid;
        this.round = round;
        this.rank = rank;
        this.sourceid = sourceid;
        this.source = source;
    }
    return Ladder;
}());



/***/ }),

/***/ "./src/app/melbourne/melbourne.component.css":
/*!***************************************************!*\
  !*** ./src/app/melbourne/melbourne.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbGJvdXJuZS9tZWxib3VybmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/melbourne/melbourne.component.html":
/*!****************************************************!*\
  !*** ./src/app/melbourne/melbourne.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"text-center\">Detail of your favorite team</h1>\n    <table class=\"table table-responsive-lg table-bordered text-center\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Team</th>\n          <th scope=\"col\">Logo</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>11</td>\n          <td>Melbourne</td>\n          <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Melbourne.jpg\" alt=\"\"></td>\n        </tr>\n      </tbody>\n    </table>\n  \n  <br>\n  <br>\n  <h2>Choosing options below to explore your favorite team</h2>\n  <br>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Prediction</th>\n        <th scope=\"col\">Result</th>\n        <th scope=\"col\">Find match</th>\n        <th scope=\"col\">Head to Head</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Predict</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Show</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Find</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">H2H</button></td>\n  \n      </tr>\n    </tbody>\n  </table>\n  \n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n      <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://pbs.twimg.com/profile_images/1078444504728821760/1rmsp0Ig_400x400.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\"> Steven May</p>\n            <p>Born: January 10, 1992 (27 years), \n              <br> Height : 1.9 m\n              <br> Weight : 93 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-secondary mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Nathan_Jones_2017.9.jpg/200px-Nathan_Jones_2017.9.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Nathan Jones</p>\n            <p>  Born:  January 20, 1988 (31 years)\n              <br> Height : 1.8 m\n              <br> Weight : 82 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n            <img src=\"https://s.afl.com.au/staticfile/Samples/570955-tlslargeportrait.jpg\" class=\"card-img-top\" alt=\"\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Christian Salem</p>\n              <p>Born :   July 15, 1995 (age 23)\n                <br> Height : 1.85 m\n                <br> Weight : 78 kg</p>\n            </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/melbourne/melbourne.component.ts":
/*!**************************************************!*\
  !*** ./src/app/melbourne/melbourne.component.ts ***!
  \**************************************************/
/*! exports provided: MelbourneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MelbourneComponent", function() { return MelbourneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MelbourneComponent = /** @class */ (function () {
    function MelbourneComponent() {
    }
    MelbourneComponent.prototype.ngOnInit = function () {
    };
    MelbourneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-melbourne',
            template: __webpack_require__(/*! ./melbourne.component.html */ "./src/app/melbourne/melbourne.component.html"),
            styles: [__webpack_require__(/*! ./melbourne.component.css */ "./src/app/melbourne/melbourne.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MelbourneComponent);
    return MelbourneComponent;
}());



/***/ }),

/***/ "./src/app/northmelbourne/northmelbourne.component.css":
/*!*************************************************************!*\
  !*** ./src/app/northmelbourne/northmelbourne.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vcnRobWVsYm91cm5lL25vcnRobWVsYm91cm5lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/northmelbourne/northmelbourne.component.html":
/*!**************************************************************!*\
  !*** ./src/app/northmelbourne/northmelbourne.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"text-center\">Detail of your favorite team</h1>\n    <table class=\"table table-responsive-lg table-bordered text-center\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Team</th>\n          <th scope=\"col\">Logo</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>12</td>\n          <td>North Melbourne</td>\n          <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/NorthMelbourne.jpg\" alt=\"\"></td>\n        </tr>\n      </tbody>\n    </table>\n  \n  <br>\n  <br>\n  <h2 >Choosing options below to explore your favorite team</h2>\n  <br>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Prediction</th>\n        <th scope=\"col\">Result</th>\n        <th scope=\"col\">Find match</th>\n        <th scope=\"col\">Head to Head</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Predict</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Show</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Find</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">H2H</button></td>\n  \n      </tr>\n    </tbody>\n  </table>\n  \n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n      <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://cdn.newsapi.com.au/image/v1/d3be28eb36ea878c7c039b0a278b1768\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\"> Majak Daw</p>\n            <p>Born: March 11, 1991 (28 years), Other \n              <br> Height : 1.95 m\n              <br> Weight : 94 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-secondary mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Marley_Williams_2018.2.jpg/220px-Marley_Williams_2018.2.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Marley Williams</p>\n            <p>  Born:  July 22, 1993 (25 years), Albany\n              <br> Height : 1.8 m\n              <br> Weight : 82 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n            <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Jed_Anderson_2017.3.jpg/200px-Jed_Anderson_2017.3.jpg\" class=\"card-img-top\" alt=\"\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Jed Anderson</p>\n              <p>Born :   February 2, 1994 (25 years old), Katherine\n                <br> Height : 1.85 m\n                <br> Weight : 78 kg</p>\n            </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/northmelbourne/northmelbourne.component.ts":
/*!************************************************************!*\
  !*** ./src/app/northmelbourne/northmelbourne.component.ts ***!
  \************************************************************/
/*! exports provided: NorthmelbourneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NorthmelbourneComponent", function() { return NorthmelbourneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NorthmelbourneComponent = /** @class */ (function () {
    function NorthmelbourneComponent() {
    }
    NorthmelbourneComponent.prototype.ngOnInit = function () {
    };
    NorthmelbourneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-northmelbourne',
            template: __webpack_require__(/*! ./northmelbourne.component.html */ "./src/app/northmelbourne/northmelbourne.component.html"),
            styles: [__webpack_require__(/*! ./northmelbourne.component.css */ "./src/app/northmelbourne/northmelbourne.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NorthmelbourneComponent);
    return NorthmelbourneComponent;
}());



/***/ }),

/***/ "./src/app/portadelaide/portadelaide.component.css":
/*!*********************************************************!*\
  !*** ./src/app/portadelaide/portadelaide.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhZGVsYWlkZS9wb3J0YWRlbGFpZGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/portadelaide/portadelaide.component.html":
/*!**********************************************************!*\
  !*** ./src/app/portadelaide/portadelaide.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"text-center\">Detail of your favorite team</h1>\n    <table class=\"table table-responsive-lg table-bordered text-center\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Team</th>\n          <th scope=\"col\">Logo</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>13</td>\n          <td>Port Adelaide</td>\n          <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/PortAdelaide.jpg\" alt=\"\"></td>\n        </tr>\n      </tbody>\n    </table>\n  \n  <br>\n  <br>\n  <h2 >Choosing options below to explore your favorite team</h2>\n  <br>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Prediction</th>\n        <th scope=\"col\">Result</th>\n        <th scope=\"col\">Find match</th>\n        <th scope=\"col\">Head to Head</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Predict</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Show</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Find</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">H2H</button></td>\n  \n      </tr>\n    </tbody>\n  </table>\n  \n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n      <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://s.afl.com.au/staticfile/Samples/572920-tlslargeportrait.jpg\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\"> SamPowell Pepper</p>\n            <p>Born: January 8, 1998 (21 years old), Western Australia\n              <br> Height : 1.87 m\n              <br> Weight : 91 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-secondary mb-3\" style=\"width: 18rem;\">\n          <img src=\"http://shoc.com.au/wp-content/uploads/2016/05/Ryan-Burton.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Ryan Burton</p>\n            <p>  Born:  January 31, 1997 (22 years old)\n              <br> Height : 1.91 m\n              <br> Weight :  90 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n            <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Jed_Anderson_2017.3.jpg/200px-Jed_Anderson_2017.3.jpg\" class=\"card-img-top\" alt=\"\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Paddy Ryder</p>\n              <p>Born :  March 14, 1988 (31 years), Northern Territory\n                <br> Height : 1.96 m\n                <br> Weight : 92 kg</p>\n            </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/portadelaide/portadelaide.component.ts":
/*!********************************************************!*\
  !*** ./src/app/portadelaide/portadelaide.component.ts ***!
  \********************************************************/
/*! exports provided: PortadelaideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortadelaideComponent", function() { return PortadelaideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortadelaideComponent = /** @class */ (function () {
    function PortadelaideComponent() {
    }
    PortadelaideComponent.prototype.ngOnInit = function () {
    };
    PortadelaideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portadelaide',
            template: __webpack_require__(/*! ./portadelaide.component.html */ "./src/app/portadelaide/portadelaide.component.html"),
            styles: [__webpack_require__(/*! ./portadelaide.component.css */ "./src/app/portadelaide/portadelaide.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortadelaideComponent);
    return PortadelaideComponent;
}());



/***/ }),

/***/ "./src/app/prediction/prediction.component.css":
/*!*****************************************************!*\
  !*** ./src/app/prediction/prediction.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZWRpY3Rpb24vcHJlZGljdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/prediction/prediction.component.html":
/*!******************************************************!*\
  !*** ./src/app/prediction/prediction.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Predictions for up coming games</h1>\n<br>\n\n<table class=\"table container text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Time</th>\n        <th scope=\"col\">Home Team</th>\n        <th scope=\"col\">Away Team</th>\n        <th scope=\"col\">Home Team Confidence</th>\n        <th scope=\"col\">Tip</th>\n        \n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let t of tips\">\n        <td>{{t.date}}</td>\n        <td>{{t.ateam}}</td>\n        <td>{{t.hteam}}</td>\n        <td>{{t.hconfidence}}</td>\n        <td>{{t.tip}}</td>\n      </tr>\n    </tbody>\n  </table>\n  <!-- Footer -->\n<footer class=\"page-footer font-small blue\">\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">\n      <a> 18827177-TranMinhVi  <i class=\"far fa-hand-point-right\"></i> 18811331-GiaHuyTran </a>\n    </div>\n    <!-- Copyright -->\n  \n  </footer>\n  <!-- Footer -->"

/***/ }),

/***/ "./src/app/prediction/prediction.component.ts":
/*!****************************************************!*\
  !*** ./src/app/prediction/prediction.component.ts ***!
  \****************************************************/
/*! exports provided: PredictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionComponent", function() { return PredictionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-service.service */ "./src/app/data-service.service.ts");



var PredictionComponent = /** @class */ (function () {
    function PredictionComponent(dataService) {
        this.dataService = dataService;
    }
    PredictionComponent.prototype.ngOnInit = function () {
        this.getTips();
    };
    PredictionComponent.prototype.getTips = function () {
        var _this = this;
        this.dataService.getTips().subscribe(function (temp) { _this.tips = temp; });
    };
    PredictionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-predition',
            template: __webpack_require__(/*! ./prediction.component.html */ "./src/app/prediction/prediction.component.html"),
            styles: [__webpack_require__(/*! ./prediction.component.css */ "./src/app/prediction/prediction.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]])
    ], PredictionComponent);
    return PredictionComponent;
}());



/***/ }),

/***/ "./src/app/richmond/richmond.component.css":
/*!*************************************************!*\
  !*** ./src/app/richmond/richmond.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JpY2htb25kL3JpY2htb25kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/richmond/richmond.component.html":
/*!**************************************************!*\
  !*** ./src/app/richmond/richmond.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"text-center\">Detail of your favorite team</h1>\n    <table class=\"table table-responsive-lg table-bordered text-center\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Team</th>\n          <th scope=\"col\">Logo</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>14</td>\n          <td>Richmond</td>\n          <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Richmond.jpg\" alt=\"\"></td>\n        </tr>\n      </tbody>\n    </table>\n  \n  <br>\n  <br>\n  <h2 >Choosing options below to explore your favorite team</h2>\n  <br>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Prediction</th>\n        <th scope=\"col\">Result</th>\n        <th scope=\"col\">Find match</th>\n        <th scope=\"col\">Head to Head</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Predict</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Show</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Find</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">H2H</button></td>\n  \n      </tr>\n    </tbody>\n  </table>\n  \n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n      <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Nick_Vlastuin_2017.1.jpg/200px-Nick_Vlastuin_2017.1.jpg\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\"> Nick Vlastuin</p>\n            <p>Born: April 19, 1994 (25 years old)\n              <br> Height : 1.87 m\n              <br> Weight : 81 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-secondary mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Dylan_Grimes_2017.1.jpg/200px-Dylan_Grimes_2017.1.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Dylan Grimes</p>\n            <p>  Born:  July 16, 1991 (27 years old)\n              <br> Height : 1.93 m\n              <br> Weight :  87 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n            <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Prestia_handball_%28cropped%29.jpg/200px-Prestia_handball_%28cropped%29.jpg\" class=\"card-img-top\" alt=\"\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Dion Prestia</p>\n              <p>Born : October 12, 1992 (26 years), Victoria\n                <br> Height : 1.87 m\n                <br> Weight : 82 kg</p>\n            </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/richmond/richmond.component.ts":
/*!************************************************!*\
  !*** ./src/app/richmond/richmond.component.ts ***!
  \************************************************/
/*! exports provided: RichmondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichmondComponent", function() { return RichmondComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RichmondComponent = /** @class */ (function () {
    function RichmondComponent() {
    }
    RichmondComponent.prototype.ngOnInit = function () {
    };
    RichmondComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-richmond',
            template: __webpack_require__(/*! ./richmond.component.html */ "./src/app/richmond/richmond.component.html"),
            styles: [__webpack_require__(/*! ./richmond.component.css */ "./src/app/richmond/richmond.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RichmondComponent);
    return RichmondComponent;
}());



/***/ }),

/***/ "./src/app/schedule/schedule.component.css":
/*!*************************************************!*\
  !*** ./src/app/schedule/schedule.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/schedule/schedule.component.html":
/*!**************************************************!*\
  !*** ./src/app/schedule/schedule.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">List of upcoming games</h1>\n<table class=\"table container text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Time</th>\n        <th scope=\"col\">Home Team</th>\n        <th scope=\"col\">Away Team</th>\n        <th scope=\"col\">Venue</th> \n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let t of games\">\n        <td>{{t.date}}</td>\n        <td>{{t.ateam}}</td>\n        <td>{{t.hteam}}</td>\n        <td>{{t.venue}}</td>\n      </tr>\n    </tbody>\n  </table>\n  <!-- Footer -->\n<footer class=\"page-footer font-small blue\">\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">\n      <a> 18827177-TranMinhVi  <i class=\"far fa-hand-point-right\"></i> 18811331-GiaHuyTran </a>\n    </div>\n    <!-- Copyright -->\n  \n  </footer>\n  <!-- Footer -->"

/***/ }),

/***/ "./src/app/schedule/schedule.component.ts":
/*!************************************************!*\
  !*** ./src/app/schedule/schedule.component.ts ***!
  \************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-service.service */ "./src/app/data-service.service.ts");



var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(dataService) {
        this.dataService = dataService;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        this.getGames();
    };
    ScheduleComponent.prototype.getGames = function () {
        var _this = this;
        this.dataService.getGames2().subscribe(function (temp) { _this.games = temp; });
    };
    ScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.css */ "./src/app/schedule/schedule.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/stkilda/stkilda.component.css":
/*!***********************************************!*\
  !*** ./src/app/stkilda/stkilda.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0a2lsZGEvc3RraWxkYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/stkilda/stkilda.component.html":
/*!************************************************!*\
  !*** ./src/app/stkilda/stkilda.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"text-center\">Detail of your favorite team</h1>\n    <table class=\"table table-responsive-lg table-bordered text-center\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Team</th>\n          <th scope=\"col\">Logo</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>15</td>\n          <td>St Kilda</td>\n          <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/StKilda.jpg\" alt=\"\"></td>\n        </tr>\n      </tbody>\n    </table>\n  \n  <br>\n  <br>\n  <h2 >Choosing options below to explore your favorite team</h2>\n  <br>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Prediction</th>\n        <th scope=\"col\">Result</th>\n        <th scope=\"col\">Find match</th>\n        <th scope=\"col\">Head to Head</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Predict</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Show</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Find</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">H2H</button></td>\n  \n      </tr>\n    </tbody>\n  </table>\n  \n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n      <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://s.afl.com.au/staticfile/Samples/520204-tlslargelandscape.jpg\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\"> Jarryn Geary</p>\n            <p>Born:June 23, 1988 (30 years), Victoria\n              <br> Height : 1.87 m\n              <br> Weight : 81 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-secondary mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Nick_Riewoldt_2017.1.jpg/200px-Nick_Riewoldt_2017.1.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Nick Riewoldt</p>\n            <p>  Born: October 17, 1982 (36 years), Hobart\n              <br> Height : 1.93 m\n              <br> Weight :  87 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n            <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Jack_Steven_2018.1.jpg/220px-Jack_Steven_2018.1.jpg\" class=\"card-img-top\" alt=\"\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Jack Steven</p>\n              <p>Born :March 28, 1990 (29 years), South Australia\n                <br> Height : 1.87 m\n                <br> Weight : 82 kg</p>\n            </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/stkilda/stkilda.component.ts":
/*!**********************************************!*\
  !*** ./src/app/stkilda/stkilda.component.ts ***!
  \**********************************************/
/*! exports provided: StkildaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StkildaComponent", function() { return StkildaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StkildaComponent = /** @class */ (function () {
    function StkildaComponent() {
    }
    StkildaComponent.prototype.ngOnInit = function () {
    };
    StkildaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stkilda',
            template: __webpack_require__(/*! ./stkilda.component.html */ "./src/app/stkilda/stkilda.component.html"),
            styles: [__webpack_require__(/*! ./stkilda.component.css */ "./src/app/stkilda/stkilda.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StkildaComponent);
    return StkildaComponent;
}());



/***/ }),

/***/ "./src/app/sydney/sydney.component.css":
/*!*********************************************!*\
  !*** ./src/app/sydney/sydney.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5ZG5leS9zeWRuZXkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sydney/sydney.component.html":
/*!**********************************************!*\
  !*** ./src/app/sydney/sydney.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"text-center\">Detail of your favorite team</h1>\n    <table class=\"table table-responsive-lg table-bordered text-center\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Team</th>\n          <th scope=\"col\">Logo</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>16</td>\n          <td>Sydney</td>\n          <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Sydney.jpg\" alt=\"\"></td>\n        </tr>\n      </tbody>\n    </table>\n  \n  <br>\n  <br>\n  <h2 >Choosing options below to explore your favorite team</h2>\n  <br>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Prediction</th>\n        <th scope=\"col\">Result</th>\n        <th scope=\"col\">Find match</th>\n        <th scope=\"col\">Head to Head</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Predict</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Show</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Find</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">H2H</button></td>\n  \n      </tr>\n    </tbody>\n  </table>\n  \n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n      <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/James_Rose.jpg/215px-James_Rose.jpg\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\"> James Rose</p>\n            <p>Born:April 16, 1996 (age 23)\n              <br> Height : 1.87 m\n              <br> Weight : 81 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-secondary mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://cdn.newsapi.com.au/image/v1/e51f4fea217957209086632a6a103d43\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Daniel Menzel</p>\n            <p>  Born: September 13, 1991 (27 years), Golden Grove\n              <br> Height : 1.88 m\n              <br> Weight :  79 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n            <img src=\"https://cdn.newsapi.com.au/image/v1/4651c2474b00b57c896987c29f613b35?width=1024\" class=\"card-img-top\" alt=\"\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Jarrad McVeigh</p>\n              <p>Born :April 7, 1985 (age 34), New South Wales\n                <br> Height : 1.84 m\n                <br> Weight : 83 kg</p>\n            </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/sydney/sydney.component.ts":
/*!********************************************!*\
  !*** ./src/app/sydney/sydney.component.ts ***!
  \********************************************/
/*! exports provided: SydneyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SydneyComponent", function() { return SydneyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SydneyComponent = /** @class */ (function () {
    function SydneyComponent() {
    }
    SydneyComponent.prototype.ngOnInit = function () {
    };
    SydneyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sydney',
            template: __webpack_require__(/*! ./sydney.component.html */ "./src/app/sydney/sydney.component.html"),
            styles: [__webpack_require__(/*! ./sydney.component.css */ "./src/app/sydney/sydney.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SydneyComponent);
    return SydneyComponent;
}());



/***/ }),

/***/ "./src/app/team.ts":
/*!*************************!*\
  !*** ./src/app/team.ts ***!
  \*************************/
/*! exports provided: Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
var Team = /** @class */ (function () {
    function Team(logo, id, name, abbrev) {
        this.logo = logo;
        this.id = id;
        this.name = name;
        this.abbrev = abbrev;
    }
    return Team;
}());



/***/ }),

/***/ "./src/app/teams/teams.component.css":
/*!*******************************************!*\
  !*** ./src/app/teams/teams.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW1zL3RlYW1zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/teams/teams.component.html":
/*!********************************************!*\
  !*** ./src/app/teams/teams.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header text-center\">\n  <h1>List of Team for Season 2019</h1>\n  <h2>Number of team in this season: 18</h2>\n</div>\n<div class=\"card-body text-center  container\">\n\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Team ID</th>\n        <th scope=\"col\">Team Name</th>\n        <th scope=\"col\">Logo</th>\n        <th scope=\"col\">Choose your favourite team!</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>1</td>\n        <td>Adelaide</td>\n        <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Adelaide.jpg\"></td>\n        <td><button type=\"button\" class=\"btn btn-info\" routerLink=\"../adelaide\">Select</button></td>\n      </tr>\n      <tr>\n        <td>2</td>\n        <td>Brisbane</td>\n        <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Brisbane.jpg\"></td>\n        <td><button type=\"button\" class=\"btn btn-info\" routerLink=\"../brisbane\">Select</button></td>\n      </tr>\n      <tr>\n        <td>3</td>\n        <td>Carlton</td>\n        <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Carlton.jpg\"></td>\n        <td><button type=\"button\" class=\"btn btn-info\" routerLink=\"../carlton\">Select</button></td>\n      </tr>\n      <tr>\n        <td>4</td>\n        <td>Collingwood</td>\n        <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Collingwood.jpg\"></td>\n        <td><button type=\"button\" class=\"btn btn-info\" routerLink=\"../collingwood\">Select</button></td>\n      </tr>\n      <tr>\n        <td>5</td>\n        <td>Essendon</td>\n        <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Essendon.jpg\"></td>\n        <td><button type=\"button\" class=\"btn btn-info\" routerLink=\"../essendon\">Select</button></td>\n      </tr>\n\n      <tr>\n        <td>6</td>\n        <td>Fremantle</td>\n        <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Fremantle.jpg\"></td>\n        <td><button type=\"button\" class=\"btn btn-info\" routerLink=\"../fremantle\">Select</button></td>\n      </tr>\n      <tr>\n        <td>7</td>\n        <td>Geelong</td>\n        <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Geelong.jpg\"></td>\n        <td><button type=\"button\" class=\"btn btn-info\" routerLink=\"../geelong\">Select</button></td>\n      </tr>\n      <tr>\n        <td>8</td>\n        <td>Gold Coast</td>\n        <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/GoldCoast.jpg\"></td>\n        <td><button type=\"button\" class=\"btn btn-info\" routerLink=\"../goldcoast\">Select</button></td>\n      </tr>\n      <tr>\n        <td>9</td>\n        <td>Greater Western Sydney</td>\n        <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Giants.png\"></td>\n        <td><button type=\"button\" class=\"btn btn-info\" routerLink=\"../greatersydney\">Select</button></td>\n      </tr>\n      <tr>\n        <td>10</td>\n        <td>Hawthorn</td>\n        <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Hawthorn.jpg\"></td>\n        <td><button type=\"button\" class=\"btn btn-info\" routerLink=\"../hawthorn\">Select</button></td>\n      </tr>\n      <tr>\n        <td>11</td>\n        <td>Melbourne</td>\n        <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Melbourne.jpg\"></td>\n        <td><button type=\"button\" class=\"btn btn-info\" routerLink=\"../melbourne\">Select</button></td>\n      </tr>\n      <tr>\n        <td>12</td>\n        <td>North Melbourne</td>\n        <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/NorthMelbourne.jpg\"></td>\n        <td><button type=\"button\" class=\"btn btn-info\" routerLink=\"../carlton\">Select</button></td>\n      </tr>\n      <tr>\n        <td>13</td>\n        <td>Port Adelaide</td>\n        <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/PortAdelaide.jpg\"></td>\n        <td><button type=\"button\" class=\"btn btn-info\" routerLink=\"../portadelaide\">Select</button></td>\n      </tr>\n      <tr>\n        <td>14</td>\n        <td>Richmond</td>\n        <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Richmond.jpg\"></td>\n        <td><button type=\"button\" class=\"btn btn-info\" routerLink=\"../richmond\">Select</button></td>\n      </tr>\n      <tr>\n        <td>15</td>\n        <td>St Kilda</td>\n        <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/StKilda.jpg\"></td>\n        <td><button type=\"button\" class=\"btn btn-info\" routerLink=\"../stkilda\">Select</button></td>\n      </tr>\n      <tr>\n        <td>16</td>\n        <td>Sydney</td>\n        <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Sydney.jpg\"></td>\n        <td><button type=\"button\" class=\"btn btn-info\" routerLink=\"../sydney\">Select</button></td>\n      </tr>\n      <tr>\n        <td>17</td>\n        <td>West Coast</td>\n        <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/WestCoast.jpg\"></td>\n        <td><button type=\"button\" class=\"btn btn-info\" routerLink=\"../westcoast\">Select</button></td>\n      </tr>\n      <tr>\n        <td>18</td>\n        <td>Western Bulldogs</td>\n        <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Bulldogs.jpg\"></td>\n        <td><button type=\"button\" class=\"btn btn-info\" routerLink=\"../westernbulldogs\">Select</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<!-- Footer -->\n<footer class=\"page-footer font-small blue\">\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">\n      <a> 18827177-TranMinhVi  <i class=\"far fa-hand-point-right\"></i> 18811331-GiaHuyTran </a>\n    </div>\n    <!-- Copyright -->\n  \n  </footer>\n  <!-- Footer -->"

/***/ }),

/***/ "./src/app/teams/teams.component.ts":
/*!******************************************!*\
  !*** ./src/app/teams/teams.component.ts ***!
  \******************************************/
/*! exports provided: TeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsComponent", function() { return TeamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-service.service */ "./src/app/data-service.service.ts");



var TeamsComponent = /** @class */ (function () {
    function TeamsComponent(dataService) {
        this.dataService = dataService;
    }
    TeamsComponent.prototype.ngOnInit = function () {
        this.getTeams();
    };
    TeamsComponent.prototype.getTeams = function () {
        var _this = this;
        this.dataService.getTeams().subscribe(function (temp) { _this.teams = temp; });
    };
    TeamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teams',
            template: __webpack_require__(/*! ./teams.component.html */ "./src/app/teams/teams.component.html"),
            styles: [__webpack_require__(/*! ./teams.component.css */ "./src/app/teams/teams.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]])
    ], TeamsComponent);
    return TeamsComponent;
}());



/***/ }),

/***/ "./src/app/tip.ts":
/*!************************!*\
  !*** ./src/app/tip.ts ***!
  \************************/
/*! exports provided: Tip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tip", function() { return Tip; });
var Tip = /** @class */ (function () {
    function Tip(confidence, bits, gameid, ateamid, venue, year, correct, date, updated, hteam, tipteamid, margin, err, tip, ateam, source, sourceid, hconfidence, hteamid, round) {
        this.confidence = confidence;
        this.bits = bits;
        this.gameid = gameid;
        this.ateamid = ateamid;
        this.venue = venue;
        this.year = year;
        this.correct = correct;
        this.date = date;
        this.updated = updated;
        this.hteam = hteam;
        this.tipteamid = tipteamid;
        this.margin = margin;
        this.err = err;
        this.tip = tip;
        this.ateam = ateam;
        this.source = source;
        this.sourceid = sourceid;
        this.hconfidence = hconfidence;
        this.hteamid = hteamid;
        this.round = round;
    }
    return Tip;
}());



/***/ }),

/***/ "./src/app/westcoast/westcoast.component.css":
/*!***************************************************!*\
  !*** ./src/app/westcoast/westcoast.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlc3Rjb2FzdC93ZXN0Y29hc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/westcoast/westcoast.component.html":
/*!****************************************************!*\
  !*** ./src/app/westcoast/westcoast.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"tesx-center\">Detail of your favorite team</h1>\n    <table class=\"table table-responsive-lg table-bordered text-center\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Team</th>\n          <th scope=\"col\">Logo</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>17</td>\n          <td>West Coast</td>\n          <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/WestCoast.jpg\" alt=\"\"></td>\n        </tr>\n      </tbody>\n    </table>\n  \n  <br>\n  <br>\n  <h2 >Choosing options below to explore your favorite team</h2>\n  <br>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Prediction</th>\n        <th scope=\"col\">Result</th>\n        <th scope=\"col\">Find match</th>\n        <th scope=\"col\">Head to Head</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Predict</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Show</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Find</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">H2H</button></td>\n  \n      </tr>\n    </tbody>\n  </table>\n  \n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n      <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://s.afl.com.au/staticfile/Samples/602680-tlslargeportrait.jpg\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\"> Liam Ryan</p>\n            <p>Born: October 2, 1996 (22 years old)\n              <br> Height : 1.87 m\n              <br> Weight : 81 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-secondary mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Jake_Waterman_2018.1.jpg/220px-Jake_Waterman_2018.1.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Jake Waterman</p>\n            <p>  Born: May 6, 1998 (21 years old), Perth\n              <br> Height : 1.88 m\n              <br> Weight :  79 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n            <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Andrew_Gaff_2018.5.jpg/220px-Andrew_Gaff_2018.5.jpg\" class=\"card-img-top\" alt=\"\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Andrew Gaff</p>\n              <p> June 16, 1992 (26 years), Melbourne\n                <br> Height : 1.82 m\n                <br> Weight : 78 kg</p>\n            </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/westcoast/westcoast.component.ts":
/*!**************************************************!*\
  !*** ./src/app/westcoast/westcoast.component.ts ***!
  \**************************************************/
/*! exports provided: WestcoastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WestcoastComponent", function() { return WestcoastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WestcoastComponent = /** @class */ (function () {
    function WestcoastComponent() {
    }
    WestcoastComponent.prototype.ngOnInit = function () {
    };
    WestcoastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-westcoast',
            template: __webpack_require__(/*! ./westcoast.component.html */ "./src/app/westcoast/westcoast.component.html"),
            styles: [__webpack_require__(/*! ./westcoast.component.css */ "./src/app/westcoast/westcoast.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WestcoastComponent);
    return WestcoastComponent;
}());



/***/ }),

/***/ "./src/app/westernbulldogs/westernbulldogs.component.css":
/*!***************************************************************!*\
  !*** ./src/app/westernbulldogs/westernbulldogs.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlc3Rlcm5idWxsZG9ncy93ZXN0ZXJuYnVsbGRvZ3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/westernbulldogs/westernbulldogs.component.html":
/*!****************************************************************!*\
  !*** ./src/app/westernbulldogs/westernbulldogs.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"text-center\">Detail of your favorite team</h1>\n    <table class=\"table table-responsive-lg table-bordered text-center\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Team</th>\n          <th scope=\"col\">Logo</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>17</td>\n          <td>Western Bulldogs</td>\n          <td><img src=\"https://squiggle.com.au//wp-content/themes/squiggle/assets/images/Bulldogs.jpg\" alt=\"\"></td>\n        </tr>\n      </tbody>\n    </table>\n  \n  <br>\n  <br>\n  <h2 >Choosing options below to explore your favorite team</h2>\n  <br>\n  <table class=\"table table-responsive-lg table-bordered text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Prediction</th>\n        <th scope=\"col\">Result</th>\n        <th scope=\"col\">Find match</th>\n        <th scope=\"col\">Head to Head</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Predict</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Show</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">Find</button></td>\n        <td><button type=\"button\" href=\"#\" class=\"btn btn-info\">H2H</button></td>\n  \n      </tr>\n    </tbody>\n  </table>\n  \n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n      <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Matt_Suckling_2018.2.jpg/220px-Matt_Suckling_2018.2.jpg\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\"> Matthew Suckling</p>\n            <p>Born: July 25, 1988 (30 years old), Wagga Wagga\n              <br> Height : 1.86 m\n              <br> Weight : 82 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-secondary mb-3\" style=\"width: 18rem;\">\n          <img src=\"https://images.whooshkaa.com/podcasts/podcast_1709/podcast_media/f54b12-lewis-young-podcast-image-gettyimages-824430992.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">Lewis Young</p>\n            <p>  Born: December 20, 1998 (20 years old)\n              <br> Height : 1.88 m\n              <br> Weight :  79 kg</p>\n          </div>\n        </div>\n        <div class=\"card col-sm-4 text-white bg-info mb-3\" style=\"width: 18rem;\">\n            <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Mitch_Wallis_2017.2.jpg/200px-Mitch_Wallis_2017.2.jpg\" class=\"card-img-top\" alt=\"\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Mitch Wallis</p>\n              <p> October 24, 1992 (26 years old)\n                <br> Height : 1.88 m\n                <br> Weight : 84 kg</p>\n            </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/westernbulldogs/westernbulldogs.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/westernbulldogs/westernbulldogs.component.ts ***!
  \**************************************************************/
/*! exports provided: WesternbulldogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WesternbulldogsComponent", function() { return WesternbulldogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WesternbulldogsComponent = /** @class */ (function () {
    function WesternbulldogsComponent() {
    }
    WesternbulldogsComponent.prototype.ngOnInit = function () {
    };
    WesternbulldogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-westernbulldogs',
            template: __webpack_require__(/*! ./westernbulldogs.component.html */ "./src/app/westernbulldogs/westernbulldogs.component.html"),
            styles: [__webpack_require__(/*! ./westernbulldogs.component.css */ "./src/app/westernbulldogs/westernbulldogs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WesternbulldogsComponent);
    return WesternbulldogsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\ICE\Assignment\AssignmentHV\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map