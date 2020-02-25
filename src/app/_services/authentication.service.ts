import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(loginForm) {
        const headers = new HttpHeaders();
        return this.http.post<User>(`http://localhost:8080/authenticate`,loginForm.value,{ headers })
            .pipe(map(response => {
                localStorage.setItem('jwtAuthString', 'Bearer '+ response.jwt);
                localStorage.setItem('currentUser', JSON.stringify(response));
                this.currentUserSubject.next(response);
                return response;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('jwtAuthString');
        this.currentUserSubject.next(null);
    }
}