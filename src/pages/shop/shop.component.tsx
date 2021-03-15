import React from 'react'
import { SHOP_DATA, ShopDataI } from 'mock/shop.data'

import CollectionPreview from './.././../components/collection-preview/collection-preview.component'

const ShopPage: React.FC = () => {
  const [collections, setCollections] = React.useState<ShopDataI[]>(SHOP_DATA)
  console.log(collections, setCollections)
  return (
    <div className="shop-page">
      {collections?.map((collection: ShopDataI) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  )
}

export default ShopPage
