import config from "config"

export default {
  port: 8080,
  cookie: {
    name: "RITCHEY-AUTH",
    domain: "localhost",
  },
  database: {
    uri: "mongodb+srv://ritchey:ritchey@cluster0.ubojznc.mongodb.net/?retryWrites=true&w=majority",
  },
}
