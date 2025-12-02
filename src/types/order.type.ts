
import { CartItemDto } from "./cart.type";

export type OrderRole = "HOST" | "PARTICIPANT";
export type OrderStatus = "PAID" | "UNPAID" | "COMPLETED" | "PENDING_COLLECTION";

export interface OrderHistoryItem {
	orderId: string; // uuid
	restaurantName: string;
	date: string; // ISO date-time
	role: OrderRole;
	status: OrderStatus;
	amount: number;
}

export interface BillResponse {
	restaurantName: string;
	orderDate: string; // ISO date-time
	hostName: string;
	paymentInstructions?: string | null;
	isPaid: boolean;
	subTotal: number;
	deliveryShare: number;
	totalDue: number;
	items: CartItemDto[];
}

export interface TrackerParticipant {
	userId: string; // uuid
	name: string;
	amountOwed: number;
	isPaid: boolean;
	isHost: boolean;
}

export interface TrackerResponse {
	orderTotal: number;
	collectedAmount: number;
	remainingAmount: number;
	paymentInstructions?: string | null;
	participants: TrackerParticipant[];
}

