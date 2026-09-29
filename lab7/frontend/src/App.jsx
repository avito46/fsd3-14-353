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
  console.log(props)
  return ( 
  <div>
    <img src={props.book.picUrl} alt={props.book.bname}/>
    <h1>Let us react </h1>
    <h2>Price: {props.book.price}</h2>
    <h3>Rating: 5</h3>
    <h3>Quantity: {props.book.Quantity}</h3>
  </div>
)
}




export default function App()
{
  return(
    <>
     <h1>Hello react</h1>
     <Book book={b1}/>
     <Book book={b2}/>
     </>
  )
}