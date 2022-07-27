const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

module.exports = {
	index: (req, res) => {
		return res.render('users/index');
	},

	get: async (req, res) => {

		const limit = 10;
		const page = req.query.page ? parseInt(req.query.page) : 1;

		const users = await db.Usuario.findMany({
			orderBy: [{
				id: 'desc'
			}],
			take: limit,
			skip: limit * (page - 1),
		});

		const totalUsers = await db.Usuario.count();
		
		return res.json({
			users,
			totalUsers,
			page,
			limit,
		});
	},

	create: async (req, res) => {
		try {
			await db.Usuario.create({
				data: {
					username: req.body.username,
					password: req.body.password,
				}
			});
		} catch(e) {
			console.log(e);
		}

		return res.status(200).send('ok');
	},

	destroy: async (req, res) => {

		console.log(req.body);

		try {
			await db.Usuario.delete({
				where: {
					id: parseInt(req.body.id)
				}
			});
		} catch(e) {
			console.log(e);
		}
		return res.status(200).send("ok");
	},
}