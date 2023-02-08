import {Component, OnInit, ViewChild} from '@angular/core';
import {StockService} from "../../services/stock.service";
import {Router} from "@angular/router";
import {StockRegularize} from "../../interfaces/stock.interface";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {ExpirationListComponent} from "../../components/expiration-list/expiration-list.component";
import {PurchaseDetail} from "../../../purchase/interfaces/purchase.interface";

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.scss']
})
export class ListStockComponent implements OnInit {

  products: StockRegularize[] = [];
  displayedColumns: string[] = ['name_product', 'stock_product', 'stock_expiration', 'actions'];
  dataSource !: MatTableDataSource<StockRegularize>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private productService: StockService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.productService.getAllExpirationProduct()
      .subscribe((stockRegularize) =>{
        this.products = stockRegularize.data
        console.log(this.products);
        this.dataSource = new MatTableDataSource(this.products);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  crearActualizar() {
    this.router.navigate(['admin/product/add']);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  listExpiration(element: any) {
    console.log(element)
    let product = {
      id: element.id_product,
      name_product: element.name_product,
      stock_expiration: element.stock_expiration,
      stock_product: element.stock_product,
    }
    const dialogRef = this.dialog.open(ExpirationListComponent, {data: product}, );
    dialogRef.afterClosed().subscribe(res => {
      if(res) {
        this.getProducts()
      }
    });
  }

}
