"use client"

import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import { ProductCollection } from "@medusajs/medusa"
import ProductPreview from "@modules/products/components/product-preview"
import { Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"

const ProductRail = ({ collections }: { collections: ProductCollection }) => {

  const { data } = useFeaturedProductsQuery(collections.id)

  return (
    <div className="small:py-2">
      <div className="content-container py-2">
        <div className="flex justify-between mb-8">
          <Text className="txt-xlarge">{collections.title}</Text>
          <InteractiveLink href={`/collections/${collections.handle}`}>
            Ver Todos
          </InteractiveLink>
        </div>
        <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-8">
          {data &&
            data.map((product) => (
              <li key={product.id}>
                <ProductPreview isFeatured {...product} />
              </li>
            ))}
          {data?.length === 0 && (
            <div className="col-span-12 flex justify-center my-[40px]">
              <span>Sin productos disponibles.</span>
            </div>
          )}
        </ul>
      </div>
    </div>
  )
}

export default ProductRail
