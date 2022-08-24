import React from "react";
import PropTypes from "prop-types";

export default class ShopItemClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.item;
  }

  render() {
    return (
      <div class="main-content">
        <h2>{this.state.brand}</h2>
        <h1>{this.state.title}</h1>
        <h3>{this.state.description}</h3>
        <div class="description">{this.state.descriptionFull}</div>
        <div class="highlight-window mobile">
          <div class="highlight-overlay"></div>
        </div>
        <div class="divider"></div>
        <div class="purchase-info">
          <div class="price">
            {this.state.currency}
            {this.state.price}
          </div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

ShopItemClass.propTypes = {
  item: PropTypes.object.isRequired,
};
