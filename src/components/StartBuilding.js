import React from 'react';

function StartBuilding(){
    return(
        <main className="">
        <div className="itinerary-container">
            <section clasName="my-itinerary">
                <h1>My Itinerary</h1>
                <div className="button1-container">
                    <button type="button"><a href="itinerary-form.html">Build Itinerary</a></button>
                </div>
            </section>

            <section class="sample-saved-activities">
                <h1>Saved Activities</h1>
            </section>
        </div>
    </main>
    );
}
export default StartBuilding;