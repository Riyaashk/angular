import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';
import $ from 'jquery';



@Component({
  selector: 'product-list',

  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  ngOnInit(){

    this.filteredHelmets = this.helmetsall;
    this.filteredShoes = this.shoesall;
    // this.axorfilteredHelmets = this.axorHelmets;
    // this.vegafilteredHelmets = this.vegaHelmets;
    // this.mtfilteredHelmets = this.mtHelmets;
    // this.steelfilteredHelmets = this.steelBirdHelmets;
    // this.nikefilteredShoes = this.nikeShoes;
    // this.adidasfilteredShoes = this.adidasShoes;
  
  }

  ngAfterViewInit(): void {
    // Set interval for automatic carousel sliding
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 2000); // 2000ms = 2 seconds
  }

intervalId: any; 

  
page: string = 'helmet'; 
selectedBrandHelmet: string = 'axor'; 
selectedBrandShoe :  string = 'nike'; 
searchText: string = '';
isNoDataFound = false;
mainMenuItems: string[] = ['Home', 'Products', 'New Arrival', 'Contact']
isLoading: boolean = false;
searchQuery: string = '';
filteredHelmets:any = '';
filteredShoes :any = '';



adidasShoes = [
  {
    id:3,
    name: "Adidas white",
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
    id:7,
    name: "Adidas pink",
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
]
// nikeShoes = [
//   {
//     id:1,
//     name: "Nike1",
//     gender: "Men & Women",
//     Description: "samplellllll",
//     brand:"Nike",
//     category:"Shoe",
//     size: [6,7,8,9],
//     color: ["white", "Black" ,"Blue"],
//     price:499,
//     discountPrice: 299,
//     is_in_inventory: true,
//     items_left:3,
//     imgURL:"https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com_.png",
//     slug:"Nike"
//   },
  
//   {
//     id:2,
//     name: "Nike2",
//     gender: "Men & Women",
//     Description: "samplellllll",
//     brand:"Nike",
//     category:"Shoe",
//     size: [6,7,8,9],
//     color: ["white", "Black" ,"Blue"],
//     price: 299,
//     is_in_inventory: true,
//     items_left:3,
//     imgURL:"https://pluspng.com/img-png/nike-shoe-png-nike-running-shoes-png-image-transparent-free-download-1200.png",
//     slug:"Nike"
//   },
  
  
  
//   {
//     id:4,
//     name: "Nike3",
//     gender: "Men & Women",
//     Description: "samplellllll",
//     brand:"Nike",
//     category:"Shoe",
//     size: [6,7,8,9],
//     color: ["white", "Black" ,"Blue"],
//     price: 399,
//     is_in_inventory: true,
//     items_left:3,
//     imgURL:"http://clipart-library.com/images_k/shoes-transparent/shoes-transparent-23.png",
//     slug:"Nike"
//   },
  
  
//   {
//     id:5,
//     name: "Nike4",
//     gender: "Women",
//     Description: "samplellllll",
//     brand:"Nike",
//     category:"Shoe",
//     size: [6,7,8,9],
//     color: ["white", "Black" ,"Blue"],
//     price: 599,
//     discountPrice: 299,
//     is_in_inventory: false,
//     items_left:3,
//     imgURL:"https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-2-1024x1024.png",
//     slug:"Nike"
//   },
  
//   {
//     id:6,
//     name: "Nike5",
//     gender: "Men & Women",
//     Description: "samplellllll",
//     brand:"Nike",
//     category:"Shoe",
//     size: [6,7,8,9],
//     color: ["Blue", "white"],
//     price: 299,
//     is_in_inventory: false,
//     items_left:3,
//     imgURL:"http://clipart-library.com/images_k/shoes-transparent-background/shoes-transparent-background-24.png",
//     slug:"Nike"
//   },
//   {
//     id:8,
//     name: "Nike8",
//     gender: "Men & Women",
//     Description: "samplellllll",
//     brand:"Nike",
//     category:"Shoe",
//     size: [6,7,8,9],
//     color: ["white", "Black" ,"Blue"],
//     price:499,
//     is_in_inventory: true,
//     items_left:3,
//     imgURL:"http://clipart-library.com/images_k/shoes-transparent-background/shoes-transparent-background-8.png",
//     slug:"Nike"
//   },
// ]
nikeShoes = [
  {
    id:1,
    name: "Nike White",
    gender: "Men & Women",
    Description: "samplellllll",
    brand:"Nike",
    category:"Shoe",
    size: [6,7,8,9],
    color: ["white"],
    price:499,
    discountPrice: 299,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://i5.walmartimages.com/asr/b2ef09e2-0f03-43c2-baef-dd143685135c_1.8f8477a207834b98fea649b8ae6e6222.jpeg",
    slug:"Nike"
  },

  {
    id:2,
    name: "Nike White",
    gender: "Men & Women",
    Description: "samplellllll",
    brand:"Nike",
    category:"Shoe",
    size: [6,7,8,9],
    color: ["white"],
    price: 299,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://i5.walmartimages.com/asr/49b5a086-9225-41f5-8bfa-5bd49e3311a5_1.a7e9db1bb5b88e1d5ced39e77429dd61.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
    slug:"Nike"
  },

  {
    id:3,
    name: "Nike White",
    gender: "Men & Women",
    Description: "samplellllll",
    brand:"Nike",
    category:"Shoe",
    size: [6,7,8,9],
    color: ["white"],
    price: 399,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://staticg.sportskeeda.com/editor/2023/01/882e1-16738613961943-1920.jpg",
    slug:"Nike"
  },

  {
    id:4,
    name: "Nike White",
    gender: "Men & Women",
    Description: "samplellllll",
    brand:"Nike",
    category:"Shoe",
    size: [6,7,8,9],
    color: ["white"],
    price: 599,
    discountPrice: 299,
    is_in_inventory: false,
    items_left:3,
    imgURL:"https://i5.walmartimages.com/asr/416b647b-fc09-4d1f-b7cc-81ece209cb0d_1.91860c594872019cbee3e7d24c94f40c.jpeg",
    slug:"Nike"
  },

  {
    id:5,
    name: "Nike White",
    gender: "Men & Women",
    Description: "samplellllll",
    brand:"Nike",
    category:"Shoe",
    size: [6,7,8,9],
    color: ["white"],
    price: 499,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://www.surfstitch.com/on/demandware.static/-/Sites-ss-master-catalog/default/dw590137a5/images/CD6278-100/WHITE-MENS-FOOTWEAR-NIKE-SNEAKERS-CD6278-100_5.JPG",
    slug:"Nike"
  },

  {
    id:6,
    name: "Nike White",
    gender: "Men & Women",
    Description: "samplellllll",
    brand:"Nike",
    category:"Shoe",
    size: [6,7,8,9],
    color: ["white"],
    price: 399,
    is_in_inventory: true,
    items_left:3,
    imgURL:"http://3.bp.blogspot.com/-9pQ8wHrIkpY/T9nwU5fjaAI/AAAAAAAADOQ/8-rdGDbo5EU/s1600/Nike+Air+Force+1-07+White+Sneakers+Shoes_3.jpg",
    slug:"Nike"
  },

  {
    id:7,
    name: "Nike Blue",
    gender: "Men & Women",
    Description: "samplellllll",
    brand:"Nike",
    category:"Shoe",
    size: [6,7,8,9],
    color: ["blue"],
    price:499,
    discountPrice: 299,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://cdna.lystit.com/photos/d1d1-2014/01/18/nike-blue-mens-air-max-tailwind-6-running-sneakers-from-finish-line-product-1-16825109-0-285795815-normal.jpeg",
    slug:"Nike"
  },

  {
    id:8,
    name: "Nike Blue",
    gender: "Men & Women",
    Description: "samplellllll",
    brand:"Nike",
    category:"Shoe",
    size: [6,7,8,9],
    color: ["blue"],
    price: 399,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://staticg.sportskeeda.com/editor/2022/10/9b55c-16671259275464-1920.jpg",
    slug:"Nike"
  },

  {
    id:9,
    name: "Nike Blue",
    gender: "Men & Women",
    Description: "samplellllll",
    brand:"Nike",
    category:"Shoe",
    size: [6,7,8,9],
    color: ["blue"],
    price: 599,
    is_in_inventory: true,
    items_left:3,
    imgURL:"http://www.tennisnuts.com/images/product/full/NIKE-AIR-ZOOM-FLY-2-707606_404_A_PREM.jpg",
    slug:"Nike"
  },

  {
    id:10,
    name: "Nike Blue",
    gender: "Men & Women",
    Description: "samplellllll",
    brand:"Nike",
    category:"Shoe",
    size: [6,7,8,9],
    color: ["blue"],
    price:499,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://cdnd.lystit.com/photos/2adf-2014/02/22/nike-blue-mens-flyknit-lunar2-running-sneakers-from-finish-line-product-1-17875627-4-479730934-normal.jpeg",
    slug:"Nike"
  }
]

vegaHelmets = [
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
    discountPrice: 800,
    items_left:3,
    imgURL:"https://rukminim1.flixcart.com/image/1664/1664/helmet/e/4/w/na-1-vega-60-flip-up-crux-original-imae9xgse4jj8hb4.jpeg?q=90",
    slug:"Nike"
  },
  {
    id:7,
    name: "Vega-Bunny-Red",
    gender: "Men & Women",
    Description: "samplellllll",
    brand:"Vega",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["Red"],
    price: 999,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://tse1.mm.bing.net/th?id=OIP.Fhs3dSJTYKXdkn4ovjsXagHaHa&pid=Api&P=0&h=180",
    slug:"Vega"
  },
  {
    id:8,
    name: "Vega-Bunny-Green",
    gender: "Men & Women",
    Description: "samplellllll",
    brand:"Vega",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["Green"],
    price: 999,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://media.e-valy.com/cms/products/images/bc001d06-73d5-4d8b-80da-8e06bf228b60?h=1000&w=1000",
    slug:"Vega"
  },
  {
    id:9,
    name: "Vega-Black",
    gender: "Men & Women",
    Description: "samplellllll",
    brand:"Vega",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["Black"],
    price: 999,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://ridersjunction.com/wp-content/uploads/2022/03/Vega-Bolt-Black-Helmet-Riders-Junction-600x600.jpg",
    slug:"Vega"
  },
  {
    id:10,
    name: "Vega-Green-with-Blue",
    gender: "Men & Women",
    Description: "samplellllll",
    brand:"Vega",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["Green", "Blue"],
    price: 999,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://arihanthelmets.com/wp-content/uploads/2022/12/Bunny-Black-Neon-Blue-4.jpg",
    slug:"Vega"
  },
  {
    id:11,
    name: "Vega-Bunny-Green",
    gender: "Men & Women",
    Description: "samplellllll",
    brand:"Vega",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["Green"],
    price: 999,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://arihanthelmets.com/wp-content/uploads/2022/12/Bunny-Black-Neon-Blue-4.jpg",
    slug:"Vega"
  },
  {
    id:12,
    name: "Vega-Red",
    gender: "Men & Women",
    Description: "samplellllll",
    brand:"Vega",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["Red"],
    price: 999,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://arihanthelmets.com/wp-content/uploads/2022/12/Bolt-Bunny-White-orange-2-600x600.jpg",
    slug:"Vega"
  }
]

axorHelmets = [ 
  {
    id:1,
    name: "Axor-Red",
    gender: "Men ",
    Description: "samplellllll",
    brand:"Axor",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["white", "Black", "Blue"],
    price: 4999,
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
    color: ["white", "Black", "Blue"],
    price: 3500,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://m.media-amazon.com/images/I/61DpON3NPCL._SL1500_.jpg",
    slug:"Nike"
  },
  {
    id:3,
    name: "Axor-Venomous Black",
    gender: "Men",
    Description: "samplellllll",
    brand:"Axor",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["Black", "Red"],
    price: 3999,
    is_in_inventory: true,
    items_left:3,
    imgURL:"http://motocentral.in/cdn/shop/files/Black_20Red_202-500x500_1a2fbc02-4890-4002-81cc-b86cac2503c4_grande.jpg?v=1685108741",
    slug:"Axor"
  },
  {
    id:4,
    name: "Axor-Pure Black",
    gender: "Men",
    Description: "samplellllll",
    brand:"Axor",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["Black"],
    price: 3999,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://ridersjunction.com/wp-content/uploads/2022/02/AXOR-Retro-Dominator-Dull-Black-Helmet-Riders-Junction-1-408x400.png",
    slug:"Axor"
  },
  {
    id:5,
    name: "Axor-Black",
    gender: "Men",
    Description: "samplellllll",
    brand:"Axor",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["Black"],
    price: 3999,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://www.ahhelmets.in/15151-thickbox_default/axor-apex-matt-black-helmet.jpg",
    slug:"Axor"
  },
  {
    id:6,
    name: "Axor-Black",
    gender: "Men",
    Description: "samplellllll",
    brand:"Axor",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["Black"],
    price: 3999,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://saddlestore.in/wp-content/uploads/2022/08/AXOR-APEX-DULL-BLACK-500x500-1.png",
    slug:"Axor"
  }
]

// vegaHelmets = [
    
//   {
//     id:6,
//     name: "Vega-Black",
//     gender: "Men & Women",
//     Description: "samplellllll",
//     brand:"Vega",
//     category:"Helmet",
//     size: [6,7,8,9],
//     color: ["Blue", "white"],
//     price: 999,
//     is_in_inventory: false,
//     discountPrice: 800,
//     items_left:3,
//     imgURL:"https://rukminim1.flixcart.com/image/1664/1664/helmet/e/4/w/na-1-vega-60-flip-up-crux-original-imae9xgse4jj8hb4.jpeg?q=90",
//     slug:"Nike"
//   },

// ]
// mtHelmets = [
//   {
//     id:4,
//     name: "MT",
//     gender: "Men",
//     Description: "samplellllll",
//     brand:"MT",
//     category:"Helmet",
//     size: [6,7,8,9],
//     color: ["white", "Black" ,"Blue"],
//     price: 7500,
//     is_in_inventory: true,
//     discountPrice: 6000,
//     items_left:3,
//     imgURL:"https://www.motardinn.com/f/13709/137090958/mt-helmets-atom-sv-transcend-modular-helmet.jpg",
//     slug:"Nike"
//   },
// ]

mtHelmets = [
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
    discountPrice: 6000,
    items_left:3,
    imgURL:"https://www.motardinn.com/f/13709/137090958/mt-helmets-atom-sv-transcend-modular-helmet.jpg",
    slug:"Nike"
  },
  {
    id:5,
    name: "MT-Red",
    gender: "Men",
    Description: "samplellllll",
    brand:"MT",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["Red"],
    price: 7500,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://www.motostorm.it/images/products/large/caschi_modulari/mthelmets_streetfightersv_twinc5_rosso.jpg",
    slug:"MT"
  },
  {
    id:6,
    name: "MT-Red",
    gender: "Men",
    Description: "samplellllll",
    brand:"MT",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["Red"],
    price: 7500,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://www.motostorm.it/images/products/large/caschi_modulari/atom_transcend_rosso_4.jpg",
    slug:"MT"
  },
  {
    id:7,
    name: "MT-Black",
    gender: "Men",
    Description: "samplellllll",
    brand:"MT",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["Black"],
    price: 7500,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://www.tradeinn.com/f/13745/137452308_3/mt-helmets-blade-2-sv-89-full-face-helmet.jpg",
    slug:"MT"
  },
  {
    id:8,
    name: "MT-Blue-with-White",
    gender: "Men",
    Description: "samplellllll",
    brand:"MT",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["Blue", "White"],
    price: 7500,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://www.tradeinn.com/f/13930/139305611/mt-helmets-thunder-4-sv-ergo-c7-full-face-helmet.jpg",
    slug:"MT"
  },
  {
    id:9,
    name: "MT-Green",
    gender: "Men",
    Description: "samplellllll",
    brand:"MT",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["Green"],
    price: 7500,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://ridersjunction.com/wp-content/uploads/2020/11/MT-Helmet-Targo-Viper-2-0-Gloss-front.png",
    slug:"MT"
  },
  {
    id:10,
    name: "MT-Black",
    gender: "Men",
    Description: "samplellllll",
    brand:"MT",
    category:"Helmet",
    size: [6,7,8,9],
    color: ["Black"],
    price: 7500,
    is_in_inventory: true,
    items_left:3,
    imgURL:"https://www.motardinn.com/f/13709/137090955/mt-helmets-atom-sv-divergence.jpg",
    slug:"MT"
  }
]

