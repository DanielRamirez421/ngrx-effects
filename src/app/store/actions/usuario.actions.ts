import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuario = createAction('[Usario] cargarUsuario', props<{ id: string }>());
export const cargarUsuarioSuccess = createAction('[Usario] cargarUsuarioSuccess', props<{ usuario: Usuario }>());
export const cargarUsuarioError = createAction('[Usario] cargarUsuarioError', props<{ payload: any }>());
