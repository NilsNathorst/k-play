import React, { Component } from 'react';
 
class PlaylistDescription extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false 
    }
  }

  expand = () => { 
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { expanded } = this.state
    return (
      <>
        <p>Pia Olbys förmåga att fånga essencen av skönsång</p>
        { 
          expanded &&
          <>
            <p>med sina målande beskrivningar och teknisk kunnighet ipsum dolor sit amet, consectetur adipiscing elitperdiet orci. Sed pulvinar tincidunt enim, et consequat dui convallis ac. Nullam sit amet rutrum mi. Nam ut molestie urna.
            <p>Medverkande: Pia Olby, Pia Olbys</p>
            <p>Plats: Musikens Hus, Göteborg</p>
            <p>Arrangeras av: Kulturförvaltningen, Kultur i Väst, Musikcentrum Väst, Danscentrum Väst, Teatercentrum Väst</p>
            </p>
          </>
        }
        <h6 onClick={ this.expand }>Läs mer</h6>
      </>
    )
  }
}
 
export default PlaylistDescription;

