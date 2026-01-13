"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
   return (
       <footer className="text-white pt-10 md:pt-20 pb-10 relative overflow-hidden" style={{background: 'linear-gradient(107.92deg, #FB5F2F 0%, #FD9B38 99.11%)'}}>
          <div className="absolute inset-0 z-0">
             <img
                 src="/footer/bg.png"
                 alt="Footer Background"
                 className="w-full h-full object-cover opacity-10"
             />
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
             <div className="flex flex-col lg:flex-row mb-8 md:mb-16 max-w-[1284px] mx-auto gap-6 lg:gap-0">
                <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0 lg:w-[925px]">
                   <div className="hidden lg:block absolute top-[64px] left-1/3 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border z-20" style={{background: '#FC8334', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.3)'}}></div>
                   <div className="hidden lg:block absolute top-[64px] left-2/3 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border z-20" style={{background: '#FC8334', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.3)'}}></div>
                   <div className="hidden lg:block absolute bottom-0 left-1/3 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full border z-20" style={{background: '#FC8334', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.3)'}}></div>
                   <div className="hidden lg:block absolute bottom-0 left-2/3 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full border z-20" style={{background: '#FC8334', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.3)'}}></div>

                   <div className="relative border-0 lg:border-r lg:border-b border-dashed border-white/20 bg-white/5 lg:bg-transparent rounded-lg lg:rounded-none p-6 lg:p-0">
                      <div className="lg:px-10 lg:pt-2 lg:pb-6 lg:border-b border-dashed border-white/20 lg:h-16 flex items-center mb-4 lg:mb-0">
                         <h3 className="text-base font-medium leading-6 w-[87px] h-6 opacity-70" style={{fontFamily: 'IBM Plex Mono, monospace'}}>Ecosystem</h3>
                      </div>
                      <div className="lg:px-10 lg:pt-6 lg:pb-16">
                         <ul className="space-y-3">
                            <li>
                               <Link href="#" className="hover:opacity-80 transition-opacity">
                                  Earnings
                               </Link>
                            </li>
                            <li>
                               <Link href="#" className="hover:opacity-80 transition-opacity">
                                  Pricing
                               </Link>
                            </li>
                            <li>
                               <Link href="#" className="hover:opacity-80 transition-opacity">
                                  Community
                               </Link>
                            </li>
                            <li>
                               <Link href="#" className="hover:opacity-80 transition-opacity">
                                  Hyrasapiens
                               </Link>
                            </li>
                         </ul>
                      </div>
                   </div>

                   <div className="relative border-0 lg:border-r lg:border-b border-dashed border-white/20 bg-white/5 lg:bg-transparent rounded-lg lg:rounded-none p-6 lg:p-0">
                      <div className="lg:px-10 lg:pt-2 lg:pb-6 lg:border-b border-dashed border-white/20 lg:h-16 flex items-center mb-4 lg:mb-0">
                         <h3 className="text-base font-medium leading-6 w-[87px] h-6 opacity-70" style={{fontFamily: 'IBM Plex Mono, monospace'}}>Ecosystem</h3>
                      </div>
                      <div className="lg:px-10 lg:pt-6 lg:pb-16">
                         <ul className="space-y-3">
                            <li>
                               <Link href="#" className="hover:opacity-80 transition-opacity">
                                  User
                               </Link>
                            </li>
                            <li>
                               <Link href="#" className="hover:opacity-80 transition-opacity">
                                  Developer
                               </Link>
                            </li>
                            <li>
                               <Link href="#" className="hover:opacity-80 transition-opacity">
                                  Enterprise
                               </Link>
                            </li>
                            <li>
                               <Link href="#" className="hover:opacity-80 transition-opacity">
                                  Hyrasapiens
                               </Link>
                            </li>
                         </ul>
                      </div>
                   </div>

                   <div className="relative border-0 lg:border-r lg:border-b border-dashed border-white/20 bg-white/5 lg:bg-transparent rounded-lg lg:rounded-none p-6 lg:p-0">
                      <div className="lg:px-10 lg:pt-2 lg:pb-6 lg:border-b border-dashed border-white/20 lg:h-16 flex items-center mb-4 lg:mb-0">
                         <h3 className="text-base font-medium leading-6 w-[87px] h-6 opacity-70" style={{fontFamily: 'IBM Plex Mono, monospace'}}>Ecosystem</h3>
                      </div>
                      <div className="lg:px-10 lg:pt-6 lg:pb-16">
                         <ul className="space-y-3">
                            <li>
                               <Link href="#" className="hover:opacity-80 transition-opacity">
                                  About us
                               </Link>
                            </li>
                            <li>
                               <Link href="#" className="hover:opacity-80 transition-opacity">
                                  Docs
                               </Link>
                            </li>
                            <li>
                               <Link href="#" className="hover:opacity-80 transition-opacity">
                                  DAO
                               </Link>
                            </li>
                            <li>
                               <Link href="#" className="hover:opacity-80 transition-opacity">
                                  Be Legal
                               </Link>
                            </li>
                            <li>
                               <Link href="#" className="hover:opacity-80 transition-opacity">
                                  Community
                               </Link>
                            </li>
                         </ul>
                      </div>
                   </div>
                </div>

                <div className="relative lg:w-[359px] border-0 lg:border-l lg:border-b border-dashed border-white/20 bg-white/5 lg:bg-transparent rounded-lg lg:rounded-none p-6 lg:p-0">
                   <div className="hidden lg:block absolute top-[64px] left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border z-20" style={{background: '#FC8334', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.3)'}}></div>
                   <div className="hidden lg:block absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full border z-20" style={{background: '#FC8334', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.3)'}}></div>

                   <div className="lg:px-10 lg:pt-2 lg:pb-6 lg:border-b border-dashed border-white/20 lg:h-16 flex items-center mb-4 lg:mb-0">
                      <h3 className="text-base font-medium leading-6 h-6 whitespace-nowrap" style={{fontFamily: 'IBM Plex Mono, monospace'}}>Scan to download HYRA One app</h3>
                   </div>
                   <div className="lg:px-10 lg:pt-14 lg:pb-16 flex justify-center items-center lg:h-[240px]">
                      <div className="w-40 h-40  ">
                         <img
                             src="/scan/qr.svg"
                             alt="QR Code"
                             className="w-full h-full object-contain"
                         />
                      </div>
                   </div>
                </div>
             </div>

             <div className="flex flex-col md:flex-row justify-between items-start md:items-end pt-4 pb-10 gap-8 max-w-[1284px] mx-auto">
                <div className="w-full md:w-[580px]">
                   <div className="mb-2.5">
                      <span className="font-semibold text-5xl md:text-7xl lg:text-[115.42px] leading-[90%] tracking-[-2.89px] uppercase">HYRA ONE</span>
                   </div>
                   <p className="text-base font-medium leading-6">© 2025 Hyra One. All rights reserved.</p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-8 w-full md:w-auto">
                   <div className="flex gap-6 md:gap-8 w-full md:w-[248px] h-6 justify-start md:justify-end">
                      <Link href="#" className="hover:opacity-70 transition-opacity">
                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                         </svg>
                      </Link>
                      <Link href="#" className="hover:opacity-70 transition-opacity">
                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                         </svg>
                      </Link>
                      <Link href="#" className="hover:opacity-70 transition-opacity">
                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                         </svg>
                      </Link>
                      <Link href="#" className="hover:opacity-70 transition-opacity">
                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                         </svg>
                      </Link>
                      <Link href="#" className="hover:opacity-70 transition-opacity">
                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                         </svg>
                      </Link>
                   </div>

                   <div className="flex justify-between text-sm w-full md:w-96 h-6 flex-wrap md:flex-nowrap gap-4 md:gap-0">
                      <Link href="#" className="hover:opacity-80 transition-opacity">
                         Term of Use
                      </Link>
                      <Link href="#" className="hover:opacity-80 transition-opacity">
                         Privacy Policy
                      </Link>
                      <Link href="#" className="hover:opacity-80 transition-opacity">
                         Cookie Policy
                      </Link>
                   </div>
                </div>
             </div>
          </div>
       </footer>
   );
}