import { useContext } from "react";
import { BasketContext } from "../context/basketContex";
import { Link } from "react-router-dom";
import BasketCard from "../components/BasketCard";

const BasketPage = () => {
  const { basket } = useContext(BasketContext);

  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);
  const totalPrice = basket.reduce((total, i) => total + i.amount * i.price, 0);

  return (
    <div className="mt-5 pt-5 p-2 ">
      <h1>Sepet</h1>
      <div className="row gap-3 justify-content-center">
        <div className="col-lg-8">
          <div>
            {basket.length === 0 ? (
              <div className="text-center fs-3 my-5">
                <p>Sepetinize Ürün Eklemediniz</p>
                <Link className="btn btn-warning fs-2" to={"/"}>
                  Ürünler
                </Link>
              </div>
            ) : (
              basket.map((item) => <BasketCard key={item.id} product={item} />)
            )}
          </div>
        </div>
        <div className="col-lg-4 m-1 w-75 p-4 justify-content-between rounded-4 bg-dark flex-row d-flex  sticky-bottom">
          <div>
            <h3>
              <span className="text-warning fw-bold fs-1">{totalAmount}</span>{" "}
              adet ürün için;
            </h3>
            <h1>
              Toplam $
              <span className="text-warning fw-bold fs-1">
                {totalPrice.toFixed(2)}
              </span>
            </h1>
          </div>
          <button className="btn btn-outline-warning fs-2 fw-bold">
            Hemen Al
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
