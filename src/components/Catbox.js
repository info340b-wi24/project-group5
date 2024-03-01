import React from 'react';

const Catflexboxes = (props) => {
    return (

        <div className="test-container">
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
            
    //     <div className="col-md-6 col-xl-3"> 
    //     <div className="card mb-8">
    //         <div className="oa-card">
    //             <div className="row"> 
    //                 <div className="col-sm-auto col-xl-12"> 
    //                     {/* <div className="icon-container"> 
    //                         <ion-icon name="bookmark-outline"></ion-icon>
    //                     </div> */}
    //                     <img src={props.data.img} className="img-fluid" alt={props.data.activity_name} />
    //                 </div>
    //                 <div className="col-sm"> 
    //                     <div className="oa-card-content">
    //                         <h2>{props.data.activity_name}</h2>
    //                         <p>{props.data.description}</p>
    //                         <a href="#" className="card-button">Read More</a>
    //                     </div>
    //                 </div>
    //             </div> 
    //         </div> 
    //     </div>
    // </div>
            
                     
    );
}

export default function Catbox ({ activities }) {
    return (
      <div className="catbox-container">
        {activities.map((activity) => (
          <Catflexboxes key={activity.activity_name} data={activity} />
        ))}
      </div>
    );
  }
