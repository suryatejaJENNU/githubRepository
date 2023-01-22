import './index.css'

const RepositoryItem = props => {
  console.log('surya')
  const {allData, key} = props
  const {avatarUrl, forksCount, id, issuesCount, name, starsCount} = allData
  return (
    <li className="margin">
      <img src={avatarUrl} alt={name} className="image" />
      <h1 className="name">{name}</h1>
      <div className="two">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="small-image"
        />
        <p>{starsCount}</p>
      </div>
      <div className="two">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
          alt="forks"
          className="small-image"
        />
        <p>{forksCount}</p>
      </div>
      <div className="two">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
          alt="open issues"
          className="small-image"
        />
        <p>{issuesCount}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
