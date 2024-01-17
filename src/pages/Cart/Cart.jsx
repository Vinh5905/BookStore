import { useState } from "react";
import { products as fakeProducts } from "./components/data";
import Product from "./components/Product";
import Calculate from "./components/Calculate";
import EmptyCart from "./components/EmptyCart";

export let totalMoney = fakeProducts.map((product) => {
  return product.price * product.quantity;
});

function Cart() {

  const [products, setProducts] = useState(fakeProducts);

  return (
    <div className="px-24 my-10">
      <div className="grid grid-cols-3 gap-10 mt-5">
        <div className="col-start-1 col-end-3">
          <div>
            {products.filter((product) => product.count > 0).length === 0 ? (
              <EmptyCart />
            ) : (
              products.map((product, index) => {
                return product.count > 0 && (
                  <Product
                    key={index}
                    data={product}
                    onDelete={() => {
                      setProducts((prev) =>
                        prev.filter((p) => p.id != product.id)
                      );
                    }}

                    onDecrease={() =>
                        setProducts((prev) =>
                        prev.map((p) =>
                          p.id == product.id ? { ...p, count: p.count - 1 } : p
                        )
                      )
                    }
                      
                    onIncrease={() =>
                      setProducts((prev) =>
                        prev.map((p) =>
                          p.id == product.id ? { ...p, count: p.count + 1 } : p
                        )
                      )
                    }
                  />
                );
              })
            )}
          </div>
        </div>
        <div className="col-start-3 col-end-4">
          <Calculate products={products} total={products.reduce((prev,cur,i, arr) => prev + cur.price * cur.count,0)} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
