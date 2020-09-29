var art = artifacts.require("OwnToken");
module.exports = deployer => {
    deployer.deploy(art, 
        123,
        "a",
        "b"
        );
};