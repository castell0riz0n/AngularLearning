import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CoreEnvironment } from '@angular/core/src/render3/jit/compiler_facade_interface';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiBaseUrl;
  constructor(
    private http: HttpClient
    ) { }

    getUserlist(): Observable<any> {
      return this.http.get(`${this.baseUrl}/users`);
    }

    getUserPosts(id): Observable<any> {
      return this.http.get(`${this.baseUrl}/posts?userId=${id}`);
    }

}
