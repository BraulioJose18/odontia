import {Component, Input, OnInit} from '@angular/core';
import {ExpirationService} from "../../services/expiration.service";
import {Expiration} from "../../interfaces/Expiration";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-expiration',
  templateUrl: './list-expiration.component.html',
  styleUrls: ['./list-expiration.component.scss']
})
export class ListExpirationComponent implements OnInit {

  brands: Expiration[] = [];
  displayedColumns: string[] = ['name', 'status', 'actions'];

  @Input() isDialog: boolean = false;

  constructor(
    private categoryService: ExpirationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.getBrand()
      .subscribe((brands) =>{
        this.brands = brands.results
      });
  }
  crearActualizar() {
    console.log("Prueba")
    this.router.navigate(['admin/brand/add']);
  }

}
