import React, { useState } from 'react'
import IconSwitch from '../components/IconSwitch'
import ListView from '../components/ListView'
import CardsView from '../components/CardsView'


function Store() {
  const [icon, setIcon] = useState("view_list");

  const onSwitch = icon => {
    setIcon(prevIcon => {
      // console.log("change state here")
      return prevIcon === "view_list" ? "view_module" : "view_list";
    });
  };

  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

  const ShopItem = products.map(product => {
    return (
      <div className="shop-item">
        <img src={product.img} alt={product.name} />
        <div className="title">
          {product.name.toUpperCase()}
        </div>
        <div>
          {product.color}
        </div>
        <div className="price">${product.price}</div>
        <button label="Add to cart">Add to cart</button>
      </div>
    );
  })

  const ShopCard = products.map(product => {
    return (
      <div className="shop-card">
        <div className="title">
          {product.name.toUpperCase()}
        </div>
        <div>
          {product.color}
        </div>
        <img src={product.img} alt={product.title} />
        <div className="card-footer">
          <div className="price">${product.price}</div>
          <button label="Add to cart">Add to cart</button>
        </div>
      </div>
    );
  })

  let view = icon === "view_list" ? <ListView items={ShopItem} /> : <CardsView cards={ShopCard} />;

  return (
    <div className="container">
      <IconSwitch icon={icon} onSwitch={onSwitch} />
      {view}
    </div>
  );
}



export default Store