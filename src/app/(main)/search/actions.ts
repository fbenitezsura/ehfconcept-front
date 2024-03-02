import { initialize as initializeProductModule } from "@medusajs/product"
/**
 * Uses MeiliSearch or Algolia to search for a query
 * @param {string} query - search query
 */
export async function search(query: string) {

  try{
    const productService = await initializeProductModule()

    const products = await productService.list({
      q: query
    });

    const hits = products

    return hits
  } catch(e){
    console.log(e);

    return []
  }
  
}
