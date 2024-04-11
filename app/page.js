import Home3Blog from "@/components/Home3/Home3Blog";
import Home3Hero from "@/components/Home3/Home3Hero";
import Home3Introduce from "@/components/Home3/Home3Introduce";
import Home3Principle from "@/components/Home3/Home3Principle";
import Layout from "@/layouts/layout";

export const metadata = {
  title: "Vortex Construction",
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
