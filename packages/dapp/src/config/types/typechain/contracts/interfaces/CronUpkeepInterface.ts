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

export interface CronUpkeepInterfaceInterface extends utils.Interface {
  functions: {
    "addDelegator(address)": FunctionFragment;
    "checkUpkeep(bytes)": FunctionFragment;
    "createCronJobFromEncodedSpec(address,bytes,bytes)": FunctionFragment;
    "deleteCronJob(uint256)": FunctionFragment;
    "getActiveCronJobIDs()": FunctionFragment;
    "getCronJob(uint256)": FunctionFragment;
    "getNextCronJobIDs()": FunctionFragment;
    "pause()": FunctionFragment;
    "performUpkeep(bytes)": FunctionFragment;
    "removeDelegator(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "updateCronJob(uint256,address,bytes,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addDelegator"
      | "checkUpkeep"
      | "createCronJobFromEncodedSpec"
      | "deleteCronJob"
      | "getActiveCronJobIDs"
      | "getCronJob"
      | "getNextCronJobIDs"
      | "pause"
      | "performUpkeep"
      | "removeDelegator"
      | "unpause"
      | "updateCronJob"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addDelegator",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "checkUpkeep",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "createCronJobFromEncodedSpec",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteCronJob",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getActiveCronJobIDs",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCronJob",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNextCronJobIDs",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "performUpkeep",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeDelegator",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateCronJob",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "addDelegator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createCronJobFromEncodedSpec",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteCronJob",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActiveCronJobIDs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getCronJob", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNextCronJobIDs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "performUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeDelegator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateCronJob",
    data: BytesLike
  ): Result;

  events: {
    "CronJobCreated(uint256,address,bytes)": EventFragment;
    "CronJobDeleted(uint256)": EventFragment;
    "CronJobExecuted(uint256,uint256)": EventFragment;
    "CronJobUpdated(uint256,address,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CronJobCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CronJobDeleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CronJobExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CronJobUpdated"): EventFragment;
}

export interface CronJobCreatedEventObject {
  id: BigNumber;
  target: string;
  handler: string;
}
export type CronJobCreatedEvent = TypedEvent<
  [BigNumber, string, string],
  CronJobCreatedEventObject
>;

export type CronJobCreatedEventFilter = TypedEventFilter<CronJobCreatedEvent>;

export interface CronJobDeletedEventObject {
  id: BigNumber;
}
export type CronJobDeletedEvent = TypedEvent<
  [BigNumber],
  CronJobDeletedEventObject
>;

export type CronJobDeletedEventFilter = TypedEventFilter<CronJobDeletedEvent>;

export interface CronJobExecutedEventObject {
  id: BigNumber;
  timestamp: BigNumber;
}
export type CronJobExecutedEvent = TypedEvent<
  [BigNumber, BigNumber],
  CronJobExecutedEventObject
>;

export type CronJobExecutedEventFilter = TypedEventFilter<CronJobExecutedEvent>;

export interface CronJobUpdatedEventObject {
  id: BigNumber;
  target: string;
  handler: string;
}
export type CronJobUpdatedEvent = TypedEvent<
  [BigNumber, string, string],
  CronJobUpdatedEventObject
>;

export type CronJobUpdatedEventFilter = TypedEventFilter<CronJobUpdatedEvent>;

export interface CronUpkeepInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CronUpkeepInterfaceInterface;

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
    addDelegator(
      delegator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    checkUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createCronJobFromEncodedSpec(
      target: PromiseOrValue<string>,
      handler: PromiseOrValue<BytesLike>,
      encodedCronSpec: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deleteCronJob(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getActiveCronJobIDs(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getCronJob(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber] & {
        target: string;
        handler: string;
        cronString: string;
        nextTick: BigNumber;
      }
    >;

    getNextCronJobIDs(overrides?: CallOverrides): Promise<[BigNumber]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    performUpkeep(
      performData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeDelegator(
      delegator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateCronJob(
      id: PromiseOrValue<BigNumberish>,
      newTarget: PromiseOrValue<string>,
      newHandler: PromiseOrValue<BytesLike>,
      newEncodedCronSpec: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addDelegator(
    delegator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  checkUpkeep(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createCronJobFromEncodedSpec(
    target: PromiseOrValue<string>,
    handler: PromiseOrValue<BytesLike>,
    encodedCronSpec: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deleteCronJob(
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getActiveCronJobIDs(overrides?: CallOverrides): Promise<BigNumber[]>;

  getCronJob(
    id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber] & {
      target: string;
      handler: string;
      cronString: string;
      nextTick: BigNumber;
    }
  >;

  getNextCronJobIDs(overrides?: CallOverrides): Promise<BigNumber>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  performUpkeep(
    performData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeDelegator(
    delegator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateCronJob(
    id: PromiseOrValue<BigNumberish>,
    newTarget: PromiseOrValue<string>,
    newHandler: PromiseOrValue<BytesLike>,
    newEncodedCronSpec: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addDelegator(
      delegator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    checkUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;

    createCronJobFromEncodedSpec(
      target: PromiseOrValue<string>,
      handler: PromiseOrValue<BytesLike>,
      encodedCronSpec: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    deleteCronJob(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getActiveCronJobIDs(overrides?: CallOverrides): Promise<BigNumber[]>;

    getCronJob(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber] & {
        target: string;
        handler: string;
        cronString: string;
        nextTick: BigNumber;
      }
    >;

    getNextCronJobIDs(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: CallOverrides): Promise<void>;

    performUpkeep(
      performData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeDelegator(
      delegator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    updateCronJob(
      id: PromiseOrValue<BigNumberish>,
      newTarget: PromiseOrValue<string>,
      newHandler: PromiseOrValue<BytesLike>,
      newEncodedCronSpec: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CronJobCreated(uint256,address,bytes)"(
      id?: PromiseOrValue<BigNumberish> | null,
      target?: null,
      handler?: null
    ): CronJobCreatedEventFilter;
    CronJobCreated(
      id?: PromiseOrValue<BigNumberish> | null,
      target?: null,
      handler?: null
    ): CronJobCreatedEventFilter;

    "CronJobDeleted(uint256)"(
      id?: PromiseOrValue<BigNumberish> | null
    ): CronJobDeletedEventFilter;
    CronJobDeleted(
      id?: PromiseOrValue<BigNumberish> | null
    ): CronJobDeletedEventFilter;

    "CronJobExecuted(uint256,uint256)"(
      id?: PromiseOrValue<BigNumberish> | null,
      timestamp?: null
    ): CronJobExecutedEventFilter;
    CronJobExecuted(
      id?: PromiseOrValue<BigNumberish> | null,
      timestamp?: null
    ): CronJobExecutedEventFilter;

    "CronJobUpdated(uint256,address,bytes)"(
      id?: PromiseOrValue<BigNumberish> | null,
      target?: null,
      handler?: null
    ): CronJobUpdatedEventFilter;
    CronJobUpdated(
      id?: PromiseOrValue<BigNumberish> | null,
      target?: null,
      handler?: null
    ): CronJobUpdatedEventFilter;
  };

  estimateGas: {
    addDelegator(
      delegator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    checkUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createCronJobFromEncodedSpec(
      target: PromiseOrValue<string>,
      handler: PromiseOrValue<BytesLike>,
      encodedCronSpec: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deleteCronJob(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getActiveCronJobIDs(overrides?: CallOverrides): Promise<BigNumber>;

    getCronJob(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNextCronJobIDs(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    performUpkeep(
      performData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeDelegator(
      delegator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateCronJob(
      id: PromiseOrValue<BigNumberish>,
      newTarget: PromiseOrValue<string>,
      newHandler: PromiseOrValue<BytesLike>,
      newEncodedCronSpec: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addDelegator(
      delegator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    checkUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createCronJobFromEncodedSpec(
      target: PromiseOrValue<string>,
      handler: PromiseOrValue<BytesLike>,
      encodedCronSpec: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deleteCronJob(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getActiveCronJobIDs(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCronJob(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNextCronJobIDs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    performUpkeep(
      performData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeDelegator(
      delegator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateCronJob(
      id: PromiseOrValue<BigNumberish>,
      newTarget: PromiseOrValue<string>,
      newHandler: PromiseOrValue<BytesLike>,
      newEncodedCronSpec: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
