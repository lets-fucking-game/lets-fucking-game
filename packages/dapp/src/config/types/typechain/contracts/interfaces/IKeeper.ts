/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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
} from "../../common";

export interface IKeeperInterface extends utils.Interface {
  functions: {
    "pauseKeeper()": FunctionFragment;
    "setCronUpkeep(address)": FunctionFragment;
    "setEncodedCron(string)": FunctionFragment;
    "unpauseKeeper()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "pauseKeeper"
      | "setCronUpkeep"
      | "setEncodedCron"
      | "unpauseKeeper"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "pauseKeeper",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCronUpkeep",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setEncodedCron",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unpauseKeeper",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "pauseKeeper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCronUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEncodedCron",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unpauseKeeper",
    data: BytesLike
  ): Result;

  events: {
    "CronUpkeepUpdated(uint256,address)": EventFragment;
    "EncodedCronUpdated(uint256,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CronUpkeepUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EncodedCronUpdated"): EventFragment;
}

export interface CronUpkeepUpdatedEventObject {
  jobId: BigNumber;
  cronUpkeep: string;
}
export type CronUpkeepUpdatedEvent = TypedEvent<
  [BigNumber, string],
  CronUpkeepUpdatedEventObject
>;

export type CronUpkeepUpdatedEventFilter =
  TypedEventFilter<CronUpkeepUpdatedEvent>;

export interface EncodedCronUpdatedEventObject {
  jobId: BigNumber;
  encodedCron: string;
}
export type EncodedCronUpdatedEvent = TypedEvent<
  [BigNumber, string],
  EncodedCronUpdatedEventObject
>;

export type EncodedCronUpdatedEventFilter =
  TypedEventFilter<EncodedCronUpdatedEvent>;

export interface IKeeper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IKeeperInterface;

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
    pauseKeeper(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setCronUpkeep(
      _cronUpkeep: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setEncodedCron(
      _encodedCron: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpauseKeeper(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  pauseKeeper(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setCronUpkeep(
    _cronUpkeep: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setEncodedCron(
    _encodedCron: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpauseKeeper(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    pauseKeeper(overrides?: CallOverrides): Promise<void>;

    setCronUpkeep(
      _cronUpkeep: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setEncodedCron(
      _encodedCron: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unpauseKeeper(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "CronUpkeepUpdated(uint256,address)"(
      jobId?: null,
      cronUpkeep?: null
    ): CronUpkeepUpdatedEventFilter;
    CronUpkeepUpdated(
      jobId?: null,
      cronUpkeep?: null
    ): CronUpkeepUpdatedEventFilter;

    "EncodedCronUpdated(uint256,string)"(
      jobId?: null,
      encodedCron?: null
    ): EncodedCronUpdatedEventFilter;
    EncodedCronUpdated(
      jobId?: null,
      encodedCron?: null
    ): EncodedCronUpdatedEventFilter;
  };

  estimateGas: {
    pauseKeeper(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setCronUpkeep(
      _cronUpkeep: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setEncodedCron(
      _encodedCron: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpauseKeeper(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    pauseKeeper(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setCronUpkeep(
      _cronUpkeep: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setEncodedCron(
      _encodedCron: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpauseKeeper(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
