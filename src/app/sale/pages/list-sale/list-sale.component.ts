import {Component, OnInit, ViewChild} from '@angular/core';
import {SaleService} from "../../services/sale.service";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Sale} from "../../interfaces/sale.interface";

@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.component.html',
  styleUrls: ['./list-sale.component.scss']
})
export class ListSaleComponent implements OnInit {

  listSale: Sale[] = [];
  displayedColumns: string[] = ['date','voucherType', 'serie', 'provider', 'cellphone', 'totalPrice', 'actions'];
  dataSource !: MatTableDataSource<Sale>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private saleService: SaleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.saleService.getPurchases()
      .subscribe((sales) =>{
        this.listSale = sales.results
        this.dataSource = new MatTableDataSource(this.listSale);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  crearActualizar() {
    this.router.navigate(['admin/sale/add']);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
