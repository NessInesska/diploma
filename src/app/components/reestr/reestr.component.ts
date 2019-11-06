import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ivanov Alex', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Apraksina Ekaterina', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Vasina Anna', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllin Vlad', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron Alla', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbonova Liza', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogenov Evgeny', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Naumov Paul', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine Gannette', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neonova Darya', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-reestr',
  templateUrl: './reestr.component.html',
  styleUrls: ['./reestr.component.scss']
})
export class ReestrComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }


}
