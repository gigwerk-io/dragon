import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// @pa
export class TableService {

  constructor() { }

  // THIS FUNCTION SHOULD BE USED FOR ALL ITEMS FILTERED;
  // FOR AN EXAMPLE VISIT JOBS-LIST COMPONENT
  filterTable(e: string, list: any[], fullList: any[], params: string[]) {
    let filteredList = list;

    if (!e.length) {
      return fullList;
    }

    list = list.length ? list : fullList;

    const needle = e.toLowerCase().replace(/ /g, '');

    // tslint:disable-next-line: no-shadowed-variable
    return filteredList = list.filter((filter) => {
      // tslint:disable-next-line: no-eval
      const listFilter = eval(params.join(' '));
      const hayStack =
        (
          listFilter
        )
          .toLowerCase()
          .split(' ')
          .join('');
      return hayStack.includes(needle);
    });
  }
}
