import { useNavigate } from "react-router-dom";
import kitchen from "../data/images/kitchen.webp";
import bathroom from "../data/images/bathroom.webp";
import bedroom from "../data/images/bedroom.webp";
import livingroom from "../data/images/livingroom.webp";

const categories = [
  {
    name: "Living Room",
    image: livingroom,
    count: 152,
  },
  {
    name: "Kitchen",
    image: kitchen,
    count: 89,
  },
  {
    name: "Bedroom",
    image: bedroom,
    count: 124,
  },
  {
    name: "Bathroom",
    image: bathroom,
    count: 76,
  },
];

export default function Categories() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/shop/${categoryName.toLowerCase().replace(" ", "-")}`);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Shop by Room
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-200 mt-1">
                    {category.count} Products
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
