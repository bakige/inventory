export interface Inventory {
    id: string;
    name: string;
    price: string;
    image: string;
    description: string;
    brand?: string;
    currentInventory: number;
  }