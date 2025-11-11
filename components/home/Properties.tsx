// Properties.tsx
import Image from "next/image";
import CustomTitle from "../ui/CustomTitle"


interface Property {
  id: number;
  imagePath: string;
  price: string;
  type: 'For Sale' | 'For Rent';
  tag: 'Featured' | null;
  title: string;
  beds: number;
  baths: number;
  area: string; 
  location: string;
}


const featuredProperties: Property[] = [
  // ... (مصفوفة البيانات كما هي)
  {
    id: 1,
    imagePath: "/images/featured.png", 
    price: "$760.000",
    type: 'For Sale',
    tag: 'Featured',
    title: "Cozy Downtown Apartment",
    beds: 3,
    baths: 2,
    area: "195 m²",
    location: "Cairo, Egypt",
  },
  {
    id: 2,
    imagePath: "/images/modern.png", 
    price: "$3.200",
    type: 'For Rent',
    tag: null, 
    title: "Modern Luxury Villa",
    beds: 2,
    baths: 2,
    area: "210 m²",
    location: "Alexandria, Egypt",
  },
  {
    id: 3,
    imagePath: "/images/featured1.png", 
    price: "$850.000",
    type: 'For Sale',
    tag: 'Featured',
    title: "Luxury Downtown Penthouse",
    beds: 5,
    baths: 3,
    area: "260 m²",
    location: "Nasr City, Egypt",
  },
];



// دالة مساعدة للأيقونات (نستخدم Placeholder paths)
const Icon = ({ path }: { path: string }) => (
    <span className="w-4 h-4 inline-block align-middle mr-1 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d={path} />
        </svg>
    </span>
);


const Properties:React.FC = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-3.5">
            <CustomTitle
            subTitle="Featured Properties"
            title="Exclusive Listings"
            space={false}
            state={false}
            />


            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {featuredProperties.map((feat) => (
                    <div 
                    className="flex flex-col rounded-[11px] bg-white overflow-hidden border border-[#284C7E]/25 shadow-md"
                    key={feat.id}
                    >

                        <div className="relative w-full h-64"> 
                            <Image
                                src={feat.imagePath}
                                alt={feat.title}
                                fill={true} 
                                objectFit="cover" 
                                className="rounded-t-[11px]"
                            />
                        </div>
                        <div className="py-3 px-[22px]">
                            <div className="mb-3 flex items-center justify-between w-full">
                              <h4 className="text-[22px] font-bold leading-7 text-[#A87948]">{feat.price}/<span className="font-semibold text-(--Secondary-txt)">{feat.type === "For Rent" && "month"}</span></h4>
                              <span className={`
                                 py-1.5 px-3 rounded-4xl
                                 ${feat.type === "For Sale" ? "bg-[#15803D26] text-[#15803D]" :  
                                    feat.type === "For Rent" ? "bg-[#284C7E40] text-(--Secondary-txt)" : ""
                                 }
                                `}>{feat.type}</span>
                            </div>
                            <h4 className={`text-(--Secondary-txt) text-lg leading-6 font-bold mb-2`}>{feat.title}</h4>
                            <div className="flex items-center gap-4 mb-2">
                                <span className="flex items-center gap-1.5 text-sm font-normal text-[#4B5563]">
                                    <Image
                                    src="images/bade.svg"
                                    alt="image"
                                    title={feat.title}
                                    width={40}
                                    height={100}
                                    className="w-5"
                                    />
                                {feat.beds} bed</span>
                                <span className="flex items-center gap-1.5 text-sm font-normal text-[#4B5563]">
                                    <span className="font-bold text-lg">.</span><Image
                                    src="images/bath.svg"
                                    alt="image"
                                    title={feat.title}
                                    width={40}
                                    height={100}
                                    className="w-5"
                                    />                                    
                                    {feat.baths} bath</span>
                                <span className="flex items-center gap-1.5 text-sm font-normal text-[#4B5563]">
                                   <span className="font-bold text-lg">.</span><Image
                                    src="images/cm.svg"
                                    alt="image"
                                    title={feat.title}
                                    width={40}
                                    height={100}
                                    className="w-5"
                                    />                                     
                                    {feat.area}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                    <Image
                                    src="images/location.svg"
                                    alt="image"
                                    title={feat.title}
                                    width={40}
                                    height={100}
                                    className="w-[11px]"
                                    />    
                                    <span className="text-[#6B7280] text-sm font-normal">{feat.location}</span>                           
                            </div>

                            <button className="mt-5 w-full cursor-pointer transition hover:bg-[#A87948] py-2.5 px-5 bg-(--Primary) text-white text-center rounded-lg">View Details</button>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}

export default Properties