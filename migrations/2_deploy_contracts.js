var art = artifacts.require("MilkToken");
module.exports = deployer => {
    deployer.deploy(art, 
        123,
        234,
        "a",
        "b"
        );
};