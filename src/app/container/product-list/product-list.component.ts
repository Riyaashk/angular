import { Component, Input, ViewChild } from '@angular/core';
import { Offcanvas } from 'bootstrap';
declare var bootstrap: any; 
@Component({
  selector: 'product-list',

  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // @ViewChild('offcanvasNavbar') offcanvasNavbar: any; 
  // private offcanvas: Offcanvas;
  ngOnInit(){
    if(this.page == 'helmet'){

    }
  }
  // ngAfterViewInit() {
  //   this.offcanvas = new Offcanvas(this.offcanvasNavbar.nativeElement);
  // }
shoes = [
{
  id:1,
  name: "Nike1",
  gender: "Men & Women",
  Description: "samplellllll",
  brand:"Nike",
  category:"Shoe",
  size: [6,7,8,9],
  color: ["white", "Black" ,"Blue"],
  price:499,
  discountPrice: 299,
  is_in_inventory: true,
  items_left:3,
  imgURL:"https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com_.png",
  slug:"Nike"
},

{
  id:2,
  name: "Nike2",
  gender: "Men & Women",
  Description: "samplellllll",
  brand:"Nike",
  category:"Shoe",
  size: [6,7,8,9],
  color: ["white", "Black" ,"Blue"],
  price: 299,
  is_in_inventory: true,
  items_left:3,
  imgURL:"https://pluspng.com/img-png/nike-shoe-png-nike-running-shoes-png-image-transparent-free-download-1200.png",
  slug:"Nike"
},

{
  id:3,
  name: "Adidas1",
  Description: "sample",
  gender: "Men & Women",
  brand:"Adidas",
  category: "Shoe",
  size: [6,7,8,9],
  color: ["white", "Black"],
  price: 499,
  discountPrice: 299,
  is_in_inventory: false,
  items_left:3,
  imgURL:"https://static.dafiti.com.br/p/adidas-T%C3%AAnis-Adidas-Show-The-Way-2.0-Cinza-3136-94330321-2-zoom.jpg",
  slug:"Nike"

},

{
  id:4,
  name: "Nike3",
  gender: "Men & Women",
  Description: "samplellllll",
  brand:"Nike",
  category:"Shoe",
  size: [6,7,8,9],
  color: ["white", "Black" ,"Blue"],
  price: 399,
  is_in_inventory: true,
  items_left:3,
  imgURL:"http://clipart-library.com/images_k/shoes-transparent/shoes-transparent-23.png",
  slug:"Nike"
},


{
  id:5,
  name: "Nike4",
  gender: "Women",
  Description: "samplellllll",
  brand:"Nike",
  category:"Shoe",
  size: [6,7,8,9],
  color: ["white", "Black" ,"Blue"],
  price: 599,
  discountPrice: 299,
  is_in_inventory: false,
  items_left:3,
  imgURL:"https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-2-1024x1024.png",
  slug:"Nike"
},

{
  id:6,
  name: "Nike5",
  gender: "Men & Women",
  Description: "samplellllll",
  brand:"Nike",
  category:"Shoe",
  size: [6,7,8,9],
  color: ["Blue", "white"],
  price: 299,
  is_in_inventory: false,
  items_left:3,
  imgURL:"http://clipart-library.com/images_k/shoes-transparent-background/shoes-transparent-background-24.png",
  slug:"Nike"
},

{
  id:7,
  name: "Adidas2",
  gender: "Men & Women",
  Description: "samplellllll",
  brand:"Adidas",
  category:"Shoe",
  size: [6,7,8,9],
  color: ["white", "Black" ,"Blue"],
  price:599,
  is_in_inventory: true,
  items_left:3,
  imgURL:"https://tbs.co.bd/wp-content/uploads/2022/10/27125806_o.png",
  slug:"Nike"
},

{
  id:8,
  name: "Nike8",
  gender: "Men & Women",
  Description: "samplellllll",
  brand:"Nike",
  category:"Shoe",
  size: [6,7,8,9],
  color: ["white", "Black" ,"Blue"],
  price:499,
  is_in_inventory: true,
  items_left:3,
  imgURL:"http://clipart-library.com/images_k/shoes-transparent-background/shoes-transparent-background-8.png",
  slug:"Nike"
},

{
  id:9,
  name: "Adidas4",
  gender: "Men & Women",
  Description: "samplellllll",
  brand:"Adidas",
  category:"Shoe",
  size: [6,7,8,9],
  color: ["white", "Black" ,"Blue"],
  price: 599,
  is_in_inventory: true,
  items_left:3,
  imgURL:"http://www.tennisnuts.com/images/product/full/D66239_F_beauty_B2C.jpg",
  slug:"Adidas"
}
];

helmets = [
  {
    id:1,
    name: "Axor-Red",
    gender: "Men ",
    Description: "samplellllll",
    brand:"Axor",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["white", "Black" ,"Blue"],
    price:4999,
    discountPrice: 4500,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://i0.wp.com/www.kmxhelmets.com/wp-content/uploads/2022/08/AXOR-Helmets-model-APEX-HUNTER-8.jpg?w=1280&ssl=1",
    slug:"Nike"
  },
  
  {
    id:2,
    name: "Axor-Black with Red",
    gender: "Men",
    Description: "samplellllll",
    brand:"Axor-black with Red",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["white", "Black" ,"Blue"],
    price: 3500,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://m.media-amazon.com/images/I/61DpON3NPCL._SL1500_.jpg",
    slug:"Nike"
  },
  
  {
    id:4,
    name: "MT",
    gender: "Men",
    Description: "samplellllll",
    brand:"MT",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["white", "Black" ,"Blue"],
    price: 7500,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://www.motardinn.com/f/13709/137090958/mt-helmets-atom-sv-transcend-modular-helmet.jpg",
    slug:"Nike"
  },
  
  
  {
    id:5,
    name: "SteelBird-2",
    gender: "Women",
    Description: "samplellllll",
    brand:"SteelBird",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["white", "Black" ,"Blue"],
    price: 1400,
    discountPrice: 1000,
    is_in_inventory: false,
    items_left:3,
    imgURL:"https://rukminim1.flixcart.com/image/1408/1408/j7jd2fk0/helmet/h/f/x/sba-2-supreme-1-h41-60-full-face-steelbird-original-imaexq5qqnsdyvaf.jpeg?q=90",
    slug:"Nike"
  },
  
  {
    id:6,
    name: "Vega-Black",
    gender: "Men & Women",
    Description: "samplellllll",
    brand:"Vega",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["Blue", "white"],
    price: 999,
    is_in_inventory: false,
    items_left:3,
    imgURL:"https://rukminim1.flixcart.com/image/1664/1664/helmet/e/4/w/na-1-vega-60-flip-up-crux-original-imae9xgse4jj8hb4.jpeg?q=90",
    slug:"Nike"
  },
  
  {
    id:7,
    name: "Axor-Black",
    gender: "Men",
    Description: "samplellllll",
    brand:"Axor",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["white", "Black" ,"Blue"],
    price:3999,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://bdlamotorbikes.co.uk/wp-content/uploads/2023/07/Axor-X-Cross-Plain-Adventure-Motorcycle-Helmet-Matt-Black-3.jpg",
    slug:"Nike"
  },

  {
    id:3,
    name: "SteelBird",
    Description: "sample",
    gender: "Men",
    brand:"SteelBird",
    category: "Helmet",
    size: [6,7,8,9],
    color: ["white", "Black"],
    price: 1399,
    discountPrice: 1000,
    is_in_inventory: false,
    items_left:3,
    imgURL:"http://i.ndtvimg.com/i/2016-10/steelbird-sb-42-bang-airborne-helmets_827x510_61476345881.jpg",
    slug:"Nike"
  
  },
  
  {
    id:8,
    name: "Axor-Yellow",
    gender: "Men",
    Description: "samplellllll",
    brand:"Axor",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["white", "Black" ,"Blue"],
    price:5499,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://bdlamotorbikes.co.uk/wp-content/uploads/2023/07/Axor-X-Cross-Graphic-Adventure-Motorcycle-Helmet-Yellow-1.jpg",
    slug:"Nike"
  },
  
  {
    id:9,
    name: "Axor-Blue",
    gender: "Men",
    Description: "samplellllll",
    brand:"Axor",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["white", "Black" ,"Blue"],
    price: 6999,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://www.ahhelmets.in/24548-large_default/axor-street-zazu-gloss-blue-helmet.jpg",
    slug:"Adidas"
  }
  ];
page: string = 'helmet';  
searchText: string = '';
isNoDataFound = false;
mainMenuItems: string[] = ['Home', 'Products', 'New Arrival', 'Contact']



filteredProductShoe = this.shoes;
filteredProductHelmet = this.helmets;

scrollToTop() {
  window.scrollTo(0, 0);
}
// close() {
//   const offcanvasElement = document.getElementById('offcanvasNavbar');
//   if (offcanvasElement) {
//     const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
//   offcanvas.hide();
//   }
// }
onPageChange(page) {
  if(page == 'helmet'){
  this.page = 'helmet';
  this.scrollToTop();
  }
  if(page == 'shoe'){
    this.page = 'shoe';
    this.scrollToTop();

    }

 
}
onSearchTextChange() {
  if(this.page == 'shoe' ) {
  this.filteredProductShoe = this.shoes.filter(product =>
    product.name.toLowerCase().includes(this.searchText.toLowerCase())
  );
  this.isNoDataFound = this.filteredProductShoe.length === 0;
} else{
  if(this.page == 'helmet' ) {
  this.filteredProductHelmet = this.helmets.filter(product =>
    product.name.toLowerCase().includes(this.searchText.toLowerCase())
  );
  this.isNoDataFound = this.filteredProductHelmet.length === 0;
}
}
}
redirectToWhatsApp(productName: string, productImage: string): void {
  const message = `Hey, I'm interested in buying this product: ${productName}. Here's the product image: ${productImage}`;
  const phoneNumber = '918072591338';
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.location.href = url;
}




}
