"use client"
import React, { useState, useEffect, useRef } from 'react';


interface StatItem {
  value: string;
  title: string;
  subtitle: string;
}

const parseStatValue = (statValue: string): { endValue: number; suffix: string } => {
  const match = statValue.match(/^(\d+)([Kk\+\s]*)$/);
  if (match) {
    return { 
      endValue: parseInt(match[1], 10), 
      suffix: match[2].toUpperCase().replace(/\s/g, '')
    };
  }
  return { endValue: 0, suffix: '' };
};


interface CountUpProps {
  finalValue: string;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ finalValue, duration = 3000 }) => {
  const { endValue, suffix } = parseStatValue(finalValue);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
        }
      },
      { threshold: 0.5 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [inView]);

  useEffect(() => {
    if (inView && endValue > 0) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const newCount = Math.floor(percentage * endValue);
        
        setCount(newCount);

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [inView, endValue, duration]);


  return (
    <p ref={ref} className="lg:text-6xl text-5xl font-bold mb-2 text-(--Primary)">
      {count.toLocaleString()}
      {suffix}
    </p>
  );
};



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

// 7. المكون الرئيسي
const StatsSection: React.FC = () => {
  return (
    <section className="bg-[#F8F8F8] py-8 lg:px-40">
      <div className="container mx-auto lg:px-36 md:px-8 px-3.5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-40 gap-8 text-center">
          
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              

              <CountUp finalValue={stat.value} />
              
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