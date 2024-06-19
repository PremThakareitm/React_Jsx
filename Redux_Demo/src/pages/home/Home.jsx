import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../home/Home.module.css";
import Navigation from "../../components/Navigation";
import { changeName } from "../../slices/userSlice";

function Home() {
  let username = useSelector((state) => {
    return state.user.value;
  });

  let dispatch= useDispatch()

  return (
    <>
      <Navigation />
      <h1 className={styles.container}>Home Page {username}</h1>
      <button
        onClick={() => {
          dispatch(changeName("Thakare"));
        }}
      >
        Change Redux Name
      </button>

      <button
        onClick={() => {
          dispatch(changeName({name:"Smartwatch",price:30000}));
        }}
      >
        Add Product
      </button>

      {
        product.map((prod)=>{
          return(
            <h1>{prod.name} {prod.price}</h1>
          )
        })
      }
    </>
  );
}

export default Home;
