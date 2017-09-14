import {Component} from '@angular/core';
import { ParagraphComponent } from './paragraph.component';
import { MainService } from './main.service';


@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.style.css'],
    providers: [MainService]

})

export class MainComponent {

  constructor(private _mainService: MainService){

  }




}
