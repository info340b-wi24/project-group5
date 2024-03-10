import React from 'react';
import Footer from './Footer'; 

const SavedActivities = (props) => {
    return (
        <main className="form-body">
            <div className="form-container">
                <form action="action_page.php">
                    <section className="add-place-label">
                        <label htmlFor="add-place">Where Are You Going?</label>
                    </section>
                    <section className="bar-container">
                        <input type="text" id="add-place" name="add-place" placeholder="Search by name..." />
                    </section>
                </form>
                <div className="itinerary-container">
                    <div className="trending-spots-form">
                        <h1>Saved Activities</h1>
                    </div>
                    <section className="sample-saved-activities">
                        <div>
                                <div className="card">
                                    <img src={props.data.img} className="img-fluid" alt={props.data.activity_name} />
                                    <p>{props.activity_name}</p>
                                    <p>{props.activity}</p>
                                </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default SavedActivities;