import React, { useState } from 'react';
import Header from "./header/Header";
import ProductCard from "./components/ProductCard";

function App() {
  const [text, setText] = useState('');
  const cards = [
    {
      id: 1,
      title: 'Беспроводные наушники',
      price: '4 500 ₽',
      rate: 3.2,
      image: 'https://softech.kg/image/cache/catalog/Products/Acsessuary/WIWU/Naushniki/Airbuds%20Pro%202%20Lite/1-800x800.jpg'
    },
    {
      id: 2,
      title: 'Умные часы',
      price: '12 200 ₽',
      rate: 4.5,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
    {
      id: 3,
      title: 'Термокружка',
      price: '1 500 ₽',
      rate: 4.8,
      image: 'https://lv2.pigugroup.eu/colours/255/194/56/25519456/termokruze-1000-ml-balta-4ae60_reference.jpg'
    },
    {
      id: 4,
      title: 'Механическая клавиатура',
      price: '7 800 ₽',
      rate: 5,
      image: 'https://ir.ozone.ru/s3/multimedia-1-x/wc1000/8602419993.jpg'
    }
  ];

  function clickMe(card) {
    setText(`${card.title} добавлены в корзину!`)
  }
  return (
    <>
      <Header />
      <span className='text'>{text}</span>
      <div className="wrapper">
        {cards.map((card) => (
          <ProductCard
            key={card.id}
            image={card.image}
            title={card.name}
            price={card.price}
            rating={card.rate}
            onClick={() => clickMe(card)}
          />
        ))}
      </div>
    </>
  )
}
export default App;