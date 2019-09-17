const Model = use('Model')

class Product extends Model {
    
    evaluation () {
        return this.hasMany('App/Models/Evaluation')
    }
    
    image () {
        return this.hasMany('App/Models/ImageProdutc')
    }
}

module.exports = Product
