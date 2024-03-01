import { useState } from 'react';
import NavBar from './NavBar'

function CreateForm() {
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
  <div>
  <NavBar />
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
      <button type="button" name="submit" value="submit"><a href="itenerary-form-2nd-page.html">Start building</a></button> 
    </form>
  </div>
</main>
</div>
  )
}

export default CreateForm;