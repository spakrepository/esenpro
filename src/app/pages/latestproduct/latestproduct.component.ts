import { ElementRef } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Header } from 'src/app/models/header';
import { ToggleProductCategory } from 'src/app/models/toggleproductcategory';
import { HeaderService } from 'src/app/services/header.service';
import { SharedService } from 'src/app/services/shared.service';
import { ProductCategory } from 'src/app/models/productcategory';
import { OpenGearImg } from 'src/app/models/openGearImg';



@Component({
  selector: 'app-latestproduct',
  templateUrl: './latestproduct.component.html',
  styleUrls: ['./latestproduct.component.scss']
})
export class LatestproductComponent implements OnInit, AfterViewInit {

  productLeftNav: Header[];

  currentMainId:number;

  currentSubId:number;

  currentSubSubId:number;

  product:any;

  subCategoryProduct:any;

  subSubCategoryProduct:any;

  toggleProductCategory:ToggleProductCategory;

  activeImg:any;

  isProductDropdown: boolean = false;

  currentProductElement:number;

  isBorderBottom: boolean = false;

  productName: string;

  isProductListVisiblie:boolean = false;

  isBreadcrumbVisible:boolean = false;

  productForm:FormGroup;

  backTo:any = ' ';

  selectedProImg:string;

  ismobLeftNavigation: boolean;

  isProductEnqury: boolean;

  highMainLink: number;

  productCategory: ProductCategory;

  openGearImg: OpenGearImg[];

  formHeading: string = 'Product Enquiry';

  constructor(
    private headerService: HeaderService,
    private sharedService:SharedService,
    private route:ActivatedRoute,
    private fb:FormBuilder
  ) {

   }

