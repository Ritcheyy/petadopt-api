import config from "config"

export default {
  port: 8080,
  cookie: {
    name: "TEST-AUTH",
    domain: "localhost",
  },
  database: {
    uri: "DB_URI",
  },
}
