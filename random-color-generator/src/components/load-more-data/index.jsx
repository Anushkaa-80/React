import { useEffect, useState } from "react";
import { IoTimeSharp } from "react-icons/io5";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts(result.products);
        setLoading(false);
      }

      console.log(result);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading data! Please wait.</div>;
  }

  return (
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => <div className="product" key ={item.id}>
             
             <img src={IoTimeSharp.thumbnail} alt={item.title}  />
             <p>{item.title}</p>
             
             </div>)
          : null}
      </div>
      <div className="button-container">
         <button>Load more products</button>

      </div>
    </div>
  );
}
