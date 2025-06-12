
const categories = [
  { name: 'Electronics', icon: '📱', color: 'from-blue-500 to-purple-600' },
  { name: 'Fashion', icon: '👕', color: 'from-pink-500 to-rose-600' },
  { name: 'Home & Garden', icon: '🏠', color: 'from-green-500 to-emerald-600' },
  { name: 'Sports', icon: '⚽', color: 'from-orange-500 to-red-600' },
  { name: 'Books', icon: '📚', color: 'from-amber-500 to-yellow-600' },
  { name: 'Beauty', icon: '💄', color: 'from-purple-500 to-indigo-600' },
  { name: 'Automotive', icon: '🚗', color: 'from-gray-500 to-slate-600' },
  { name: 'Toys', icon: '🧸', color: 'from-cyan-500 to-blue-600' },
];

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gradient-cool">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${category.color} rounded-xl p-6 text-white text-center hover-lift hover-glow transition-all duration-300 group-hover:scale-105`}>
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-sm">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
