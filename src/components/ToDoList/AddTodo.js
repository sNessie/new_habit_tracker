import React, { useState } from "react";
import { connect } from "react-redux";
import { startAddTodo } from "../../reducers/todosReducers";
import { setCategories } from "../../reducers/rootReducers";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const AddTodo = ({ categories, actions }) => {
  const [todo, setTodo] = useState({
    name: "",
    date: new Date().toISOString().substring(0, 10),
    category: "",
    priority: "low",
    ready: false
  });

  const [category, setCategory] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setTodo(prevTodo => ({
      ...prevTodo,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formIsValid()) return;
    actions.startAddTodo(todo);
    toast.success("Todo saved.");
  }

  function handleChangeCategory(e) {
    const { name, value } = e.target;
    if (value === "add") {
      setTodo(prevTodo => ({
        ...prevTodo,
        [name]: ""
      }));
      setCategory(true);
    } else {
      setCategory(false);
      setTodo(prevTodo => ({
        ...prevTodo,
        [name]: value
      }));
    }
  }

  function formIsValid() {
    const { name, category, priority } = todo;
    const errors = {};
    if (!name) errors.name = toast.error("Name is required");
    if (!category) errors.date = toast.error("Category is required");
    if (!priority) errors.times = toast.error("Priority is required");
    return Object.keys(errors).length === 0;
  }

  const categoriesList = categories.map((cat, i) => {
    return (
      <option key={i} value={cat}>
        {cat}
      </option>
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={todo.name}
        onChange={handleChange}
      />
      <label>
        Category
        <select name="category" onChange={handleChangeCategory}>
          {categoriesList}
          <option value="add">add</option>
        </select>
        {category ? (
          <input
            type="text"
            name="category"
            value={todo.category}
            onChange={handleChange}
          />
        ) : null}
      </label>
      <label>
        Pick priority:
        <select name="priority" onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

AddTodo.propTypes = {
  actions: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    categories: setCategories(state.todos, state.categories)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: {
      startAddTodo: bindActionCreators(startAddTodo, dispatch)
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
