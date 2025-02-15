import { Component } from '@angular/core';

type product={
'id':number,
'name':string,
'price':number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='';
  phone=[
    {'id':1,'name':'iphone 14 pro','price':3000},
    {'id':2,'name':'samsunf s24','price':1000},
    {'id':3,'name':'nokia','price':1500},
    {'id':4,'name':'sony','price':1200}



  ]
  search:string="";

  find(phone:any[]){

return phone.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()))
  }
}