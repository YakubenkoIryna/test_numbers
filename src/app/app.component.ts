import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  count: number;

  numbers = [
    ['0', '0', '0', '1', '1', '0', '0', '0'],
    ['0', '1', '0', '0', '1', '1', '1', '0'],
    ['0', '1', '1', '0', '0', '0', '1', '0'],
    ['0', '0', '0', '0', '0', '0', '1', '0'],
    ['1', '0', '1', '1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '1', '0'],
  ];


  numberOfItems(grid: string[][]): number {
    const copyStartArray = grid.map(row => [...row]);
    this.count = 0;

    if (grid.length === 0) {
      return 0;
    }

    function checkNeighbour(i: number, j: number) {
      grid[i][j] = '7';

      grid[i][j - 1] === '1' && checkNeighbour(i, j - 1);
      grid[i][j + 1] === '1' && checkNeighbour(i, j + 1);
      grid?.[i - 1]?.[j] === '1' && checkNeighbour(i - 1, j);
      grid?.[i + 1]?.[j] === '1' && checkNeighbour(i + 1, j);
    }

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === '1') {
          this.count += 1;
          checkNeighbour(i, j);
        }
      }
    }

    this.numbers = copyStartArray;

    return this.count;
  }

  ngOnInit(): void {
    this.numberOfItems(this.numbers);
  }


}
