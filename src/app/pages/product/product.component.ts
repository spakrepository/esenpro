import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from 'src/app/component/header/header.component';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, AfterViewInit {

  @ViewChild(HeaderComponent) headerComponent: HeaderComponent;

  products: Product[];

  productData: Product;

  documentList:any[];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.loadProductList();
    this.getProductById(Number(this.activatedRoute.snapshot.params['id']));
  }

  ngAfterViewInit():void {
  }
  
  loadProductList():void {
    this.productService.getProduct().subscribe((data:Product[]) => {
      this.products = data;
    });
  }

  getProductById(id:number):void {
    this.productService.getProduct().subscribe((data:Product[]) => {
      this.productData = data.find(x =>x.id === id);
      //this.documentList = this.productData.documentData;
    });
  }



}
