import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import './menu-item.styles.scss'

interface MenuItemProps extends RouteComponentProps {
  imageUrl?: string
  size?: string
  title: string
  linkUrl?: string
}

const MenuItem: React.FC<MenuItemProps> = ({
  history,
  imageUrl,
  linkUrl,
  match,
  size,
  title,
}) => (
  <div
    className={`menu-item ${size}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem)
