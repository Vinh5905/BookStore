import Modal from "./Modal";

function Calculate({ total, products }) {
  return (
    <div className="rounded-xl shadow-aroundSmall p-6">
      <ul>
        <MoneyCal name="subtotal" money={total} />
        <MoneyCal name="shipping" />
        <MoneyCal name="tax" />
        <MoneyCal name="discount" />
      </ul>

      <div className="w-full h-px bg-slate-200 mt-5"></div>

      <div className="text-xl text-[--primary-color] font-semibold flex justify-between my-5">
        <span className="capitalize">total:</span>
        <span className="">{total.toLocaleString("vi")} VND</span>
      </div>

      <div className="w-full h-px bg-slate-200 mt-5 mb-6"></div>

      <Modal total={total} products={products}/>
    </div>
  );
}

function MoneyCal({ name, money }) {
  return (
    <li className="flex justify-between mb-2 items-center">
      <span className="capitalize text-slate-500 font-light text-sm">
        {name}:
      </span>
      <span className="font-medium text-lg">
        {money === undefined ? "-" : `${money.toLocaleString("vi")} VND`}
      </span>
    </li>
  );
}

export default Calculate;
