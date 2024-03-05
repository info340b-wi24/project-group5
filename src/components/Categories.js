import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Categories = ({ activities, setFilteredActivities }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);

        // Filter activities based on the selected category
        const filteredActivities = activities.filter(activity => {
            console.log("Activity Category:", activity.category);
            return activity.category === category;
        });

        console.log("Filtered Activities:", filteredActivities);

        setFilteredActivities(filteredActivities);
    };


    return (
        <section className="categories">
                    <ul className="categories_top">
                         <li>Style</li>
                         <li>
                             <Link to="#" onClick={() => handleCategoryClick('Outdoor Activities')}>Outdoor Activities</Link>
                         </li>
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

    )
}

// const Categories = () => {
//     return (
//         <section className="categories">
//             <ul className="categories_top">
//                 <li>Style</li>
//                 <li>
//                     <Link to="/outdoorActivities">Outdoor Activities</Link>
//                 </li>
//                 <li>Indoor Escapes</li>
//                 <li>Foodie Delights</li>
//                 <li>Best Scenic Spots</li>
//                 <li>Entertainment</li>
//             </ul>

//             <ul className="categories_bottom">
//                 <li>Family-Friendly Activities</li>
//                 <li>Historic/Cultural</li>
//                 <li>Festivals</li>
//                 <li>Local Markets</li>
//                 <li>Unique Experiences</li>
//             </ul>
//         </section>
//     );
// };

export default Categories;