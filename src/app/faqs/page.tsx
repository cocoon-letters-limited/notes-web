import MainLayout from "@/components/layouts";
import TopSection from "./components/topSection";
import FaqsSection from "./components/faqsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'FAQs',
  }

export default function Faqs() {
    return (
        <MainLayout>
            <TopSection />
            <FaqsSection />
        </MainLayout>
    )
}
