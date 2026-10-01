export default function Book(props){
  const {bname,price,Quantity,rating,icUrl}=props.book
  const qtyStyle={
    fontSize:"1rem",
    color:"blue",
    textAlign:"center",
    backgroundColor:"yellow",
    padding:"10px",
  }
  console.log(props)
  return ( 
  <div className="book">
    <img src={props.book.picUrl} alt={bname}/>
    <h1>Let us react </h1>
    <h2>Price: {price}</h2>
    <h3 style={{color:"red",textAllign:"center"}}>Rating: {rating}</h3>
    <h4 style={qtyStyle}>Quantity: {Quantity}</h4>
    <button>Buy now</button>
  </div>
)
}