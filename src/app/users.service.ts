import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl  = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
   return this.httpClient.get<User[]>(this.apiUrl)
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}/${id}`);
   }

   addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user);
   }
}
