import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess} from "../actions";
import {catchError, map, mergeMap, tap} from "rxjs/operators";
import {UsuarioService} from "../../services/usuario.service";
import {Observable, of, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {Usuario} from "../../models/usuario.model";

@Injectable()
export class UsuariosEffects {

  constructor(
    private actions$: Actions,
    private ussersService: UsuarioService
  ) {
  }

  cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
      ofType(cargarUsuarios),
      mergeMap(() => this.ussersService.getUsers()
        .pipe(
          map((usuarios: Array<Usuario>) => cargarUsuariosSuccess({ usuarios: usuarios }) ),
          catchError((err: HttpErrorResponse) => of(cargarUsuariosError({ payload: err })) )
        )
      )
    )
  )

}
