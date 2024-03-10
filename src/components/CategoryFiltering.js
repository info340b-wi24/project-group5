import { filter } from 'lodash';
import React, {useState} from 'react';

const CategoryFilterbox = ({ data, onChange, isChecked }) => {
  return (
      <form>
          <p>
              <input 
                  type="checkbox" 
                  id={data.id} 
                  name="visits" 
                  onChange={() => onChange(data.tag)} 
                  checked={isChecked}
              />
              <label htmlFor={data.id} className='checkboxLabel'> {data.tag} </label>
          </p>
      </form>
  );
};


export default function CategoryFiltering({ selectedCategory, tags, onSelectedTagsChange }) {
  const filteredTags = tags.filter(tag => tag['cat-id'] === selectedCategory);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagChange = (tag) => {
      const newSelectedTags = selectedTags.includes(tag)
          ? selectedTags.filter(t => t !== tag)
          : [...selectedTags, tag];
      setSelectedTags(newSelectedTags);
      onSelectedTagsChange(newSelectedTags);
  };

  return (
      <div className="cat-container">
          {filteredTags.map((tag) => (
              <CategoryFilterbox 
                  key={tag.id} 
                  data={tag} 
                  onChange={handleTagChange} 
                  isChecked={selectedTags.includes(tag.tag)} 
              />
          ))}
      </div>
  );
}

  
