import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class Globals {
    nick: string ;
    apiUrl = 'http://localhost:3000';
    tokenUsuario: string;
    idProfesor: string;
}