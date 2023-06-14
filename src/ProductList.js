import React from 'react';

const ProductList = ({ json }) => {
  const { product_list, category_weights, weighing_start_date } = json;

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Category Weights</h2>
      <ul className="list-disc ml-6">
        {Object.entries(category_weights ?? {}).map(([category, weight]) => (
          <li key={category}>{category}: {weight} kg</li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold my-4">Weighing Start Date</h2>
      <p>{weighing_start_date}</p>

      <h2 className="text-2xl font-bold my-4">Product List</h2>
      {Object.entries(product_list ?? {}).map(([category, products]) => (
        <div key={category}>
          <h3 className="text-lg font-bold">{category}</h3>
          <div className="grid grid-cols-1 gap-4">
            {products.map((product) => (
              <div key={product.id} className="border border-gray-300 p-4 rounded">
                <p><span className="font-semibold">Date:</span> {product.date}</p>
                <p><span className="font-semibold">Category:</span> {product.category}</p>
                <p><span className="font-semibold">Product ID:</span> {product.product_id}</p>
                <p><span className="font-semibold">Weight:</span> {product.weight}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
