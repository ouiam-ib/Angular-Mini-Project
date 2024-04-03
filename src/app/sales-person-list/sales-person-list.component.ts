import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {
  list: SalesPerson[]=[
    new SalesPerson("AA","AA",1000),
    new SalesPerson("BB","BB",2000),
    new SalesPerson("CC","DD",3000)
  ];
 

}
