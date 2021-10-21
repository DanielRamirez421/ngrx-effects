import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuarios = createAction('[Usarios] cargarUsuarios');
export const cargarUsuariosSuccess = createAction('[Usarios] cargarUsuariosSuccess', props<{usuarios: Usuario[]}>());
export const cargarUsuariosError = createAction('[Usarios] cargarUsuariosError', props<{payload: any}>());