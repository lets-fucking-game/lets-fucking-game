/**
 * Helper to sort games
 */

const sortGamesPlaying = (a, b) => {
  // sort game where player has not lost first
  if (a.playerData.hasLost && b.playerData.hasLost) return 0
  if (a.playerData.hasLost) return 1
  if (b.playerData.hasLost) return -1

  // sort game currently in progress first
  if (a.isInProgress && b.isInProgress) {
    // sort game with less remaining players count
    if (a.remainingPlayersCount === b.remainingPlayersCount) return 0
    if (a.remainingPlayersCount < b.remainingPlayersCount) return -1
    return 1
  }
  if (a.isInProgress) return -1
  if (b.isInProgress) return 1

  // sort game currently starting first
  const isARegistering = !a.isInProgress && a.maxPlayers.toNumber() !== a.playerAddressesCount.toNumber()
  const isBRegistering = !b.isInProgress && b.maxPlayers.toNumber() !== b.playerAddressesCount.toNumber()

  if (isARegistering && !isBRegistering) return 1
  if (isBRegistering && !isARegistering) return -1

  if (a.playerAddressesCount === b.playerAddressesCount) return 0
  if (a.playerAddressesCount < b.playerAddressesCount) return 1
  if (a.playerAddressesCount > b.playerAddressesCount) return -1

  if (a.remainingPlayersCount === b.remainingPlayersCount) return 0
  if (a.remainingPlayersCount < b.remainingPlayersCount) return 1
  if (a.remainingPlayersCount > b.remainingPlayersCount) return -1

  return 0
}

export const sortGamesDefault = (a, b) => {
  // sort game where user is playing first
  if (a.userData.isPlaying && b.userData.isPlaying) return sortGamesPlaying(a, b)

  if (a.userData.isPlaying) return -1
  if (b.userData.isPlaying) return 1

  if (a.isInProgress && b.isInProgress) {
    if (a.remainingPlayersCount === b.remainingPlayersCount) return 0
    if (a.remainingPlayersCount < b.remainingPlayersCount) return -1
    return 1
  }

  if (a.isInProgress) return -1
  if (b.isInProgress) return 1

  // sort game currently starting first
  const isARegistering = !a.isInProgress && a.maxPlayers.toNumber() !== a.playerAddressesCount.toNumber()
  const isBRegistering = !b.isInProgress && b.maxPlayers.toNumber() !== b.playerAddressesCount.toNumber()

  if (isARegistering && !isBRegistering) return 1
  if (isBRegistering && !isARegistering) return -1

  // sorting game paused last
  if (a.isPaused && b.isPaused) return 0
  if (a.isPaused) return 1
  if (b.isPaused) return -1

  if (a.playerAddressesCount === b.playerAddressesCount) return 0
  if (a.playerAddressesCount < b.playerAddressesCount) return 1
  if (a.playerAddressesCount > b.playerAddressesCount) return -1

  if (a.remainingPlayersCount === b.remainingPlayersCount) return 0
  if (a.remainingPlayersCount < b.remainingPlayersCount) return 1
  if (a.remainingPlayersCount > b.remainingPlayersCount) return -1

  return 0
}

export const sortGamesLaunching = (a, b) => {
  if (a.isPaused && b.isPaused) return 0
  if (a.isPaused) return 1
  if (b.isPaused) return -1

  if (a.userData.isPlaying) return 1
  if (b.userData.isPlaying) return -1

  if (a.isInProgress && b.isInProgress) return 0
  if (a.isInProgress) return 1
  if (b.isInProgress) return -1

  if (a.playerAddressesCount === b.playerAddressesCount) return 0
  if (a.playerAddressesCount < b.playerAddressesCount) return 1
  if (a.playerAddressesCount > b.playerAddressesCount) return -1

  return 0
}
