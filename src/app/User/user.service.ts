import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './I-user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userDetails!: IUser;
    userName: any;
    id: any;

    storeUserDetails(userDetails: IUser) {
        this.userDetails = userDetails;
        this.userName = userDetails.username;
        this.id = userDetails.id;
    }

    getUserDetails(): IUser{
        return this.userDetails;
    }
    getUserName(){
        return this.userName;
    }
    getUserId(){
        return this.id;
    }

}
