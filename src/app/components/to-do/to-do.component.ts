import { Component, OnInit } from "@angular/core";
import { ITodo } from "../../../data-model/to-do-model";
import { ToDoService } from "../../services/to-do.service";

@Component({
  selector: "app-to-do",
  templateUrl: "./to-do.component.html",
  styleUrls: ["./to-do.component.css"]
})
export class ToDoComponent implements OnInit {
  allTasks: ITodo[];
  completedTasks: ITodo[];
  currentTask: ITodo;
  taskTitle = "";
  taskLevel = 3;
  taskDesc = "";
  levels= [1,2,3];
  modalIsOpen = false;
  constructor(private toDoService: ToDoService) {}

  ngOnInit() {
    if (!JSON.parse(localStorage.getItem("tasks"))) {
      this.allTasks = this.toDoService.setInitialTasks();
      return;
    }
    this.allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  }

  openModal(task?: ITodo) {
    this.modalIsOpen = true;
    if (!task) {
      this.currentTask = null;
      return;
    }
    this.currentTask = this.allTasks.find(u => {
      return u.id == task.id;
    });

    this.taskTitle = this.currentTask.title;
    this.taskDesc = this.currentTask.desc;
    this.taskLevel = this.currentTask.level;
  }

  updateCompletedTasks(task: ITodo) {
    // remove task from array
    task.status = !task.status;
    let allTasks = JSON.parse(localStorage.getItem("tasks"));
    if (task.status) {
      // this.remainingTasks.push(task);
      allTasks = allTasks.filter(item => {
        return item.id !== task.id;
      });
      localStorage.setItem("tasks", JSON.stringify(allTasks));
    } else {
      allTasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(allTasks));
    }
  }

  saveTask(e) {
    if (!this.taskTitle || !this.taskLevel || !this.taskDesc) {
      return;
    }

    if (this.currentTask) {
      this.allTasks = this.allTasks.map(u => {
        if (u.id == this.currentTask.id) {
          u.title = this.taskTitle;
          u.level = this.taskLevel;
          u.desc = this.taskDesc;
        }
        return u;
      });
    } else {
      this.currentTask = {
        id: this.toDoService.generateId(),
        title: this.taskTitle,
        status: false,
        level: this.taskLevel,
        desc: this.taskDesc
      };
      this.allTasks.push(this.currentTask);
      this.taskDesc = '';
      this.taskLevel = 3;
      this.taskTitle = ''
    }

    localStorage.setItem("tasks", JSON.stringify(this.allTasks));
    this.modalIsOpen = false;
  }

  reset() {
    if(this.currentTask) {
      this.taskDesc = this.currentTask.desc;
      this.taskLevel = this.currentTask.level;
      this.taskTitle = this.currentTask.title
    } else {
      this.taskDesc = '';
      this.taskLevel = 3;
      this.taskTitle = ''
    }
  }

  swapItems(idxToSwap, idxToSwapWith) {
    if (
      idxToSwap !== idxToSwapWith &&
      idxToSwap >= 0 &&
      idxToSwapWith >= 0 &&
      idxToSwap < this.allTasks.length &&
      idxToSwapWith < this.allTasks.length
    ) {
      const temp = this.allTasks[idxToSwapWith]
      this.allTasks[idxToSwapWith] = this.allTasks[idxToSwap]
      this.allTasks[idxToSwap]  = temp
      localStorage.setItem("tasks", JSON.stringify(this.allTasks));
    }
  }
}
