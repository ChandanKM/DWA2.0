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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DoctorRoutingModule = /** @class */ (function () {
    function DoctorRoutingModule() {
    }
    DoctorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
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

module.exports = "<p>\n  doctor works!\n</p>\n"

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
                _doctor_routing_module__WEBPACK_IMPORTED_MODULE_2__["DoctorRoutingModule"]
            ],
            declarations: [_doctor_component__WEBPACK_IMPORTED_MODULE_3__["DoctorComponent"]]
        })
    ], DoctorModule);
    return DoctorModule;
}());



/***/ })

}]);
//# sourceMappingURL=doctor-doctor-module.js.map