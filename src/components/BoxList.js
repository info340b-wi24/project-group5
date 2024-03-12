import React from 'react';
import { Link } from 'react-router-dom';

const Flexboxes = ({ data, setSelectedActivity }) => {
    const handleActivityClick = () => {
        setSelectedActivity(data);
    };

    return (
        <div className="col-md-6 col-xl-3 mb-4">
            <div className="card mb-8">
                <div className="card">
                    <div className="row">
                        <div className="col-sm-auto col-xl-12">
                            <img src={data.img} className="img-fluid" alt={data.activity_name} />
                        </div>
                        <div className="col-sm ">
                            <div className="card-content">
                                <h2>{data.activity_name}</h2>
                                <p>{data.description}</p>
                                <Link to={`/activities/${data.activity_name}`} onClick={handleActivityClick}>
                                    <button className="card-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function BoxList({ activities, searchQuery, setSelectedActivity }) {
     // Filter activities based on the search query
     const filteredActivities = activities.filter((activity) =>
     activity.activity_name.toLowerCase().includes(searchQuery.toLowerCase())
 );

 return (
     <div className="row">
         {filteredActivities.map((activity) => (
             <Flexboxes key={activity.activity_name} data={activity} setSelectedActivity={setSelectedActivity} />
         ))}
     </div>
 );
};