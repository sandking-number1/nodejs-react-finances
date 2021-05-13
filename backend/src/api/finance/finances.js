const restful = require('node-restful');
const mongoose = restful.mongoose;

const financesSchema = new mongoose.Schema(
	{
		option: { type: String, required: true, uppercase: true, enum: ['IN', 'OUT'] },
		dateEvent: { type: Date, required: [true, 'Informe a data!'] },
		value: { type: Number, min: 0, required: [true, 'Informe o valor da transação!'] },
		description: { type: String, required: [true, 'Informe a descrição!'] },
		category: { type: String, required: [true, 'Informe a categoria da transação!'] },
	},
	{
		timestamps: { createdAt: true, updatedAt: true },
	}
);

module.exports = restful.model('Finances', financesSchema);