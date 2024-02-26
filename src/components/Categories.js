import React from 'react';

const Categories = () => {
    return (
        <section className="categories">
            <ul className="categories_top">
                <li>Style</li>
                <li>Outdoor Activities</li>
                <li>Indoor Escapes</li>
                <li>Foodie Delights</li>
                <li>Best Scenic Spots</li>
                <li>Entertainment</li>
            </ul>

            <ul className="categories_bottom">
                <li>Family-Friendly Activities</li>
                <li>Historic/Cultural</li>
                <li>Festivals</li>
                <li>Local Markets</li>
                <li>Unique Experiences</li>
            </ul>
        </section>
    );
};

export default Categories;