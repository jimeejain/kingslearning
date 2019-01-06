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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-to-do></app-to-do>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'toDoApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_to_do_to_do_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/to-do/to-do.component */ "./src/app/components/to-do/to-do.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_to_do_to_do_component__WEBPACK_IMPORTED_MODULE_4__["ToDoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/to-do/to-do.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/to-do/to-do.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".task-content {\r\n  max-width: calc(100% - 60px);\r\n}\r\n.task-heading {\r\n  /* font-weight: bold; */\r\n  font-size: 1.1rem;\r\n  margin: 0;\r\n  padding-left: 10px;\r\n}\r\n.task-desc {\r\n  margin:0;\r\n  padding-left: 10px;\r\n  padding-top: 2px;\r\n  font-size: 0.85rem;\r\n  font-weight: lighter;\r\n}\r\n.task-level {\r\n  margin: 0;\r\n  padding-left: 10px;\r\n  font-size: 0.8rem;\r\n  font-weight: lighter;\r\n  color: orange;\r\n}\r\n.swap-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.swap-btn {\r\n  border: none;\r\n  background: transparent;\r\n  font-size: 20px;\r\n}\r\n.strike{\r\n  text-decoration: line-through;\r\n}\r\n.clickable{\r\n  cursor:pointer;\r\n}\r\n.level{\r\n  float: right;\r\n}\r\n.taskList{\r\n  width: 50%;\r\n  margin: auto;\r\n}\r\n.w3-modal-content{\r\n  width: 500px;\r\n}\r\n.w3-input{\r\n  display: inline-block;\r\n}\r\n/* .w3-bar-item{\r\n  width: 100%;\r\n} */\r\n.fa-plus-circle{\r\n  color:green;\r\n  font-size: 35px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/to-do/to-do.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/to-do/to-do.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"text-align: center;\">Task List</h2>\n<div class=\"w3-container taskList\">\n  <ul class=\"w3-ul w3-card-4\">\n    <li\n      class=\"display-flex align-center\"\n      *ngFor=\"\n        let task of allTasks;\n        let i = index;\n        let isFirst = first;\n        let isLast = last\n      \"\n\n    >\n      <div class=\"clickable\">\n        <input\n          type=\"checkbox\"\n          class=\"w3-check\"\n          name=\"task\"\n          [ngModel]=\"task.status\"\n          (change)=\"updateCompletedTasks(task)\"\n        />\n      </div>\n      <div\n        class=\"width-expand task-content clickable\"\n        (click)=\"openModal(task)\"\n      >\n        <h4\n          class=\"task-heading text-truncate\"\n          [ngClass]=\"{ strike: task.status }\"\n        >\n          {{ task.title }}\n        </h4>\n        <p class=\"task-desc text-truncate\" *ngIf=\"task.desc\">{{ task.desc }}</p>\n        <p class=\"task-level\">Level : {{ task.level }}</p>\n      </div>\n      <div class=\"swap-container\">\n        <button\n          class=\"swap-btn clickable\"\n          (click)=\"swapItems(i, i - 1)\"\n          [disabled]=\"isFirst\"\n        >\n          <i class=\"fa fa-arrow-circle-up\"></i>\n        </button>\n        <button\n          class=\"swap-btn clickable\"\n          (click)=\"swapItems(i, i + 1)\"\n          [disabled]=\"isLast\"\n        >\n          <i class=\"fa fa-arrow-circle-down\"></i>\n        </button>\n      </div>\n    </li>\n\n    <li class=\"w3-bar\" (click)=\"openModal()\">\n      <div class=\"w3-bar-item\">\n        <div class=\"w3-large clickable display-flex align-center\">\n          <span class=\"fa fa-plus-circle padd-r-10\"></span>\n          <div>Add New Task</div>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n\n<div id=\"modal\" class=\"w3-modal w3-block\" *ngIf=\"modalIsOpen\">\n  <div class=\"w3-modal-content w3-card-4\">\n    <header class=\"w3-container w3-teal\">\n      <span\n        (click)=\"modalIsOpen = false;\"\n        class=\"w3-button w3-display-topright\"\n        >&times;</span\n      >\n      <h2>{{ currentTask ? \"Edit\" : \"Create\" }} Task</h2>\n    </header>\n    <form\n      class=\"w3-container modalText\"\n      name=\"creatEditTaskForm\"\n      (ngSubmit)=\"saveTask($event)\"\n      #taskForm=\"ngForm\"\n    >\n      <label class=\"padd-b-16 w3-block\">\n        Title\n        <input\n          type=\"text\"\n          class=\"w3-input\"\n          name=\"taskTitleInput\"\n          [(ngModel)]=\"taskTitle\"\n          [required]=\"true\"\n          #taskTitleInput=\"ngModel\"\n          placeholder=\"Enter the title for task\"\n        />\n      </label>\n      <div [hidden]=\"taskTitleInput?.valid || taskTitleInput?.pristine\" class=\"alert w3-text-red\">\n        Task Name is required\n      </div>\n      <label class=\"padd-b-16 w3-block\">\n        Description\n        <textarea\n          [(ngModel)]=\"taskDesc\"\n          name=\"taskDescriptionInput\"\n          class=\"w3-block w3-input\"\n          placeholder=\"Enter the description\"\n          [required]=\"true\"\n          #taskDescriptionInput=\"ngModel\"\n        ></textarea>\n        <div [hidden]=\"taskDescriptionInput?.valid || taskDescriptionInput?.pristine\" class=\"alert w3-text-red\">\n          Task Description is required\n        </div>\n      </label>\n      <label class=\"padd-b-16 w3-block\">\n        Level\n        <select [(ngModel)]=\"taskLevel\" class=\"w3-select\" name=\"taskLevel\">\n          <option *ngFor=\"let level of levels\" [ngValue]=\"level\">{{\n            level\n          }}</option>\n        </select>\n      </label>\n      <footer class=\"w3-container padd-b-16 text-right\">\n        <button\n          class=\"w3-btn w3-white w3-border w3-border-blue w3-round mar-r-10\"\n          (click)=\"$event.preventDefault();reset()\"\n          [hidden]=\"taskForm.form.pristine\"\n        >\n          Reset\n        </button>\n        <button\n          class=\"w3-btn w3-white w3-border w3-border-blue w3-round mar-r-10\"\n          type=\"submit\"\n          [disabled]=\"!taskForm.form.valid\"\n        >\n          Save\n        </button>\n      </footer>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/to-do/to-do.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/to-do/to-do.component.ts ***!
  \*****************************************************/
