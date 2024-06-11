import { Component } from '@angular/core';
import { PropertyService } from '../../properties/business-logic/api/property.service';
import { Property } from '../../class/property.model';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  properties: Property[] = [];
  filteredProperties: any[] = [];
  priceRangeMin: number = 0;
  selectedSort:string = 'All';
  priceRangeMax: number = 25000;
  areaRangeMin: number = 0;
  areaRangeMax: number = 1000;
  filterOptions: { label: string, value: string }[] = [
    { label: 'All', value: 'all' },
    { label: 'For Rent', value: 'forRent' },
    { label: 'For Sale', value: 'forSale' }
  ];
  selectedFilter: string = 'all'; // Default filter

    constructor(private propertyService: PropertyService) {}
    ngOnInit(): void {
      this.propertyService.getAllProperties().subscribe(data => {
        this.properties = data;
        this.initializeFilteredProperties();
      });
    }

    initializeFilteredProperties() {
      this.filteredProperties = [...this.properties];
    }

    filterProperties() {
      this.filteredProperties = this.properties.filter(property => {
        
        return (
          property.price.amount >= this.priceRangeMin && property.price.amount <= this.priceRangeMax &&
          property.features.area >= this.areaRangeMin && property.features.area <= this.areaRangeMax
          
        );
        
      });
      
      this.sortProperties();
    }
    
    sortProperties() {
      if (this.selectedFilter === 'newToOld') {
        this.filteredProperties.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      } else if (this.selectedFilter === 'oldToNew') {
        this.filteredProperties.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      } else if (this.selectedFilter === 'priceLow') {
        this.filteredProperties.sort((a, b) => a.price.amount - b.price.amount);
      } else if (this.selectedFilter === 'priceHigh') {
        this.filteredProperties.sort((a, b) => b.price.amount - a.price.amount);
      } else if (this.selectedFilter === 'All') {
        this.filteredProperties.sort((a, b) => a.id - b.id); 
      }
    }
}
