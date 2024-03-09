import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Categories = ({ activities, setSelectedCategory }) => {
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <section className="categories">
                    <ul className="categories_top">
                    <li><Link to={`/categories/${encodeURIComponent('Styles')}`} onClick={() => handleCategoryClick('Styles')}>Styles</Link></li>
                    <li><Link to={`/categories/${encodeURIComponent('Outdoor Activities')}`} onClick={() => handleCategoryClick('Outdoor Activities')}>Outdoor Activities</Link></li>
                    <li><Link to={`/categories/${encodeURIComponent('Indoor Escapes')}`} onClick={() => handleCategoryClick('Indoor Escapes')} >Indoor Escapes</Link></li>
                    <li><Link to={`/categories/${encodeURIComponent('Foodie Delights')}`} onClick={() => handleCategoryClick('Foodie Delights')}>Foodie Delights</Link></li>
                    <li><Link to={`/categories/${encodeURIComponent('Best Scenic Spots')}`} onClick={() => handleCategoryClick('Best Scenic Spots')} >Best Scenic Spots</Link></li>
                    <li><Link to={`/categories/${encodeURIComponent('Entertainment')}`} onClick={() => handleCategoryClick('Entertainment')}>Entertainment</Link></li>
                    </ul>
                    <ul className="categories_bottom">
                    <li><Link to={`/categories/${encodeURIComponent('Family-Friendly Activities')}`} onClick={() => handleCategoryClick('Family-Friendly Activities')}>Family-Friendly Activities </Link></li>
                    <li><Link to={`/categories/${encodeURIComponent('Historic/Cultural')}`} onClick={() => handleCategoryClick('Historic/Cultural')}>Historic/Cultural</Link></li>
                    <li><Link to={`/categories/${encodeURIComponent('Festivals')}`} onClick={() => handleCategoryClick('Festivals')}>Festivals</Link></li>
                    <li><Link to={`/categories/${encodeURIComponent('Local Markets')}`} onClick={() => handleCategoryClick('Local Markets')}>Local Markets</Link></li>
                    <li><Link to={`/categories/${encodeURIComponent('Unique Experiences')}`} onClick={() => handleCategoryClick('Unique Experiences')}>Unique Experiences</Link></li>
                    </ul>
        </section>

)

}

export default Categories;

