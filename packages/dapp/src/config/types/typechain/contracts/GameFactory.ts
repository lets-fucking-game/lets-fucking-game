/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace GameV1Interface {
  export type PrizeStruct = {
    position: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
    standard: PromiseOrValue<BigNumberish>;
    contractAddress: PromiseOrValue<string>;
    tokenId: PromiseOrValue<BigNumberish>;
  };

  export type PrizeStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber
  ] & {
    position: BigNumber;
    amount: BigNumber;
    standard: BigNumber;
    contractAddress: string;
    tokenId: BigNumber;
  };
}

export declare namespace GameFactory {
  export type AuthorizedAmountStruct = {
    amount: PromiseOrValue<BigNumberish>;
    isUsed: PromiseOrValue<boolean>;
  };

  export type AuthorizedAmountStructOutput = [BigNumber, boolean] & {
    amount: BigNumber;
    isUsed: boolean;
  };

  export type GameStruct = {
    id: PromiseOrValue<BigNumberish>;
    versionId: PromiseOrValue<BigNumberish>;
    creator: PromiseOrValue<string>;
    deployedAddress: PromiseOrValue<string>;
    gameCreationAmount: PromiseOrValue<BigNumberish>;
  };

  export type GameStructOutput = [
    BigNumber,
    BigNumber,
    string,
    string,
    BigNumber
  ] & {
    id: BigNumber;
    versionId: BigNumber;
    creator: string;
    deployedAddress: string;
    gameCreationAmount: BigNumber;
  };
}

export interface GameFactoryInterface extends utils.Interface {
  functions: {
    "addAuthorizedAmounts(uint256[])": FunctionFragment;
    "authorizedAmounts(uint256)": FunctionFragment;
    "createNewGame(bytes32,uint256,uint256,uint256,uint256,uint256,string,(uint256,uint256,uint256,address,uint256)[])": FunctionFragment;
    "cronUpkeep()": FunctionFragment;
    "deployedGames(uint256)": FunctionFragment;
    "gameCreationAmount()": FunctionFragment;
    "games(uint256)": FunctionFragment;
    "getAuthorizedAmount(uint256)": FunctionFragment;
    "getAuthorizedAmounts()": FunctionFragment;
    "getDeployedGames()": FunctionFragment;
    "latestVersionId()": FunctionFragment;
    "nextId()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "pauseAllGamesAndFactory()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "resumeAllGamesAndFactory()": FunctionFragment;
    "setNewGameV1(address)": FunctionFragment;
    "transferAdminOwnership(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "updateCronUpkeep(address)": FunctionFragment;
    "usedAuthorizedAmounts(uint256)": FunctionFragment;
    "withdrawFunds()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addAuthorizedAmounts"
      | "authorizedAmounts"
      | "createNewGame"
      | "cronUpkeep"
      | "deployedGames"
      | "gameCreationAmount"
      | "games"
      | "getAuthorizedAmount"
      | "getAuthorizedAmounts"
      | "getDeployedGames"
      | "latestVersionId"
      | "nextId"
      | "owner"
      | "pause"
      | "pauseAllGamesAndFactory"
      | "paused"
      | "renounceOwnership"
      | "resumeAllGamesAndFactory"
      | "setNewGameV1"
      | "transferAdminOwnership"
      | "transferOwnership"
      | "unpause"
      | "updateCronUpkeep"
      | "usedAuthorizedAmounts"
      | "withdrawFunds"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addAuthorizedAmounts",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "authorizedAmounts",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createNewGame",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      GameV1Interface.PrizeStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "cronUpkeep",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deployedGames",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "gameCreationAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "games",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuthorizedAmount",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuthorizedAmounts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDeployedGames",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestVersionId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nextId", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pauseAllGamesAndFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "resumeAllGamesAndFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setNewGameV1",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferAdminOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateCronUpkeep",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "usedAuthorizedAmounts",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFunds",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addAuthorizedAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizedAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createNewGame",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cronUpkeep", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deployedGames",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gameCreationAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "games", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAuthorizedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAuthorizedAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDeployedGames",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestVersionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nextId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pauseAllGamesAndFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resumeAllGamesAndFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNewGameV1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferAdminOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateCronUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "usedAuthorizedAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFunds",
    data: BytesLike
  ): Result;

