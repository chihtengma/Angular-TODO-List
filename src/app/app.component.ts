import { User } from "./user/user.model";
import { Component } from "@angular/core";

import { DUMMY_USERS } from "./user/dummy-users";


@Component({
   selector: "app-root",
   templateUrl: "./app.component.html",
   styleUrl: "./app.component.css"
})

export class AppComponent {
   users = DUMMY_USERS;
   selectedUserId?: string;

   trackById(index: number, user: User): string {
      return user.id;
   }

   handleUserSelect(id: string) {
      this.selectedUserId = id;
   }

   get selectedUser() {
      return this.users.find((user) => user.id === this.selectedUserId);
   }
}
