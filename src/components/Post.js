import '../css/Post.css'

function Post(props) {
  return(
    <div className='post'>
      <img src={require("../images/" + props.imageUrl)} />
      <span> {props.location} </span>
      <span> {props.googleMapUrl} </span>
      <h1> {props.title} </h1>
      <date> {props.startDate} + " - " {props.endDate} </date>
      <p> {props.description} </p>
    </div>
  )
}

export default Post