steelBirdHelmets = [
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
]
// axorHelmets = [
//   {
//     id:1,
//     name: "Axor-Red",
//     gender: "Men ",
//     Description: "samplellllll",
//     brand:"Axor",
//     category:"Helmet",
//     size: [6,7,8,9],
//     color: ["white", "Black" ,"Blue"],
//     price:4999,
//     discountPrice: 4500,
//     is_in_inventory: true,
//     items_left:3,
//     imgURL:"https://i0.wp.com/www.kmxhelmets.com/wp-content/uploads/2022/08/AXOR-Helmets-model-APEX-HUNTER-8.jpg?w=1280&ssl=1",
//     slug:"Nike"
//   },

//   {
//     id:2,
//     name: "Axor-Black with Red",
//     gender: "Men",
//     Description: "samplellllll",
//     brand:"Axor-black with Red",
//     category:"Helmet",
//     size: [6,7,8,9],
//     color: ["white", "Black" ,"Blue"],
//     price: 3500,
//     is_in_inventory: true,
//     items_left:3,
//     imgURL:"https://m.media-amazon.com/images/I/61DpON3NPCL._SL1500_.jpg",
//     slug:"Nike"
//   },

//   {
//     id:9,
//     name: "Axor-Blue",
//     gender: "Men",
//     Description: "samplellllll",
//     brand:"Axor",
//     category:"Helmet",
//     size: [6,7,8,9],
//     color: ["white", "Black" ,"Blue"],
//     price: 6999,
//     is_in_inventory: true,
//     items_left:3,
//     imgURL:"https://www.ahhelmets.in/24548-large_default/axor-street-zazu-gloss-blue-helmet.jpg",
//     slug:"Adidas"
//   },

