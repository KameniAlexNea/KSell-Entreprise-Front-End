import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/user/user';
// var User = require('./../../models/')

@Injectable({
    providedIn: 'root'
})
export class UserService {


    constructor() {
    }

    public login(): Promise<User> {
        // new Promise
        return null
    }
}
