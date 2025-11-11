// components/Testimonials.tsx
import React from "react";
import CustomTitle from "../ui/CustomTitle";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Ali",
    role: "Property Investor",
    message:
      "HAVEN made our dream home a reality. Their professionalism and attention to detail exceeded all expectations. Highly recommended!",
    rating: 5,
    image: "/images/img1.svg",
  },
  {
    id: 2,
    name: "Mohamad Samir",
    role: "Property Investor",
    message:
      "Choosing HAVEN was the best decision. Their attention to every detail and commitment to quality exceeded all expectations.",
    rating: 5,
    image: "/images/img2.svg",
  },
  {
    id: 3,
    name: "Abdelrhman Shams",
    role: "Property Investor",
    message:
      "HAVEN guided us effortlessly to our dream property. Their reliable team and flawless service made everything simple.",
    rating: 5,
    image: "/images/img3.svg",
  },
];

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#D4A574"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#D4A574"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.19 4.437a.563.563 0 00.424.308l4.9.713a.563.563 0 01.312.96l-3.548 3.458a.563.563 0 00-.162.498l.837 4.874a.563.563 0 01-.817.594l-4.38-2.302a.563.563 0 00-.524 0l-4.38 2.302a.563.563 0 01-.817-.594l.837-4.874a.563.563 0 00-.162-.498L4.654 9.917a.563.563 0 01.312-.96l4.9-.713a.563.563 0 00.424-.308l2.19-4.437z"
    />
  </svg>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-3.5">
        <CustomTitle
          subTitle="Testimonials"
          title="What Our Clients Say"
          space={false}
          state={false}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-[12px] border border-[#998F8F33]"
            >
              <div className="flex mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-[#4B5563] mb-3 font-normal">
                {t.message}
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-(--Secondary-txt)">{t.name}</h4>
                  <p className="text-sm text-[#6B7280] font-normal">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
