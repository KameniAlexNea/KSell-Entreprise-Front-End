import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from 'src/app/classes/user/user';
import { Country } from 'src/app/classes/country/country';


@Injectable({
    providedIn: 'root'
})
export class ApiService {


    private _base: string = "http://localhost:3001"
    private _baerer: string = ""
    private _country: string = "https://trial.mobiscroll.com/content/countries.json"


    /**
     * Getter country
     * @return {string }
     */
    public get country(): string {
        return this._country;
    }

    /**
     * Setter country
     * @param {string } value
     */
    public set country(value: string) {
        this._country = value;
    }



    constructor(private httpClient: HttpClient) { }

    public login(pseudo: string, password: string): Promise<User> {
        return this.httpClient.post<User>(this.base + "/users/login", { pseudo: pseudo, password: password })
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
            .toPromise()
    }

    public register(data): Promise<any> {
        return this.httpClient.post(this.base + "/users/signup", data)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
            .toPromise()
    }

    public verified(data): Promise<any> {
        // /signup/verification
        return this.httpClient.post(this.base + "users/signup/verification", data)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
            .toPromise()
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
                console.log(error)
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };

    public getCountry(): Promise<Country[]> {
        return this.httpClient.get<Country[]>(this.country)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
            .toPromise()
    }

    /**
       * Getter base
       * @return {string }
       */
    public get base(): string {
        return this._base;
    }

    /**
     * Setter base
     * @param {string } value
     */
    public set base(value: string) {
        this._base = value;
    }

}
