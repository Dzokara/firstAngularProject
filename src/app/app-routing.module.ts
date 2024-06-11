import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ShopComponent } from './components/shop/shop.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PropertySingleComponent } from './components/property-single/property-single.component';
import { BlogSingleComponent } from './components/blog-single/blog-single.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent 
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'properties',
        component: ShopComponent,
      },
      {
        path: 'properties/:id',
        component:PropertySingleComponent
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path:'blog/:id',
        component: BlogSingleComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
