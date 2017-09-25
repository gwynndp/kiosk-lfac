import React from 'react';
import { render } from 'react-dom';
import VideoCard from './VideoCard';
import Gallery from './Gallery';
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
  }

  componentWillMount() {
    let context = this;
    axios
      .get('/jsontest')
      .then(function(res) {
        console.log('RESPONSE', res.data.videos);
        context.setState({
          videos: res.data.videos
        });
      })
      .catch(function(err) {
        throw err;
      });
  }

  render() {
    return (
      <div>
        <Gallery videos={this.state.videos} />
      </div>
    );
  }
}

render(<Main />, document.getElementById('app'));
