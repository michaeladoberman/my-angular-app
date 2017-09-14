import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
  getData() : object[] {
    return [
       {title: "Home", url: 'home'},
       {title: "About", url: 'about'},
       {title: "Products", url: 'products'},
       {title: "Contact", url: 'contacts'}
     ];
  }

}



  // getMenu() : string[] {
  //   return ["Home", "About", "Products", "Contact"];
  // }
