import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'rocchionetwork.com';
  color = "linear-gradient(to right, #6889FF, #C668FF)";

  changeColor(color:string){
    //console.log(color);
    switch(color){
      case 'Purple':
        this.color = "linear-gradient(to right, #6889FF, #C668FF)";
        break;
      case 'Peach':
        this.color = "linear-gradient(to right, #FF6868, #FF68DE)";
        break;
      case 'Sunset':
        this.color = "linear-gradient(to right, #FDC639, #FF7C60)";
        break;
      case 'Night':
        this.color = "linear-gradient(to right, #403F44, #1E1B32)";
        break;
      case 'Synthwave':
        this.color = "linear-gradient(to right, #FF9E68, #FF68DE)";
        break;
      case 'Grass':
        this.color = "linear-gradient(to right, #45C270, #21CDC3)";
        break;
      case 'Ocean':
        this.color = "linear-gradient(to right, #5B7FFF, #33CCFC)";
        break;
      default: 
        alert('none');
    }
  }
}
