import React from 'react';

import WineLink from './WineLink';

class WineBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wines: []
    }
  }

  componentDidMount() {
    fetch('http://myapi-profstream.herokuapp.com/api/1e02af/wines')
    .then(res => res.json())
    .then(wines => {
      this.setState({ wines })
    })
  }
  
  render() {
    return (
      <section>
        {this.state.wines.length > 0 ?
          this.state.wines.map((wine) => {
            return (<WineLink key={wine.id} wine={wine} />)
          })
          :
          <p>Still loading wines...</p>
        }
      </section>
    )
  }
}

export default WineBox;
