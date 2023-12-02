// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = event => {
        onToggleShowContent(event.target.value)
      }

      const onChangeLeft = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRight = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="controller-container">
          <h1 className="controller-heading">Layout</h1>
          <div>
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onChange={onChangeContent}
            />
            <label htmlFor="content" className="label">
              Content
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="left"
              checked={showLeftNavbar}
              onChange={onChangeLeft}
            />
            <label htmlFor="left" className="label">
              Left Navbar
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="right"
              checked={showRightNavbar}
              onChange={onChangeRight}
            />
            <label htmlFor="right" className="label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
