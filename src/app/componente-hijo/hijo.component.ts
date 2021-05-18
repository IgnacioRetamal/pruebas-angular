import { Component, Input} from '@angular/core';

@Component({
    selector: 'app-hijo',
    templateUrl: './hijo.component.html'
})

export class HijoComponent{
    
    @Input() hijo:any

}