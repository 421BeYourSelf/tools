import React, {useEffect, useState} from 'react';
import ReceiptHeader from './ReceiptHeader';
import ReceiptItem from './ReceiptItem';
import './style.css'
import {getRandomElements, shuffleArray} from "../../utils";
import {Button, InputNumber} from "antd";
import html2canvas from "html2canvas";
import ReceiptFooter from "./ReceiptFooter";

function getRandomItems(amount) {
  const products = [
    {name: '有机苹果', code: '2900702034090'},
    {name: '有机香蕉', code: '2900702034091'},
    {name: '有机胡萝卜', code: '2900702034092'},
    {name: '有机生菜', code: '2900702034093'},
    {name: '有机牛奶', code: '2900702034094'},
    {name: '有机无籽西瓜', code: '2900702034089'},
    {name: '有机番茄', code: '2900702034095'},
    {name: '有机黄瓜', code: '2900702034096'},
    {name: '有机菠菜', code: '2900702034097'},
    {name: '有机草莓', code: '2900702034098'},
    {name: '有机蓝莓', code: '2900702034099'},
    {name: '有机柠檬', code: '2900702034100'},
    {name: '有机葡萄', code: '2900702034101'},
    {name: '有机橙子', code: '2900702034102'},
    {name: '有机菠萝', code: '2900702034103'},
    {name: '有机芒果', code: '2900702034104'},
    {name: '有机樱桃', code: '2900702034105'},
    {name: '有机梨子', code: '2900702034106'},
    {name: '有机柚子', code: '2900702034107'},
    {name: '有机杏仁', code: '2900702034108'},
    {name: '有机核桃', code: '2900702034109'},
    {name: '有机腰果', code: '2900702034110'},
    {name: '有机菠菜', code: '2900702034111'},
    {name: '有机花椰菜', code: '2900702034112'},
    {name: '有机生姜', code: '2900702034113'},
    {name: '有机蒜头', code: '2900702034114'},
    {name: '有机洋葱', code: '2900702034115'},
    {name: '有机土豆', code: '2900702034116'},
    {name: '有机芹菜', code: '2900702034117'},
    {name: '有机茄子', code: '2900702034118'},
    {name: '有机卷心菜', code: '2900702034119'},
    {name: '有机青椒', code: '2900702034120'},
    {name: '有机红椒', code: '2900702034121'},
    {name: '有机南瓜', code: '2900702034122'},
    {name: '有机甘蓝', code: '2900702034123'},
    {name: '有机韭菜', code: '2900702034124'},
    {name: '有机芦笋', code: '2900702034125'},
    {name: '有机木瓜', code: '2900702034126'},
    {name: '有机柿子', code: '2900702034127'},
    {name: '有机黑莓', code: '2900702034128'},
    {name: '有机树莓', code: '2900702034129'},
    {name: '有机甜瓜', code: '2900702034130'},
    {name: '有机火龙果', code: '2900702034131'},
    {name: '有机百香果', code: '2900702034132'},
    {name: '有机奇异果', code: '2900702034133'},
    {name: '有机黄桃', code: '2900702034134'},
    {name: '有机李子', code: '2900702034135'},
    {name: '有机桑葚', code: '2900702034136'},
    {name: '有机石榴', code: '2900702034137'},
    {name: '有机西葫芦', code: '2900702034138'},
    {name: '有机萝卜', code: '2900702034139'},
    {name: '有机豌豆', code: '2900702034140'},
    {name: '有机秋葵', code: '2900702034141'},
    {name: '有机紫甘蓝', code: '2900702034142'},
    {name: '有机葱', code: '2900702034143'},
    {name: '有机香菜', code: '2900702034144'},
    {name: '有机芜菁', code: '2900702034145'},
    {name: '有机白萝卜', code: '2900702034146'},
  ];

  const inorganic = [
    {name: "百事可乐", code: '2290702034140', quantity: 10, price: 3, total: 30},
    {name: "小苏打", code: '1001001001001', quantity: 15, price: 2, total: 30},
    {name: "食盐", code: '2002002002002', quantity: 20, price: 1.5, total: 30},
    {name: "漂白粉", code: '3003003003003', quantity: 5, price: 8, total: 40},
    {name: "碳酸钙", code: '4004004004004', quantity: 10, price: 3.5, total: 35},
    {name: "洗衣粉", code: '5005005005005', quantity: 8, price: 4, total: 32},
    {name: "氯化钾", code: '6006006006006', quantity: 12, price: 6, total: 72},
    {name: "硫酸铵", code: '7007007007007', quantity: 7, price: 5, total: 35},
    {name: "硝酸钠", code: '8008008008008', quantity: 9, price: 7, total: 63},
    {name: "氢氧化钙", code: '9009009009009', quantity: 11, price: 2.5, total: 27.5},
    {name: "硫酸镁", code: '1010101010101', quantity: 6, price: 3.2, total: 19.2},
    {name: "硝酸钾", code: '1111111111111', quantity: 14, price: 4, total: 56},
    {name: "重碳酸钠", code: '1212121212121', quantity: 10, price: 3.3, total: 33},
    {name: "硫酸锌", code: '1313131313131', quantity: 4, price: 6.5, total: 26},
    {name: "碳酸钠", code: '1414141414141', quantity: 13, price: 2.2, total: 28.6},
    {name: "氯化钙", code: '1515151515151', quantity: 10, price: 5.2, total: 52},
    {name: "硫酸钾", code: '1616161616161', quantity: 7, price: 4.7, total: 32.9},
    {name: "氢氧化钠", code: '1717171717171', quantity: 9, price: 5.8, total: 52.2},
    {name: "碳酸氢钠", code: '1818181818181', quantity: 8, price: 2.9, total: 23.2},
    {name: "氯化镁", code: '1919191919191', quantity: 10, price: 3.8, total: 38}
  ];


  let newProducts = getRandomElements(products, amount);
  let newInorganic = getRandomElements(inorganic, 5);

  if (newProducts.length <= 0) {
    throw new Error("newProducts 为空")
  }

  if (newInorganic.length <= 0) {
    throw new Error("newInorganic 为空")
  }

  const results = []

  newProducts.forEach(item => {
    const quantity = (Math.random() * 5 + 1).toFixed(2); // 随机数量
    const price = (Math.random() * 10 + 1).toFixed(2); // 随机价格
    const total = (quantity * price).toFixed(2); // 计算总价
    results.push({
      ...item,
      quantity: parseFloat(quantity),
      price: parseFloat(price),
      total: parseFloat(total),
    });
  })

  return shuffleArray([...results,...newInorganic])
}