//   {
//     id:8,
//     name: "Axor-Yellow",
//     gender: "Men",
//     Description: "samplellllll",
//     brand:"Axor",
//     category:"Helmet",
//     size: [6,7,8,9],
//     color: ["white", "Black" ,"Blue"],
//     price:5499,
//     is_in_inventory: true,
//     items_left:3,
//     imgURL:"https://bdlamotorbikes.co.uk/wp-content/uploads/2023/07/Axor-X-Cross-Graphic-Adventure-Motorcycle-Helmet-Yellow-1.jpg",
//     slug:"Nike"
//   },

//   {
//     id:7,
//     name: "Axor-Black",
//     gender: "Men",
//     Description: "samplellllll",
//     brand:"Axor",
//     category:"Helmet",
//     size: [6,7,8,9],
//     color: ["white", "Black" ,"Blue"],
//     price:3999,
//     is_in_inventory: true,
//     items_left:3,
//     imgURL:"https://bdlamotorbikes.co.uk/wp-content/uploads/2023/07/Axor-X-Cross-Plain-Adventure-Motorcycle-Helmet-Matt-Black-3.jpg",
//     slug:"Nike"
//   },
// ]

helmetsall = [
  ...this.axorHelmets,
  ...this.vegaHelmets,
  ...this.mtHelmets,
  ...this.steelBirdHelmets,

];

