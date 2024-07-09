import Image from "next/image";

import nav from "@/_globals/nav";
import footer from "@/_globals/footer";
import CallToAction from "./_components/CallToAction";
import Header from "./_components/Header";
import PopularCategories from "./_components/PopularCategories";
import StoreLocator from "./_components/StoreLocator";
import Categories from "./_components/Categories";
import Usps from "./_components/Usps";
import SupplierList from "./_components/SupplierList";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
  <main>
    <Header/>
    <CallToAction/>
    <PopularCategories/>
    <StoreLocator/>
    <Categories/>
    <Usps/>
    <SupplierList/>
    <Testimonials/>
  </main>
  
  );
}
