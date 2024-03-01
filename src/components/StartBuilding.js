import React from 'react';

const SavedActivities = ({ activities }) => {
    return (
        <main className="">
            <div className="itinerary-container">
                <section className="my-itinerary">
                    <h1>My Itinerary</h1>
                    <div className="button1-container">
                        <button type="button"><a href="itinerary-form.html">Build Itinerary</a></button>
                    </div>
                </section>

                <section className="sample-saved-activities">
                    <h1>Saved Activities</h1>
                    <div className="test-container">
                        <div className="row">
                        {/* add the dynamic cards */}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default SavedActivities;