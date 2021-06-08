import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {

  menuOpen: boolean = true;


  act:any=3 
  imageO:any;
  constructor() { }

  ngOnInit(): void {
  }

   flip(event:any){
    var element = event.currentTarget;
    if (element.className === "card") {
      if(element.style.transform == "rotateY(180deg)") {
        element.style.transform = "rotateY(0deg)";
      }
      else {
        element.style.transform = "rotateY(180deg)";
      }
    }
  }
  

  clicko(data:any){
    
   if(data==4){
     this.act=3;
   }
     
   if(data==3){
    this.act=4;
  }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
}

 
}


