import { Globe, Shield, Zap } from 'lucide-react'
import React from 'react'

const ProblemsWeSolveSection = () => {
  return (
    <section className="py-24 bg-slate-50/50 border-y border-slate-100">
            <div className="container mx-auto px-6">
               <div className="grid md:grid-cols-3 gap-12">
                  <div className="text-center group p-6 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                     <div className="w-16 h-16 bg-[#FF6F2C]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6F2C] transition-colors duration-300">
                        <Globe className="text-[#FF6F2C] group-hover:text-white" />
                     </div>
                     <h3 className="text-xl font-bold mb-4 text-slate-900">No More Intermediaries</h3>
                     <p className="text-slate-600">Be your own bank. No one can freeze your account or control your spending.</p>
                  </div>
                  <div className="text-center group p-6 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                     <div className="w-16 h-16 bg-[#FF6F2C]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6F2C] transition-colors duration-300">
                        <Zap className="text-[#FF6F2C] group-hover:text-white" />
                     </div>
                     <h3 className="text-xl font-bold mb-4 text-slate-900">Ultra-low Fees</h3>
                     <p className="text-slate-600">Eliminate traditional banking overhead. Transfer cross-border for just a few cents.</p>
                  </div>
                  <div className="text-center group p-6 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                     <div className="w-16 h-16 bg-[#FF6F2C]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6F2C] transition-colors duration-300">
                        <Shield className="text-[#FF6F2C] group-hover:text-white" />
                     </div>
                     <h3 className="text-xl font-bold mb-4 text-slate-900">Absolute Security</h3>
                     <p className="text-slate-600">Non-custodial tech ensures Private Keys stay with you. Not your keys, not your coins.</p>
                  </div>
               </div>
            </div>
         </section>
  )
}

export default ProblemsWeSolveSection