shoesall = [
  ...this.adidasShoes,
  ...this.nikeShoes
]


scrollToTop() {
  window.scrollTo(0, 0);
}

closeOffcanvas() {
  // Trigger the click event on the close button manually using jQuery
  $('#offcanvasNavbar .btn-close').click();
}

  
clearSearch() {
  this.searchQuery = '';
  this.onSearchChange(); // Refresh the search results
}

onPageChange(page) {
  if(page == 'helmet'){
    this.searchQuery ='';
    this.onSearchChange();
  this.page = 'helmet';

  // this.selectedBrandHelmet = 'axor'; 
  this.scrollToTop();
  }
  if(page == 'shoe'){
    this.searchQuery ='';
    this.onSearchChange();
    this.page = 'shoe';
//  this.selectedBrandShoe='nike'; 
    this.scrollToTop();
    }
 this.closeOffcanvas();
 
}
nextSlide(): void {
  const carouselElement = document.querySelector('#carouselExampleIndicators') as HTMLElement;
  if (carouselElement) {
    const nextButton = carouselElement.querySelector('.carousel-control-next') as HTMLElement;
    if (nextButton) {
      nextButton.click(); // Simulate a button click to move to the next slide
    }
  }
}
// onSearchChange() {
// console.log("this.axorfilteredHelmets", this.axorfilteredHelmets)
// //   if (this.selectedBrandHelmet == 'axor') {
// //     this.axorfilteredHelmets = this.axorHelmets.filter(helmet =>
// //       helmet.name.toLowerCase().includes(this.searchQuery.toLowerCase())
// //     );
// // }


