import React, { useState } from "react";
import style from "./Add.module.css";
import { useNavigate } from "react-router-dom";

function Add ({name,discount,price,quantity,setDiscount,setName,setPrice,setQuantity,handleAdd}) {

  //navigation from react router dom
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <h1>Add Product</h1>
      <form className={style.form} onSubmit={(e)=>{
        handleAdd(e);

        //navigate to n
        navigate('/view')

        }}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          name="quantity"
          placeholder="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="number"
          name="price"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          name="discount"
          placeholder="discount"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />

        <button className={style.btm}>Add Product</button>
      </form>

      <div></div>
    </div>
  );
};

export default Add;