/*! exports provided: ToDoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoComponent", function() { return ToDoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_to_do_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/to-do.service */ "./src/app/services/to-do.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToDoComponent = /** @class */ (function () {
    function ToDoComponent(toDoService) {
        this.toDoService = toDoService;
        this.taskTitle = "";
        this.taskLevel = 3;
        this.taskDesc = "";
        this.levels = [1, 2, 3];
        this.modalIsOpen = false;
    }
    ToDoComponent.prototype.ngOnInit = function () {
        if (!JSON.parse(localStorage.getItem("tasks"))) {
            this.allTasks = this.toDoService.setInitialTasks();
            return;
        }
        this.allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    };
    ToDoComponent.prototype.openModal = function (task) {
        this.modalIsOpen = true;
        if (!task) {
            this.currentTask = null;
            return;
        }
        this.currentTask = this.allTasks.find(function (u) {
            return u.id == task.id;
        });
        this.taskTitle = this.currentTask.title;
        this.taskDesc = this.currentTask.desc;
        this.taskLevel = this.currentTask.level;
    };
    ToDoComponent.prototype.updateCompletedTasks = function (task) {
        // remove task from array
        task.status = !task.status;
        var allTasks = JSON.parse(localStorage.getItem("tasks"));
        if (task.status) {
            // this.remainingTasks.push(task);
            allTasks = allTasks.filter(function (item) {
                return item.id !== task.id;
            });
            localStorage.setItem("tasks", JSON.stringify(allTasks));
        }
        else {
            allTasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(allTasks));
        }
    };
    ToDoComponent.prototype.saveTask = function (e) {
        var _this = this;
        if (!this.taskTitle || !this.taskLevel || !this.taskDesc) {
            return;
        }
        if (this.currentTask) {
            this.allTasks = this.allTasks.map(function (u) {
                if (u.id == _this.currentTask.id) {
                    u.title = _this.taskTitle;
                    u.level = _this.taskLevel;
                    u.desc = _this.taskDesc;
                }
                return u;
            });
        }
        else {
            this.currentTask = {
                id: this.toDoService.generateId(),
                title: this.taskTitle,
                status: false,
                level: this.taskLevel,
                desc: this.taskDesc
            };
            this.allTasks.push(this.currentTask);
            this.taskDesc = '';
            this.taskLevel = 3;
            this.taskTitle = '';
        }
        localStorage.setItem("tasks", JSON.stringify(this.allTasks));
        this.modalIsOpen = false;
    };
    ToDoComponent.prototype.reset = function () {
        if (this.currentTask) {
            this.taskDesc = this.currentTask.desc;
            this.taskLevel = this.currentTask.level;
            this.taskTitle = this.currentTask.title;
        }
        else {
            this.taskDesc = '';
            this.taskLevel = 3;
            this.taskTitle = '';
        }
    };
    ToDoComponent.prototype.swapItems = function (idxToSwap, idxToSwapWith) {
        if (idxToSwap !== idxToSwapWith &&
            idxToSwap >= 0 &&
            idxToSwapWith >= 0 &&
            idxToSwap < this.allTasks.length &&
            idxToSwapWith < this.allTasks.length) {
            var temp = this.allTasks[idxToSwapWith];
            this.allTasks[idxToSwapWith] = this.allTasks[idxToSwap];
            this.allTasks[idxToSwap] = temp;
            localStorage.setItem("tasks", JSON.stringify(this.allTasks));
        }
    };
    ToDoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-to-do",
            template: __webpack_require__(/*! ./to-do.component.html */ "./src/app/components/to-do/to-do.component.html"),
            styles: [__webpack_require__(/*! ./to-do.component.css */ "./src/app/components/to-do/to-do.component.css")]
        }),
        __metadata("design:paramtypes", [_services_to_do_service__WEBPACK_IMPORTED_MODULE_1__["ToDoService"]])
    ], ToDoComponent);
    return ToDoComponent;
}());



/***/ }),

/***/ "./src/app/services/to-do.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/to-do.service.ts ***!
  \*******************************************/
/*! exports provided: ToDoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoService", function() { return ToDoService; });
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

var ToDoService = /** @class */ (function () {
    function ToDoService() {
        this.tasks = [
            { title: "Grocery", id: "1", status: false, level: 3, desc: "buy grocery" },
            { title: "Shopping", id: "2", status: false, level: 3, desc: "buy clothes" }
        ];
    }
    ToDoService.prototype.setInitialTasks = function () {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        return this.tasks;
    };
    ToDoService.prototype.generateId = function () {
        return ("_" +
            Math.random()
                .toString(36)
                .substr(2, 9));
    };
    ToDoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], ToDoService);
    return ToDoService;
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspace\toDoApp\toDoApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map