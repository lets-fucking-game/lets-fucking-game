import { expectRevert } from '@openzeppelin/test-helpers'
import { expect } from 'chai'

import { initialiseTestData } from '../../../factories/setup'

describe('GameFactoryContract', function () {
  beforeEach(initialiseTestData)
  context('GameImplementation deployed', function () {
    describe('when an account tries to initialize the base contract', function () {
      it('should revert with the correct reason', async function () {
        await expectRevert(
          this.gameImplementation.initialize({
            _creator: this.bob.address,
            _owner: this.owner.address,
            _cronUpkeep: this.cronUpkeep.address,
            _gameImplementationVersion: '0',
            _gameId: '0',
            _playTimeRange: this.playTimeRange,
            _maxPlayers: this.maxPlayers,
            _registrationAmount: this.correctRegistrationAmount,
            _treasuryFee: this.treasuryFee,
            _creatorFee: this.creatorFee,
            _encodedCron: this.encodedCron,
          }),
          "The implementation contract can't be initialized"
        )
      })
    })
    describe('when the creator tries to initialize a game already initialized', function () {
      it('should revert with the correct message', async function () {
        await this.gameFactory
          .connect(this.bob)
          .createNewGame(
            this.maxPlayers,
            this.playTimeRange,
            this.authorizedAmounts[this.authorizedAmounts.length - 1],
            this.treasuryFee,
            this.creatorFee,
            this.encodedCron,
            { value: this.gameCreationAmount }
          )

        const deployedGames = await this.gameFactory
          .connect(this.owner)
          .getDeployedGames()

        const clonedContract = deployedGames[deployedGames.length - 1]
        const clonedGameContract = await this.GameImplementationContract.attach(
          clonedContract.deployedAddress
        )
        await expectRevert(
          clonedGameContract.initialize({
            _creator: this.bob.address,
            _owner: this.owner.address,
            _cronUpkeep: this.cronUpkeep.address,
            _gameImplementationVersion: '0',
            _gameId: '0',
            _playTimeRange: this.playTimeRange,
            _maxPlayers: this.maxPlayers,
            _registrationAmount: this.correctRegistrationAmount,
            _treasuryFee: this.treasuryFee,
            _creatorFee: this.creatorFee,
            _encodedCron: this.encodedCron,
          }),
          'Contract already initialized'
        )
      })
    })
  })
  context('GameFactory constructor', function () {
    describe('when GameFactory gets deployed', function () {
      it('should set the correct values to state variables', async function () {
        const responseLatestGameImplementationVersionId =
          await this.gameFactory.latestGameImplementationVersionId()
        const responseGameImplementation =
          await this.gameFactory.gameImplementations(
            responseLatestGameImplementationVersionId
          )
        const responseOwner = await this.gameFactory.owner()

        const responseAuthorizedAmounts =
          await this.gameFactory.getAuthorisedAmounts()

        expect(responseOwner).to.be.equal(this.owner.address)
        expect(responseLatestGameImplementationVersionId).to.be.equal('0')
        expect(responseGameImplementation.deployedAddress).to.be.equal(
          this.gameImplementation.address
        )
        expect(responseAuthorizedAmounts.toString()).to.be.equal(
          this.authorizedAmounts.toString()
        )
      })
    })
  })
  context('GameFactory create game', function () {
    describe('when amount authorized is available', function () {
      it('should create a game', async function () {
        const gameFactoryContract = await this.GameFactoryContract.connect(
          this.owner
        ).deploy(
          this.gameImplementation.address,
          this.cronUpkeep.address,
          this.gameCreationAmount,
          this.authorizedAmounts
        )
        await gameFactoryContract.deployed()
      })
      it('should revert create game with no authorizedAmounts', async function () {
        const emptyauthorizedAmounts = []
        await expectRevert(
          this.GameFactoryContract.connect(this.owner).deploy(
            this.gameImplementation.address,
            this.cronUpkeep.address,
            this.gameCreationAmount,
            emptyauthorizedAmounts
          ),
          'authorizedAmounts should be greather or equal to 1'
        )
      })
      it('should revert create game with already used amount', async function () {
        const sameRegistrationAmount = this.authorizedAmounts[1]
        await this.gameFactory
          .connect(this.bob)
          .createNewGame(
            this.maxPlayers,
            this.playTimeRange,
            sameRegistrationAmount,
            this.treasuryFee,
            this.creatorFee,
            this.encodedCron,
            { value: this.gameCreationAmount }
          )

        await expectRevert(
          this.gameFactory
            .connect(this.alice)
            .createNewGame(
              this.maxPlayers,
              this.playTimeRange,
              sameRegistrationAmount,
              this.treasuryFee,
              this.creatorFee,
              this.encodedCron,
              { value: this.gameCreationAmount }
            ),
          'registrationAmout is already used'
        )
      })
    })
  })
})
