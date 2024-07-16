import React, {useEffect, useState} from 'react';
import ReceiptHeader from './ReceiptHeader';
import ReceiptItem from './ReceiptItem';
import ReceiptFooter from './ReceiptFooter';
import './style.css'
import {Button} from "antd";
import html2canvas from 'html2canvas';


const Receipt = ({amount = 40}) => {

  const [items, setItems] = useState([]);

  function handleDownloadImage() {
    const element = document.getElementById('receipt');

    // 使用 html2canvas 截取图像并生成 Canvas
    html2canvas(element, {
      scale: 2 // 增加 scale 以提高分辨率
    }).then(function (canvas) {
      // 将 Canvas 转换为 Blob 对象
      canvas.toBlob(function (blob) {
        // 创建一个新的 URL 对象来保存图片
        const imageUrl = URL.createObjectURL(blob);

        // 创建一个 <a> 元素来下载图片
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = `receipt.jpg`;
        link.click();

        // 清理 URL 对象
        URL.revokeObjectURL(imageUrl);
      }, 'image/jpeg', 0.8); // 使用 JPEG 格式和质量
    });
  }


  useEffect(() => {
    setItems(getRandomItems(amount));
  }, [amount]);

  return (
    <div style={{position: "relative"}}>
      <div id="receipt">
        <ReceiptHeader/>
        <ReceiptItem items={items}/>
        <ReceiptFooter items={items}/>
      </div>
      <Button onClick={() => handleDownloadImage()} size="large" className="receipt-btn">打印票据</Button>
    </div>
  );
};

export default Receipt;

