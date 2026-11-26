import Book from "./Book";
import { books } from "./data.js";

export default function Booklist() {
  return (
    <div>
      <h2>Book List ({books.length} found)</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {books.map((item, index) => (
          <Book key={index} {...item} />
        ))}
      </div>
    </div>
  );
}