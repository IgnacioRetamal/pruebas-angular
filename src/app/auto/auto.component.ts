import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  autoForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.initAutoForm();

  }

  initAutoForm() {
    this.autoForm = this.fb.group({
      marca: [''],
      color: '',
      modelo: '',
      patente: ''
    })
  }

  cambiarDatos() {
    this.autoForm.setValue({
      marca: 'Ford',
      color: 'Gris',
      modelo: 'Focus',
      patente: 'AB366CV'
    });
  }

  cambiarColor() {
    this.autoForm.patchValue({
      color: 'Blanco'
    })
  }



}