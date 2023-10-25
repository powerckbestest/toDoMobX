import { makeAutoObservable } from 'mobx';
import type { ToDoType, ToDos } from '../types/ToDoType';

class ToDo {
  toDos: ToDos = [
    { id: 1, name: 'Cходить в магазин', status: false },
    { id: 2, name: 'Выгулять собаку', status: false },
    { id: 3, name: 'Вынести мусор', status: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(toDo: ToDoType): void {
    this.toDos.push(toDo);
  }

  removeTodo(id: number): void {
    this.toDos = this.toDos.filter((el) => el.id !== id);
  }

  toggleTodo(id:number): void {
    this.toDos = this.toDos.map((el) => el.id === id? {...el, status: !el.status}: el)
  }
}

export default new ToDo();
