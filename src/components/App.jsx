class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: props.photos,
      currentPhoto: props.photos[0]
    };

    this.onTitleClick = this.onTitleClick.bind(this);
  }

  onTitleClick(photo) {
    console.log('click', photo);
    this.setState({
      currentPhoto: photo
    });
  }

  render() {
    console.log('render', this.state.currentPhoto);
    return (
      <div className="wrapper">
        <div className="three">
          <h3>Images</h3>
          <Library onTitleClick={this.onTitleClick} photos={this.state.photos}/>
        </div>
        <div className="two">
          <PhotoViewer currentPhoto={this.state.currentPhoto}/>
        </div>
      </div>
    )
  }
}