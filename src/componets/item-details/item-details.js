import React, { Component } from 'react';

import './item-details.css';
import Spinner from "../spinner";
import ErrorButton from "../error-button";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export {
  Record
};

export default class ItemDetails extends Component {

  state = {
    item: null,
    loading: true,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }
    this.setState({
      loading: true
    });

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item),
          loading: false
        });
      });
  }

  render() {

    /*if (!this.state.item) {
      return <span>Select a item from a list</span>;
    }*/

    const { loading, item, image } = this.state;

    const spinner = loading ? <Spinner/> : null;
    const content = !loading ? <ItemView
                                  item={item}
                                  image={image}
                                  properties={
                                    React.Children.map(this.props.children, (child) => {
                                      return React.cloneElement(child, { item });
                                    })
                                  } /> : null;

    return (
      <div className="item-details card">
        {spinner}
        {content}
      </div>
    )
  }
}

const ItemView = ({ item, image, properties }) => {
  const { name } = item;

  return (
    <React.Fragment>
      <img className="item-image"
           src={image}
           alt={name} />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          { properties }
        </ul>
        <div className="button-row">
          <ErrorButton />
        </div>
      </div>
    </React.Fragment>
  )
};
