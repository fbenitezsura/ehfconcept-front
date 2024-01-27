import { ProductCategory } from "@medusajs/medusa"
import CategoryRail from "./category-rail"

const FeaturedProducts = ({
  collections,
}: {
  collections: any
}) => {
  return (
    <div className="py-12">
      <CategoryRail collections={collections} />
    </div>
  )
}

export default FeaturedProducts
