import ActivityFilter from './ActivityFilter';
import React from 'react';
import BoxList from './BoxList';



const ItineraryFormPage2 = (props) => {
    return (
        <main className="form-body">
            <div className="form-container">
                <form action="action_page.php">
                    <section className="add-place-label">
                        <label htmlFor="add-place">Where Are You Going?</label>
                    </section>
                    <section className="bar-container">
                        <ActivityFilter />
                    </section>
                </form>

                                </div>
                                </main>
    )
}
export default ItineraryFormPage2