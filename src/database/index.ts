import mongoose from "mongoose"
import config from "config"

const connect = async () => {
  const MONGO_URI = config.get<string>('database.uri')

  try {
    mongoose.Promise = Promise
    await mongoose.connect(MONGO_URI)
    mongoose.connection.on("error", (error: Error) => console.log(error))
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default {
  connect
}
