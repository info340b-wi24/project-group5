import React from 'react';

const Flexboxes = (props) => {
    return (


       <div className="card-container">
                <div className="row">
                    <div className="col-md-6 col-xl-3 d-flex"> 
                        <div className="card mb-8">
                            <div className="card">
                                <div className="row"> 
                                    <div className="col-sm-auto col-xl-12">
                                        <img src={props.data.img} className="img-fluid" alt={props.data.activity_name} />
                                    </div>
                                    <div className="col-sm"> 
                                        <div className="card-content">
                                            <h2>{props.data.activity_name}</h2>
                                            <p>{props.data.description}</p>
                                            <a href="#" className="card-button">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
    );
};


export default function BoxList({ activities, searchQuery }) {
    // Filter activities based on the search query
    const filteredActivities = activities.filter((activity) =>
      activity.activity_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="card-container">
        {filteredActivities.map((activity) => (
          <Flexboxes key={activity.activity_name} data={activity} />
        ))}
      </div>
    );
  }



