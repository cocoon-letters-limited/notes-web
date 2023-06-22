import MainLayout from "@/components/layouts";
import TopSection from "./components/topSection";
import { Metadata } from "next";
import MiddleSection from "./components/middleSection";

export const metadata: Metadata = {
    title: 'Contact Us',
}

export default function Contact() {
    return (
        <MainLayout>
            <TopSection />
            <MiddleSection />
        </MainLayout>
    )
}
