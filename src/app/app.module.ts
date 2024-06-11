import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { SharedModule } from './components/shared/shared.module';
import { AgentComponent } from './components/agent/agent.component';
import { NewsComponent } from './components/news/news.component';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { BlogComponent } from './components/blog/blog.component';
import { PropertySingleComponent } from './components/property-single/property-single.component';
import { BlogSingleComponent } from './components/blog-single/blog-single.component';
import { ContactComponent } from './components/contact/contact.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertiesComponent,
    AgentComponent,
    NewsComponent,
    AboutComponent,
    ShopComponent,
    BlogComponent,
    PropertySingleComponent,
    BlogSingleComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
