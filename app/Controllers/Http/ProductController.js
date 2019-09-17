const Product = use('App/Models/Product')

/**
 * Resourceful controller for interacting with product
 */
class ProductController {
  /**
   * Show a list of all product.
   * GET product
   */
  async index () {
    const product = Product.query()
    .with('image')
    .with('evaluation')
    .fetch()
    return product
  }

  /**
   * Create/save a new product.
   * POST product
   */
  // async store ({ request, response }) {}
  async store ({ auth, request, response }) {
    const data = request.only([
      "name", 
      "description", 
      "price"
    ])
    const product = await Product.create(data)
    if (product) {
      response.status(201).json({
        success: 'Created Product',
        data: data
      })
    } else {
      response.status(204).send({ error: 'Product Not Created' })
    }
  }

   /**
   * Display a single product.
   * GET product/:id
   */
  async show ({ params }) {
    const product = await Product.find(params.id)
      await product.loadMany(['image','evaluation'])
    return product
  }

  /**
   * Update product details.
   * PUT or PATCH product/:id
   */
  async update ({ params, request, response }) {
    const product = await Product.find(params.id)
    const data = request.only([
        "name", 
        "description", 
        "price"
    ])
    product.merge(data)
    if (product) {
      response.status(200).json({
        success: 'Product Updated',
        data: data
      })
      await product.save()
    } else {
      response.status(304).send({ error: 'Product Not Updated' })
    }
  }

  /**
   * Delete a product with id.
   * DELETE product/:id
   */
  async destroy ({ params, response }) {
      // retrieve the data by given id
      const product = await Product.find(params.id)
       if (product) {
         response.status(200).json({
           success: 'Deleted Record',
           data: product
         })
         await product.delete()
       }else {
         response.status(404).send({ error: 'Product Not Found' })
       }
  }
}

module.exports = ProductController