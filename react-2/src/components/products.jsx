import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);
function Products() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  function StarRating() {
    const [rating, setRating] = useState(0);
    const [HasRated, setHasRated] = useState(false);
    return (
      <div className="flex-col flex">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              disabled={HasRated}
              onClick={() => {
                setRating(star);
                setHasRated(true);
              }}
              className={`focus:outline-none ${HasRated ? "cursor-default" : "cursor-pointer"}`}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-star"
                style={{ color: star <= rating ? "#facc15" : "#808080" }}
              />
            </button>
          ))}
        </div>
        {HasRated && (
          <p
            onClick={() => setHasRated(false)}
            className="text-blue-900 italic font-bold text-[13px]"
          >
            Change my rate
          </p>
        )}
      </div>
    );
  }
  return (
    <div className="ml-3.5 mr-3.5">
      <h1 className="text-amber-100 text-center text-3xl font-bold mt-2.5 mb-5">
        Product List
      </h1>
      {data ? (
        <ul className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 gap-5 ">
          {data.products.map((product) => (
            <div>
              <ul className="flex flex-col gap-3.5 ">
                <li
                  key={product.id}
                  className="bg-pink-100 border-2 border-blue-400"
                >
                  <img src={product.images[0]}></img>
                </li>
                <div className=" flex flex-col  bg-blue-200 h-59 gap-5 pl-2.5 pr-2.5 border-2 border-pink-300">
                  <div className="flex justify-between pt-3 gap-3">
                    <li key={product.id} className="font-semibold">
                      {product.title}
                    </li>
                    <div>
                      <li
                        key={product.id}
                        className="text-red-800 font-semibold line-through decoration-2"
                      >
                        {(
                          (product.price * 100) /
                            (100 - product.discountPercentage) +
                          0.5
                        ).toFixed(2)}
                      </li>
                      <li key={product.id} className="text-red-800 font-bold">
                        {product.price}
                      </li>
                    </div>
                  </div>
                  <li key={product.id} className="text-[12px] italic">
                    {product.description}
                  </li>
                  <div className="flex gap-3.5 justify-between">
                    <div className="flex gap-1.5 ">
                      <li className="text-blue-900 font-bold">Rating:</li>
                      <li key={product.id} className="font-semibold">
                        {" "}
                        {product.rating}
                      </li>
                    </div>
                    <div className="flex-col flex">
                      <StarRating />
                      <p
                        class="change"
                        className="text-blue-900 italic font-bold "
                        style={{ display: "none" }}
                      >
                        Change my rate
                      </p>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Products;
