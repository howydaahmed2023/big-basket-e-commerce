import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   {path:'home',component:HomeComponent,title:'home'},
   {path:'shop',component:ShopComponent,title:'shop'},
   {path:'contact',component:ContactComponent,title:'contact'},
   {path:'blog',component:BlogComponent,title:'blog'},
   {path:'about',component:AboutComponent,title:'about'},
   { path: 'checkout', component: CheckoutComponent }
];