function getRandomItems(amount = 10) {
  const products = [
    {name: 'Apple', code: '2900702034090'},
    {name: 'Banana', code: '2900702034091'},
    {name: 'Carrot', code: '2900702034092'},
    {name: 'Lettuce', code: '2900702034093'},
    {name: 'Milk', code: '2900702034094'},
    {name: 'Seedless Watermelon', code: '2900702034089'},
    {name: 'Tomato', code: '2900702034095'},
    {name: 'Cucumber', code: '2900702034096'},
    {name: 'Spinach', code: '2900702034097'},
    {name: 'Strawberry', code: '2900702034098'},
    {name: 'Blueberry', code: '2900702034099'},
    {name: 'Lemon', code: '2900702034100'},
    {name: 'Grape', code: '2900702034101'},
    {name: 'Orange', code: '2900702034102'},
    {name: 'Pineapple', code: '2900702034103'},
    {name: 'Mango', code: '2900702034104'},
    {name: 'Cherry', code: '2900702034105'},
    {name: 'Pear', code: '2900702034106'},
    {name: 'Grapefruit', code: '2900702034107'},
    {name: 'Almond', code: '2900702034108'},
    {name: 'Walnut', code: '2900702034109'},
    {name: 'Cashew', code: '2900702034110'},
    {name: 'Spinach', code: '2900702034111'},
    {name: 'Cauliflower', code: '2900702034112'},
    {name: 'Ginger', code: '2900702034113'},
    {name: 'Garlic', code: '2900702034114'},
    {name: 'Onion', code: '2900702034115'},
    {name: 'Potato', code: '2900702034116'},
    {name: 'Celery', code: '2900702034117'},
    {name: 'Eggplant', code: '2900702034118'},
    {name: 'Cabbage', code: '2900702034119'},
    {name: 'Green Pepper', code: '2900702034120'},
    {name: 'Red Pepper', code: '2900702034121'},
    {name: 'Pumpkin', code: '2900702034122'},
    {name: 'Kale', code: '2900702034123'},
    {name: 'Leek', code: '2900702034124'},
    {name: 'Asparagus', code: '2900702034125'},
    {name: 'Papaya', code: '2900702034126'},
    {name: 'Persimmon', code: '2900702034127'},
    {name: 'Blackberry', code: '2900702034128'},
    {name: 'Raspberry', code: '2900702034129'},
    {name: 'Melon', code: '2900702034130'},
    {name: 'Dragon Fruit', code: '2900702034131'},
    {name: 'Passion Fruit', code: '2900702034132'},
    {name: 'Kiwi', code: '2900702034133'},
    {name: 'Peach', code: '2900702034134'},
    {name: 'Plum', code: '2900702034135'},
    {name: 'Mulberry', code: '2900702034136'},
    {name: 'Pomegranate', code: '2900702034137'},
    {name: 'Zucchini', code: '2900702034138'},
    {name: 'Radish', code: '2900702034139'},
    {name: 'Pea', code: '2900702034140'},
    {name: 'Okra', code: '2900702034141'},
    {name: 'Red Cabbage', code: '2900702034142'},
    {name: 'Scallion', code: '2900702034143'},
    {name: 'Cilantro', code: '2900702034144'},
    {name: 'Turnip', code: '2900702034145'},
    {name: 'Daikon Radish', code: '2900702034146'},
  ];
  const householdItems = [
    {name: "Milk", code: "2900702034200"},
    {name: "Eggs", code: "2900702034201"},
    {name: "Bread", code: "2900702034202"},
    {name: "Cheese", code: "2900702034203"},
    {name: "Chicken", code: "2900702034204"},
    {name: "Pasta", code: "2900702034205"},
    {name: "Rice", code: "2900702034206"},
    {name: "Toilet Paper", code: "2900702034207"},
    {name: "Laundry Detergent", code: "2900702034208"},
    {name: "Soap", code: "2900702034209"},
    {name: "Shampoo", code: "2900702034210"},
    {name: "Conditioner", code: "2900702034211"},
    {name: "Diapers", code: "2900702034212"},
    {name: "Baby Formula", code: "2900702034213"},
    {name: "Pet Food", code: "2900702034214"},
    {name: "Cat Litter", code: "2900702034215"},
    {name: "Batteries", code: "2900702034216"},
    {name: "Light Bulbs", code: "2900702034217"},
    {name: "Tissues", code: "2900702034218"},
    {name: "Aluminum Foil", code: "2900702034219"},
    {name: "Ziploc Bags", code: "2900702034220"},
    {name: "Trash Bags", code: "2900702034221"},
    {name: "Dish Soap", code: "2900702034222"},
    {name: "Cleaning Supplies", code: "2900702034223"},
    {name: "Bandages", code: "2900702034224"},
    {name: "First Aid Kit", code: "2900702034225"},
    {name: "Medicine", code: "2900702034226"},
    {name: "Vitamins", code: "2900702034227"},
    {name: "Sunscreen", code: "2900702034228"},
    {name: "Bug Spray", code: "2900702034229"},
    {name: "BBQ Sauce", code: "2900702034230"},
    {name: "Salad Dressing", code: "2900702034231"},
    {name: "Salsa", code: "2900702034232"},
    {name: "Peanut Butter", code: "2900702034233"},
    {name: "Jelly", code: "2900702034234"},
    {name: "Ketchup", code: "2900702034235"},
    {name: "Mustard", code: "2900702034236"},
    {name: "Coffee", code: "2900702034237"},
    {name: "Tea", code: "2900702034238"},
    {name: "Juice", code: "2900702034239"},
    {name: "Soda", code: "2900702034240"},
    {name: "Chips", code: "2900702034241"},
    {name: "Cookies", code: "2900702034242"},
    {name: "Chocolate", code: "2900702034243"},
    {name: "Ice Cream", code: "2900702034244"},
    {name: "Yogurt", code: "2900702034245"},
    {name: "Water", code: "2900702034246"}
  ];

  let selectedItems = [];
  let numberOfItems = Math.max(Math.floor(Math.random() * 5) + 6, amount); // 确保最少购买10样

  for (let i = 0; i < numberOfItems; i++) {
    let product;
    if (Math.random() < 0.5) {
      product = products[Math.floor(Math.random() * products.length)];
    } else {
      product = householdItems[Math.floor(Math.random() * householdItems.length)];
    }
    const quantity = (Math.random() * 5 + 1).toFixed(2); // 随机数量
    const price = (Math.random() * 10 + 1).toFixed(2); // 随机价格
    const total = (quantity * price).toFixed(2); // 计算总价

    // 如果选择的是字符串，则构造成对象
    if (typeof product === 'string') {
      selectedItems.push({
        name: product,
        quantity: parseFloat(quantity),
        price: parseFloat(price),
        total: parseFloat(total),
      });
    } else {
      selectedItems.push({
        ...product,
        quantity: parseFloat(quantity),
        price: parseFloat(price),
        total: parseFloat(total),
      });
    }
  }

  return selectedItems;
}

