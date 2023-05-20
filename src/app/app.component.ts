import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class  AppComponent{
  title = 'Tesztelendo';
  userName="";
  adat="Próba";

  adatok:any=["alma"];

  add(value:string){
    console.log(value);
    this.adatok.push(value);
  }
  delete(){
    this.adatok=[];
  }
}
