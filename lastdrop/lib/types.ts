export interface Category {
    name: string;
    notification?: string;
    foods: {
      name: string;
      inBracket: string;
      price: number | string;
    }[];
  }
  
// interface page for both categories

  export interface Category2 {
    name: string;
    notification?: string;
    drink: {
      name: string;
      inBracket: string;
      price: number | string;
    }[];
  }
  