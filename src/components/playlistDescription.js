import React, { Component } from "react";
import styled from "styled-components";
import ExpandIcon from "../assets/icons/ExpandIcon";
const ExpandButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.centered ? "center" : "flex-start")};
  h6 {
    margin-top: 16px;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.07em;
  }
  svg {
    transform: rotate(${props => (props.expanded ? "180deg" : "0")});
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Wrapper = styled.div``;
class PlaylistDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }
  expand = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { expanded } = this.state;
    return (
      <>
        <p>Karin Fahléns förmåga att fånga essensen av regi</p>
        {expanded && (
          <>
            <p>
              med sina målande beskrivningar och teknisk kunnighet ipsum dolor
              sit amet, consectetur adipiscing elitperdiet orci. Sed pulvinar
              tincidunt enim, et consequat dui convallis ac. Nullam sit amet
              rutrum mi. Nam ut molestie urna.
            </p>
            <p>Medverkande: Karin Fahlén</p>
            <p>Plats: Regins Hus, Göteborg</p>
            <p>
              Arrangeras av: Kulturförvaltningen, Kultur i Väst, Regicentrum
              Väst, Filmcentrum Väst, Teatercentrum Väst
            </p>
          </>
        )}

        <ExpandButtonWrapper centered={this.props.centered} expanded={expanded}>
          <div className="wrapper">
            <h6 onClick={this.expand}>LÄS {expanded ? "MINDRE" : "MER"}</h6>
            <ExpandIcon />
          </div>
        </ExpandButtonWrapper>
      </>
    );
  }
}

export default PlaylistDescription;
