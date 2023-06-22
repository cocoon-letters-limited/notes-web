import MainLayout from "@/components/layouts";
import TopSection from "./components/topSection";
import { Metadata } from "next";
import Image from "next/image";
import BlogSection from "./components/blogSection";
import EmptyIcon from "../../../public/images/webp/empty_blog.webp";

export const metadata: Metadata = {
    title: 'Blog',
}

export default function Blog() {
        const blogList = [];

    return (
        <MainLayout>
            <TopSection />
            {blogList?.length === 0 ? (
                <div className="flex flex-row items-center justify-center w-6/12 lg:w-4/12 xl:w-3/12 mx-auto pt-16 pb-24">
                    <Image src={EmptyIcon} alt="Empty List" />
                </div>
            ) : (
                <BlogSection />
            )}
        </MainLayout>
    )
}
