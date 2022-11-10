import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../services/user.service";
import {VoucherType} from "../../interfaces/user.interface";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  listVoucherType: VoucherType[] = [];
  displayedColumns: string[] = ['name','serie', 'status', 'actions'];
  dataSource !: MatTableDataSource<VoucherType>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private voucherTypeService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.voucherTypeService.getListVoucherType()
      .subscribe((vucherTypes =>{
        this.listVoucherType = vucherTypes
        this.dataSource = new MatTableDataSource(this.listVoucherType);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }));
  }
  crearActualizar() {
    this.router.navigate(['admin/voucherType/add']);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
