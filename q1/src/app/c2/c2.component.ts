import { Component } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component {
  data={
    fname:'',
    lname:'',
    email:'',
    phone:''
  }
  submit=false
  onSubmit()
  {
    this.submit=true;
  }
}
