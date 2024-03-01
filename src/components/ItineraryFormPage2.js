import React from 'react';

const SavedActivities = () => {

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
                                    
                                    <p>{}</p>
                                    <p>{}</p>
                                </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default SavedActivities;