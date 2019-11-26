import { Injectable } from '@angular/core';

export const levels = [
  {
    cities: [
      { img: 11, sidney: 0, melbourne: 0, brisbane: 4 },
      { img: 10, sidney: 3, melbourne: 0, brisbane: 0 },
      { img: 4, sidney: 0, melbourne: 4, brisbane: 0 }
    ]
  },
  {
    cities: [
      { img: 13, sidney: 1, melbourne: 2, brisbane: 0 },
      { img: 14, sidney: 2, melbourne: 1, brisbane: 0 },
      { img: 7, sidney: 2, melbourne: 2, brisbane: 3 },
      { img: 2, sidney: 2, melbourne: 4, brisbane: 0 }
    ]
  },
  {
    cities: [
      { img: 3, sidney: 0, melbourne: 5, brisbane: 0 },
      { img: 6, sidney: 2, melbourne: 3, brisbane: 3 },
      { img: 8, sidney: 1, melbourne: 1, brisbane: 2 },
      { img: 9, sidney: 3, melbourne: 0, brisbane: 1 }
    ]
  },
  {
    cities: [
      { img: 1, sidney: 2, melbourne: 4, brisbane: 0 },
      { img: 5, sidney: 0, melbourne: 0, brisbane: 5 },
      { img: 12, sidney: 1, melbourne: 1, brisbane: 2 }
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  constructor() {}
}
