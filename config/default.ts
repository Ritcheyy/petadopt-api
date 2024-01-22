export default {
  port: 8080,
  cookie: {
    name: "RITCHEY-AUTH",
    domain: "localhost",
  },
  database: {
    uri: process.env.DB_URI,
  },
}
