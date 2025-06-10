export interface Category {
  name: string;
  notification?: string;
  foods: {
    name: string;
    inBracket: string;
    price: number | string;
  }[];
  image?: {
    asset: {
      _id: string;
      url: string;
    };
  };
}

// Interface for the second category type
export interface Category2 {
  name: string;
  notification?: string;
  drink: {
    name: string;
    inBracket: string;
    price: number | string;
  }[];
}