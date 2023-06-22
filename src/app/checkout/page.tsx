import MainLayout from "@/components/layouts";
import { Metadata } from "next";
import CheckoutSection from "./components/checkoutSection";

export const metadata: Metadata = {
    title: 'Subscription Checkout',
}

export default function Checkout() {
    return (
        <MainLayout>
            <CheckoutSection />
        </MainLayout>
    )
}
