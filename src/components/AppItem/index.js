// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl} = appDetails
  console.log(imageUrl)
  return (
    <li className="app-item" key={appId}>
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
