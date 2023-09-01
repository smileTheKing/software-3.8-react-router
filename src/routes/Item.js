import { useParams, useNavigate } from "react-router-dom";
import styles from "./Item.module.css";

function Item({ list, handlerDelete, handlerEdit }) {
  const { id } = useParams();
  console.log(list);
  const product = list?.find((item) => item.id === id);
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h3>Product ID: {id}</h3>
      <p>Name: {product?.name}</p>
      <p>Quantity: {product?.quantity}</p>
      <p>Price: {product?.price}</p>
      <p>Discount: {product?.discount}</p>

      <div className={styles.btmContainer}>
        <button
          className={styles.btm}
          onClick={() => {
            handlerDelete(id);
            navigate("/view");
          }}
        >
          edit
        </button>
        <button
          className={`${styles.btm} ${styles.del}`}
          onClick={() => {
            navigate("/edit");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Item;