  events: {
    "CronUpkeepUpdated(address)": EventFragment;
    "FailedTransfer(address,uint256)": EventFragment;
    "GameCreated(uint256,address,uint256,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Received(address,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CronUpkeepUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FailedTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GameCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Received"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export interface CronUpkeepUpdatedEventObject {
  cronUpkeep: string;
}
export type CronUpkeepUpdatedEvent = TypedEvent<
  [string],
  CronUpkeepUpdatedEventObject
>;

export type CronUpkeepUpdatedEventFilter =
  TypedEventFilter<CronUpkeepUpdatedEvent>;

export interface FailedTransferEventObject {
  receiver: string;
  amount: BigNumber;
}
export type FailedTransferEvent = TypedEvent<
  [string, BigNumber],
  FailedTransferEventObject
>;

export type FailedTransferEventFilter = TypedEventFilter<FailedTransferEvent>;

export interface GameCreatedEventObject {
  nextId: BigNumber;
  gameAddress: string;
  implementationVersion: BigNumber;
  creatorAddress: string;
}
export type GameCreatedEvent = TypedEvent<
  [BigNumber, string, BigNumber, string],
  GameCreatedEventObject
>;

export type GameCreatedEventFilter = TypedEventFilter<GameCreatedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface ReceivedEventObject {
  sender: string;
  amount: BigNumber;
}
export type ReceivedEvent = TypedEvent<
  [string, BigNumber],
  ReceivedEventObject
>;

export type ReceivedEventFilter = TypedEventFilter<ReceivedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface GameFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GameFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addAuthorizedAmounts(
      _authorizedAmounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    authorizedAmounts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    createNewGame(
      _name: PromiseOrValue<BytesLike>,
      _maxPlayers: PromiseOrValue<BigNumberish>,
      _playTimeRange: PromiseOrValue<BigNumberish>,
      _registrationAmount: PromiseOrValue<BigNumberish>,
      _treasuryFee: PromiseOrValue<BigNumberish>,
      _creatorFee: PromiseOrValue<BigNumberish>,
      _encodedCron: PromiseOrValue<string>,
      _prizes: GameV1Interface.PrizeStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cronUpkeep(overrides?: CallOverrides): Promise<[string]>;

    deployedGames(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string, BigNumber] & {
        id: BigNumber;
        versionId: BigNumber;
        creator: string;
        deployedAddress: string;
        gameCreationAmount: BigNumber;
      }
    >;

    gameCreationAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    games(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string] & { id: BigNumber; deployedAddress: string }
    >;

    getAuthorizedAmount(
      _authorizedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [GameFactory.AuthorizedAmountStructOutput] & {
        gameAuthorisedAmount: GameFactory.AuthorizedAmountStructOutput;
      }
    >;

    getAuthorizedAmounts(
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { gameAuthorisedAmounts: BigNumber[] }>;

    getDeployedGames(
      overrides?: CallOverrides
    ): Promise<
      [GameFactory.GameStructOutput[]] & {
        allGames: GameFactory.GameStructOutput[];
      }
    >;

    latestVersionId(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextId(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pauseAllGamesAndFactory(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    resumeAllGamesAndFactory(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setNewGameV1(
      _game: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferAdminOwnership(
      _adminAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateCronUpkeep(
      _cronUpkeep: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    usedAuthorizedAmounts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean] & { amount: BigNumber; isUsed: boolean }>;

    withdrawFunds(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addAuthorizedAmounts(
    _authorizedAmounts: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  authorizedAmounts(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  createNewGame(
    _name: PromiseOrValue<BytesLike>,
    _maxPlayers: PromiseOrValue<BigNumberish>,
    _playTimeRange: PromiseOrValue<BigNumberish>,
    _registrationAmount: PromiseOrValue<BigNumberish>,
    _treasuryFee: PromiseOrValue<BigNumberish>,
    _creatorFee: PromiseOrValue<BigNumberish>,
    _encodedCron: PromiseOrValue<string>,
    _prizes: GameV1Interface.PrizeStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cronUpkeep(overrides?: CallOverrides): Promise<string>;

  deployedGames(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, string, BigNumber] & {
      id: BigNumber;
      versionId: BigNumber;
      creator: string;
      deployedAddress: string;
      gameCreationAmount: BigNumber;
    }
  >;

  gameCreationAmount(overrides?: CallOverrides): Promise<BigNumber>;

  games(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string] & { id: BigNumber; deployedAddress: string }>;

  getAuthorizedAmount(
    _authorizedAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<GameFactory.AuthorizedAmountStructOutput>;

  getAuthorizedAmounts(overrides?: CallOverrides): Promise<BigNumber[]>;

  getDeployedGames(
    overrides?: CallOverrides
  ): Promise<GameFactory.GameStructOutput[]>;

  latestVersionId(overrides?: CallOverrides): Promise<BigNumber>;

  nextId(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pauseAllGamesAndFactory(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  resumeAllGamesAndFactory(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setNewGameV1(
    _game: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferAdminOwnership(
    _adminAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateCronUpkeep(
    _cronUpkeep: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  usedAuthorizedAmounts(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean] & { amount: BigNumber; isUsed: boolean }>;

  withdrawFunds(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addAuthorizedAmounts(
      _authorizedAmounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    authorizedAmounts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createNewGame(
      _name: PromiseOrValue<BytesLike>,
      _maxPlayers: PromiseOrValue<BigNumberish>,
      _playTimeRange: PromiseOrValue<BigNumberish>,
      _registrationAmount: PromiseOrValue<BigNumberish>,
      _treasuryFee: PromiseOrValue<BigNumberish>,
      _creatorFee: PromiseOrValue<BigNumberish>,
      _encodedCron: PromiseOrValue<string>,
      _prizes: GameV1Interface.PrizeStruct[],
      overrides?: CallOverrides
    ): Promise<string>;

    cronUpkeep(overrides?: CallOverrides): Promise<string>;

    deployedGames(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string, BigNumber] & {
        id: BigNumber;
        versionId: BigNumber;
        creator: string;
        deployedAddress: string;
        gameCreationAmount: BigNumber;
      }
    >;

    gameCreationAmount(overrides?: CallOverrides): Promise<BigNumber>;

    games(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string] & { id: BigNumber; deployedAddress: string }
    >;

    getAuthorizedAmount(
      _authorizedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<GameFactory.AuthorizedAmountStructOutput>;

    getAuthorizedAmounts(overrides?: CallOverrides): Promise<BigNumber[]>;

    getDeployedGames(
      overrides?: CallOverrides
    ): Promise<GameFactory.GameStructOutput[]>;

    latestVersionId(overrides?: CallOverrides): Promise<BigNumber>;

    nextId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    pauseAllGamesAndFactory(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    resumeAllGamesAndFactory(overrides?: CallOverrides): Promise<void>;

    setNewGameV1(
      _game: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferAdminOwnership(
      _adminAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    updateCronUpkeep(
      _cronUpkeep: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    usedAuthorizedAmounts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean] & { amount: BigNumber; isUsed: boolean }>;

    withdrawFunds(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "CronUpkeepUpdated(address)"(
      cronUpkeep?: null
    ): CronUpkeepUpdatedEventFilter;
    CronUpkeepUpdated(cronUpkeep?: null): CronUpkeepUpdatedEventFilter;

    "FailedTransfer(address,uint256)"(
      receiver?: null,
      amount?: null
    ): FailedTransferEventFilter;
    FailedTransfer(receiver?: null, amount?: null): FailedTransferEventFilter;

    "GameCreated(uint256,address,uint256,address)"(
      nextId?: null,
      gameAddress?: null,
      implementationVersion?: null,
      creatorAddress?: null
    ): GameCreatedEventFilter;
    GameCreated(
      nextId?: null,
      gameAddress?: null,
      implementationVersion?: null,
      creatorAddress?: null
    ): GameCreatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "Received(address,uint256)"(
      sender?: null,
      amount?: null
    ): ReceivedEventFilter;
    Received(sender?: null, amount?: null): ReceivedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    addAuthorizedAmounts(
      _authorizedAmounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    authorizedAmounts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createNewGame(
      _name: PromiseOrValue<BytesLike>,
      _maxPlayers: PromiseOrValue<BigNumberish>,
      _playTimeRange: PromiseOrValue<BigNumberish>,
      _registrationAmount: PromiseOrValue<BigNumberish>,
      _treasuryFee: PromiseOrValue<BigNumberish>,
      _creatorFee: PromiseOrValue<BigNumberish>,
      _encodedCron: PromiseOrValue<string>,
      _prizes: GameV1Interface.PrizeStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cronUpkeep(overrides?: CallOverrides): Promise<BigNumber>;

    deployedGames(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gameCreationAmount(overrides?: CallOverrides): Promise<BigNumber>;

    games(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAuthorizedAmount(
      _authorizedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAuthorizedAmounts(overrides?: CallOverrides): Promise<BigNumber>;

    getDeployedGames(overrides?: CallOverrides): Promise<BigNumber>;

    latestVersionId(overrides?: CallOverrides): Promise<BigNumber>;

    nextId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pauseAllGamesAndFactory(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    resumeAllGamesAndFactory(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setNewGameV1(
      _game: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferAdminOwnership(
      _adminAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateCronUpkeep(
      _cronUpkeep: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    usedAuthorizedAmounts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawFunds(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAuthorizedAmounts(
      _authorizedAmounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    authorizedAmounts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createNewGame(
      _name: PromiseOrValue<BytesLike>,
      _maxPlayers: PromiseOrValue<BigNumberish>,
      _playTimeRange: PromiseOrValue<BigNumberish>,
      _registrationAmount: PromiseOrValue<BigNumberish>,
      _treasuryFee: PromiseOrValue<BigNumberish>,
      _creatorFee: PromiseOrValue<BigNumberish>,
      _encodedCron: PromiseOrValue<string>,
      _prizes: GameV1Interface.PrizeStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cronUpkeep(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deployedGames(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gameCreationAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    games(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAuthorizedAmount(
      _authorizedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAuthorizedAmounts(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDeployedGames(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestVersionId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pauseAllGamesAndFactory(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    resumeAllGamesAndFactory(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setNewGameV1(
      _game: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferAdminOwnership(
      _adminAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateCronUpkeep(
      _cronUpkeep: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    usedAuthorizedAmounts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawFunds(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
