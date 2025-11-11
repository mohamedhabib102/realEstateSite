




// components/ContactSection.tsx
import React from "react";
import Image from "next/image";
import CustomTitle from "../ui/CustomTitle";

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F6F6F6]">
        <div className="container mx-auto px-3.5">
        <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>


        <CustomTitle
          subTitle="Get in Touch"
          title="Let's Find Your Perfect Property"
          state={true}
          space={true}
          stateTitle={true}
         />
          <p className="text-[#4B5563] mb-6 max-w-md font-normal">
            Have questions or ready to start your real estate journey?  
            Our team is here to help you every step of the way.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
                <div className="w-12 p-2.5 rounded-[4px] flex items-center justify-center mb-4 bg-[#D4A5741A]">
                   <Image
                     src="/images/phone.svg"
                     alt="email"
                     width={28}
                     height={28}
                     className="mt-1"
                   />
                </div>
              <div>
                <p className="text-[#6B7280] font-normal text-sm">Call Us</p>
                <p className="text-(--Secondary-txt) font-semibold">
                  +20 0111553682
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
                <div className="w-12 p-2.5 rounded-[4px] flex items-center justify-center mb-4 bg-[#D4A5741A]">
                   <Image
                     src="/images/email.svg"
                     alt="email"
                     width={28}
                     height={28}
                     className="mt-1"
                   />
                </div>
              <div>
                <p className="text-[#6B7280] font-normal text-sm">Email Us</p>
                <p className="text-(--Secondary-txt) font-semibold">
                  info@havenix.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
                <div className="w-12 p-2.5 rounded-[4px] flex items-center justify-center mb-4 bg-[#D4A5741A]">
                   <Image
                     src="/images/location-us.svg"
                     alt="email"
                     width={28}
                     height={28}
                     className="mt-1"
                   />
                </div>
              <div>
                <p className="text-[#6B7280] font-normal text-sm">Visit Us</p>
                <p className="text-(--Secondary-txt) font-semibold">
                  123 Real Estate Ave, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white p-8 rounded-2xl shadow_Us border border-[#E5E7EB]">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-(--Secondary-txt) mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Mohamed Ali"
                className="w-full text-[#ADAEBC] border border-[#D1D5DB] rounded-lg pl-4 p-2 focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-(--Secondary-txt) mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="mohamed@example.com"
                className="w-full text-[#ADAEBC] border border-[#D1D5DB] rounded-lg pl-4 p-2 focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-(--Secondary-txt) mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your real estate needs..."
                className="w-full text-[#ADAEBC] border border-[#D1D5DB] rounded-lg pl-4 p-2 focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-[#B58A5C] hover:bg-[#a67e52] transition-colors text-white font-medium py-2.5 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
        </div>
    </section>
  );
};

export default ContactSection;
