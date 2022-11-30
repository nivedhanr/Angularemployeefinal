import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent {
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""
  constructor(private api:ApiService){}



  readValues=()=>
  {
    let data:any={"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
    console.log(data)
    this.api.addcourse(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.status=="success"){
          alert("Friend added successfully")
          this.friendName=""
          this.friendNickName=""
          this.name=""
          this.DescribeYourFriend=""
          
        }
        else{
          alert("Something went wrong")
        }
      }
    )
    }

  


}
