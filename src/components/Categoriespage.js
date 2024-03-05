
// Categories page 

import React, {useState} from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import Categories from './Categories';
import '../index.css';
import CategoryFiltering from './CategoryFiltering';
import Catbox from './Catbox';
import { useParams } from 'react-router-dom';
import BoxList from './BoxList';


const ActivityFlexbox = ({ activity }) => {
    return (
        <div className="col-md-6 col-lg-4 mb-4"> 
            <div className="card mb-8">
                <div className="card">
                    <div className="row"> 
                        <div className="col-sm-auto col-xl-12">
                        <img src={`${process.env.PUBLIC_URL}/${activity.img}`} className="img-fluid" alt={activity.activity_name} />
                        </div>
                        <div className="col-sm"> 
                            <div className="card-content">
                                <h2>{activity.activity_name}</h2>
                                <p>{activity.description}</p>
                                <a href="#" className="card-button">Read More</a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
};


export default function Categoriespage({tags, activities}) {

    const { categoryName } = useParams();
    const decodedCategoryName = decodeURIComponent(categoryName);

    const filteredActivities = activities.filter(activity => 
        activity.activity_type && activity.activity_type.includes(decodedCategoryName)
    );
    
    console.log('Filtered Activities:', filteredActivities);


    return (
        <div>
        <Navbar />
        <Categories />
        <section className="categories-container">
            <div className="category-section">
               <h2 id="outdoor-cat">Categories</h2>
               <CategoryFiltering tags={tags}/>
            </div>
            <div className="outdoors-section">
                <div className="container">
                    <div className="row">
                    <h2 id="outdoor-act">{decodedCategoryName}</h2>
                    {filteredActivities.map(activity => (
                                <ActivityFlexbox key={activity.activity_name} activity={activity} />
                            ))}
                        
                    </div>
                </div>
            </div>

      
       </section>
       <Footer />  
   </div>
    );
}





