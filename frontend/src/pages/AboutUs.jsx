import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
        The Stars of the <span className="text-purple-600">“BachelorVerse”</span>
      </h2>
      <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mt-4">
        From late-night brainstorming to bug-squashing marathons — this 7-member dream team made Bachelor Homes come to life. Designers, coders, problem-solvers, and coffee-powered creators who turned a vision into a brand that feels like home.
      </p>
      <p className="text-center text-purple-500 text-md uppercase mt-2 tracking-wide">
        7 Brains. 1 Dream. Zero Rent Fights.
      </p>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Welcome to Bachelor Homes</h2>
        <p className="text-gray-600 text-lg md:text-xl mb-10">
          A place that’s not just a stay, but a lifestyle — where comfort, convenience, and community come together to create your ideal second home.
        </p>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Comfortable Living</h3>
            <p className="text-gray-600">
              Our homes are designed for maximum comfort, with fully furnished rooms, cozy bedding, air conditioning, high-speed Wi-Fi, and attached washrooms. Daily housekeeping ensures your space stays clean and welcoming — all you have to do is relax and focus on your work or studies.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">All-Inclusive & Hassle-Free</h3>
            <p className="text-gray-600">
              Say goodbye to surprise bills and hidden costs. Your monthly rent covers meals, cleaning, laundry, maintenance, and even electricity. We don’t charge brokerage fees, so moving in is simple, transparent, and stress-free — exactly the way modern co-living should be.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Community Vibes</h3>
            <p className="text-gray-600">
              More than just a place to stay — Bachelor Homes offers a vibrant community. Enjoy weekend events, movie nights, festive celebrations, and networking opportunities. Meet people from different backgrounds and build lifelong friendships in a fun, welcoming environment where everyone feels like family.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Tech-Enabled Convenience</h3>
            <p className="text-gray-600">
              Manage everything from our easy-to-use app — from rent payments and maintenance requests to event updates. Enjoy biometric access, digital check-ins, smart locks, and 24x7 customer support. We combine technology and hospitality to give you a smarter, smoother living experience.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Prime Locations</h3>
            <p className="text-gray-600">
              Each Bachelor Home is located close to major colleges, IT parks, metro stations, and public transport. This means you save time on travel, stay connected to the city’s pulse, and have everything you need — from groceries to gyms — within walking distance.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Safe & Secure</h3>
            <p className="text-gray-600">
              Your safety is our top priority. All our properties are monitored with CCTV, have 24x7 security personnel, biometric entry systems, and regular sanitization. Whether you're studying late or working nights, you can rest easy knowing your home is protected round the clock.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
