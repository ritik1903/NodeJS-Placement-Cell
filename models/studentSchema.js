const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		college: {
			type: String,
			required: true,
		},
		placement: {
			type: String,
			required: true,
			enum: ['Placed', 'Not Placed'],
		},
		contactNumber: {
			type: Number,
			required: true,
		},
		batch: {
			type: String,
			required: true,
		},
		dsa: {
			type: Number,
			required: true,
		},
		webd: {
			type: Number,
			required: true,
		},
		react: {
			type: Number,
			required: true,
		},
		interviews: [
			{
				company: {
					type: String,
				},
				date: {
					type: String,
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

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
