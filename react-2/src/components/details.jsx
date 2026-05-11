import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
function ProductDetail() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  if (!product) return <p>Loading product info...</p>;
  return (
    <div className="p-10">
      <Link to="/" className="text-blue-500">← Back to Products</Link>
      <div className=" grid mt-5 xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-8">
         <img src={product.images[0]} className=" border-blue-400 my-4 bg-pink-100" />
        <div className=" flex flex-col gap-[40px]  bg-blue-200 px-2 py-2">
            <h1 className="text-3xl font-bold">{product.title}</h1>
       <div className="flex flex-col gap-5">
          <p className="text-lg italic">{product.description}</p>
       <div className="flex gap-1"> 
        <p className="text-xl text-red-800 font-bold mt-2 text-shadow-2xs text-shadow-red-900">Price: ${product.price}</p>
            <p className="text-red-800 font-semibold line-through decoration-2 text-shadow-2xs text-shadow-red-900">
            {((product.price * 100) /(100 - product.discountPercentage) +0.5).toFixed(2)}
            </p>
        </div>
        <p className="text-amber-100 text-shadow-amber-200 text-shadow-2xs">Category: {product.category}</p>
    <div>
  <h3 className="font-bold mt-4">Comments:</h3>
  {product.reviews && product.reviews.length > 0 ? (
    product.reviews.map((review, index) => (
      <div key={index} className="border-b py-2 px-2">
        <p>
          <span className="font-semibold">{review.reviewerName}:</span> {review.comment}
        </p>
        <p className="text-sm text-gray-400">Rating: {review.rating}</p>
      </div>
    ))
  ) : (
    <p>No reviews yet.</p>
  )}
</div>
       </div>
      
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;