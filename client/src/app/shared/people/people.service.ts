import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  API = '//localhost:8080';
  Peoples = this.API + '/peoples';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/backend');
  }

  get(id: string) {
    return this.http.get(this.Peoples + '/' + id);
  }

  save(people: any): Observable<any> {
    let result: Observable<Object>;
    if (people['href']) {
      result = this.http.put(people.href, people);
    } else {
      result = this.http.post(this.API, people);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }

}
