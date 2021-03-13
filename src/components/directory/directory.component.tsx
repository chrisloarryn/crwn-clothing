import React from 'react'

import { MenuItemI } from '../../types/menu-types'
import MenuItem from '../menu-item/menu-item.component'

import { sections as sectionsMock } from './../../mock/directory.data'

import './directory.styles.scss'

const Directory: React.FC = () => {
  const [sections] = React.useState<MenuItemI[]>(sectionsMock)
  return (
    <div className="directory-menu">
      {sections.map(({ id, imageUrl, title, size }: MenuItemI) => (
        <MenuItem
          key={id}
          imageUrl={imageUrl as string}
          title={title}
          size={size as string}
        />
      ))}
    </div>
  )
}

export default Directory
