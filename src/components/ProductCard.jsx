const ProductCard = ({ product }) => (
  <div className="card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p><strong>${product.price}</strong></p>
    <p className="category">{product.category}</p>
  </div>
);
export default ProductCard;
