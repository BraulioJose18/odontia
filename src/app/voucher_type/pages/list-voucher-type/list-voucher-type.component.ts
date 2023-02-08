import {Component, OnInit, ViewChild} from '@angular/core';
import {VoucherTypeService} from "../../services/voucher-type.service";
import {VoucherType} from "../../interfaces/voucher.type.interface";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-voucher-type.component.html',
  styleUrls: ['./list-voucher-type.component.scss']
})
export class ListVoucherTypeComponent implements OnInit {

  listVoucherType: VoucherType[] = [];
  displayedColumns: string[] = ['name','serie', 'status', 'actions'];
  dataSource !: MatTableDataSource<VoucherType>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private voucherTypeService: VoucherTypeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.voucherTypeService.getListVoucherType()
      .subscribe((vucherTypes) =>{
        this.listVoucherType = vucherTypes.results;
        this.dataSource = new MatTableDataSource(this.listVoucherType);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  crearActualizar() {
    this.router.navigate(['admin/voucherType/add']);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
