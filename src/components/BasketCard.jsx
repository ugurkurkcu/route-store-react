import { useContext } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { BasketContext } from "../context/basketContex";

const BasketCard = ({ product }) => {
  const { removeFromBasket, addToBasket, decCount } = useContext(BasketContext);
  return (
    <div className="bg-dark gap-4 rounded-4 p-2 m-2 d-flex flex-sm-row justify-content-between px-4 align-items-center">
      <div className="bg-dark  gap-4 rounded  d-flex align-items-center">
        <div className="bg-white rounded-3 border">
          <img
            className="object-fit-contain"
            height={100}
            width={100}
            src={product.image}
            alt={product.title}
          />
        </div>
        <div>
          <p className="fw-bold text-truncate ">
            {product.title.length > 25
              ? product.title.slice(0, 25) + "..."
              : product.title}
          </p>
          <p className="text-capitalize">Kategory: {product.category}</p>
          <p>Reyting: {product.rating.rate}</p>
        </div>
      </div>
      <div className="">
        <p className="fs-3 fw-bold text-center bg-warning text-dark rounded-5">
          ${(product.price * product.amount).toFixed(2)}
        </p>
        <div className="countCart d-flex gap-1 align-items-center justify-content-between ">
          <div className=" d-flex  align-items-center  bg-white text-dark gap-3 rounded-5 overflow-hidden">
            <button
              onClick={() => decCount(product)}
              className="p-3 text-dark bg-warning"
            >
              -
            </button>
            <span className="fs-6 fw-bold spanWidth">{product.amount}</span>
            <button
              onClick={() => addToBasket(product)}
              className="p-3 text-dark bg-warning "
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFromBasket(product)}
            className="bg-transparent rounded-4"
          >
            <FaTrashCan className="fs-3 text-warning" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
