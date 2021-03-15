import React from 'react'
import { ShopDataI, ShopDataItemI } from 'mock/shop.data'

import CollectionItem from 'components/collection-item/collection-item.component'

import './collection-preview.styles.scss'

type ShopDataIProps = ShopDataI

const CollectionPreview: React.FC<ShopDataIProps> = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        ?.filter((item: ShopDataItemI, idx: number) => idx < 4)
        .map(({ id, imageUrl, name, price }: ShopDataItemI) => (
          <CollectionItem
            key={id}
            id={id}
            imageUrl={imageUrl}
            name={name}
            price={price}
          />
        ))}
    </div>
  </div>
)

export default CollectionPreview
