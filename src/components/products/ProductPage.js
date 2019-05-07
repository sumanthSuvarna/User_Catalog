import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as productsActions from '../../actions/productsActions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ProductList from './productList'

class ProductsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products : []
        };
    }

    render(){
        const styles = {
            container : {
                marginLeft:"5%",
                marginRight:"5%",
                backgroundColor:"white",
                marginTop:"89px"
            }
        }


        const {products} = this.props;
        return(
            <div style={styles.container}>
                <ProductList products={products}/>
            </div>
        );
    }
}

ProductsPage.propTypes = {
    actions: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //createCourse : (course) => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(productsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
