export enum Category {
  USED = 'مستعمل',
  NEW = 'جديد',
  ACCESSORIES = 'إكسسوارات',
  MAINTENANCE = 'صيانة',
  CABLES = 'كابلات'
}

export type ProductTier = 'flagship' | 'mid-range' | 'budget';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  tier?: ProductTier;
  condition?: string;
  batteryHealth?: string;
  specs?: string[];
  boxContents?: string[];
  gallery?: string[];
  isDeal?: boolean;
  dealText?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  type: 'deal' | 'info' | 'success';
  productId?: string;
  duration?: number;
}