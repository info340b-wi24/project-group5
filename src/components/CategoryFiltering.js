import React from 'react';

const CategoryFilterbox = (props) => {
    return (
        
            <form>
                {/* <div className="cat-container"> */}
                <p>
                    <input type="checkbox" id={props.data.id} name="visits"/>
                    <label htmlFor={props.data.id} className = 'checkboxLabel'> {props.data.tag} </label>
                </p>
                {/* </div> */}
            </form>
    
    );
}


export default function CategoryFiltering({ tags }) {
    return (
      <div className="cat-container">
        {tags.map((tag) => (
          <CategoryFilterbox key={tag.id} data={tag} />
        ))}
      </div>
    );
  }


