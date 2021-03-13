import React from 'react'

import './menu-item.styles.scss'

type MenuItemProps = {
  imageUrl: string
  size: string
  title: string
}

const MenuItem: React.FC<MenuItemProps> = ({ imageUrl, size, title }) => (
  <div className={`menu-item ${size}`}>
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

export default MenuItem
