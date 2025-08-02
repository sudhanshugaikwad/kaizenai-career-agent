"use client";

import Image from "next/image";
import {
  Home,
  Info,
  BetweenHorizontalStart,
  LayoutDashboard,
  MessageCircleQuestion,
  BookText,
  Mail,
  ShieldCheck,
  CreditCard,
  Bot,
} from "lucide-react";
import visa from "./icons/visa.png";
import paypal from "./icons/paypal.png";
import card from "./icons/card.png";
import googlepay from "./icons/googlepay.png";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-gray-50 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-200 px-6 py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <Image
            src="/image.png"
            alt="Kaizen AI Logo"
            width={130}
            height={130}
            className="mb-4"
          />
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Kaizen AI empowers your career with 12/7 AI-driven personalized
            tools for students, professionals, and job seekers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                <Home size={16} /> Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                <Info size={16} /> About Us
              </a>
            </li>
            <li>
              <a
                href="/ai-tools"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                <Bot size={16} /> Kaizen Ai Tools
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                <LayoutDashboard size={16} /> Dashboard
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Resources
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/faq"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                <MessageCircleQuestion size={16} /> FAQ
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                <BookText size={16} /> Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                <Mail size={16} /> Contact
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                <ShieldCheck size={16} /> Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Payment Methods */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
            We Accept
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/payment-options"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                <CreditCard size={16} /> Payment Options
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-3 mt-4">
            <Image src={visa} alt="Visa" width={40} height={25} />
            <Image src={card} alt="MasterCard" width={40} height={25} />
            <Image src={paypal} alt="PayPal" width={40} height={25} />
            <Image src={googlepay} alt="Google Pay" width={40} height={25} />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-500 border-t pt-6 border-gray-200 dark:border-gray-700">
        Designed by <strong>Sudhanshu Gaikwad</strong> ©
        {new Date().getFullYear()} | Kaizen AI. All rights reserved.
      </div>
    </footer>
  );
}
