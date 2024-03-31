import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import Loader from "../components/Loader";
import Card from "../components/Card";

const MainPage = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="d-flex flex-wrap mt-5 pt-5 gap-3 gap-md-4 justify-content-center justify-content-md-evenly align-items-center px-4">
      {!products ? (
        <Loader />
      ) : (
        products.map((item) => <Card key={item.id} product={item} />)
      )}
    </div>
  );
};

export default MainPage;
