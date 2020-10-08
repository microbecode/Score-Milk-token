const { accounts, contract } = require('@openzeppelin/test-environment');

const { BN, constants, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const { ZERO_ADDRESS } = constants;

const ERC20Mock = contract.fromArtifact('ERC20Mock');
const tokenContr = contract.fromArtifact('MilkToken');

describe('MilkToken', function () {
  const [ initialHolder, anotherAccount ] = accounts;

  const initialSupply = new BN(100);
  const initialCap = new BN(200);
  const mintAmount = new BN(60);
  const burnAmount = new BN(55);

  beforeEach(async function () {
    this.token = await tokenContr.new(initialSupply, initialCap, 'a', 'b', { from: initialHolder });
  });

  it('has the right initial amount', async function () {
    expect(await this.token.totalSupply()).to.be.bignumber.equal(initialSupply);
  });

  it('has the right initial amount at the right pace', async function () {
    expect(await this.token.balanceOf(initialHolder)).to.be.bignumber.equal(initialSupply);
  });
  
  it('has the right cap', async function () {
    expect(await this.token.cap()).to.be.bignumber.equal(initialCap);
  });

  it('can be minted', async function () {
    await this.token.mint(initialHolder, mintAmount, { from: initialHolder });
    expect(await this.token.balanceOf(initialHolder)).to.be.bignumber.equal(initialSupply.add(mintAmount));
  });

  it('can\'t be minted over the cap', async function () {
    await this.token.mint(initialHolder, mintAmount, { from: initialHolder });

    await expectRevert(this.token.mint(initialHolder, mintAmount, { from: initialHolder }),
    'ERC20Capped: cap exceeded -- Reason given: ERC20Capped: cap exceeded.'
    );

    expect(await this.token.balanceOf(initialHolder)).to.be.bignumber.equal(initialSupply.add(mintAmount));
  });

  it('can\t be minted without access', async function () {

    await expectRevert(this.token.mint(initialHolder, mintAmount, { from: anotherAccount }),
      'MinterRole: caller does not have the Minter role -- Reason given: MinterRole: caller does not have the Minter role.'
    );
  });

  it('can be burned', async function () {
    await this.token.burn(burnAmount, { from: initialHolder });
    expect(await this.token.balanceOf(initialHolder)).to.be.bignumber.equal(initialSupply.sub(burnAmount));
  });

  it('can\'t be burned from another account without approval', async function () {
    await this.token.mint(anotherAccount, mintAmount, { from: initialHolder });
    await expectRevert(this.token.burnFrom(anotherAccount, burnAmount, { from: initialHolder }),
      'ERC20: burn amount exceeds allowance -- Reason given: ERC20: burn amount exceeds allowance.'
    );
    expect(await this.token.balanceOf(anotherAccount)).to.be.bignumber.equal(mintAmount);
  });

});