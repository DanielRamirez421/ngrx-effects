import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  cargarUsuario,
  cargarUsuarioError,
  cargarUsuarioSuccess
} from "../actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { UsuarioService } from "../../services/usuario.service";
import { of } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { Usuario } from "../../models/usuario.model";

@Injectable()
export class UsuarioEffects {

  constructor(
    private actions$: Actions,
    private ussersService: UsuarioService
  ) {
  }

  cargarUsuario$ = createEffect(
    () => this.actions$.pipe(
      ofType(cargarUsuario),
      mergeMap(( action ) => this.ussersService.getUserById( action.id )
        .pipe(
          map((usuario: Usuario) => cargarUsuarioSuccess({ usuario: usuario }) ),
          catchError((err: HttpErrorResponse) => of(cargarUsuarioError({ payload: err })) )
        )
      )
    )
  )

}
