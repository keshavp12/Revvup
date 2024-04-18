// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/Maybach.png";
import img05 from "../all-images/cars-img/RR-WRAITH.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/Tesla-modelY.png";
import img08 from "../all-images/cars-img/Jaguar-typeF.png";

const carData = [
  {
    id: 1,
    brand: "Nissan",
    rating: 112,
    carName: "Nissan Mercielago",
    imgUrl: img01,
    model: "Model 3",
    price: 15000,
    speed: "60kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Nissan Mercielago is a sleek and powerful sports car known for its dynamic performance and stylish design. With a robust engine and advanced technology, it offers a thrilling driving experience. Its luxurious interior features premium materials and modern amenities, making every ride comfortable and enjoyable. The Mercielago's aerodynamic profile and striking aesthetics make it a standout choice for enthusiasts seeking both speed and sophistication.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Camry",
    imgUrl: img02,
    model: "Model-2022",
    price: 7500,
    speed: "40kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    "The Toyota Camry is a sleek and reliable sedan known for its smooth performance and fuel efficiency. With a spacious interior, advanced safety features, and intuitive technology, it offers a comfortable and enjoyable driving experience. Its sleek design, efficient engine, and reputation for reliability make it a popular choice among commuters and families alike.",
      

  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 16500,
    speed: "60kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    
"The BMW X3 is a luxurious and versatile SUV, blending performance with comfort seamlessly. With its sleek design and powerful engine options, it offers a thrilling driving experience. The spacious interior boasts premium materials and advanced technology, making every journey enjoyable. Whether navigating city streets or venturing off-road, the BMW X3 delivers a perfect balance of style and functionality.",
    

      

  },

  {
    id: 4,
    brand: "Mercedes",
    rating: 102,
    carName: "Mercedes Maybach",
    imgUrl: img04,
    model: "Model-2022",
    price: 29000,
    speed: "40kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    
"The Maybach embodies luxury and opulence, with a refined exterior design and exquisite craftsmanship. Its spacious and lavishly appointed interior features premium materials and cutting-edge technology, ensuring a luxurious ride experience. With powerful performance and a smooth, quiet ride, the Maybach offers unparalleled comfort and sophistication for discerning drivers.",
      
  },

  {
    id: 5,
    brand: "Rolls Royce",
    rating: 94,
    carName: "Rolls Royce Wraith",
    imgUrl: img05,
    model: "Model-2022",
    price: 50000,
    speed: "40kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      
"The Rolls Royce Wraith epitomizes luxury and performance with its sleek design and powerful engine. Its opulent interior features premium materials and cutting-edge technology, offering a refined driving experience. With unparalleled craftsmanship and attention to detail, the Wraith delivers a blend of comfort and exhilaration on every journey. As a symbol of automotive excellence, the Rolls Royce Wraith defines luxury motoring.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 8500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    "The Mercedes XC90 is a luxurious and powerful SUV known for its elegant design and advanced technology. With spacious interiors, premium amenities, and top-notch safety features, it offers a comfortable and secure driving experience. Its robust engine delivers impressive performance on both city streets and rugged terrains, making it a versatile choice for adventurers and urban drivers alike.",
  },

  {
    id: 7,
    brand: "Tesla",
    rating: 82,
    carName: "Tesla-Model-Y",
    imgUrl: img07,
    model: "Model 3",
    price: 16000,
    speed: "60kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    "The Tesla Model Y is an all-electric crossover SUV that combines sleek design with cutting-edge technology. With a spacious interior, impressive acceleration, and long-range capabilities, it offers a luxurious and eco-friendly driving experience. Equipped with advanced autopilot features and a minimalist yet futuristic interior, the Model Y sets new standards in the electric vehicle market.",
  },

  {
    id: 8,
    brand: "Jaguar",
    rating: 52,
    carName: "Jaguar Type-F",
    imgUrl: img08,
    model: "Model 3",
    price: 29500,
    speed: "80kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    "The Jaguar F-Type is a sleek and powerful sports car, known for its stunning design and exhilarating performance. With a range of engine options delivering impressive horsepower, it offers a thrilling driving experience. Its luxurious interior features premium materials and cutting-edge technology, ensuring both comfort and sophistication. The F-Type's agile handling and precise steering make it a standout choice for enthusiasts seeking a blend of style and performance.",
  },
];

export default carData;
