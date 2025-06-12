
const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="gradient-yellow-orange">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-amazon-dark-blue mb-6">
              Welcome to 
              <span className="block text-gradient-cool">Amazon Clone</span>
            </h1>
            <p className="text-xl text-amazon-text-dark mb-8 opacity-90">
              Discover millions of products with fast delivery and great prices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-blue-purple text-white px-8 py-4 rounded-lg font-semibold hover-lift hover-glow transition-all duration-300">
                Shop Electronics
              </button>
              <button className="bg-white text-amazon-dark-blue px-8 py-4 rounded-lg font-semibold border-2 border-amazon-dark-blue hover-lift transition-all duration-300">
                Browse Categories
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce animation-delay-300"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce animation-delay-700"></div>
      </div>
    </section>
  );
};

export default Hero;
