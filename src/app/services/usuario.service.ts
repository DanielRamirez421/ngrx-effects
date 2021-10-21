import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Usuario } from "../models/usuario.model";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url_api = 'https://reqres.in/api';

  constructor( private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<{data: Array<Usuario>}>(`${this.url_api}/users?per_page=6&delay=3`)
      .pipe( map((value: any) => value['data']) );
  }

}
