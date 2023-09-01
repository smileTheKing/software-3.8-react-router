import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { dummyData } from "./data";
import Header from "./routes/Header";
import View from "./routes/View";
import Edit from "./routes/Edit";
import Add from "./routes/Add";
import Item from "./routes/Item";
import ItemDefault from "./routes/ItemDefault";
import { v4 as uuidv4 } from 'uuid';

const NotFound = () => <h1>Not found</h1>;

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [discount, setDiscount] = useState('');

 

  const [list, setList] = useState(dummyData);
  const [addProduct, setAddProduct] = useState(list);

  const handlerDeleteProduct = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const handlerAddProduct = (e) => {
    //prevent page from reloading when page is submitted
    e.preventDefault();

    //add new product to state / array
    const newProduct = [
      ...list,
      {
        id: uuidv4(),
        name: name,
        quantity: quantity,
        price: price,
        discount: discount,
      },
    ];
    
    //reset state after form is submitted
    setName(null)
    setPrice(null)
    setQuantity(null)
    setDiscount(null)
    //update to list to new state
    setList(newProduct)
   
   
  };


  const handlerEditProduct = (id) => {
    const newList = list.filter((item) => item.id === id);
    setList(newList);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="view" element={<View list={list} />}>
              <Route index element={<ItemDefault />} />
              <Route
                path=":id"
                element={
                  <Item list={list} handlerDelete={handlerDeleteProduct} />
                }
              />
            </Route>
            <Route
              path="add"
              element={
                <Add
                  name={name}
                  price={price}
                  quantity={quantity}
                  discount={discount}
                  setDiscount={setDiscount}
                  setPrice={setPrice}
                  setName={setName}
                  setQuantity={setQuantity}
                  handleAdd={handlerAddProduct}
                />
              }
             
            />
            <Route path="edit" element={<Edit list={list} handleEdit={handlerEditProduct}/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
