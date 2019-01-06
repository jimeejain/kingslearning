import { Injectable } from "@angular/core";
import { ITodo } from "../../data-model/to-do-model";

@Injectable({
  providedIn: "root"
})
export class ToDoService {
  private tasks: ITodo[] = [
    { title: "Grocery", id: "1", status: false, level: 3, desc:"buy grocery" },
    { title: "Shopping", id: "2", status: false, level: 3,  desc:"buy clothes"}
  ];

  constructor() {}

  setInitialTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
    return this.tasks;
  }

  generateId() {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }
}
