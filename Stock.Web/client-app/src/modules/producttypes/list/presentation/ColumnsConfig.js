import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";

const renderToolbar = ({ value }) => {
  let viewButton = (
    <Link className="producttype-list__button" to={`/producttype/view/${value}`}>
      <FaSearch className="producttype-list__button-icon" />
    </Link>
  );

  let editButton = (
    <Link className="producttype-list__button" to={`/producttype/update/${value}`}>
      <FaEdit className="producttype-list__button-icon" />
    </Link>
  );

  let removeButton = (
    <Link className="producttype-list__button" to={`/producttype/remove/${value}`}>
      <FaTrash className="producttype-list__button-icon" />
    </Link>
  );

  return (
    <span>
      {viewButton} {editButton} {removeButton}
    </span>
  );
};

const HeaderComponent = props => {
  return (
    <div
      style={{
        textAlign: "left",
        fontWeight: "bold"
      }}
    >
      {props.title}
    </div>
  );
};

HeaderComponent.displayName = "HeaderComponent";

const columns = [
  {
    Header: <HeaderComponent title="Descripcion" />,
    accessor: "Description",
    Cell: props => props.value
  },
  {
    Header: <HeaderComponent title="Iniciales" />,
    accessor: "Initials",
    Cell: props => props.value
  },
  
];

renderToolbar.propTypes = {
  value: PropTypes.string.isRequired
};

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired
};

export default columns;
