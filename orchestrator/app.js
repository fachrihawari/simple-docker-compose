const express = require("express");
const morgan = require("morgan");
const axios = require('axios')
const pkg = require('./package.json')

const app = express();
const PORT = Number(process.env.PORT) || 80;
const PRODUCTS_URL = process.env.PRODUCTS_URL || 'http://localhost:8880'
const USERS_URL = process.env.USERS_URL || 'http://localhost:8080'


app.use(morgan("dev"));

app.get("/", (_, res) => {
	res.status(200).json({
		message: `welcome to the ${pkg.name}!`
	});
});

app.get("/products", async (_, res) => {
	const { data } = await axios.get(`${PRODUCTS_URL}/products`)
	res.status(200).json(data);
});

app.get("/products/:id", async (req, res) => {
	const { id } = req.params
	const { data } = await axios.get(`${PRODUCTS_URL}/products/${id}`)
	res.status(200).json(data);
});

app.get("/users", async (_, res) => {
	const { data } = await axios.get(`${USERS_URL}/users`)
	res.status(200).json(data);
});

app.listen(PORT, () => {
	console.log(`this app running on port ${PORT}`);
});
