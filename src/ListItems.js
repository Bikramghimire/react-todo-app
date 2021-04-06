import React from "react";
import "./list.css";

const ListItems = (props) => {
  const items = props.items;
  const listitems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            value={item.text}
            id={item.key}
            onChange={(e) => {
              props.setupdateprops(e.target.value, item.key);
            }}
          />
          <span onClick={() => props.delteitemprops(item.key)}>
            <i className="fas fa-trash"></i>
          </span>
        </p>
      </div>
    );
  });
  return <div>{listitems}</div>;
};
export default ListItems;
