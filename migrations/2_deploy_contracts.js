var art = artifacts.require("ERC20");
module.exports = deployer => {
    deployer.deploy(art, 
        "a", "b"
        );
};