# Frontend - Backend
1. create project folder(lab7)
2. create frontend and backend folder within the project folder
3. open terminal and split it two
4. open frontend on the left side of the terminal
5.open backend to the right of the terminal
6. In Backend
      a. initialize backend by `npm init -y`
      b. install nodemon by `npm i nodemon`
      c. open package.json from backend, update `type to module` and script
      d. create app.js 
7. in frontend
      a. npm create vite@latest
      b. enter . as project name
      c. select framework as react from arrow key
      d. select variant as javascript from arrow key
      e. select esList for linting from arrow key 
      f. select install and start the frontend

## Components
1. Simple js function returns html directory 
2. It must start with capital letter
3. It should be treated as html tag
4. It must be closed

## Object destructor
1. const {bname,price,Quantity,rating,icUrl}=props.book
Does not depend on order,if property is not available then it initialises with NULL
2. Any component including style 
a. External css -->Create class in index.css and use in component
b. Internal Css -->Create property as object:
```
const qtyStyle={
    fontSize:"1rem",
    color:"blue",
    textAlign:"center",
    backgroundColor:"yellow",
    padding:"10px",
  }
  ```
  Then apply that style attrubute and pass the object

c. Inline css -->Written inside the tag which the user wants to customise
3. rfce gives react default function
4. rafc gives arrow function
