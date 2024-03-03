
// Categories page 

import React, {useState} from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import Categories from './Categories';
import '../index.css';
import CategoryFiltering from './CategoryFiltering';
import Catbox from './Catbox';


export default function Categoriespage({tags, activities}) {

    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryChange = (categoryId, checked) => {
        setSelectedCategories(prevCategories => {
            if (checked) {
                return [...prevCategories, categoryId];
            } else {
                return prevCategories.filter(id => id !== categoryId);
            }
        });
    };

    const filteredActivities = selectedCategories.length > 0 ?
        activities.filter(activity => selectedCategories.includes(activity.categoryId)) :
        activities;


    return (
        <div>
        <Navbar />
        <Categories />
        <section className="categories-container">
            <div className="category-section">
               <h2 id="outdoor-cat">Categories</h2>
               <CategoryFiltering tags={tags} onChange = {handleCategoryChange} />
            </div>
            <div className="outdoors-section">
                <div className="container">
                    <div className="row">
                        <h2 id="outdoor-act">All Outdoor Activities</h2>
                        <Catbox activities={filteredActivities} />
                        
                        
                    </div>
                </div>
            </div>

      
       </section>
       <Footer />  
   </div>
    );
}





