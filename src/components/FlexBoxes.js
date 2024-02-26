import React from 'react';

const Flexboxes = (data) => {
    const {activity_name, description} = data;

    
    return (
        <div>
            {/* Trending Spots Section */}
            <section className="trending-spots">
                <h2>Trending Spots in Seattle</h2>
            </section>

    <section class="trend-container">
        <div class="card-container">
            <div class="container">
                <div class="row">

                    <div class="col-md-6 col-xl-3 d-flex"> 
                        <div class="card mb-8">
                            <div class="card">
                                <div class="row"> 
                                    <div class="col-sm-auto col-xl-12"> 
                                        <div class="icon-container"> 
                                            <ion-icon name="bookmark-outline"></ion-icon>
                                        </div>
                                        <img src="img/elm.jpg" class="img-fluid" alt="picture of the cafe inside">
                                    </div>
                                    <div class="col-sm"> 
                                        <div class="card-content">
                                            <h2>Elm Coffee Roasters</h2>
                                            <p>House-roasted, single-origin brews are the specialty at this casual coffeehouse in a calm palette.</p>
                                            <a href="#" class="card-button">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>



                </div> 
            </div>
        </div>
    </section>
    
        </div>
    );
};

export default Flexboxes;
