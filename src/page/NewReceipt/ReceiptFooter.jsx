import React from 'react';

function getRandomPaymentMethod() {
  const paymentMethods = [
    "Credit Card",
    "Debit Card",
    "Cash",
    "Check",
    "Mobile Payment",
    "Bank Transfer",
    "PayPal",
    "Apple Pay",
    "Google Pay",
    "Samsung Pay",
    "Venmo",
    "Square",
    "Cryptocurrency",
    "Gift Card",
    "Contactless Payment",
    "Prepaid Card",
    "Western Union",
    "Money Order",
    "ACH Transfer",
    "Zelle"
  ];

  const randomIndex = Math.floor(Math.random() * paymentMethods.length);
  return paymentMethods[randomIndex];
}


function getRandomSupermarketLocation() {
  const locations = [
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ",
    "Philadelphia, PA",
    "San Antonio, TX",
    "San Diego, CA",
    "Dallas, TX",
    "San Jose, CA",
    "Austin, TX",
    "Jacksonville, FL",
    "Fort Worth, TX",
    "Columbus, OH",
    "Charlotte, NC",
    "San Francisco, CA",
    "Indianapolis, IN",
    "Seattle, WA",
    "Denver, CO",
    "Washington, D.C.",
    "Boston, MA",
    "El Paso, TX",
    "Nashville, TN",
    "Detroit, MI",
    "Oklahoma City, OK",
    "Portland, OR",
    "Las Vegas, NV",
    "Memphis, TN",
    "Louisville, KY",
    "Baltimore, MD",
    "Milwaukee, WI",
    "Albuquerque, NM",
    "Tucson, AZ",
    "Fresno, CA",
    "Sacramento, CA",
    "Kansas City, MO",
    "Mesa, AZ",
    "Atlanta, GA",
    "Omaha, NE",
    "Colorado Springs, CO",
    "Raleigh, NC",
    "Miami, FL",
    "Long Beach, CA",
    "Virginia Beach, VA",
    "Oakland, CA",
    "Minneapolis, MN",
    "Tulsa, OK",
    "Arlington, TX",
    "New Orleans, LA",
    "Wichita, KS"
  ];

  const randomIndex = Math.floor(Math.random() * locations.length);
  return locations[randomIndex];
}


function getRandomPhoneNumber() {
  const countryCode = "+1"; // Assuming US country code for example
  const areaCode = Math.floor(Math.random() * (999 - 200 + 1)) + 200; // Random area code between 200 and 999
  const exchangeCode = Math.floor(Math.random() * 1000); // Random exchange code between 000 and 999
  const subscriberNumber = Math.floor(Math.random() * 10000); // Random subscriber number between 0000 and 9999
  return `${countryCode}-${areaCode.toString().padStart(3, '0')}-${exchangeCode.toString().padStart(3, '0')}-${subscriberNumber.toString().padStart(4, '0')}`;
}


const ReceiptFooter = ({items}) => {

  return <div>
    <div className="line"></div>
    <div className="details">
      <div>Amount: {items.reduce((prev, next) => prev + next.quantity, 0).toFixed(2)}</div>
    </div>
    <div className="details">
      <div>Total original price:</div>
      <div>${items.reduce((prev, next) => prev + next.price, 0).toFixed(2)}</div>
    </div>
    <div className="details">
      <div>Discount:</div>
      <div>0.00</div>
    </div>
    <div className="details">
      <div>Total payable:</div>
      <div>${items.reduce((prev, next) => prev + next.price, 0).toFixed(2)}</div>
    </div>
    <div className="details">
      <div>Payment: {getRandomPaymentMethod()}</div>
      <div>${items.reduce((prev, next) => prev + next.price, 0).toFixed(2)}</div>
    </div>
    <div className="line"></div>
    <div>Remark:</div>
    <div className="center"></div>
    <div className="center">Thank you for your patronage. Welcome to visit us next time.</div>
    <div className="center">Contact number: {getRandomPhoneNumber}</div>
    <div className="center">Address: {getRandomSupermarketLocation()}</div>
    <div className="center">Please bring your receipt to the service desk within 7 days to get an invoice</div>
  </div>
}

export default ReceiptFooter;
