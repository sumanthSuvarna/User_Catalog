import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as productsActions from '../../../actions/similarProductsAction';
import { bindActionCreators } from 'redux';
import DetailHeader from './detailHeader'
import SimilarProductsTab from './similarProducts'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ProductInfo from './productInfo'
import Image from 'react-bootstrap/Image'

class Details extends Component {
    constructor(props){
        super(props);
        this.state={
            elements :[],
            similarProductsEle : this.getSimilarProducts(),
            similarEle : []
        }
        
    }

    componentWillReceiveProps(nextProps) {

        this.setState({similarEle: this.buildSimilarProducts(nextProps.similarProducts)});
      }
    
    getSimilarProducts = () => {
        this.props.actions.loadProducts(this.props.location.state.product.id);

    }

    buildSimilarProducts = (data) => {
        const ele = []
        data.map((product) => 
                ele.push(<SimilarProductsTab product={product.attributes} key={product.id} id={product.id}/>)
            
        )
        return ele;
    }

    render(){
        const id = this.props.location.state.product.id;
      
      const styles = {
          container : {
              marginLeft:"5%",
              marginRight:"5%",
              backgroundColor:"white",
              marginTop:"90px"
          },
          imageCard :{
            height : "27rem"
          },
          descTitle : {
            fontFamily: "Open Sans",
            fontSize : "16px",
            color : "#E01A1A"
          },
          divDesc :{
            fontFamily: "Open Sans",
            fontSize : "12px",
            color : "#333333"
          } 
        }



        const product = this.props.location.state.product

        let desc = product.attributes.description;

    
        return(
            <div style={styles.container}>
              <Container fluid={true}>
                <Row noGutters={true}>
                  <Col sm={12} >
                  <DetailHeader title={product.attributes.title}/>
                  
                  </Col>
                </Row>
                <Row noGutters={true}>
                  <Col sm={12} md={6}>
                  
                  </Col>
                </Row>
                  <Row noGutters={true}>                  
                  <Col lg={7} sm={12} >
                    <Card sm={12}>
                    <Image style={styles.imageCard} 
                        src={require("../../../../public/images/"+id+".png")} 
                        alt="thumbnail" 
                        className="img-thumbnail" />
                    </Card>
                  </Col>
 
                    <ProductInfo product={product}/>

                  <Col lg={7} sm={12} >
                    <Card>
                    <Card.Body>
                        <Card.Title style= {styles.descTitle}>Description</Card.Title>                        
                            {desc.split("\\n").map((i,key) => {
                                return <div style= {styles.divDesc} key={key}>{i}</div>;
                            })}
                    </Card.Body>
                    </Card>
                    </Col>
                  </Row>
                    <Row >                    
                        {this.state.similarEle}                            
                    </Row>
              </Container>

            </div>
        )
    }
}

Details.prototypes = {
    actions : PropTypes.object.isRequired,
    similarProducts : PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        similarProducts: state.similarProducts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //createCourse : (course) => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(productsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
