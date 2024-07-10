import Image from "next/image";

import Nav from "./_components/_globals/Nav";
import Footer from "@/app/_components/_globals/Footer";
import CallToAction from "./_components/CallToAction";
import Header from "./_components/Header";
import PopularCategories from "./_components/PopularCategories";
import StoreLocator from "./_components/StoreLocator";
import Categories from "./_components/Categories";
import Usps from "./_components/Usps";
import SupplierList from "./_components/SupplierList";
import Testimonials from "./_components/Testimonials";
import About from "./_components/About";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Header />
        <CallToAction />
        <PopularCategories />
        <StoreLocator />
        <Categories />
        <Usps />
        <About />
        <SupplierList />
        <Testimonials />
      </main>
      <Footer />
    </>

  );
}
