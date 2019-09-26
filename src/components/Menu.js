import React from "react";
import styled from "styled-components";

const body = document.getElementById("root");

const Container = styled.div`
  position: absolute;
  top: -41%;
  right: -47px;
  height: ${props => (props.isOpen ? "101vh" : "0")};
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding-top: 13%;
  background: ${({ theme }) => theme.colorDark};
  transition: height 0.3s ease;
  z-index: 101;
  overflow: hidden;
`;
const MenuList = styled.div`
  padding-top: 30%;
  display: flex;
  flex-direction: column;
`;

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }
  render() {
    if (this.props.open) body.classList.add("hidden");
    if (!this.props.open) body.classList.remove("hidden");

    return (
      <Container isOpen={this.props.open}>
        {this.state.open ? (
          <MenuList>{this.props.children}</MenuList>
        ) : null}
      </Container>
    );
  }
}
export default Menu;
