import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useState } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage("sepet", []);

  const addToBasket = (newItem) => {
    const foundItem = basket.find((i) => i.id === newItem.id);

    if (foundItem) {
      const updatedItem = { ...foundItem, amount: foundItem.amount + 1 };

      const newBasket = basket.map((i) =>
        i.id === updatedItem.id ? updatedItem : i
      );
      setBasket(newBasket);
    } else {
      setBasket(basket.concat({ ...newItem, amount: 1 }));
      // setBasket([...basket, newItem]); ustteki fonksiyon ile ayni
    }
  };

  const removeFromBasket = (deletedItem) => {
    const newBasket = basket.filter((i) => i.id !== deletedItem.id);
    setBasket(newBasket);
  };
  const decCount = (decItem) => {
    const updatedItem = { ...decItem, amount: decItem.amount - 1 };
    if (decItem.amount > 1) {
      const newBasket = basket.map((i) =>
        i.id === updatedItem.id ? updatedItem : i
      );
      setBasket(newBasket);
    } else {
      removeFromBasket(decItem);
    }
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, decCount }}
    >
      {children}
    </BasketContext.Provider>
  );
};
