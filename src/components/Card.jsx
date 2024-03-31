import { useContext } from "react";
import { BasketContext } from "../context/basketContex";

const Card = ({ product }) => {
  const { addToBasket } = useContext(BasketContext);
  return (
    <div
      className="card p-2"
      style={{ width: "250px", boxShadow: "0 0 25px black" }}
    >
      <div className="d-flex justify-content-center pt-2">
        <img
          src={product.image}
          alt="img"
          height={120}
          className="object-fit-contain"
        />
      </div>
      <div className="card-body pt-2">
        <h4 className="text-truncate fw-bold">{product.title}</h4>
        <p
          className="fw-bold"
          style={{ textTransform: "uppercase", fontSize: 16, textAlign: "end" }}
        >
          ${product.price}
        </p>
        <p
          className="text-secondary"
          style={{ textTransform: "uppercase", fontSize: 13, textAlign: "end" }}
        >
          {product.category}
        </p>
        <button
          onClick={() => addToBasket(product)}
          style={{ backgroundColor: "orange" }}
          className="btn shadow  w-100 rounded-3"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
