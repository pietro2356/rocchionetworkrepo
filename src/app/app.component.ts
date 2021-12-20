import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'rocchionetwork.com';

  changeColor(color:string){
    switch(color){
      case 'Purple':
        alert('Purple');
        break;
      case 'Peach':
        alert('Peach');
        break;
      case 'Sunset':
        alert('Sunset');
        break;
      case 'Night':
        alert('Night');
        break;
      case 'Synthwave':
        alert('Synthwave');
        break;
      case 'Grass':
        alert('Grass');
        break;
      case 'Ocean':
        alert('Ocean');
        break;
      default: 
        alert('none');
    }
  }
}
