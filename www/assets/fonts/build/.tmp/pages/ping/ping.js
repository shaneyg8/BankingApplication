var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { AuthService } from '../../services/auth/auth.service';
import 'rxjs/add/operator/map';
export var PingPage = (function () {
    function PingPage(http, authHttp, auth) {
        this.http = http;
        this.authHttp = authHttp;
        this.auth = auth;
    }
    PingPage.prototype.ping = function () {
        var _this = this;
        // Change the endpoint up for
        // one that points to your own server.
        this.http.get('http://localhost:3001/ping')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.message = data.text; }, function (err) { return _this.error = err; });
    };
    PingPage.prototype.securedPing = function () {
        var _this = this;
        // Here we use authHttp to make an authenticated
        // request to the server. Change the endpoint up for
        // one that points to your own server.
        this.authHttp.get('http://localhost:3001/secured/ping')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.message = data.text; }, function (err) { return _this.error = err; });
    };
    PingPage = __decorate([
        Component({template:/*ion-inline-start:"/home/pancakemutiny/Desktop/collegeProjects/bankingApplication/src/pages/ping/ping.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Ping</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="ping">\n  <h3 *ngIf="!auth.authenticated()">To send a secure ping, navigate to the profile view and log in.</h3>\n  <button ion-button block (click)="ping()">Ping</button>\n  <button ion-button block (click)="securedPing()" *ngIf="auth.authenticated()">Secured Ping</button>\n  \n  <p>{{ message }}</p>\n  \n  <p>{{ error }}</p>\n</ion-content>\n'/*ion-inline-end:"/home/pancakemutiny/Desktop/collegeProjects/bankingApplication/src/pages/ping/ping.html"*/,
        }), 
        __metadata('design:paramtypes', [Http, AuthHttp, AuthService])
    ], PingPage);
    return PingPage;
}());
//# sourceMappingURL=ping.js.map