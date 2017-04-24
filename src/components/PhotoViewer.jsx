class PhotoViewer extends React.Component {

  render() {
    return (
      <div className="photoViewer">
        <img src={this.props.currentPhoto.image}/>
        <div className="info wrapper">
          <span className="title">{this.props.currentPhoto.title}</span>
          <Rating rating={this.props.currentPhoto.rating}/>
        </div>
      </div>
    )
  }
}