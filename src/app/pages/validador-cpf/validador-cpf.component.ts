import { CpfValidador } from './../../module/cpf-validador';
import { ValidadorCpfService } from './../../services/validador-cpf.service';
import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validador-cpf',
  templateUrl: './validador-cpf.component.html',
  styleUrls: ['./validador-cpf.component.scss']
})
export class ValidadorCpfComponent implements OnInit{
cpfVerificado: boolean = false
public cpfList: CpfValidador | any
cpfValue: string = '';
buttonClick:boolean = false
cpfClient: CpfValidador = {
  id: 0,
  cpf: "",
  nome: '',
  contaAplicacao: '',
  contaCorrente: ''
}
checkCpf:boolean = false;
userValid: boolean = false;

constructor(private cpfService: ValidadorCpfService){

}



  ngOnInit(): void {
   this.cpfService.cpfValidador().subscribe(
    res => this.cpfList = res,
    error => error
   )
  }

validarUser(){
this.userValid = false;
this.cpfVerificado = this.checkCpf;
this.clientVerificator()
  if(this.cpfVerificado === true && this.cpfValue === this.cpfClient.cpf){
    this.userValid = true;
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: 'Usuário Cadastrado'
    })
  }else if(this.cpfVerificado === true && this.cpfValue !== this.cpfClient.cpf){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'warning',
      title: 'Usuário não consta no Sistema'
    })
  }else{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'error',
      title: 'CPF Inválido'
    })
  }
}

clear(element: any){
  this.cpfValue = '';
  this.userValid = false;
  console.log(element)
}

validarCPF(cpf:any) {
	cpf = cpf.replace(/[^\d]+/g,'');
	if(cpf == '') return false;
	// Elimina CPFs invalidos conhecidos
	if (cpf.length != 11 ||
		cpf == "00000000000" ||
		cpf == "11111111111" ||
		cpf == "22222222222" ||
		cpf == "33333333333" ||
		cpf == "44444444444" ||
		cpf == "55555555555" ||
		cpf == "66666666666" ||
		cpf == "77777777777" ||
		cpf == "88888888888" ||
		cpf == "99999999999")
			return false;
	// Valida 1o digito
	let add = 0;
	for (let i=0; i < 9; i ++)
		add += parseInt(cpf.charAt(i)) * (10 - i);
		let rev = 11 - (add % 11);
		if (rev == 10 || rev == 11)
			rev = 0;
		if (rev != parseInt(cpf.charAt(9)))
			return false;
	// Valida 2o digito
	add = 0;
	for (let i = 0; i < 10; i ++)
		add += parseInt(cpf.charAt(i)) * (11 - i);
	rev = 11 - (add % 11);
	if (rev == 10 || rev == 11)
		rev = 0;
	if (rev != parseInt(cpf.charAt(10)))
		return false;
	return true;
}


clientVerificator(){
this.cpfList.forEach( (element: { id:number, cpf: string, nome:string, contaAplicacao:string, contaCorrente:string }) => {
  element.cpf = element.cpf.replace(/[^\d]+/g,'');
  if(this.cpfValue == element.cpf){
    this.cpfClient = element
    this.buttonClick = true
  }
});
}

}

