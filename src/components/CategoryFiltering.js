import React from 'react';

const CategoryFilterbox = (props) => {
    return (
        <div>
            <form>
                <div className="cat-container"></div>
                <p>
                    <input type="checkbox" id={props.data.id} name="visits"/>
                    <label htmlFor={props.data.id}> {props.data.tag} </label>
                </p>
            </form>
        </div>
    );
}


export default function CategoryFiltering({ tags }) {
    return (
      <div className="test-container">
        {tags.map((tag) => (
          <CategoryFilterbox key={tag.id} data={tag} />
        ))}
      </div>
    );
  }


