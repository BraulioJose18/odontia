import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorPageComponent} from "./shared/error-page/error-page.component";
import {SideMenuComponent} from "./shared/side-menu/side-menu.component";
import {AuthGuard} from "./core/guard/auth.guard";

const routes: Routes = [
  { path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    component: SideMenuComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'category',
        loadChildren: ()=> import('./category/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'subcategory',
        loadChildren: ()=> import('./subcategory/subcategory.module').then(m => m.SubcategoryModule)
      },
      {
        path: 'brand',
        loadChildren: ()=> import('./brand/brand.module').then(m => m.BrandModule)
      },
      {
        path: 'measurementUnit',
        loadChildren: ()=> import('./measurement_unit/measurement-unit.module').then(m => m.MeasurementUnitModule)
      },
      {
        path: 'product',
        loadChildren: ()=> import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'voucherType',
        loadChildren: ()=> import('./voucher_type/voucher-type.module').then(m => m.VoucherTypeModule)
      },
      {
        path: 'user',
        loadChildren: ()=> import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'permission',
        loadChildren: ()=> import('./permission/permission.module').then(m => m.PermissionModule)
      },
    ]
  },
  {
    path: 'errorPage',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: 'errorPage',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
