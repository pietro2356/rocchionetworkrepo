import { Component, ViewEncapsulation, OnInit, OnDestroy, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {

  title = 'rocchionetwork.com';

  changeColor(color:string){
    switch(color){
      case 'Purple':
        alert(color);
        break;
      case 'Peach':
        alert(color);
        break;
      case 'Sunset':
        alert(color);
        break;
      case 'Night':
        alert(color);
        break;
      case 'Synthwave':
        alert(color);
        break;
      case 'Grass':
        alert(color);
        break;
      case 'Ocean':
        alert(color);
        break;
      default: 
        alert('none');
    }
  }
}
