import React, {Component} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render(){
        const styles = {
            brand : {
                color : "#D90E0E",
                fontWeight:"400",
                fontSize: "28px",
                paddingBottom : "15px"
            },
            nav : {
              paddingLeft : "84.28px",
              boxShadow : "0px 3px 6px 1px #B9B9B9",
              opacity: 100,
              backgroundColor : "#FFFFFF"
            }
        }

        return(
            <div>
            <Navbar fixed="top"   style={styles.nav}  light expand="lg">
              <NavbarBrand style={styles.brand} href="/"><b>easy.<small>my</small></b></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} id="responsive-navbar-nav" navbar>
                <Nav  className="mb-auto" navbar>
                  <NavItem style={{marginLeft:"72px"}}>
                    <NavLink href="/Course">Categories</NavLink>
                  </NavItem>
                  <NavItem style={{marginLeft:"72px"}}>
                    <NavLink href="/notification/">Notification</NavLink>
                  </NavItem>
                  <NavItem style={{marginLeft:"72px"}}>
                    <NavLink href="/login/">Login/Sign Up</NavLink>
                  </NavItem>
                  <NavItem style={{marginLeft:"72px"}}>
                    <NavLink href="/help/">Help</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
    }
}

export default Header;
