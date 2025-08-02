import Hero1 from "../components/mvpblocks/hero-1"
import AboutSection from "@/components/about-section"
import ServiceSection from "@/components/service-section"
import ContactSection from "@/components/contact-section"
// Removed: import PageRippleEffect from "@/components/page-ripple-effect"

export default function Page() {
  return (
    <div className="relative">
      {/* Removed: <PageRippleEffect /> */}
      <Hero1 />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
    </div>
  )
}
