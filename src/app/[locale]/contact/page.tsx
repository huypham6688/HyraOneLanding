"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";

const ContactUsPage = () => {
   const [show, setShow] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => setShow(true), 100);
      return () => clearTimeout(timer);
   }, []);

   return (
      <section className="py-8 sm:py-12 px-4 sm:px-16 lg:px-[112px] w-full max-w-[1440px] mx-auto mt-[66px] sm:mt-[114px] overflow-hidden">
         <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 justify-between items-start lg:items-center">
            <div className={`transition-all duration-700 ease-out transform w-full lg:w-[55%] ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
               <h1 className="text-[32px]/[40px] sm:text-5xl font-medium leading-[40px] sm:leading-[50px] text-[#141414]">Let’s get in touch!</h1>
               <p className="text-sm sm:text-base font-normal text-[#525252] mt-2 sm:mt-4">Our friendly team is always here to chat.</p>

               <div className="flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-8 lg:mt-16 sm:max-w-[394px]">
                  <div className="flex gap-4 items-center">
                     <div className="bg-[#FF6F2C]/20 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                        <Image src="/images/icons/mail.svg" width={24} height={24} alt="Mail" />
                     </div>
                     <div>
                        <h2 className="text-base sm:text-lg font-semibold text-[#141414]">Email</h2>
                        <div className="flex flex-col">
                           <a href="mailto:support@hyrazone.com" className="text-base text-[#525252] hover:text-[#FF6F2C] transition-colors">
                              support@hyraone.com
                           </a>
                           <a href="mailto:business@hyrazone.com" className="text-base text-[#525252] hover:text-[#FF6F2C] transition-colors">
                              business@hyraone.com
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="flex gap-4 items-center">
                     <div className="bg-[#FF6F2C]/20 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                        <Image src="/images/icons/phone.svg" width={24} height={24} alt="Phone" />
                     </div>
                     <div>
                        <h2 className="text-base sm:text-lg font-semibold text-[#141414]">Telephone</h2>
                        <a href="tel:+971528299743" className="text-base text-[#525252] hover:text-[#FF6F2C] transition-colors">
                           +971 52 829 9743
                        </a>
                     </div>
                  </div>

                  <div className="flex gap-4 items-center">
                     <div className="bg-[#FF6F2C]/20 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                        <Image src="/images/icons/location.svg" width={24} height={24} alt="Location" />
                     </div>
                     <div>
                        <h2 className="text-base sm:text-lg font-semibold text-[#141414]">Address</h2>
                        <p className="text-base text-[#525252]">C1804-166, Ontario Tower, Business Bay, Dubai, UAE.</p>
                     </div>
                  </div>
               </div>
            </div>

            <ContactForm />
         </div>
      </section>
   );
};

export default ContactUsPage;
