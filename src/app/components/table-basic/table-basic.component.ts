import { Component, OnInit } from '@angular/core';
import { ImportsModule } from 'src/app/imports';
import { Product } from 'src/app/pages/domain/product';
import { ProductService } from 'src/app/services/productservice';
@Component({
    selector: 'app-table-basic',
    templateUrl: 'table-basic.component.html',
    standalone: true,
    imports: [ImportsModule],
    providers: [ProductService]
})

export class TableBasic implements OnInit {
    products: Product[] = [];
    constructor(private productService: ProductService) {
        this.products = this.productService.getProductsMini();
    }

    ngOnInit() {
        
    }
}