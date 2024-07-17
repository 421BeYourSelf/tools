import React from 'react';

const ReceiptItem = ({items}) => {

  return (
    <>
      {
        items.map((item, index) => {
          return (
            <div key={index}>
              <div>{item.name}/{item.code}</div>
              <div className="receipt-items">
                <span>${item.price}</span>
                <span>{item.quantity}</span>
                <span>${item.total}</span>
              </div>
            </div>
          )
        })
      }
    </>
  )
}
export default ReceiptItem;
