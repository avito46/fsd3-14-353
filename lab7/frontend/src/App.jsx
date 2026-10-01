import Book from "./components/Book"
import Pen from "./components/Pen"
const b1={
  picUrl: "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY327_QL65_.jpg",
  bname:"React design patterns",
  price:1200,
  Quantity:8,
  rating:4.9,
}
const b2={
   picUrl: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_QL65_.jpg",
  bname:"Road to React",
  price:1500,
  Quantity:9,
  rating:4.7,
}
const p1={
  picUrl:"https://m.media-amazon.com/images/I/51ewkXU786L._AC_UL480_FMwebp_QL65_.jpg",
  company:"Montblanc",
  price:435380,
}
const p2={
  picUrl:"https://m.media-amazon.com/images/I/81jbd2BCP0L._AC_UL480_FMwebp_QL65_.jpg",
  company:"Parkor",
  price:123456,
}


export default function App()
{
  
  return(
    <>
    <h1>Online Book Store</h1>
    <div className="container">
     <h1>Hello react</h1>
     <Book book={b1}/>
     <Book book={b2}/>
     <Pen Pen={p1}/>
     <Pen Pen={p2}/>
     </div>
     </>
  )
}