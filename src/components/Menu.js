import React from "react";
import theme from "../styles/Theme";

class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state={
    open: this.props.open? this.props.open:false,
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }

  render(){
    const styles={
      container: {
        position: 'absolute',
        top: '-40%',
        right: '-47px',
        height: this.state.open? '100vh': 0,
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        background: `${theme.colorDark}`,
        color: '#fafafa',
        transition: 'height 0.3s ease',
        zIndex: 2,
      },
        menuList: {
        paddingTop: '3rem',
        display: 'flex',
        flexDirection: 'column'
      }
    }
  return(
    <div style={styles.container}>
      {
      this.state.open?
        <div style={styles.menuList}>
          {this.props.children}
        </div>:null
      }
    </div>
  )
  }
}
export default Menu;
