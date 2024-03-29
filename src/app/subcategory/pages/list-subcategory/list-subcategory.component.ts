import {Component, OnInit, ViewChild} from '@angular/core';
import {Subcategory} from "../../interfaces/subcategory.interface";
import {SubcategoryService} from "../../services/subcategory.service";
import {ActivatedRoute, Router} from "@angular/router";
import { MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-list-role',
  templateUrl: './list-subcategory.component.html',
  styleUrls: ['./list-subcategory.component.scss']
})
export class ListSubcategoryComponent implements OnInit {

  subcategories: Subcategory[] = [];
  displayedColumns: string[] = ['name', 'category', 'status', 'actions'];
  dataSource !: MatTableDataSource<Subcategory>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private subcategoryService: SubcategoryService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subcategoryService.getSubcategory()
      .subscribe((subcategories =>{
        this.subcategories = subcategories.results
        this.dataSource = new MatTableDataSource(this.subcategories);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }));
  }
  crearActualizar() {
    this.router.navigate(['admin/subcategory/add']);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  edit(idSubcategory: number){
    this.router.navigate([idSubcategory], {
      relativeTo: this.route
    });
  }

}
