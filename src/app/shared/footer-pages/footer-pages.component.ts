import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CpfValidador } from 'src/app/module/cpf-validador';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer-pages',
  templateUrl: './footer-pages.component.html',
  styleUrls: ['./footer-pages.component.scss']
})
export class FooterPagesComponent {
@Input('userValid') userValid: boolean = false
@Output('clear') clear= new EventEmitter<any>()

resetCpfValue(){
  this.clear.emit()
}

openTerms(){
  Swal.fire({
    text: 'Para acessar as informações, apresente um CPF válido compativel com o usuário',
    confirmButtonColor: "#007bff",
    confirmButtonText: "OK",
    width: 500,
  })
}

}
