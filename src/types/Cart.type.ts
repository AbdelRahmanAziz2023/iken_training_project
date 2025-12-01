export interface CartRestaurant {
  id: string | number;
  name: string;
  image: string;
  hostedBy: string;
}

export interface ActiveCartData {
  cartId: string;
  restaurant: CartRestaurant;
  totalPrice: number;
  participantsCount: number;
  status: "opened" | "closed" | "pending";
}
