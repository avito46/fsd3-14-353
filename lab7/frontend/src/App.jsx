const b1={
  picUrl: "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY327_QL65_.jpg",
  bname:"React design patterns",
  price:1200,
  Quantity:8,
  rating:4.9,
}



function Book(){
  return ( 
  <div>
    <img src={b1.picUrl} alt={b1.bname}/>
    <h1>Let us react </h1>
    <h2>Price: {b1.price}</h2>
    <h3>Rating: 5</h3>
    <h3>Quantity: {b1.Quantity}</h3>
  </div>
)
}




export default function App()
{
  return(
    <>
     <h1>Hello react</h1>
     <Book/>
     </>
  )
}