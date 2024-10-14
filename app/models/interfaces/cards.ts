export interface Card {
  discount: number;
  plan: string;
  discountedPrice: number;
  finalPrice: number;
  savedAmount: number;
  type: "free" | "unlimited" | "plus";
  buttonTitle: string;
  buttonSubtitle: string;
}
