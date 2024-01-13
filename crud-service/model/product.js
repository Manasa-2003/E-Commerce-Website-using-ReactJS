import autoIncrement from 'mongoose-auto-increment';
import mongoose from 'mongoose';
// how our document look like
const productSchema = mongoose.Schema({
    name: String,
	desc: String,
	price: Number,
	image: String,
	discount: Number,
	date : { type : Date, default: Date.now }
});

autoIncrement.initialize(mongoose.connection);
productSchema.plugin(autoIncrement.plugin, 'product');
// we need to turn it into a model
const postProduct = mongoose.model('product', productSchema);
export default postProduct;