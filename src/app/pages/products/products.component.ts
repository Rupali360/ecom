import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: any = [];
  constructor(hc: ApiService) {
    hc.getAllProducts().subscribe((res) => {
      this.products = res;
    });
  }
}
