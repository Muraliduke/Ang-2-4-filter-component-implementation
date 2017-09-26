import { Component } from '@angular/core';
import {FilterPipe, SortByPipe} from './pipe';
import { MissionService } from './service';
@Component({
  selector: 'my-input',
  templateUrl: './input.component.html',
  styleUrls: [ './input.component.css' ]
})
export class InputComponent  {
  constructor(private missionService : MissionService){

  }
 
  clicked(a){
    console.log("clicked");
    console.log(a)
this.missionService.publishData(a);
  }
  
}
