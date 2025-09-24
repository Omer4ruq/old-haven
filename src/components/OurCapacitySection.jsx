import { useState, useEffect } from 'react';

function CountUp({ end, duration = 2000, prefix = '', suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const value = Math.min(progress / duration * end, end);
      setCount(value);
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <>
      {prefix}
      {count.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      {suffix}
    </>
  );
}

export function OurCapacitySection() {
  return (
    <section className="py-20 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center text-white space-y-8">
          <h2 className="text-4xl font-bold">Our Capacity</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <CountUp end={1000} suffix="+" />
              </div>
              <p className="text-emerald-100">Elders</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <CountUp end={20} suffix="+" />
              </div>
              <p className="text-emerald-100">Doctors</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <CountUp end={150} suffix="+" />
              </div>
              <p className="text-emerald-100">Nurses and Caregivers</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <CountUp end={200} suffix="+" />
              </div>
              <p className="text-emerald-100">Family Accommodations</p>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-xl p-8 max-w-4xl mx-auto">
            <p className="text-xl italic mb-4">
              School, college and social meet arrangement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}