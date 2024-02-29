// Categories page 

import React, {useState} from 'react';
import Navbar from './NavBar';
import Categories from './Categories';
import '../index.css';
import CategoryFiltering from './CategoryFiltering';

export default function Categoriespage({tags}) {
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
                       <h2 id="outdoor-act">All Outdoor Activities</h2>
                   </div>
               </div>
           </div>
       </section>
   </div>
    );
}