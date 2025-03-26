import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'products',component:ProductsComponent},
  {path:'contacts',component:ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
