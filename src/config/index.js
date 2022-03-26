require('bcrypt').config()


export default{
    PORT: 5000,
    MONGO_URL: process.env.MONGO_URL,
}