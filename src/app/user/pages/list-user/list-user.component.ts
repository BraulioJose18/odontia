import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {User} from "../../interfaces/user.interface";

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  listUser: User[] = [];
  displayedColumns: string[] = ['name','last_name', 'email', 'age', 'cellphone', 'document_type', 'document_number', 'actions'];
  dataSource !: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getListUser()
      .subscribe((user) =>{
        this.listUser = user.results
        this.dataSource = new MatTableDataSource(this.listUser);
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
