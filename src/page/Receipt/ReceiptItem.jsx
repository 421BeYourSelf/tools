import React from 'react';

const ReceiptItem = ({items}) => {

    return (
      <>
        {
          items.map(item => {
            return <div>
              <div>{item.name}/{item.code}</div>
              <div className="receipt-items">
                <span>${item.price.toFixed(2)}</span>
                <span>{item.quantity.toFixed(2)}</span>
                <span>${item.total.toFixed(2)}</span>
              </div>
            </div>
          })
        }
      </>
    )
}
export default ReceiptItem;
