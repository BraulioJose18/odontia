import {Component, OnInit, ViewChild} from '@angular/core';
import {PermissionService} from "../../services/permission.service";
import {Permission} from "../../interfaces/permission.interface";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-list-permission',
  templateUrl: './list-permission.component.html',
  styleUrls: ['./list-permission.component.scss']
})
export class ListPermissionComponent implements OnInit {

  listPermission: Permission[] = [];
  displayedColumns: string[] = ['path', 'status', 'actions'];
  dataSource !: MatTableDataSource<Permission>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private permissionService: PermissionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getListPermission()
  }
  getListPermission(){
    this.permissionService.getListPermission()
      .subscribe((permission) =>{
        this.listPermission = permission.results;
        this.dataSource = new MatTableDataSource(this.listPermission);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  crearActualizar() {
    this.router.navigate(['admin/permission/add']);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
