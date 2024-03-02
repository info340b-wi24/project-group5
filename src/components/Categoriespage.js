// Categories page 

import React, {useState} from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import Categories from './Categories';
import '../index.css';
import CategoryFiltering from './CategoryFiltering';
import Catbox from './Catbox';


export default function Categoriespage({tags, activities}) {
    return (
        <div>
        <Navbar />
        <Categories />
        <section className="categories-container">
            <div className="category-section">
               <h2 id="outdoor-cat">Categories</h2>
               <CategoryFiltering tags={tags} />
            </div>
            <div className="outdoors-section">
                <div className="container">
                    <div className="row">
                        <h2 id="outdoor-act">All Outdoors Activities</h2>
                        <Catbox activities={activities} />
                        
                        
                    </div>
                </div>
            </div>

      
       </section>
       <Footer />  
   </div>
    );
}