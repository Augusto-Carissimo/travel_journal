import '../css/Post.css'
import location from '../images/Fill 219.png'

function Post(props) {
  return(
    <div className='post-component'>
      <img src={require("../images/" + props.imageUrl)} className='post-image' />
      <div className='right-side'>
        <div className='post-content'>
          <div className='location-and-map'>
            <span className='location'> <img src={location} className='location-point' />{props.location} </span>
            <a href={props.googleMapUrl} className='map'> View on Google Maps </a>
          </div>
          <h1 className='title'> {props.title} </h1>
          <date className='date'> {props.startDate} - {props.endDate} </date>
          <p className='description'> {props.description} </p>
        </div>
      </div>
    </div>
  )
}

export default Post