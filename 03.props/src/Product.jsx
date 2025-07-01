import React from "react";

function Product({productName , price}) {
    // const {productName , price} = props; //{productName: "Ayakkabı",price: 3200}
  return (
    <div>
      <div>ÜRÜN BİLGİLERİ</div>

      <div>
        <div>İsim: {productName}</div>
        <div>Fiyat : {price}TL</div>
      </div>
    </div>
  );
}

export default Product;