  ngOnInit(): void {

    this.route.queryParams.subscribe((para => {
      if((para.id != undefined || para.id != null) && (para.headerId != undefined || para.headerId != null)) {

          if(para.subHeaderId == null || para.subHeaderId == undefined) {
              this.headerService.getLaterHeader().subscribe((data:Header[]) => {
              this.subCategoryProduct = data[2].subheader[para.headerId].subcategory.find(x => x.id == para.id);
              this.toggleProductCategory = ToggleProductCategory.SubCategory;
              this.productLeftNav = data[2].subheader;
              this.currentMainId = 2;
              this.currentSubId = para.id;
              if(data[2].subheader[1].subcategory.find(x => x.id == para.id).imgList.length > 0) {
                this.isProductListVisiblie = true;
              } else {
                this.isProductListVisiblie = false;
              }
            });
          } else {

            //
              this.headerService.getLaterHeader().subscribe((data: Header[]) => {

              this.productLeftNav = data[2].subheader;
              this.currentMainId = para.headerId;
              this.currentSubId = para.subHeaderId;
              this.currentSubSubId = para.id;
              this.toggleProductCategory = ToggleProductCategory.SubSubCategory;
              this.subSubCategoryProduct = data[2].subheader.find(x => x.id == para.headerId).subcategory.find(x => x.id == para.subHeaderId).subcategory.find(x => x.id == para.id);
              console.log(data[2]);
              console.log(data[2].subheader);
              console.log(data[2].subheader.find(x => x.id == 1));
              console.log(data[2].subheader.find(x => x.id == 1).subcategory);
              console.log(data[2].subheader.find(x => x.id == 1).subcategory.find(x => x.id == 1));
              console.log(data[2].subheader.find(x => x.id == 1).subcategory.find(x => x.id == 1).subcategory.find(x => x.id == 1));

            });

            //

          }

      } else if((para.subCatId != undefined) && (para.imgListId != undefined)) {

          this.headerService.getLaterHeader().subscribe((data: Header[]) => {
          let obj = data[2].subheader[para.subCatId].subcategory[para.subCatId].imgList[para.imgListId];
          this.productLeftNav = data[2].subheader;
          this.currentMainId = 2;
          this.currentSubId = para.subCatId;
          this.subCategoryProduct = data[2].subheader[para.subCatId].subcategory.find(x =>x.id == para.subCatId);
          this.toggleProductCategory = ToggleProductCategory.SubCategory;
          this.isProductListVisiblie = false;

          let currentObj = data[2].subheader[para.subCatId].subcategory.find(x =>x.id == para.subCatId).imgList.find(x =>x.id == para.imgListId);

          this.subCategoryProduct.image = currentObj.image;
          this.productName = currentObj.alternativeText;
          this.isBreadcrumbVisible = true;
          console.log(this.subCategoryProduct);

        });

      }
      else {
        if(this.sharedService.getProductString() != ' ')
          {
              this.headerService.getLaterHeader().subscribe((data:Header[]) => {
              this.currentMainId = data[2].subheader[0].id;
              this.currentSubId = data[2].subheader[0].subcategory[0].id;
              this.productLeftNav = data[2].subheader;
              this.subSubCategoryProduct = data[2].subheader[0].subcategory[0].subcategory[0];
              this.toggleProductCategory = ToggleProductCategory.SubSubCategory;
            });
          }
        else
        {
            //debugger;
            if(this.sharedService.getData().subcategory.length > 0)
            {
              //console.log(this.sharedService.getData());

              if(this.sharedService.getData().subcategory[0].subcategory.length > 0)
              {
                this.subSubCategoryProduct = this.sharedService.getData().subcategory[0].subcategory[0];
                this.toggleProductCategory = ToggleProductCategory.SubSubCategory;
                this.headerService.getLaterHeader().subscribe((data:Header[]) => {
                  this.productLeftNav = data[2].subheader;
                });
                this.currentMainId = this.sharedService.getData().id;
                this.currentSubId = this.sharedService.getData().subcategory[0].id;
                this.currentSubSubId = this.sharedService.getData().subcategory[0].subcategory[0].id;
              }
              else
              {
                this.headerService.getLaterHeader().subscribe((data:Header[]) => {
                  this.productLeftNav = data[2].subheader;
                });

                this.subCategoryProduct = this.sharedService.getData().subcategory[0];
                this.toggleProductCategory = ToggleProductCategory.SubCategory;
                this.currentMainId = this.sharedService.getData().id;
                this.currentSubId = this.sharedService.getData().subcategory[0].id;

                if(this.sharedService.getData().subcategory[0].imgList.length > 0)
                {
                  this.isProductDropdown = true;
                  this.isBorderBottom = true;
                  this.isProductListVisiblie = true;
                  this.backTo = this.sharedService.getData().subcategory[0];
                  console.log(this.backTo);
                }
                else
                {
                  this.isProductDropdown = false;
                  this.isBorderBottom = false;
                  this.isProductListVisiblie = false;
                }

              }

            }
            else
            {
              this.headerService.getLaterHeader().subscribe((data:Header[]) => {
                this.productLeftNav = data[2].subheader;
              });

              this.product = this.sharedService.getData();
              this.toggleProductCategory = ToggleProductCategory.MainCategory;
            }
        }
      }
    }));

    this.productForm = this.fb.group({
      'name':[''],
      'email':[''],
      'cname': [''],
      'mobileNumber':[''],
      'city':[''],
      'country':[''],
      'query':[''],
      'productName': ['']
    });

    this.checkWindowWidth();
    this.openGearImg = this.getOpenImgList();

  }

  ngAfterViewInit():void {
  }

  getProductNavigation(val:any):void {
    this.productLeftNav = val;
  }

  mainCategoryClicked(obj:any):void {
    console.log(obj);
    if(obj.subcategory.length === 0)
    {
      this.toggleProductCategory = ToggleProductCategory.MainCategory;
      this.product = obj;
      if(this.getWindowWidth() < 768) {
        this.ismobLeftNavigation = true;
      }
    }
  }

  subCategoryClicked(obj:any):void {
    console.log(obj);
    if(obj.subcategory.length === 0)
    {
      this.subCategoryProduct = obj;
      this.toggleProductCategory = ToggleProductCategory.SubCategory;
      if(this.getWindowWidth() < 768) {
        this.ismobLeftNavigation = true;
      }
    }

    if(obj.imgList.length > 0)
    {
      this.isProductDropdown = true;
      this.isBorderBottom = true;
      this.productName = obj.imgList[0].alternativeText;
      this.isProductListVisiblie = true;
    }
    else
    {
      this.isProductDropdown = false;
      this.isBorderBottom = false;
      this.productName = ' ';

      if(this.productName == ' ')
      {
        this.isBreadcrumbVisible = false;
      }
      else
      {
        this.isBreadcrumbVisible = true;
      }

      this.isProductListVisiblie = false;
    }

    this.currentProductElement = 1;
    this.backTo = obj;
  }

