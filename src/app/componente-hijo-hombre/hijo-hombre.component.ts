import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-hijo-hombre',
    templateUrl: './hijo-hombre.component.html',
})

export class HijoHombreComponent {

    hijo: any


    hijoForm = new FormGroup({
        nombre: new FormControl(''),
        apellido: new FormControl(''),
        fechaNacimiento: new FormControl(''),
        edad: new FormControl('')
    });

    constructor() { }

    ngOnInit(): void {
        this.initHijoForm();
    }

    initHijoForm() {
    }

    onChange(value: any) {
        console.log(value.value);
    }

}