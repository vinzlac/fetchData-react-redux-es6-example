import React from "react";
import { connect } from "react-redux";
import { fetchItems } from "../actions/itemActions";
import "./ItemList.css";
class ItemList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchItems());
  }

  render() {
    const { error, loading, items } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="item">
        <h2>Item List</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.item.items,
  loading: state.item.loading,
  error: state.item.error
});

export default connect(mapStateToProps)(ItemList);
