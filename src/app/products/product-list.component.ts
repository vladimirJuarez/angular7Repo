import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: "pm-productlist",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent implements OnInit{
    pageTitle = "Product List";
    imageWidth = 50;
    imageMargin = 2;
    showImage: boolean;

    constructor(){
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }

    products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 rolling capacity galon",
            "price": 32.5,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/image/800px/svg_to_png/58471/garden-cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://openclipart.org/image/800px/svg_to_png/14358/mystica-Hammer.png"
        }    
    ];

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        console.log('In OnInit');
    }


    ///Performing filtering
    filteredProducts: IProduct[];
    _listFilter: string = "cart";

    get listFilter(): string{
        return this._listFilter;
    }

    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((p: IProduct) => 
            p.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}