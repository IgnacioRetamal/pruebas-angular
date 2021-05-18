import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-padre',
    templateUrl: './padre.component.html',
})

export class PadreComponent implements OnInit {
    padre: any
    sexo: string | undefined;

    showHombre: boolean = false
    showMujer: boolean = false

    sexos: any[] = [
        { value: 'h', viewValue: 'Hombre' },
        { value: 'm', viewValue: 'Mujer' },
    ];

    padreForm = new FormGroup({
        nombre: new FormControl(''),
        apellido: new FormControl(''),
        dni: new FormControl(''),
        edad: new FormControl(''),
    });

    constructor() { }

    ngOnInit(): void {
        this.initPadreForm();
    }

    initPadreForm() {
    }

    setSexo(value: any) {
        debugger
        if (value.value == 'h') {
            this.showHombre = true;
            this.showMujer = false;
        } else {
            this.showMujer = true;
            this.showHombre = false;
        }
    }

}