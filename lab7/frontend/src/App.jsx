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


function Book(props){
  const {bname,price,Quantity,rating,icUrl}=props.book
  console.log(props)
  return ( 
  <div className="book">
    <img src={props.book.picUrl} alt={bname}/>
    <h1>Let us react </h1>
    <h2>Price: {price}</h2>
    <h3>Rating: {rating}</h3>
    <h3>Quantity: {Quantity}</h3>
    <button>Buy now</button>
  </div>
)
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
     </div>
     </>
  )
}