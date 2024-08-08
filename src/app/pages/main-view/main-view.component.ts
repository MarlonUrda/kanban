import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Column } from '../../models/column.model';
import { Board } from '../../models/board.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [CdkDropList, CdkDrag, NgFor],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss',
})
export class MainViewComponent implements OnInit {
  board: Board = new Board('Test', [
    new Column('Ideas', ['Something', 'Another thing', 'Yet another thing']),
    new Column('To Do', ['Do this', 'Do that', 'And this']),
    new Column('In Progress', [
      'Work on this',
      'Work on that',
      'Work on this one',
    ]),
    new Column('Done', ['Done this', 'Done that', 'Done this one']),
  ]);

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
