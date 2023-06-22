import MainLayout from "@/components/layouts";
import { Metadata } from "next";
import TopSection from "./components/topSection";
import OurStorySection from "./components/ourStorySection";
import TeamSection from "./components/teamSection";

export const metadata: Metadata = {
    title: 'About Us',
}

export default function Faqs() {
    return (
        <MainLayout>
            <TopSection />
            <OurStorySection />
            <TeamSection />
        </MainLayout>
    )
}
