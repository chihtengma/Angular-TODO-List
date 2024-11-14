import { Component, Input, EventEmitter, Output } from "@angular/core";

import { User } from "./user.model";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent {
  // Decorator
  @Input() user?: User;
  @Input() selected?: boolean;
  @Output() select = new EventEmitter<string>();

  // Signal
  //    id = input<string>("default-id"); // Default value to ensure non-undefined
  //    avatar = input<string>("default-avatar.png");
  //    name = input<string>("default-name");
  //    select = output<string>();

  // Decorator
  get imagePath() {
    return "/assets/users/" + this.user?.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user?.id);
  }

  // Signal
  //    imagePath = computed(() => "/assets/users/" + this.avatar());

  //    onSelectUser() {
  //       this.select.emit(this.id());
  //    }
}
