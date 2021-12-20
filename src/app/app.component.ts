import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {

  constructor(){
    document.body.style.background = "background-image: linear-gradient(to right, #6889FF, #C668FF);";
  }
  ngOnDestroy(){
    document.body.style.background = "#FF0000";
  }

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
