import { CommonService } from './services/common.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jsonServerCrud';
  allUser: any = []
  isEdit: boolean = false;
  userObj = {
    name: '',
    mobile: '',
    email: '',
    password: '',
    id: ''
  }
  @ViewChild('myForm') form: any;
  constructor(private service: CommonService) { }
  ngOnInit() {
    this.getLatestUser()
  }

  addUser(formObject) {
    this.service.createUser(formObject).subscribe(res => {
      console.log(res)
      this.getLatestUser()
      this.form.reset();
    })

  }

  getLatestUser() {
    this.service.getAllUser().subscribe(res => {
      this.allUser = res
    })
  }

  editUser(user) {
    this.isEdit = true
    this.userObj = user
  }

  deleteUser(user) {
    this.service.deleteUser(user).subscribe(res => {
      console.log(user)
      this.getLatestUser()
    })
  }

  updateUser() {
    this.isEdit = !this.isEdit;
    this.service.updateUser(this.userObj).subscribe(res => {
      console.log(res)
      this.getLatestUser()
      this.form.reset();
    })
  }
}
