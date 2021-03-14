import React from 'react'
import { ShopDataItemI } from 'mock/shop.data'

import './collection-item.styles.scss'

type CollectionItemProps = Pick<ShopDataItemI, 'id' | 'imageUrl' | 'name' | 'price'>

const CollectionItem: React.FC<CollectionItemProps> = ({
  id,
  imageUrl,
  name,
  price,
}) => {
  console.log(id)
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  )
}

export default CollectionItem
