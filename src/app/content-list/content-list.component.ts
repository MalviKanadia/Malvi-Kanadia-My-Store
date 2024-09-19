import { Component } from '@angular/core';
import {User} from "../Shared/Modules/user";
import {NgForOf} from "@angular/common";
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    NgForOf,
    NgForOf,
    ContentListItemComponent,
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent {

  displayedColumns = ['id','productName', 'quantity', 'color', 'giftWrap'];

  userList: User[] =[
    {id: 1, productName:"WaterBottle", quantity:1, color:"cyan", giftWrap:false,},
    {id: 2, productName:"Bag", quantity:1, color:"black", giftWrap:false,},
    {id:3, productName:"LunchBox", quantity:2, color:"biege", giftWrap:true},
    {id:4,productName:"Box", quantity:4, color:"purple", giftWrap:true}];

    selectedItem?: User;

    selectItem(item: User):void{
      this.selectedItem = item;
    }


}
