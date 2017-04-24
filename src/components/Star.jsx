class Star extends React.Component {
  render() {
    return (
      <div className="star">
        <div onClick={ () => (this.props.onTitleClick(this.props.photo))}>
          {this.props.photo.title}
        </div>
      </div>
    )
  }
}