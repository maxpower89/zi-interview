import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from "rxjs";

@Injectable()
export class HierarchyService {

  private BASE_DOMAIN = environment.MEMBERS_API_BASE_DOMAIN;

  constructor(private http: HttpClient) { }

  getHierarchy(id:string)  {
    console.log(id)
    return this.http.get(`${this.BASE_DOMAIN}/hierarchy/${id}`);
  }

}
