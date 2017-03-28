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
import { AuthService } from '../../services/auth/auth.service';
export var ProfilePage = (function () {
    // We need to inject AuthService so that we can
    // use it in the view
    function ProfilePage(auth) {
        this.auth = auth;
    }
    ProfilePage = __decorate([
        Component({template:/*ion-inline-start:"/home/pancakemutiny/Desktop/collegeProjects/bankingApplication/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <button *ngIf="!auth.authenticated()" ion-button block (click)="auth.login()">Login</button>\n\n  \n  <ion-card *ngIf="auth.authenticated()">\n\n    <ion-item *ngIf="auth.user">\n      <ion-avatar item-left>\n        <img src="{{ auth.user.picture }}">\n      </ion-avatar>\n      <h2>{{ auth.user.nickname }}</h2>\n      <p>{{ auth.user.email }}</p>\n    </ion-item>\n  \n  </ion-card>\n  \n  <button ion-button block (click)="auth.logout()" *ngIf="auth.authenticated()">Logout</button>\n  \n</ion-content>\n'/*ion-inline-end:"/home/pancakemutiny/Desktop/collegeProjects/bankingApplication/src/pages/profile/profile.html"*/,
        }), 
        __metadata('design:paramtypes', [AuthService])
    ], ProfilePage);
    return ProfilePage;
}());
//# sourceMappingURL=profile.js.map