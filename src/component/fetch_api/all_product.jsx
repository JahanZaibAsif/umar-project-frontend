import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productSlice';

const All_Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data); // Ensure state.product exists
  const status = useSelector((state) => state.product.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error: Something went wrong!</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>{product.product_name}</div>
      ))}
    </div>
  );
};

export default All_Product;
