import Book from "./components/Book"
import Pen from "./components/Pen"
import Fruit from "./components/Fruit"
import { books } from "./data/Books"
import { pens } from "./data/Pens"
import { fruits } from "./data/fruits"
import Event from "./components/Event"

export default function App()
{
  
  return(
    <>
    <h1>Online Book Store</h1>
    <div className="container">
     <h1>Hello react</h1>
     <Book book={books[0]}/>
     <Book book={books[1]}/>
     <Pen Pen={pens[0]}/>
     <Pen Pen={pens[1]}/>
     <Fruit Fruit={fruits[0]}/>
     <Event/>
     </div>
     </>
  )
}