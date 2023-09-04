import { useState } from 'react';

let product = {
  name: 'iPhone 12',
  description: 'Apple iPhone 12, 64GB, Black - Fully Unlocked (Renewed)',
  imageUrl: 'https://m.media-amazon.com/images/I/71ZOtNdaZCL._FMwebp__.jpg',
  price: 829.99,
}

function ProductCard() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (onClick: { target: { value: string; }; }) => {
    const newQuantity = parseInt(onClick.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.name}(s) to the cart.`);
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
        />
      </label>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
