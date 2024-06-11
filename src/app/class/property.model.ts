// src/app/models/property.model.ts

export interface Address {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  }
  
  export interface Image {
    url: string;
    description: string;
  }
  
  export interface Price {
    type: string;
    amount: number;
    currency: string;
  }
  
  export interface Features {
    area: number;
    beds: number;
    baths: number;
    garages: number;
  }
  
  export interface Property {
    id: number;
    agent: number;
    title: string;
    address: Address;
    description: string;
    images: Image[];
    price: Price;
    details_link: string;
    features: Features;
    amenities: string[];
    date: Date; 
  }
  