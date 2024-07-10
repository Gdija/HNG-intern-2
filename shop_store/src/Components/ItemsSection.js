import React from "react";
import miloImg from "../Assets/images/Milo.png";
import peakImg from "../Assets/images/peak1.png";
import indomieImg from "../Assets/images/indomie.jpg"
import gabageImg from "../Assets/images/gabage.png"
import spaghettiImg from "../Assets/images/spaghetti.png"
import eggImg from "../Assets/images/egg.png";

const products = [
  {
    id: 1,
    name: "MILO",
    href: "#",
    imageSrc: miloImg,
    imageAlt: "milo",
    price: "NGN 3,200",
    size: "800g",
  },
  {
    id:2,
    name:"Peak Milk Full Cream",
    href: "#",
    imageSrc: peakImg,
    imageAlt: "peak",
    price: "NGN 5,400",
    size: "800g"
  },
  {
    id:3,
    name:"Indomie Noodles",
    href: "#",
    imageSrc: indomieImg,
    imageAlt: "indomie",
    price: "NGN 500",
    size: "Super pack"
  },
  {
    id:4,
    name:"Gabage",
    href: "#",
    imageSrc: gabageImg,
    imageAlt: "gabage",
    price: "NGN 3,200",
    size: "800g"

  },
  {
    id:5,
    name:"Spaghetti Golden Penny",
    href: "#",
    imageSrc: spaghettiImg,
    imageAlt: "spaghetti",
    price: "NGN 950",
    size: "550g"
  },
  {
    id:6,
    name:"Create of Egg",
    href: "#",
    imageSrc: eggImg,
    imageAlt: "egg",
    price: "NGN 5,400",
    size: "800g"
  },
  {
    id:7,
    name:"Peak Milk Full Cream",
    href: "#",
    imageSrc: peakImg,
    imageAlt: "peak",
    price: "NGN 5,400",
    size: "800g"
  },
  {
    id: 8,
    name: "MILO",
    href: "#",
    imageSrc: miloImg,
    imageAlt: "milo",
    price: "NGN 3,200",
    size: "800g",
  },
  {
    id:9,
    name:"Gabage",
    href: "#",
    imageSrc: gabageImg,
    imageAlt: "gabage",
    price: "NGN 3,200",
    size: "800g"

  },
  {
    id: 10,
    name: "MILO",
    href: "#",
    imageSrc: miloImg,
    imageAlt: "milo",
    price: "NGN 3,200",
    size: "800g",
  },
  {
    id:11,
    name:"Indomie Noodles",
    href: "#",
    imageSrc: indomieImg,
    imageAlt: "indomie",
    price: "NGN 500",
    size: "Super pack"
  },


];

function ItemsSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2> */}

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-xl text-gray-700 ">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                  <p className="mt-1 text-sm font-bold text-gray-900">
                    {product.price}
                  </p>
                  <button class="mt-1 p-2 px-6 border border-gray-400 bg-white-500 text-gray rounded-md hover:bg-red-600">Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemsSection;
