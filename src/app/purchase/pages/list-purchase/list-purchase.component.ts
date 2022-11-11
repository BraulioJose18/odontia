import {Component, OnInit, ViewChild} from '@angular/core';
import {PurchaseService} from "../../services/purchase.service";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Purchase} from "../../interfaces/purchase.interface";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-purchase.component.html',
  styleUrls: ['./list-purchase.component.scss']
})
export class ListPurchaseComponent implements OnInit {

  listPurchase: Purchase[] = [];
  displayedColumns: string[] = ['date','voucherType', 'serie', 'provider', 'cellphone', 'totalPrice', 'actions'];
  dataSource !: MatTableDataSource<Purchase>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private purchaseService: PurchaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.purchaseService.getPurchases()
      .subscribe((purchases) =>{
        this.listPurchase = purchases.results
        this.dataSource = new MatTableDataSource(this.listPurchase);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  crearActualizar() {
    this.router.navigate(['admin/purchase/add']);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
