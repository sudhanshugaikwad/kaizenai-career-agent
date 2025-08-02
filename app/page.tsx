"use client";
import Image from "next/image";
import visa from "./icons/visa.png";
import paypal from "./icons/paypal.png";
import card from "./icons/card.png";
import googlepay from "./icons/googlepay.png";
import { SignIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

import HowItWorksSection from "./HowItWorksSection";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import ServicesSection from "./ServicesSection";
export default function Home() {
  // const user = useAuthContext();
  // console.log(user?.user)

  const { user } = useUser();

  return (
    <div>
      <header className="flex  flex-wrap sm:justify-start  sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">
        <nav
          className="relative  p-4 max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <div>
              <Image src={"/image.png"} alt="logo" width={150} height={150} />
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7 cursor-pointer">
              {/* Clerk Authentication  */}
              {!user ? (
                <SignInButton
                  mode="modal"
                  signUpForceRedirectUrl={"/dashboard"}
                >
                  <div className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 py-2 sm:py-0 sm:ms-4 sm:my-6 sm:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500">
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    Login
                  </div>
                </SignInButton>
              ) : (
                <UserButton />
              )}
            </div>
          </div>
        </nav>
      </header>
      {/* Hero Section */}
      {/* <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-200"
              href="#"
              target="_blank"
            >
              Join our Kaizen Ai Community- Join Now
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-neutral-700 dark:text-neutral-400">
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>

          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              Land Your Dream Job With
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                Kaizen Ai
              </span>
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Kaizen Ai powered career assistant for job seekers, students, and
              working professionals. Use tools like Resume Analyzer, Roadmap
              Generator & more.
            </p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            <a
              className="inline-flex justify-center items-center 
      gap-x-3 text-center bg-gradient-to-tl from-blue-600
       to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent cursor-pointer text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
              href="/dashboard"
            >
              Get started
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>  */}
      <HeroSection />
      {/* Service section  */}
      <ServicesSection />

      {/* How It Works Section */}
      <HowItWorksSection />
      {/* Footer Section */}
      {/* <footer className="bg-white text-black px-6 py-10">
        <div className="p-5 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  pb-10">
       
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/image.png"
                alt="Company Logo"
                width={150}
                height={150}
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              Kaizen AI helps you take control of your career. Our 12/7 AI
              Career Coach offers smart, personalized guidance for students, job
              seekers, and professionals.
            </p>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-neutral-400 hover:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-neutral-400 hover:text-blue-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-neutral-400 hover:text-blue-500"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Payment
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/payment-options"
                  className="text-gray-600 dark:text-neutral-400"
                >
                  Payment Options
                </a>
              </li>
            </ul>

           
            <div className="flex gap-3 mt-4">
              <Image src={visa} alt="Visa" width={40} height={25} />
              <Image src={card} alt="MasterCard" width={40} height={25} />
              <Image src={paypal} alt="PayPal" width={40} height={25} />
              <Image src={googlepay} alt="UPI" width={40} height={25} />
            </div>
          </div>
        </div>

      
        <div className="mt-6 text-center text-sm text-gray-600">
          Website designed by Sudhanshu Gaikwad © Kaizen AI - 2025
        </div>
      </footer> */}

      <Footer />
    </div>
  );
}
