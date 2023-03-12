import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import FAQ from "../components/FAQs";
import Header from "../components/header";
import FAQs from "../components/FAQs";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

export default function Index() {

const [ArrowClicked , setArrowClicked ] = useState(false)

const ArrowClickedHnadler= () => {
    setArrowClicked(!ArrowClicked);
  };
  return (
    <>
      <Head>
        <title>Numerlogy-site-demo</title>
        <meta name="Description" content="webdemo" />
        <link rel="icon" href="/Logoicon.png" />
      </Head>
      
        <div className="h-screen w-screen bg-bg1 fixed top-0 -z-10 bg-cover bg-no-repeat bg-center">

        
        </div>
    </>
  );
}
