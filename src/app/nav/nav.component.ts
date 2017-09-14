import { Component } from '@angular/core'
import { NavService} from './nav.service'

@Component({
    selector: 'navbar',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.style.css'],
    providers: [NavService]
})

export class NavComponent {

  links;

  constructor(private _navService: NavService) {

  }

  ngOnInit() {

    this.links = this._navService.getData();
  }


}

// @Component({
//     selector: 'navbar',
//     template: `<div>
//                   <h2> {{ title }} </h2>
//                </div>
//                `,
//     providers: [NavService]

// })

// export class NavComponent {

//   title: string;

//   constructor(private _navService: NavService){

//   }

//   ngOnInit(){
//     this.title = this._navService.someMethod();
//     console.log(this.title);
//   }

// }
