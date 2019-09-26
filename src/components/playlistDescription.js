import React, { Component } from "react";

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
        <h6 onClick={this.expand}>Läs mer</h6>
      </>
    );
  }
}

export default PlaylistDescription;
