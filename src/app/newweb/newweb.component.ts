import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newweb',
  templateUrl: './newweb.component.html',
  styleUrls: ['./newweb.component.scss']
})
export class NewwebComponent implements OnInit {
  
  act:any=3 
  imageO:any;
  constructor() { }

  ngOnInit(): void {
  }

  

  clicko(data:any){
    
    if(data==4){
      this.act=3;
    }
      
    if(data==3){
     this.act=4;
   }
   }
}
