import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../models/usuario.model";
import {Store} from "@ngrx/store";
import {cargarUsuarios} from "../../store/actions";
import {AppState} from "../../store/app.reducers";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  loading = false;
  error: any;
  usuarios: Array<Usuario> = [];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(cargarUsuarios());
    this.store.select('usuarios').subscribe(({ users, loading, error }) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    });
  }

}
