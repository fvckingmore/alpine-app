const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()


module.exports = {
	index: async (req, res) => {

		const usuarios = await db.Usuario.findMany({
			orderBy: [{
				id: 'desc'
			}]
		});
		
		return res.render('usuario/index', {
			usuarios: usuarios,
		});
	},

	create: async (req, res) => {
		try {
			await db.Usuario.create({
				username: req.body.username,
				password: req.body.password,
			});
		} catch(e) {
			console.log(e);
		}
	}
}