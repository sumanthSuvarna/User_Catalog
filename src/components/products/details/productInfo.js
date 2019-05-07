import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { MdFavoriteBorder, MdShare } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const ProductInfo = ({product,style}) => {
    return (
        <Col lg={5} sm={12} >
        <Card style={styles.productInfoCard}>
            <Card.Body>


                <div style={{height: 25}}>
                    <div style={styles.leftColumn}>    
                        <MdFavoriteBorder />                                
                        <span style={styles.iconsText}>Wishlist</span>
                    </div>
                    <div style={styles.rightColumn}>  
                        <MdShare  />                                  
                        <span style={styles.iconsText}>Share</span>
                    </div>
                </div>

                <div style={{height: 24}}>
                    <div style={styles.leftColumn}>                                    
                        <span style={styles.header}>Prize</span>
                    </div>

                </div>
                <div style={{height: 30}}>
                    <div style={styles.leftColumn}>                                    
                    <div style={styles.price}>{product.attributes.price}</div>
                    </div>
                </div>    

                <div style={{height: 24}}>
                    <div style={styles.leftColumn}>                                    
                        <span style={styles.header}>Item Condition</span>
                    </div>

                </div>
                <div style={{height: 30}}>
                    <div style={styles.leftColumn}>                                    
                    <div style={styles.headerValue}>{product.attributes.condition}</div>
                    </div>
                </div> 

                <div style={{height: 24}}>
                    <div style={styles.leftColumn}>                                    
                        <span style={styles.header}>Item Location</span>
                    </div>

                </div>
                <div style={{height: 30}}>
                    <div style={styles.leftColumn}>                                    
                    <div style={styles.headerValue}>{product.attributes.location}</div>
                    </div>
                </div>  
                <div style={{height: 24}}>
                    <div style={styles.leftColumn}>                                    
                        <span style={styles.header}>Seller Info</span>
                    </div>

                </div>
                <div style={{height: 50}}>

                <div style={styles.leftColumn}> 
                    <FaUserAlt></FaUserAlt>
                </div>
                
                <div style={styles.leftColumn}>                                                                 
                    <div style={styles.headerValueSeller}>{product.attributes.seller_name}</div>
                    <div style={styles.headerSeller}>{product.attributes.seller_type}</div>
                    </div>
                </div>     
                <div style={{height: 25}}>
                    <div style={styles.leftColumn}>                                    
                        <div style={styles.header}>Interested with the ad contact the seller</div>
                    </div>

                </div>      
                <div>
                    <div className="alert"  style={styles.alert} role="alert"> +60126362400</div>
                    <div className="alert"  style={styles.alert} role="alert"> +60126362400</div>
                    <div className="alert"  style={styles.alert} role="alert"> +60126362400</div>
                </div>                                                

            </Card.Body>
            </Card>
        </Col>


    );
};

const styles = {
    container : {
        marginLeft:"5%",
        marginRight:"5%",
        backgroundColor:"white",
        marginTop:"10px"
    },
    card :{
      height : "24rem"
    },
    iconsText : {
        paddingLeft : "10px",
        fontFamily :"Open Sans",
        fontSize : "14px",
        color : "#707070"
    },
    icons : {
        width: "18px",
        height : "20px",
        paddingRight:"6rem"
    },
    productInfoCard: {
      width: '100%',
      overflow: 'auto'
    },
    leftColumn: {
      float: 'left'
    },
    rightColumn: {
      position: 'absolute',
      left: '55%'
    },
    header: {
      fontSize :"12px",
      fontFamily:"Open Sans",
      color:"#707070"
    },
    headerValue:{
        fontFamily : "Open Sans, Regular",
        fontSize :"14px",
        color :"#333333"
    },
    headerValueSeller:{
        paddingLeft:"10px",
        fontFamily : "Open Sans, Regular",
        fontSize :"14px",
        color :"#333333"
    },
    headerSeller: {
        fontSize :"12px",
        paddingLeft:"10px",
        fontFamily:"Open Sans",
        color:"#707070"
      },
    price:{
        fontWeight : "bold",
        color: "#E01A1A",
        fontFamily : "Open Sans, Semibold"
    },
    alert: {
      width : "100%",
      height :"30px",
      fontSize : "12px",
      color:"red",
      fontFamily:"Open Sans",
      float:"left",
      position: "relative",
      padding: ".25rem 1rem",
      marginBottom: "5px",
      border: "2px solid transparent",
      borderRadius: ".5rem",
      borderColor: "#E01A1A"
    }
}

ProductInfo.propTypes = {
    product: PropTypes.object,
    style: PropTypes.object
  };

  export default ProductInfo;