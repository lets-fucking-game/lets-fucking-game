import BigNumber from 'bignumber.js'
import { BIG_ZERO } from 'utils/bigNumber'
import { createSelector } from '@reduxjs/toolkit'
import _isEmpty from 'lodash/isEmpty'
import { State, SerializedGame, DeserializedGame, DeserializedGameUserData } from '../types'

const deserializeGameUserData = (game: SerializedGame): DeserializedGameUserData => {
  return {
    isPlaying: game?.userData ? game.userData.isPlaying : false,
    isCreator: game?.userData ? game.userData.isCreator : false,
    isAdmin: game?.userData ? game.userData.isAdmin : false,
    wonAmount: game?.userData ? new BigNumber(game.userData.wonAmount) : BIG_ZERO,
    nextFromRange: game?.userData ? new BigNumber(game.userData.nextFromRange) : BIG_ZERO,
    nextToRange: game?.userData ? new BigNumber(game.userData.nextToRange) : BIG_ZERO,
    isWonLastGames: game?.userData ? game.userData.isWonLastGames : false,
    isCanVoteSplitPot: game?.userData ? game.userData.isCanVoteSplitPot : false,
    isInTimeRange: game?.userData ? game.userData.isInTimeRange : false,
  }
}

const deserializeGame = (game: SerializedGame): DeserializedGame => {
  const {
    id,
    name,
    roundId,
    isPaused,
    isInProgress,
    isDeleted,
    maxPlayers,
    playTimeRange,
    playerAddressesCount,
    gameCreationAmount,
    registrationAmount,
    address,
    prizepool,
    encodedCron,
    creator,
    admin,
    treasuryFee,
    creatorFee,
    playerAddresses,
  } = game

  return {
    id: id ? new BigNumber(id) : BIG_ZERO,
    name,
    roundId: roundId ? new BigNumber(roundId) : BIG_ZERO,
    isPaused,
    isInProgress,
    isDeleted,
    playTimeRange: playTimeRange ? new BigNumber(playTimeRange) : BIG_ZERO,
    maxPlayers: maxPlayers ? new BigNumber(maxPlayers) : BIG_ZERO,
    playerAddressesCount: playerAddressesCount ? new BigNumber(playerAddressesCount) : BIG_ZERO,
    gameCreationAmount: gameCreationAmount ? new BigNumber(gameCreationAmount) : BIG_ZERO,
    registrationAmount: registrationAmount ? new BigNumber(registrationAmount) : BIG_ZERO,
    address,
    prizepool: prizepool ? new BigNumber(prizepool) : BIG_ZERO,
    encodedCron,
    creator,
    admin,
    treasuryFee: treasuryFee ? new BigNumber(treasuryFee) : BIG_ZERO,
    creatorFee: creatorFee ? new BigNumber(creatorFee) : BIG_ZERO,
    playerAddresses,
    userData: deserializeGameUserData(game),
  }
}

const selectCakeGame = (state: State) => state.games.data.find((g) => g.roundId === 2)
const selectGameByKey = (key: string, value: string | number) => (state: State) =>
  state.games.data.find((f) => f[key] === value)

export const makeGameFromIdSelector = (id: number) =>
  createSelector([selectGameByKey('id', id)], (game) => deserializeGame(game))

export const makeUserGameFromIdSelector = (id: number) =>
  createSelector([selectGameByKey('id', id)], (game) => {
    const {
      isPlaying,
      isCreator,
      isAdmin,
      wonAmount,
      nextFromRange,
      nextToRange,
      isWonLastGames,
      isCanVoteSplitPot,
      isInTimeRange,
    } = deserializeGameUserData(game)

    return {
      isPlaying,
      isCreator,
      isAdmin,
      wonAmount,
      nextFromRange,
      nextToRange,
      isWonLastGames,
      isCanVoteSplitPot,
      isInTimeRange,
    }
  })

export const gameSelector = () =>
  createSelector(
    (state: State) => state.games,
    (games) => {
      const deserializedGamesData = games.data.map(deserializeGame)
      const { loadArchivedGamesData, userDataLoaded, loadingKeys } = games

      return {
        loadArchivedGamesData,
        userDataLoaded,
        loadingKeys,
        data: deserializedGamesData,
      }
    },
  )
