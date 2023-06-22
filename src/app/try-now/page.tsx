import MainLayout from "@/components/layouts";
import { Metadata } from "next";
import FormSection from "./components/formSection";

export const metadata: Metadata = {
    title: 'Try Now',
}

export default function TryNow() {

    return (
        <MainLayout>
            <FormSection />
        </MainLayout>
    )
}
