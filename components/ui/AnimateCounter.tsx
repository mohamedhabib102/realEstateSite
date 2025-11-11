interface StatItem {
  value: string;
  title: string;
  subtitle: string;
}


const stats: StatItem[] = [
  {
    value: '300+',
    title: 'Developers',
    subtitle: 'Trusted Partners',
  },
  {
    value: '1000+',
    title: 'Brokers',
    subtitle: 'Professional Network',
  },
  {
    value: '100K+',
    title: 'Clients',
    subtitle: 'Satisfied Customers',
  },
];

const StatsSection: React.FC = () => {
  return (

    <section className="bg-[#F8F8F8] py-8 lg:px-40">
    <div className="container mx-auto px-3 5">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        

        {stats.map((stat, index) => (

          <div key={index} className="flex flex-col items-center justify-center">
            

            <p className="lg:text-6xl text-5xl font-bold mb-2 text-(--Primary)">
              {stat.value}
            </p>
            

            <h3 className="text-lg font-semibold text-(--Secondary-txt) mb-2">
              {stat.title}
            </h3>
            
        
            <p className="text-sm text-[#6B7280]">
              {stat.subtitle}
            </p>
          </div>
        ))}

      </div>
        </div>
    </section>
  );
};

export default StatsSection;
