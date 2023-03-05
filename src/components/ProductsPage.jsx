import { useState } from 'react';
import jsonData from '../data.json'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const [productsCopy, setProductsCopy] = useState(jsonData)
  

  const filterProducts = (text) => {
    if (!text) { setProducts(productsCopy) }
    else setProducts(products.filter(product => product.name.toLowerCase().includes(text.toLowerCase())));
  }

  return (
    <div className="border border-dark">
      <h1>IronStore</h1>
      <SearchBar filter={filterProducts} />
      <ProductTable />
    </div>
  );
}

export default ProductsPage;
