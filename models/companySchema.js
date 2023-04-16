const mongoose = require('mongoose');

const companySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			unique: true,
		},
		students: [
			{
				student: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Student',
				},
				date: {
					type: Date,
					required: true,
				},
				result: {
					type: String,
					enum: ['On Hold', 'Selected', 'Pending', 'Not Selected', 'Did not Attempt'],
				},
			},
		],
	},
	{ timestamps: true }
);

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
