module.exports = {
    secret: process.env.AUTH_SECRET || "trololo",
    expires: process.env.AUTH_EXPRES ||"24h",
    rounds :process.env.AUTH_ROUNDS || 10
}