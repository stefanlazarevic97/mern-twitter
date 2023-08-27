console.log('Environment variable SECRET_OR_KEY:', process.env.SECRET_OR_KEY);

module.exports = {
    secretOrKey: process.env.SECRET_OR_KEY,
    mongoURI: process.env.MONGO_URI,
    isProduction: process.env.NODE_ENV === 'production'
};