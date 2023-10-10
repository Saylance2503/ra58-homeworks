import React, { Component } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: 'view_list',
    };
  }

  handleSwitchLayout = () => {
    this.setState((prevState) => ({
      layout: prevState.layout === 'view_list' ? 'view_module' : 'view_list',
    }));
  };

  render() {
    const { layout } = this.state;
    const { products } = this.props;

    return (
      <div className="store">
        <IconSwitch icon={layout} onSwitch={this.handleSwitchLayout} />
        {layout === 'view_list' ? (
          <ListView items={products} />
        ) : (
          <CardsView cards={products} />
        )}
      </div>
    );
  }
}

export default Store;
