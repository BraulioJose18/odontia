import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorPageComponent} from "./shared/error-page/error-page.component";
import {SideMenuComponent} from "./shared/side-menu/side-menu.component";

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    component: SideMenuComponent,
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
        loadChildren: ()=> import('./measurement_unit/measurement_unit.module').then(m => m.Measurement_unitModule)
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

  //{ path: '', redirectTo: 'login', pathMatch: 'full'},

  //Rutas hijas
 // { path: 'login', component: LoginComponent},
  //{ path: 'navigation', loadChildren: ()=> import('./navigation/navigation.module').then(x => x.NavigationModule) },
  //{ path: 'category', loadChildren: ()=> import('./pages/category/category.module').then(x => x.Measurement_unitModule) },

  //Redirecciona de ruta inexistente a ruta default
 // { path: '**', redirectTo: 'login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
