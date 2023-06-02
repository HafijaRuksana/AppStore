// Write your code here
import './index.css'

const TabItem = props => {
  const {isActive, tabDetails, tabClicked} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    tabClicked(tabId)
  }

  const tabClassName = isActive ? 'colored-tab' : 'normal-tab'

  return (
    <li onClick={onClickTab}>
      <button type="button" className={tabClassName}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
