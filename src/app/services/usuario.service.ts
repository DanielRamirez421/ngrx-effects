import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url_api = 'https://reqres.in/api';

  constructor( private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(`${this.url_api}/users?per_page=6`)
      .pipe(
        map((value: any) => value['data'])
      );
  }

}
