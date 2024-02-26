import React from 'react';

const Flexboxes = (data) => {
    const {activity_name, description, img} = data;

    return (
        <div className="col-md-6 col-xl-3 d-flex"> 
                        <div className="card mb-8">
                            <div className="card">
                                <div className="row"> 
                                    <div className="col-sm-auto col-xl-12">
                                        <img src={img} className="img-fluid" alt={activity_name} />
                                    </div>
                                    <div className="col-sm"> 
                                        <div className="card-content">
                                            <h2>{activity_name}</h2>
                                            <p>{description}</p>
                                            <a href="#" className="card-button">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
    );
};

export default function BoxList({activities}) {
    return (
       <div className= 'row'> 
            {activities.map(activity => 
                <Flexboxes key={activity.activity_name} data={activity} />)}
       </div>
    );
    }



