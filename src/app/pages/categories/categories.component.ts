import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  categories: any = [];
  constructor(api: ApiService) {
    api.getAllCategory().subscribe((res)=>this.categories=res)
  }

}
