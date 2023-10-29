import React from 'react';
import { useSelector } from 'react-redux';

const factsData = [
    "Прообразом Чубакки стал пёс режиссёра;",
    "Актёрам разрешили подобрать любимый цвет для своих световых мечей;",
    "В фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину;",
    "Дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу;",
    "Планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок."
];

const FactDisplay = () => {
    const numberOfFacts = useSelector((state) => state.facts);

    const displayedFacts = factsData.slice(0, numberOfFacts);

    return (
        <div>
            <h2>Факты о Star Wars:</h2>
            <ul>
                {displayedFacts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
        </div>
    );
};

export default FactDisplay;
