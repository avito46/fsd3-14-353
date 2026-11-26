import { books } from "./data.js";

function Hello({ name, price, author }) {
  return (
    <div style={{ borderBottom: "1px solid #ccc", padding: "8px 0" }}>
      <h1>{name}</h1>
      <h2>Rs {price}</h2>
      <h3>Author: {author}</h3>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Hello react</h1>
      {books.map((book, i) => (
        <Hello
          key={i}
          name={book.name}
          price={book.price}
          author={book.author}
        />
      ))}
    </div>
  );
}