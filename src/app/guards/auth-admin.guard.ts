import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  private readonly notifier: NotifierService;
  constructor(private router: Router, notifierService: NotifierService) {
    this.notifier = notifierService; }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (localStorage.getItem('admin')) {
      return true;
    } else {
      this.router.navigate([''])
      this.notifier.notify('error', 'Nie posiadasz dostępu do tej zakładki');
      return false;
    }
  }
}
