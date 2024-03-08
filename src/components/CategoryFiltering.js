import { filter } from 'lodash';
import React, {useState} from 'react';

const CategoryFilterbox = (props) => {
    return (
        
            <form>
             
                <p>
                    <input type="checkbox" id={props.data.id} name="visits"/>
                    <label htmlFor={props.data.id} className = 'checkboxLabel'> {props.data.tag} </label>
                </p>
              
            </form>
    
    );
}


export default function CategoryFiltering({ selectedCategory, tags }) {
  const filteredtags = tags.filter(tag => tag['cat-id'] === selectedCategory);
    return (
      <div className="cat-container">
        {filteredtags.map((tag) => (
          <CategoryFilterbox key={tag.id} data={tag} />
        ))}
      </div>
    );
    
  }

  
