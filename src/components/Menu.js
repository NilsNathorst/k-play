import React from "react";
import theme from "../styles/Theme";
import styled from "styled-components";
const body = document.getElementById("root");
const Container = styled.div`
  position: absolute;
  top: -41%;
  right: -47px;
  height: ${props => (props.isOpen ? "100vh" : "0")};
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colorDark};
  transition: height 0.3s ease;
  z-index: 101;
  overflow: hidden;
`;
const MenuList = styled.div``;
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
    const styles = {
      container: {},
      menuList: {
        paddingTop: "25%",
        display: "flex",
        flexDirection: "column"
      }
    };

    return (
      <Container isOpen={this.props.open} style={styles.container}>
        {this.state.open ? (
          <div style={styles.menuList}>{this.props.children}</div>
        ) : null}
      </Container>
    );
  }
}
export default Menu;
