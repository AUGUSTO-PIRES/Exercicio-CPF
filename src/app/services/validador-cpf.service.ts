import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CpfValidador } from '../module/cpf-validador';

@Injectable({
  providedIn: 'root'
})
export class ValidadorCpfService {

private url:string = "http://localhost:3000/cpfs"

  constructor(private http: HttpClient) { }

  public cpfValidador(): Observable<CpfValidador>{
    return this.http.get<CpfValidador>(this.url).pipe(
      res => res,
      error => error
    )
  }
}
