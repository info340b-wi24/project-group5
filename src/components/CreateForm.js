import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
 
  }

  return (
<main class="form-body">
  <div class="form-container">
    <form onSubmit={handleSubmit}>
      <label className="itinerary-title">Itinerary Title:</label>
      <input 
        type="text" 
        id="itinerary-title" 
        name="itineraryTitle" 
        value={formData.itineraryTitle || ""} 
        onChange={handleChange}
      />
      
      <label className="dates">Dates:</label>
      <input 
        type="text" 
        id="dates" 
        name="dates" 
        value={formData.dates || ""} 
        onChange={handleChange}
    />

      <label className="description">Description:</label>
      <textarea 
        id="description" 
        name="description" 
        value={formData.description || ""} 
        onChange={handleChange}
      ></textarea>

      <input type="submit" value="Start building" />
    </form>
  </div>
</main>
  )
}

export default Form;