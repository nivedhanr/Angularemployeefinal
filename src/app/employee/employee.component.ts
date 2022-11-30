import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  empid=""
  password=""
  constructor(private route:Router){}
  readValues=()=>
  {
    let data:any={"empid":this.empid,"password":this.password}
    console.log(data)
    if(this.empid=="1122" && this.password=="12345")
    {
      
      this.route.navigate(['/navemployee'])
    }
    else{
      alert("Invalid credentials")
    }

  }

}