// //   if (this.selectedBrandHelmet == 'steelBird') {
// //     this.steelfilteredHelmets = this.steelBirdHelmets.filter(helmet =>
// //       helmet.name.toLowerCase().includes(this.searchQuery.toLowerCase())
// //     );
// //   }

// //   if (this.selectedBrandHelmet == 'vega') {
// //     this.vegafilteredHelmets = this.vegaHelmets.filter(helmet =>
// //       helmet.name.toLowerCase().includes(this.searchQuery.toLowerCase())
// //     );
// //   }

// //   if (this.selectedBrandHelmet == 'mt') {
// //     this.mtfilteredHelmets = this.mtHelmets.filter(helmet =>
// //       helmet.name.toLowerCase().includes(this.searchQuery.toLowerCase())
// //     );
// //   }

// //   if (this.selectedBrandShoe == 'nike') {
// //     this.nikefilteredShoes = this.nikeShoes.filter(shoes =>
// //       shoes.name.toLowerCase().includes(this.searchQuery.toLowerCase())
// //     );
// //   }

// //   if (this.selectedBrandShoe == 'adidas') {
// //     this.adidasfilteredShoes = this.adidasShoes.filter(shoes =>
// //       shoes.name.toLowerCase().includes(this.searchQuery.toLowerCase())
// //     );
// //   }
// }


