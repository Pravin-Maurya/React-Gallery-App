// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? 'thumbnail-active' : 'thumbnail'

  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="list-item-container">
      <button
        className="thumbnail-btn"
        type="button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
