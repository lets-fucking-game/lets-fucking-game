import { formatEther } from '@ethersproject/units'

import { parseBytes32String } from '@ethersproject/strings'
import { arrayify } from '@ethersproject/bytes'
import { ZERO_ADDRESS } from 'config/constants'
import moment from 'moment'
import { SerializedGame, SerializedPrizeData } from '../types'

// parse a name or symbol from a token response
const BYTES32_REGEX = /^0x[a-fA-F0-9]{64}$/

function parseStringOrBytes32(str: string | undefined, bytes32: string | undefined, defaultValue: string): string {
  return str && str.length > 0
    ? str
    : // need to check for proper bytes string and valid terminator
    bytes32 && BYTES32_REGEX.test(bytes32) && arrayify(bytes32)[31] === 0
    ? parseBytes32String(bytes32)
    : defaultValue
}

export const gameBaseTransformer = (gameData, gamePlayers) => {
  return (game, index): SerializedGame => {
    const { deployedAddress: address, gameCreationAmount } = game
    const [
      [
        {
          id,
          name,
          roundId,
          maxPlayers,
          playTimeRange,
          playerAddressesCount,
          registrationAmount,
          encodedCron,
          isInProgress,
          isPaused,
          creator,
          admin,
          creatorFee,
          treasuryFee,
        },
      ],
    ] = gameData[index]

    const [[playerAddresses]] = gamePlayers[index]

    return {
      id: id.toNumber(),
      name: parseStringOrBytes32('', name, 'Game'),
      roundId: roundId.toNumber(),
      maxPlayers: maxPlayers.toNumber(),
      playerAddressesCount: playerAddressesCount.toNumber(),
      playTimeRange: playTimeRange.toNumber(),
      registrationAmount: formatEther(`${registrationAmount}`),
      gameCreationAmount: formatEther(`${gameCreationAmount}`),
      creatorFee: creatorFee.toString(),
      treasuryFee: treasuryFee.toString(),
      isInProgress,
      isPaused,
      isDeleted: false,
      address,
      creator,
      admin,
      prizepool: '0',
      encodedCron: encodedCron.toString(),
      playerAddresses,
      prizes: [],
    }
  }
}

export const gameExtendedTransformer = (gamePrizes /* , gamePlayersData */) => {
  return (game, index): SerializedGame => {
    const [[rawPrizes]] = gamePrizes[index]
    const prizes: SerializedPrizeData[] = rawPrizes.map((prize) => {
      const { amount, position } = prize
      return {
        amount: formatEther(`${amount}`),
        position: position.toNumber(),
      }
    })
    const prizepool = prizes.reduce((acc, prize) => acc + +prize.amount, 0)

    // const [[{ gamePlayer: rawPlayers }]] = gamePlayersData[index]
    // const players = rawPlayers.map((player) => {
    //   const {
    //     hasLost,
    //     hasPlayedRound,
    //     isSplitOk,
    //     playerAddress: address,
    //     position,
    //     roundCount,
    //     roundRangeLowerLimit,
    //     roundRangeUpperLimit,
    //   } = player
    //   return {
    //     hasLost,
    //     hasPlayedRound,
    //     isSplitOk,
    //     address,
    //     position,
    //     roundCount,
    //     roundRangeLowerLimit,
    //     roundRangeUpperLimit,
    //   }
    // })

    return {
      ...game,
      prizepool: `${prizepool}`,
      prizes,
      // players,
    }
  }
}

export const gamePlayerDataTransformer = (gamesPlayerData, account) => {
  return (game, index): SerializedGame => {
    const playerData = gamesPlayerData[index]

    const isPlaying = playerData.address !== ZERO_ADDRESS

    const fromRange = moment.unix(+playerData.roundRangeLowerLimit)
    const toRange = moment.unix(+playerData.roundRangeUpperLimit)
    const isInRange = moment().isBetween(fromRange, toRange)

    return {
      ...game,
      playerData,
      userData: {
        isPlaying,
        isCreator: game.creator === account,
        isAdmin: game.admin === account,
        isInTimeRange: isInRange,
        nextFromRange: fromRange.toString(),
        nextToRange: toRange.toString(),
        isCanVoteSplitPot: game.isInProgress && game.playerAddressesCount <= game.maxPlayers * 0.5,
        // TODO GUIGUI NEXT HANDLE WON CLAIM
        isWonLastGames: false,
        wonAmount: '0',
      },
    }
  }
}