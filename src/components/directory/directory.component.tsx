import React from 'react'

import { MenuItemI } from '../../types/menu-types'
import MenuItem from '../menu-item/menu-item.component'

import { sections as sectionsMock } from './../../mock/directory.data'

import './directory.styles.scss'

const Directory: React.FC = () => {
  const [sections] = React.useState<MenuItemI[]>(sectionsMock)
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }: MenuItemI) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}

export default Directory
