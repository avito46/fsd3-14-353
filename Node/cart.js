import readline from 'readline/promises';
import {stdin,stdout} from "process";
import {readFile,writeFile} from "fs/promises";
const FILE ="product.json";

const getCart= async ()=>{
    try{
        const data =await readFile(FILE,"utf-8")
        return JSON.parse(data);
    }catch(err){
        return [];
    }
};

const saveCart= async (cart)=>{
    await writeFile(FILE,JSON.stringify(cart,null,2));
};

const main=async ()=>{
    let choice;
    const cin =readline.createInterface({input: stdin, output:stdout});

    do{
console.log("Welcome to Amazon Shopping🛒");
console.log("1......Show Cart");
console.log("2......Add Product");
console.log("3......Remove Product");
console.log("4......Update Quantity");
console.log("5......Checkout");
choice = await cin.question("enter your choice");
switch (Number (choice)){
    case 1:
    console.log("Show cart");
    break;
    case 2:
        console.log("add product");
        break;
    case 3:
        console.log("remove product");
        break;
    case 4:
        console.log("update quantity")
        break;
    case 5:
        console.log("checkout");
        break;
}
}
while (choice!=5);
cin.close();
};
main();