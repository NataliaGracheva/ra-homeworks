import React from 'react'

function CardsView(props) {
    const { cards } = props;

    const renderCards = (cards) => {
        return cards.map((card, i) => {
            return (
                <div className="card" key={i}>
                    {card}
                </div>
            );
        });
    };

    return (
        <div className="cards">
            {renderCards(cards)}
        </div>
    );
}

export default CardsView