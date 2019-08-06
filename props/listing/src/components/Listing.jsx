import React from 'react';
import ListItem from '../components/ListItem';
import PropTypes from 'prop-types';


function Listing({ items }) {

    return (
        <div className="item-list">
            {items.map(item => <ListItem key={item.listing_id} item={item} />)}
        </div>
    );
}

Listing.defaultProps = {
    items: []
};

Listing.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        listing_id: PropTypes.number,
        url: PropTypes.string,
        MainImage: PropTypes.object,
        title: PropTypes.string,
        currency_code: PropTypes.string,
        price: PropTypes.string,
        quantity: PropTypes.number
      }),
    )
  };

export default Listing;