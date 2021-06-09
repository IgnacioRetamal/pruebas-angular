import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html'
})

export class PersonaComponent implements OnInit {
  persona: any;
  retornaValor: any;
  personaForm: FormGroup
  genero: string;
  generos: any[] = [
    { value: '1', viewValue: 'Hombre' },
    { value: '2', viewValue: 'Mujer' }
  ];
  setState = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initPersonaForm()
  }
  initPersonaForm() {
    this.personaForm = this.fb.group({
      nombre: '',
      peso: '',
      genero: '',
      fechaNac: '',
      estadoCivil: ''
    });
  }

  setGenero(value: any) {
    if (value.value == '1') {
      this.personaForm.patchValue({
        genero: 'Hombre'
      })
    } else {
      if (value.value == '2') {
        this.personaForm.patchValue({
          genero: 'Mujer'
        })
      }
    }

  }
  //ASIGNO EL VALOR DEL SELECT
  onChange(value: any) {
    console.log(value.value)
  }
  //IGUALO VALOR DEL FORM A VARIABLE PERSONA
  onClick() {
    this.persona = this.personaForm.value;
  }

  recibePersona(event: string) {
    this.setState = true;
    this.retornaValor = event;

  }
}





