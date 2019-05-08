
import React,{Component} from 'react';
import PropTypes from 'prop-types';

import GridList from '../common/GridList'
import GridTile from '../common/GridTile'


class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elements: this.buildProducts(props.products),
    }
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.products.length !== nextProps.products.length) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({elements: this.buildProducts(nextProps.products)});
    }
  }

  buildProducts(products) {
    const elements = []
    {products.map(              //eslint-disable-line import/no-lone-blocks      
      (product) => elements.push(
        <GridTile key={product.id} id={product.id} product={product} />
      )
    )}
    return elements
  }

  render(){
    return (

      <GridList name="Listing">
        {this.state.elements}
      </GridList>

    );
  }
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired
};

export default ProductList;
