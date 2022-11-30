import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empregister',
  templateUrl: './empregister.component.html',
  styleUrls: ['./empregister.component.css']
})
export class EmpregisterComponent {
  empid=""
  firstname=""
  lastname=""
  houseno=""
  housename=""
  streetname=""
  pincode=""
  district=""
  state=""
  country=""
  mobileno=""
  emailid=""
  parentname=""
  gender=""
  highestdegree=""
  yearofexperience=""
  dateofjoining=""
  username=""
  password=""
  confirmpass=""
  constructor(private route:Router){}
  readValues=()=>
  {
    let data:any={

      "employeeid":this.empid,

      "firstname":this.firstname,

      "lastname":this.lastname,

      "houseno":this.houseno,

      "housename":this.housename,

      "streetname":this.streetname,

      "pincode":this.pincode,

      "district":this.district,

      "state":this.state,

      "country":this.country,

      "mobile":this.mobileno,

      "email":this.emailid,

      "parentname":this.parentname,

      "gender":this.gender,

      "highestdegree":this.highestdegree,

      "yearofexperience":this.yearofexperience,

      "dateofjoining":this.dateofjoining,

      "username":this.username,

      "password":this.password,

      "confirmpassword":this.confirmpass

    }
    console.log(data)
    if(this.confirmpass==this.password) {
      alert("Successfully registered")
      this.confirmpass=""
      this.country=""
      this.dateofjoining=""
      this.district=""
      this.emailid=""
      this.empid=""
      this.firstname=""
      this.gender=""
      this.highestdegree=""
      this.housename=""
      this.houseno=""
      this.lastname=""
      this.mobileno=""
      this.parentname=""
      this.password=""
      this.pincode=""
      this.state=""
      this.streetname=""
      this.username=""
      this.yearofexperience=""
      
    } else {
      alert("Password and confirmpassword doesnot match")
    }
  }


}
