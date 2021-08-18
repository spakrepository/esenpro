import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from 'src/app/models/header';
import { Product } from 'src/app/models/product';
import { HeaderService } from 'src/app/services/header.service';
import { ProductService } from 'src/app/services/product.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //navigation: Header[];

  latestNavigation:Header[];

  productList:Product[];

  mainProductObj:any;

  currentWidth: number;

  showMobNavigation: boolean = false;

  showCurrentMobDropdownNavigation: number;


  @Output() productNavigationEvent:EventEmitter<Product[]> = new EventEmitter<Product[]>();

  @Output() mainProductNavigationEvent:EventEmitter<any> = new EventEmitter<any>();

  @Output() subCategoryNavigationEvent:EventEmitter<any> = new EventEmitter<any>();

  @Output() checkProductLinkClicked:EventEmitter<string> = new EventEmitter<string>();

  @Output() mainCategoryClickedNavigationData:EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private headerService: HeaderService,
    private router: Router,
    private productService: ProductService,
    private sharedService:SharedService
    ) {
    }

  ngOnInit(): void {
    this.loadLatestNavigation();
    this.loadProduct();
    this.checkCurrentWidth();
  }

  gotoSubCategory(obj:any):void {
    this.subCategoryNavigationEvent.emit(obj);
    this.router.navigateByUrl('/product');
    this.sharedService.setData(obj);
    this.sharedService.setProductString(' ');
    this.mainCategoryClickedNavigationData.emit(obj);
  }

  goto(url?:string, obj?:any):void {
    this.router.navigate([url]);
    this.sendProductList();
    this.mainProductObj = obj;
    url = url.substring(url.indexOf('/') + 1);
    if(url === 'product')
    {
      this.sharedService.setProductString(url);
      this.mainProductNavigationEvent.emit(this.mainProductObj);
    }
  }

  loadLatestNavigation():void {
    this.headerService.getLaterHeader().subscribe((data:Header[]) => {
      this.latestNavigation = data;
    });
  }

  loadProduct():void {
    this.productService.getLatestProduct().subscribe((data:Product[]) => {
      this.productList = data;
    });
  }

  public sendProductList():void {
    this.productNavigationEvent.emit(this.productList);
  }

  public gotoNavigation(obj:any):void {
    this.router.navigateByUrl(obj.url);
    this.showMobNavigation = false;
  }

  public height():number {
    return window.innerHeight;
  }

  public width(): number {
    return window.innerWidth;
  }

  public checkCurrentWidth():void {
    this.currentWidth = this.width();
  }

  toggleMobNavigation():void {
    this.showMobNavigation = !this.showMobNavigation;
    this.showCurrentMobDropdownNavigation = null;
  }

  showCurrentMobDropdown(obj: any):void {
    this.showCurrentMobDropdownNavigation = obj.id;
  }

  hideCurrentMobDropdown():void {
    this.showCurrentMobDropdownNavigation = null;
  }

}
