(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-doctor-module"],{

/***/ "./src/app/doctor/doctor-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/doctor/doctor-routing.module.ts ***!
  \*************************************************/
/*! exports provided: DoctorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorRoutingModule", function() { return DoctorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _doctor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor.component */ "./src/app/doctor/doctor.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _doctor_component__WEBPACK_IMPORTED_MODULE_1__["DoctorComponent"]
    }
];
var DoctorRoutingModule = /** @class */ (function () {
    function DoctorRoutingModule() {
    }
    DoctorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DoctorRoutingModule);
    return DoctorRoutingModule;
}());



/***/ }),

/***/ "./src/app/doctor/doctor.component.html":
/*!**********************************************!*\
  !*** ./src/app/doctor/doctor.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-tabset>\r\n    <ngb-tab title=\"Simple\">\r\n      <ng-template ngbTabContent>\r\n        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n        master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n        dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n        iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab>\r\n      <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n      <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n        <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n        craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n        cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n        yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n        shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n        sint qui sapiente accusamus tattooed echo park.</p>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n      <ng-template ngbTabContent>\r\n        <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n"

/***/ }),

/***/ "./src/app/doctor/doctor.component.scss":
/*!**********************************************!*\
  !*** ./src/app/doctor/doctor.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/doctor/doctor.component.ts":
/*!********************************************!*\
  !*** ./src/app/doctor/doctor.component.ts ***!
  \********************************************/
/*! exports provided: DoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorComponent", function() { return DoctorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DoctorComponent = /** @class */ (function () {
    function DoctorComponent() {
    }
    DoctorComponent.prototype.ngOnInit = function () {
    };
    DoctorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doctor',
            template: __webpack_require__(/*! ./doctor.component.html */ "./src/app/doctor/doctor.component.html"),
            styles: [__webpack_require__(/*! ./doctor.component.scss */ "./src/app/doctor/doctor.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DoctorComponent);
    return DoctorComponent;
}());



/***/ }),

/***/ "./src/app/doctor/doctor.module.ts":
/*!*****************************************!*\
  !*** ./src/app/doctor/doctor.module.ts ***!
  \*****************************************/
/*! exports provided: DoctorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorModule", function() { return DoctorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _doctor_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .//doctor-routing.module */ "./src/app/doctor/doctor-routing.module.ts");
/* harmony import */ var _doctor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doctor.component */ "./src/app/doctor/doctor.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DoctorModule = /** @class */ (function () {
    function DoctorModule() {
    }
    DoctorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _doctor_routing_module__WEBPACK_IMPORTED_MODULE_2__["DoctorRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            exports: [_doctor_component__WEBPACK_IMPORTED_MODULE_3__["DoctorComponent"]],
            declarations: [_doctor_component__WEBPACK_IMPORTED_MODULE_3__["DoctorComponent"]],
            bootstrap: [_doctor_component__WEBPACK_IMPORTED_MODULE_3__["DoctorComponent"]]
        })
    ], DoctorModule);
    return DoctorModule;
}());



/***/ })

}]);
//# sourceMappingURL=doctor-doctor-module.js.map