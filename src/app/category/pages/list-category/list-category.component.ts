import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../interfaces/category.interface";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Product} from "../../../product/interfaces/product.interface";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  categories: Category[] = [];
  displayedColumns: string[] = ['name', 'status', 'actions'];
  dataSource !: MatTableDataSource<Category>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategory()
      .subscribe((categories) =>{
        this.categories = categories.results
        this.dataSource = new MatTableDataSource(this.categories);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  crearActualizar() {
    console.log("Prueba")
    this.router.navigate(['admin/category/add']);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
