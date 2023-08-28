import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ExpirationService} from "../../services/expiration.service";
import {Expiration} from "../../interfaces/Expiration";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {ExpirationListComponent} from "../../../product/components/expiration-list/expiration-list.component";
import {FormExpirationComponent} from "../form-expiration/form-expiration.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-list-expiration',
  templateUrl: './list-expiration.component.html',
  styleUrls: ['./list-expiration.component.scss']
})
export class ListExpirationComponent implements OnInit {

  expirations: Expiration[] = [];
  displayedColumns: string[] = ['dateExpiration', 'quantity', 'actions'];
  dataSource !: MatTableDataSource<Expiration>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() isDialog: boolean = false;
  @Input() idProduct: number = 0;

  constructor(
    private snackBar: MatSnackBar,
    private expirationService: ExpirationService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllExpirationByProduct()
  }
  getAllExpirationByProduct(){
    this.expirationService.getAllExpirationByProduct(this.idProduct)
      .subscribe((expiration) =>{
        console.log(expiration.results);
        this.expirations = expiration.results
        this.dataSource = new MatTableDataSource(this.expirations);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  crearActualizar(element: any) {
    //element.idProduct = this.idProduct;
    let envio = {
      idProduct: this.idProduct,
      details: element
    }
    const dialogRef = this.dialog.open(FormExpirationComponent, {data: {detalle:  envio}} );
    dialogRef.afterClosed().subscribe(res => {
      if(res.data) {
        console.log(res);
        this.getAllExpirationByProduct();
      }
    });
  }
  deleteDetail(element: any){
    console.log(element);
    this.expirationService.deleteExpirationDetailByProduct(element.id)
      .subscribe(resp => {
        this.openSnackBar();
        this.getAllExpirationByProduct();
      });
  }
  openSnackBar() {
    this.snackBar.open("Se eliminó correctamente la fecha de expiración","Cerrar", {duration: 3000});
  }
}
