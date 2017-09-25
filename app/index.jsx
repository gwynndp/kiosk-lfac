import React from 'react';
import { render } from 'react-dom';
import VideoCard from './VideoCard';
import Gallery from './Gallery';
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [
        {
          category: '',
          name: 'Chris Coursey',
          src: 'https://www.youtube.com/embed/OTxih_LHwNU'
        },
        {
          category: '',
          name: 'Lee Turner',
          src: 'https://www.youtube.com/embed/gdDFgE-ib1k'
        },
        {
          category: '',
          name: 'Ralph Duell',
          src: 'https://www.youtube.com/embed/IRuRySV4qpg'
        }
      ],
      list: []
    };
  }

  componentWillMount() {
    let context = this;
    axios
      .get('/jsontest')
      .then(function(res) {
        console.log('RESPONSE', res.data.videos);
        context.setState({
          videos: res.data.videos,
          list: res.data.videos.map(video => <li key={video.name}>{video.name}</li>)
        });
      })
      .catch(function(err) {
        throw err;
      });
  }

  render() {
    console.log('INDEX list', this.state.list);
    const list = this.state.list;

    return (
      <div>
        <VideoCard name="Justice and Equity" src="https://www.youtube.com/embed/ZsAD2af3lFA" />
        <div>{list}</div>
        <Gallery videos={this.state.videos} />
      </div>
    );
  }
}

render(<Main />, document.getElementById('app'));
