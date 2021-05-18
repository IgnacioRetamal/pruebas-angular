import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-hijo-mujer',
    templateUrl: './hijo-mujer.component.html',
})

export class HijoMujerComponent {

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