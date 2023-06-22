import MainLayout from "@/components/layouts";
import TopSection from "./components/topSection";
import { Metadata } from "next";
import ContentSection from "./components/contentSection";

export const metadata: Metadata = {
    title: 'Blog Details',
}

export default function BlogDetails() {
    const blogList = [];

    return (
        <MainLayout>
            <TopSection />
            <ContentSection />
        </MainLayout>
    )
}
