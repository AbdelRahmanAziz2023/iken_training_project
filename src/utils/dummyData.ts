import { ActiveCartData } from "@/src/types/cart.type";

export const dummyActiveCart: ActiveCartData = {
  cartId: "12345",
  restaurant: {
    id: 1,
    name: "MacDonald's",
    image: "https://thumbs.dreamstime.com/b/restaurant-logo-design-idea-chef-hat-fork-graphic-leaf-shape-food-drinks-symbol-concept-cooking-eating-vector-template-173237325.jpg",
    hostedBy: "Saleh",
  },
  totalPrice: 100,
  participantsCount: 3,
  status: "opened",
};

// You can create more dummy carts here for testing
export const dummyActiveCartList: ActiveCartData[] = [
  dummyActiveCart,
  {
    cartId: "12346",
    restaurant: {
      id: 2,
      name: "KFC",
      image: "https://upload.wikimedia.org/wikipedia/en/b/bf/KFC_Logo.svg",
      hostedBy: "Ahmed",
    },
    totalPrice: 150,
    participantsCount: 5,
    status: "opened",
  },
  {
    cartId: "12347",
    restaurant: {
      id: 3,
      name: "Pizza Hut",
      image: "https://upload.wikimedia.org/wikipedia/en/d/d7/Pizza_Hut_logo.svg",
      hostedBy: "Fatima",
    },
    totalPrice: 200,
    participantsCount: 4,
    status: "closed",
  },
];