const Receipt = () => {
  const [items, setItems] = useState([]);

  function handleGetItem(value = 10) {
    const arr = getRandomItems(value);
    setItems(arr);
  }

  function handleDownloadImage(name = "default") {

    const element = document.querySelector('.new-receipt');

    // 使用 html2canvas 截取图像并生成 Canvas
    html2canvas(element, {
      scale: 1 // 增加 scale 以提高分辨率
    }).then(function (canvas) {
      // 将 Canvas 转换为 Blob 对象
      canvas.toBlob(function (blob) {
        // 创建一个新的 URL 对象来保存图片
        const imageUrl = URL.createObjectURL(blob);

        // 创建一个 <a> 元素来下载图片
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = `receipt-${name}.jpg`;
        link.click();

        // 清理 URL 对象
        URL.revokeObjectURL(imageUrl);
      }, 'image/jpeg', 0.8); // 使用 JPEG 格式和高质量
    });
  }

  function handleDownload() {
    [1,2,3,4].forEach(item => {
      handleGetItem();
      handleDownloadImage(item);
    })
  }

  useEffect(() => {
    handleGetItem()
  }, []);

  return (
    <div className="receipt-container" style={{position: "relative"}}>
      <div>
        <InputNumber defaultValue={10} onChange={(value) => handleGetItem(value)}/>
        <Button onClick={() => handleDownload()} size="large">打印票据</Button>
      </div>
      <div id="receipt" className='new-receipt'>
        <ReceiptHeader/>
        <ReceiptItem items={items}/>
        <ReceiptFooter items={items}/>
      </div>
    </div>
  );
};

export default Receipt;

