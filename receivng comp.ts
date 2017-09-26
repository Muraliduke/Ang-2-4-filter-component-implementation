import { Component } from '@angular/core';
import { MissionService } from './service';
import { Subscription }   from 'rxjs/Subscription';
import {FilterPipe, SortByPipe} from './pipe';
@Component({
  selector: 'my-content',
  templateUrl: './content.component.html',
  styleUrls: [ './content.component.css' ]
})
export class ContentsComponent  {
   subscription: Subscription;
   recv :any;
   filVal : any;

  constructor(private missionService : MissionService){
    
    this.missionService.caseNumber$.subscribe(
            data => {
                console.log('Sibling2Component-received from sibling1: ' );
console.log(data );
this.filVal = data;
            })          
 
  }
  
  }
