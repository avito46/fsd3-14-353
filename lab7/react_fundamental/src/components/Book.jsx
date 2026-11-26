export default function Book({ name, author, price, rating, image_url }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px", margin: "12px 0", maxWidth: "320px" }}>
      <img src={image_url} alt={name} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "4px" }} />
      <h3>{name}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Price:</strong> Rs {price}</p>
      <p><strong>Rating:</strong> ⭐ {rating}</p>
    </div>
  );
}