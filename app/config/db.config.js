module.exports = {
    HOST: "52.78.249.210",
    USER: "root",
    PASSWORD: "soo126",
    DB: "express_test_db",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};