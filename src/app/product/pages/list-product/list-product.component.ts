import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {Product} from "../../interfaces/product.interface";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {ExpirationListComponent} from "../../components/expiration-list/expiration-list.component";
import {ProductCustom} from "../../interfaces/productCustom.interface";

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  products: ProductCustom[] = [];
  displayedColumns: string[] = ['name', 'subcategory_name', 'brand_name', 'unit_name','salePrice', 'purchasePrice', 'specifications', 'observation','minimumStock', 'averageStock', 'stock','status', 'actions'];
  dataSource !: MatTableDataSource<ProductCustom>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private productService: ProductService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.productService.getProductsCustom()
      .subscribe((products) =>{
        this.products = products.data
        this.dataSource = new MatTableDataSource(this.products);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  crearActualizar() {
    console.log("Prueba")
    this.router.navigate(['admin/product/add']);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  listExpiration(element: any) {
    const dialogRef = this.dialog.open(ExpirationListComponent, {data: element}, );
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      this.getProducts();
      if(res.data) {
      }
    });
  }

}
