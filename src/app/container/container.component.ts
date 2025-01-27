import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class containerComponent {
  // name="Riyaash";
  // addToCart:number = 0;
  // product = {
  //   name: 'iphone x',
  //   price: 999,
  //   color: 'Black',
  //   discount: 8.5,
  //   inStock: 5,
  //   pImage: 'https://technolec.co.uk/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/l/_/l_10168683_002.jpg'
  // }

  //method

// getDiscountedprice(){
//   return this.product.price - (this.product.price * this.product.discount / 100)

// }

// decrementCartValue(){
//   if(this.addToCart > 0){
//     this.addToCart--;

//   }
 

// }

// incrementCartValue(){
//   if(this.addToCart < this.product.inStock){
//     this.addToCart++;

//   }

// }

listOfString: string[] = ['mark', 'steve', 'john', 'sarah'];

searchText :string ='';

setSearchText(value:string){
  this.searchText  = value;


}

}
