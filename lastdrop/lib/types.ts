export interface Category {
  _id: string;
  name: string;
  notification?: string;
  foods: {
    _id: string; // Unique identifier for each food item
    name: string;
    inBracket: string;
    priceOutdoor: number; 
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
  _id: string;
  name: string;
  notification?: string;
  drink: {
    _id: string; // Unique identifier for each drink item
    name: string;
    inBracket: string;
    priceOutdoor: number;
  }[]; 
  image?: {
    asset: {
      _id: string;
      url: string;
    };
  };
}

export interface Category3 {
  _id: string;
  name: string;
  notification?: string;
  foods: {
    _id: string; // Unique identifier for each food item
    name: string;
    inBracket: string;
    priceHideout: number; 
  }[];
  image?: {
    asset: {
      _id: string;
      url: string;
    };
  };
}

// Interface for the second category type
export interface Category4 {
  _id: string;
  name: string;
  notification?: string;
  drink: {
    _id: string; // Unique identifier for each drink item
    name: string;
    inBracket: string;
    priceHideout: number;
  }[]; 
  image?: {
    asset: {
      _id: string;
      url: string;
    };
  };
}