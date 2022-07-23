const { PrismaClient } = require('@prisma/client');
const db = new PrismaClient();
const { faker } = require('@faker-js/faker');

( async () => {

	await db.Usuario.deleteMany({});

	for(let i = 0; i < 100; i++) {
		const u = await db.Usuario.create({

			data: {

				username: faker.name.firstName(),
				password: faker.random.alpha(10),
			}
		});

		console.log(u);
	}
})()