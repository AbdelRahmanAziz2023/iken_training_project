import { RestaurantDto } from './restaurant.type';

export interface MenuItemDto {
  id: string;
  name: string;
  description: string | null;
  price: number;
  isVisible: boolean;
}

export interface MenuDto extends RestaurantDto {
  menuItems: MenuItemDto[];
}
