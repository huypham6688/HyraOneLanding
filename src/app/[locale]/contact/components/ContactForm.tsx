"use client";
import React, { useState, useEffect } from "react";

const ContactForm = () => {
   const [show, setShow] = useState(false);
   const [loading, setLoading] = useState(false);
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
   });

   useEffect(() => {
      const timer = setTimeout(() => setShow(true), 100);
      return () => clearTimeout(timer);
   }, []);

   const handleChange = (e: any) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: type === "checkbox" ? checked : value,
      }));
   };

   const handleSubmit = async (e: any) => {
      e.preventDefault();
      setLoading(true);

      console.log("Dữ liệu gửi đi:", formData);

      setTimeout(() => {
         setLoading(false);
         alert("Cảm ơn bạn đã để lại lời nhắn!");
      }, 2000);
   };

   return (
      <div
         className={`transition-all duration-700 ease-out transform shadow-lg bg-white w-full lg:w-[45%] 
      ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
      >
         <div className="border-form bg-white px-3 sm:px-8 py-8 rounded-[24px] w-full shadow-2xl">
            <p className="text-black text-xl font-semibold text-center mb-8">Contact us if you need any technical support or partnership!</p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
               <div>
                  <p className="text-sm font-medium mb-[6px]">
                     Your name <span className="text-[#FF1B1B]">*</span>
                  </p>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nhập họ và tên của bạn" className="w-full border border-[#DADADA] rounded-[8px] px-[14px] py-[10px] focus:outline-none focus:border-[#FF6F2C]" required />
               </div>

               <div>
                  <p className="text-sm font-medium mb-[6px]">
                     Email <span className="text-[#FF1B1B]">*</span>
                  </p>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Nhập địa chỉ email" className="w-full border border-[#DADADA] rounded-[8px] px-[14px] py-[10px] focus:outline-none focus:border-[#FF6F2C]" required />
               </div>

               <div>
                  <p className="text-sm font-medium mb-[6px]">Phone number</p>
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Nhập số điện thoại" className="w-full border border-[#DADADA] rounded-[8px] px-[14px] py-[10px] focus:outline-none focus:border-[#FF6F2C]" />
               </div>

               <div>
                  <p className="text-sm font-medium mb-[6px]">
                     Message <span className="text-[#FF1B1B]">*</span>
                  </p>
                  <textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Để lại lời nhắn cho chúng tôi" className="w-full border border-[#DADADA] rounded-[8px] px-[14px] py-[10px] focus:outline-none focus:border-[#FF6F2C]" required></textarea>
               </div>

               <div>
                  <div className="flex items-center gap-2">
                     <input type="checkbox" id="agree" name="agree" checked={formData.agree} onChange={handleChange} className="accent-[#FF6F2C] focus:ring-[#FF6F2C] w-5 h-5 rounded-[6px]" required />
                     <label htmlFor="agree" className="text-base font-normal text-[#4D4D4D]">
                        You agree to the{" "}
                        <a href="/privacy-policy" target="_blank" className="text-[#FF6F2C] underline hover:text-[#FF6F2C]/80">
                           Policy 
                        </a>
                        <span className="text-[#FF1B1B]">*</span>
                     </label>
                  </div>
               </div>

               <button type="submit" disabled={loading} className={`w-full rounded-full bg-[#FF6F2C] hover:bg-[#FF6F2C]/80 transition text-white font-semibold py-2 flex justify-center items-center mt-8 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}>
                  {loading ? (
                     <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M12 2a10 10 0 0 1 10 10h-4a6 6 0 0 0-6-6V2z" />
                     </svg>
                  ) : (
                     <span>Send Message</span>
                  )}
               </button>
            </form>

            <style jsx>{`
               .border-form {
                  box-shadow: 0 0 0 1px #ededed, 0 0 0 2px #f9f9f9, 0 0 0 3px #f1f1f1, 0 0 0 4px #eaeaea, 0 0 0 5px #e9e9e9, 0 0 0 6px #ffffff, 0 0 0 7px #ffffff, 0 0 0 8px #ffffff, 0 0 0 9px #ffffff, 0 0 0 10px #e7e7e7, 0 35px 60px -15px rgba(0, 0, 0, 0.3);
               }
            `}</style>
         </div>
      </div>
   );
};

export default ContactForm;
