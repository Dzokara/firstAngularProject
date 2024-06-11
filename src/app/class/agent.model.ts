export interface Social {
    platform: string;
    url: string;
  }
  
  export interface Agent {
    id: number;
    name: string;
    surname: string;
    image: string;
    description: string;
    phone: string;
    email: string;
    socials: Social[];
  }
  