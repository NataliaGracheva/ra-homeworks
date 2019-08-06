import React from 'react';

function ListItem({ item }) {

    if (!(item.url && item.MainImage && item.title && item.currency_code && item.price && item.quantity)) {
        return null;
    }

    const quantityClasses = item.quantity > 20 ? "item-quantity level-high" :
    ( item.quantity <= 10 ? "item-quantity level-low" : "item-quantity level-medium");

    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN} alt="" />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{(item.title.length > 50) ? (item.title.slice(0, 49) + '...') :
                    item.title}</p>
                <p className="item-price">{(item.currency_code === 'USD') ? '$' + item.price :
                    ((item.currency_code === 'EUR') ? '€' + item.price :
                        item.price + ' ' + item.currency_code)}</p>
                <p className={quantityClasses}>{item.quantity} left</p>
            </div>
        </div>
    );
}

export default ListItem;