  subSubCategoryClicked(obj:any):void {
    this.subSubCategoryProduct = obj;
    this.toggleProductCategory = ToggleProductCategory.SubSubCategory;
    if(this.getWindowWidth() < 768) {
    this.ismobLeftNavigation = true;
    }
  }

  mainProductClicked(val:any):void {
    if(val.subheader.length > 0)
    {
      this.product = val.subheader[0].subcategory[0].subcategory[0];
      this.toggleProductCategory = ToggleProductCategory.MainCategory;
      this.currentMainId = val.subheader[0].id;
      this.currentSubId = val.subheader[0].subcategory[0].id;
    }
  }

  headerSubSubCategoryClicked(obj:any):void {
  }

  mainCategoryData(val:any):void {
    this.currentMainId = val.id;

    if (val.subcategory.length > 0) {

      if (val.subcategory[0].subcategory.length > 0) {
          this.subSubCategoryProduct = val.subcategory[0].subcategory[0];
          this.toggleProductCategory = ToggleProductCategory.SubSubCategory;
          this.headerService.getLaterHeader().subscribe((data: Header[]) => {
            this.productLeftNav = data[2].subheader;
          });

          this.currentMainId = val.id;
          this.currentSubId = val.subcategory[0].id;
          this.currentSubSubId = val.subcategory[0].subcategory[0].id;
      }
      else {
        this.headerService.getLaterHeader().subscribe((data: Header[]) => {
          this.productLeftNav = data[2].subheader;
        });

        //debugger;
        this.subCategoryProduct = this.sharedService.getData().subcategory[0];
        this.toggleProductCategory = ToggleProductCategory.SubCategory;
        this.currentMainId = val.id;
        this.currentSubId = val.subcategory[0].id;

        if(this.subCategoryProduct.imgList.length > 0){
              this.isProductDropdown = true;
              this.isBorderBottom = true;
              this.isProductListVisiblie = true;
        }
        else
        {
              this.isProductDropdown = false;
              this.isBorderBottom = false;
              this.isProductListVisiblie = false;
        }

      }

    }
    else {
      this.headerService.getLaterHeader().subscribe((data: Header[]) => {
        this.productLeftNav = data[2].subheader;
      });

      this.product = val;
      this.toggleProductCategory = ToggleProductCategory.MainCategory;
      console.log(this.product);
    }
  }

  changeImg(obj:any):void {
    console.log(obj);
    this.subCategoryProduct.image = obj.image;
    this.productName = obj.alternativeText;
    this.isProductListVisiblie = false;
    this.isBreadcrumbVisible = true;
  }

  goBack():void {
    this.isProductListVisiblie = true;
  }

  getCurrentObj(obj:any):void {
    this.onCancel();
    this.productForm.get('productName').setValue(obj.category);
    this.selectedProImg = obj.image;
  }

  onSubmit():void {
    console.log(this.productForm.value);
    this.onCancel();
  }

  onCancel():void {
    this.productForm.reset();
    this.formHeading = 'Product Enquiry';
  }

  getWindowWidth():number {
    return window.innerWidth;
  }

  checkWindowWidth(): void {

    if(this.getWindowWidth() < 768) {
      document.getElementById('leftnavigation').classList.remove('stickElement');
      this.ismobLeftNavigation = true;
      this.isProductEnqury = true;
    } else {
      document.getElementById('leftnavigation').classList.add('stickElement');
      this.ismobLeftNavigation = false;
      this.isProductEnqury = false;
    }

  }

  toggleMobLeftMenu():void {
    this.ismobLeftNavigation = !this.ismobLeftNavigation;
  }

  toggleMainCategory(obj: any):void {
    console.log(obj.id);
    this.currentMainId = this.currentMainId == obj.id ? null : obj.id;
    this.currentSubId = null;
  }

  toggleSubCategory(obj: any):void {
    console.log(obj);
    this.currentSubId = this.currentSubId == obj.id ? null : obj.id;
  }

  getOpenImgList():OpenGearImg[] {
    return this.openGearImg = [
      {
        id:1,
        imgText:'Open Gear',
        imgUrl:'1.jpg'
      },
      {
        id:2,
        imgText:'Open Gear',
        imgUrl:'2.jpg'
      },
      {
        id:3,
        imgText:'Open Gear',
        imgUrl:'3.jpg'
      },
      {
        id:4,
        imgText:'Open Gear',
        imgUrl:'4.jpg'
      }
    ];
  }

}
