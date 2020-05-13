import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private Http: HttpClient) { }

  getAllUser() {
    return this.Http.get("http://localhost:3000/users")
  }
  createUser(user) {
    return this.Http.post("http://localhost:3000/users", user)
  }
  updateUser(user) {
    return this.Http.put("http://localhost:3000/users/" + user.id, user)
  }
  deleteUser(user) {
    return this.Http.delete("http://localhost:3000/users/" + user.id)
  }
}
