import React from 'react';

const ReceiptHeader = () => {

  return <>
    <h1 className="center">{getRandomSupermarket()}</h1>
    <div className="details">
      <div>{Math.floor(Math.random() * 100000)}</div>
      <div>NO.{Math.floor(Math.random() * 100000000000)}</div>
    </div>
    <div className="details">
      <div>{getFormattedDate()}</div>
      <div>Cashier: {getRandomCashierName()}</div>
    </div>
    <div className="line"></div>

    <div className="details">
      <span>Product Name / Number</span>
      <span>Price</span>
      <span>Amount</span>
      <span>Total</span>
    </div>
    <div className="line"></div>
  </>
}
export default ReceiptHeader;


function getRandomSupermarket() {
  const supermarkets = [
    "Walmart",
    "Kroger",
    "Costco",
    "Target",
    "Safeway",
    "Publix",
    "Aldi",
    "Trader Joe's",
    "Whole Foods Market",
    "Sam's Club",
    "Meijer",
    "H-E-B",
    "Wegmans",
    "Albertsons",
    "Giant Food",
    "Stop & Shop",
    "Sprouts Farmers Market",
    "ShopRite",
    "WinCo Foods",
    "Hy-Vee"
  ];

  const randomIndex = Math.floor(Math.random() * supermarkets.length);
  return supermarkets[randomIndex];
}

function getRandomCashierName() {
  const cashierNames = [
    "John",
    "Jane",
    "Michael",
    "Emily",
    "David",
    "Sarah",
    "Chris",
    "Jessica",
    "Daniel",
    "Ashley",
    "James",
    "Amanda",
    "Robert",
    "Melissa",
    "William",
    "Heather",
    "Joseph",
    "Stephanie",
    "Charles",
    "Nicole"
  ];

  const randomIndex = Math.floor(Math.random() * cashierNames.length);
  return cashierNames[randomIndex];
}

function getFormattedDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

// Example usage:
console.log(getFormattedDate());
