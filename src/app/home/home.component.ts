import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 
  btnText: string = "Add Item";
  listText: string = "New List item"

  list = [];


  constructor() { }

  ngOnInit() {
   
  }

  addItem(){
    this.list.push(this.listText);
    this.listText = '';
  }

}
