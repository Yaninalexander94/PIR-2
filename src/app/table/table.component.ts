import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public list = [
    {
      id: 1,
      name: 'Test',
      weight: 0.23,
      date: '2022-02-03',
    },
    {
      id: 2,
      name: 'Test2',
      weight: 1.73,
      date: '2021-12-03',
    },
    {
      id: 3,
      name: 'Test3',
      weight: 5,
      date: '2022-11-12',
    },
    {
      id: 4,
      name: 'Test4',
      weight: 1.73,
      date: '2021-12-03',
    },
    {
      id: 5,
      name: 'Test5',
      weight: 5,
      date: '2022-11-12',
    }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
