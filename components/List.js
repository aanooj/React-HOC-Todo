import React from "react";
import Checkbox from "../components/Checkbox";

class List extends React.Component {
  constructor(props) {
    super(props);
    return this;
  }

  listItems(items) {
    return (
      items &&
      // map iterates through item and return new array;
      items.map((item, index) => {
        const isChecked = item.completed;
        const className = isChecked
          ? "todo-list-item checked"
          : "todo-list-item";
        return (
          <li key={index} className={className}>
            <label>
              <Checkbox
                onClick={this.props.onClick}
                name={item.name}
                isChecked={isChecked}
              />
              {item.name}({item.qty})
            </label>
          </li>
        );
      })
    );
  }

  render() {
    const { items } = this.props;
    return <ul className="todo-list">{this.listItems(items)}</ul>;
  }
}

export default List;
