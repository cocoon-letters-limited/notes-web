import MainLayout from "@/components/layouts";
import TopSection from "./home/components/topSection";
import ToolsSection from "./home/components/toolsSection";
import SolutionSection from "./home/components/solutionSection";
import GetStartedSection from "./home/components/getStartedSection";
import TestimonialSection from "./home/components/testimonialSection";
import PricingSection from "./home/components/pricingSection";

export default function Home() {
    return (
        <MainLayout>
            <TopSection />
            <ToolsSection />
            <SolutionSection />
            <GetStartedSection />
            <TestimonialSection />
            <PricingSection />
        </MainLayout>
    )
}
