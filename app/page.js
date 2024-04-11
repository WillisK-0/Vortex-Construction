import Home3Blog from "@/components/Home3/Home3Blog";
import Home3Hero from "@/components/Home3/Home3Hero";
import Home3Introduce from "@/components/Home3/Home3Introduce";
import Home3Principle from "@/components/Home3/Home3Principle";
import Layout from "@/layouts/layout";

export const metadata = {
  title:
    "Vortex Construction | Top Concrete Contractor in Houston, Texas | Residential & Commercial Services",
  description:
    "Vortex Construction is the premier concrete contractor in Houston, Texas, offering expert residential and commercial concrete services. Contact us for quality concrete solutions!",
  keywords:
    "concrete contractor Houston Texas, residential concrete services, commercial concrete services, Houston concrete company, concrete contractor near me, Houston TX, concrete, construction services houston, ",
  author: "Vortex Construction",
  url: "https://www.vortexconstructionhouston.com",
  image:
    "https://www.vortexconstructionhouston.com/images/concrete-services-houston.jpg",
  siteName: "Vortex Construction",
  type: "website",
  locale: "en_US",
  twitterUsername: "@vortexconstruct",
  facebookAppId: "1234567890",
  ogTitle: "Vortex Construction | Top Concrete Contractor in Houston, Texas",
  ogDescription:
    "Vortex Construction is the premier concrete contractor in Houston, Texas, offering expert residential and commercial concrete services. Contact us for quality concrete solutions!",
  ogType: "website",
  ogImage:
    "https://www.vortexconstructionhouston.com/images/concrete-services-houston.jpg",
  ogUrl: "https://www.vortexconstructionhouston.com",
};

export default function page() {
  return (
    <>
      <Layout className={"nobglight"}>
        {/* <!-- Hero Header --> */}
        <Home3Hero />
        {/* <!-- /Hero Header --> */}

        {/* <!-- Introduce Shortcode --> */}
        <Home3Introduce />
        {/* <!-- /Introduce Shortcode --> */}

        {/* <!-- Info & Rating --> */}
        {/* <Home3Info /> */}
        {/* <!-- /Info & Rating --> */}

        {/* <!-- Principles --> */}
        <Home3Principle />
        {/* <!-- /Principles --> */}

        {/* <!-- Project Sticky Modern Shortcode --> */}
        {/* <Home3Project /> */}
        {/* <!-- /Project Sticky Modern Shortcode --> */}

        {/* <!-- Blog Section --> */}
        <Home3Blog />
        {/* <!-- /Blog Section --> */}
      </Layout>
    </>
  );
}
