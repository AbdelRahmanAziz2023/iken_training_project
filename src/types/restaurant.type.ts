export interface RestaurantDto {
  id: string;
  shortCode: string;
  name: string;
  logoUrl: string | null;
  isVisible: boolean;
  isDeleted: boolean;
}
