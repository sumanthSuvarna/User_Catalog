import React from 'react';


const DetailHeader = ({title,style}) => {

  return(
    <div style={styles.breadStyle}>
      <ol style={{backgroundColor:"#FFFFFF"}} className="breadcrumb breadcrumb-right-arrow">
        <li className="breadcrumb-item">Home</li>
        <li className="breadcrumb-item">Electronics</li>
        <li className="breadcrumb-item "> Game & Console</li>
        <li className="breadcrumb-item active">{title}</li>
    </ol>
    <h5>{title}</h5>
    </div>
  )

}

const styles = {
  breadStyle :{
    fontFamily : "Open Sans",
    fontSize : "11px",
    color : "#333333"
  }
}

export default DetailHeader;