// onSearchChange() {
//   // const searchQuery = this.searchQuery.toLowerCase();
//   // const searchQuery = this.searchQuery.toLowerCase().replace(/\s+/g, ''); 
//   const searchQuery = this.searchQuery.toLowerCase().trim(); // Trim spaces
//   if(this.page == 'helmet'){
//   // Filter helmets based on searchQuery
//   this.filteredHelmets = this.helmetsall.filter(helmet => 
//     helmet.name.toLowerCase().includes(searchQuery)
//   );
//   }
//   if(this.page == 'shoe'){

//   this.filteredShoes = this.shoesall.filter(helmet => 
//     helmet.name.toLowerCase().includes(searchQuery)
//   );
// }
  
// }

onSearchChange() {
  const searchQuery = this.searchQuery.toLowerCase().trim().replace(/\s+/g, '').replace(/-/g, ''); // Remove spaces and hyphens
  if (this.page == 'helmet') {
    // Filter helmets based on searchQuery
    this.filteredHelmets = this.helmetsall.filter(helmet =>
      helmet.name.toLowerCase().replace(/\s+/g, '').replace(/-/g, '').includes(searchQuery)
    );
  }
  if (this.page == 'shoe') {
    // Filter shoes based on searchQuery
    this.filteredShoes = this.shoesall.filter(shoe =>
      shoe.name.toLowerCase().replace(/\s+/g, '').replace(/-/g, '').includes(searchQuery)
    );
  }
}


onHelmetSelect(event: any) {
  const selectedValue = event.target.value;
  console.log(selectedValue); // This will log "axor" when the user selects "Axor"
  this.isLoading = true;
  setTimeout(() => {
    this.isLoading = false;
  if(selectedValue == 'axor'){
    this.searchQuery ='';
    // this.onSearchChange();
    this.selectedBrandHelmet = 'axor';
  }
  if(selectedValue == 'steelBird'){
    this.searchQuery ='';
    // this.onSearchChange();
    this.selectedBrandHelmet = 'steelBird';
  }
  if(selectedValue == 'vega'){
    this.searchQuery ='';
    // this.onSearchChange();
    this.selectedBrandHelmet = 'vega';
  }
  if(selectedValue == 'mt'){
    this.searchQuery ='';
    // this.onSearchChange();
    this.selectedBrandHelmet = 'mt';
  }
  if(selectedValue == 'nike'){
    this.searchQuery ='';
    // this.onSearchChange();
    this.selectedBrandShoe = 'nike';
  }
  if(selectedValue == 'adidas'){
    this.searchQuery ='';
    // this.onSearchChange();
    this.selectedBrandShoe = 'adidas';
  }
}, 1000);
}

redirectToWhatsApp(productName: string, productImage: string): void {
  const message = `Hey, I'm interested in buying this product: ${productName}. Here's the product image: ${productImage}`;
  const phoneNumber = '918072591338';
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.location.href = url;
}




}
