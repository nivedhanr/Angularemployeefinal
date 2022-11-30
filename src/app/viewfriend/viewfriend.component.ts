import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewfriend',
  templateUrl: './viewfriend.component.html',
  styleUrls: ['./viewfriend.component.css']
})
export class ViewfriendComponent {
  data:any=[]
  constructor(private api:ApiService){
    api.fetchfriend().subscribe((response)=>{
      this.data=response;

    }
    )
  }
  
    
  
  
}
