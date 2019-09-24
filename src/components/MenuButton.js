import React from "react";

class MenuButton extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
      color: this.props.color? this.props.color:'black',
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
    this.setState({open:nextProps.open});
    }
  }

  handleClick(){
    this.setState({open:!this.state.open});
  }

  render(){
  const styles = {
    container: {
      height: '38px',
      width: '38px',
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '4px',
    },
    line: {
      height: '2px',
      width: '28px',
      background: this.state.color,
      transition: 'all 0.2s ease',
    },
    lineTop: {
      transform: this.state.open ? 'rotate(-45deg)':'none',
      transformOrigin: 'top right',
      marginBottom: '8px',
    },
    lineMiddle: {
      opacity: this.state.open ? 0: 1,
      transform: this.state.open ? 'translateX(16px)':'none',
    },
    lineBottom: {
      transform: this.state.open ? 'translateX(1px) rotate(45deg)':'none',
      transformOrigin: 'top right',
      marginTop: '8px',
    },       
  }
  return(
    <div style={styles.container} 
      onClick={this.props.onClick ? this.props.onClick: 
      ()=> {this.handleClick();}}>
        <div style={{...styles.line,...styles.lineTop}}/>
        <div style={{...styles.line,...styles.lineMiddle}}/>
        <div style={{...styles.line,...styles.lineBottom}}/>
    </div>
  )
  }
}
export default MenuButton;


