import React from 'react';

const Flexboxes = (data) => {
    const {activity_name, description, img} = data;

    return (
        <div className="col-md-6 col-xl-3 d-flex"> 
                        <div className="card mb-8">
                            <div className="card">
                                <div className="row"> 
                                    <div className="col-sm-auto col-xl-12"> 
                                        <div className="icon-container"> 
                                            <ion-icon name="bookmark-outline"></ion-icon>
                                        </div>
                                        <img src={img} className="img-fluid" alt={activity_name} />
                                    </div>
                                    <div className="col-sm"> 
                                        <div className="card-content">
                                            <h2>{activity_name}</h2>
                                            <p>{description}</p>
                                            <a href="#" class="card-button">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
    );
};

export default function boxList({activities}) {
    return (
       <div className= 'row'> 
            {activities.map(activity => 
                <Flexboxes key={activity.activity_name} data={activity} />)}
       </div>
    );
    }



