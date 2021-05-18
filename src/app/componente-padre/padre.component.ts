import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-padre',
    templateUrl: './padre.component.html',
})

export class PadreComponent implements OnInit{
    
    padre : any

    padreForm = new FormGroup ({
        nombre: new FormControl(''),
        apellido: new FormControl(''),
        edad: new FormControl(''),
        dni: new FormControl('')
    });

    constructor(){}

    initPadreForm(){}

    ngOnInit(): void {
        this.initPadreForm();
    }

    setHijo(){
        this.padre = this.padreForm.value;
    }
    
}