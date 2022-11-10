import {Component, OnInit, ViewChild} from '@angular/core';
import {Role} from "../../interfaces/role.interface";
import {RoleService} from "../../services/role.service";
import {ActivatedRoute, Router} from "@angular/router";
import { MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.scss']
})
export class ListRoleComponent implements OnInit {

  roles: Role[] = [];
  displayedColumns: string[] = ['name','status', 'actions'];
  dataSource !: MatTableDataSource<Role>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private roleService: RoleService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.roleService.getListRole()
      .subscribe((roles) =>{
        this.roles = roles.results
        this.dataSource = new MatTableDataSource(this.roles);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  crearActualizar() {
    this.router.navigate(['admin/role/add']);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  edit(idSubcategory: number){
    console.log(idSubcategory)
    console.log(this.route)
    this.router.navigate([idSubcategory], {
      relativeTo: this.route
    });
  }

}
