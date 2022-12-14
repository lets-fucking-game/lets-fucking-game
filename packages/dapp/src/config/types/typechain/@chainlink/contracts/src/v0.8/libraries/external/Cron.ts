/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../../common";

export type FieldStruct = {
  fieldType: PromiseOrValue<BigNumberish>;
  singleValue: PromiseOrValue<BigNumberish>;
  interval: PromiseOrValue<BigNumberish>;
  rangeStart: PromiseOrValue<BigNumberish>;
  rangeEnd: PromiseOrValue<BigNumberish>;
  listLength: PromiseOrValue<BigNumberish>;
  list: PromiseOrValue<BigNumberish>[];
};

export type FieldStructOutput = [
  number,
  number,
  number,
  number,
  number,
  number,
  number[]
] & {
  fieldType: number;
  singleValue: number;
  interval: number;
  rangeStart: number;
  rangeEnd: number;
  listLength: number;
  list: number[];
};

export type SpecStruct = {
  minute: FieldStruct;
  hour: FieldStruct;
  day: FieldStruct;
  month: FieldStruct;
  dayOfWeek: FieldStruct;
};

export type SpecStructOutput = [
  FieldStructOutput,
  FieldStructOutput,
  FieldStructOutput,
  FieldStructOutput,
  FieldStructOutput
] & {
  minute: FieldStructOutput;
  hour: FieldStructOutput;
  day: FieldStructOutput;
  month: FieldStructOutput;
  dayOfWeek: FieldStructOutput;
};

export interface CronInterface extends utils.Interface {
  functions: {
    "lastTick(((uint8,uint8,uint8,uint8,uint8,uint8,uint8[26]),(uint8,uint8,uint8,uint8,uint8,uint8,uint8[26]),(uint8,uint8,uint8,uint8,uint8,uint8,uint8[26]),(uint8,uint8,uint8,uint8,uint8,uint8,uint8[26]),(uint8,uint8,uint8,uint8,uint8,uint8,uint8[26])))": FunctionFragment;
    "matches(((uint8,uint8,uint8,uint8,uint8,uint8,uint8[26]),(uint8,uint8,uint8,uint8,uint8,uint8,uint8[26]),(uint8,uint8,uint8,uint8,uint8,uint8,uint8[26]),(uint8,uint8,uint8,uint8,uint8,uint8,uint8[26]),(uint8,uint8,uint8,uint8,uint8,uint8,uint8[26])),uint256)": FunctionFragment;
    "nextTick(((uint8,uint8,uint8,uint8,uint8,uint8,uint8[26]),(uint8,uint8,uint8,uint8,uint8,uint8,uint8[26]),(uint8,uint8,uint8,uint8,uint8,uint8,uint8[26]),(uint8,uint8,uint8,uint8,uint8,uint8,uint8[26]),(uint8,uint8,uint8,uint8,uint8,uint8,uint8[26])))": FunctionFragment;
    "toCronString(((uint8,uint8,uint8,uint8,uint8,uint8,uint8[26]),(uint8,uint8,uint8,uint8,uint8,uint8,uint8[26]),(uint8,uint8,uint8,uint8,uint8,uint8,uint8[26]),(uint8,uint8,uint8,uint8,uint8,uint8,uint8[26]),(uint8,uint8,uint8,uint8,uint8,uint8,uint8[26])))": FunctionFragment;
    "toEncodedSpec(string)": FunctionFragment;
    "toSpec(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "lastTick"
      | "matches"
      | "nextTick"
      | "toCronString"
      | "toEncodedSpec"
      | "toSpec"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "lastTick",
    values: [SpecStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "matches",
    values: [SpecStruct, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "nextTick",
    values: [SpecStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "toCronString",
    values: [SpecStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "toEncodedSpec",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "toSpec",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "lastTick", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "matches", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nextTick", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "toCronString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toEncodedSpec",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "toSpec", data: BytesLike): Result;

  events: {};
}

export interface Cron extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CronInterface;

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
    lastTick(spec: SpecStruct, overrides?: CallOverrides): Promise<[BigNumber]>;

    matches(
      spec: SpecStruct,
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    nextTick(spec: SpecStruct, overrides?: CallOverrides): Promise<[BigNumber]>;

    toCronString(
      spec: SpecStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    toEncodedSpec(
      cronString: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    toSpec(
      cronString: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[SpecStructOutput]>;
  };

  lastTick(spec: SpecStruct, overrides?: CallOverrides): Promise<BigNumber>;

  matches(
    spec: SpecStruct,
    timestamp: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  nextTick(spec: SpecStruct, overrides?: CallOverrides): Promise<BigNumber>;

  toCronString(spec: SpecStruct, overrides?: CallOverrides): Promise<string>;

  toEncodedSpec(
    cronString: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  toSpec(
    cronString: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<SpecStructOutput>;

  callStatic: {
    lastTick(spec: SpecStruct, overrides?: CallOverrides): Promise<BigNumber>;

    matches(
      spec: SpecStruct,
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    nextTick(spec: SpecStruct, overrides?: CallOverrides): Promise<BigNumber>;

    toCronString(spec: SpecStruct, overrides?: CallOverrides): Promise<string>;

    toEncodedSpec(
      cronString: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    toSpec(
      cronString: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<SpecStructOutput>;
  };

  filters: {};

  estimateGas: {
    lastTick(spec: SpecStruct, overrides?: CallOverrides): Promise<BigNumber>;

    matches(
      spec: SpecStruct,
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nextTick(spec: SpecStruct, overrides?: CallOverrides): Promise<BigNumber>;

    toCronString(
      spec: SpecStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    toEncodedSpec(
      cronString: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    toSpec(
      cronString: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    lastTick(
      spec: SpecStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    matches(
      spec: SpecStruct,
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextTick(
      spec: SpecStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toCronString(
      spec: SpecStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toEncodedSpec(
      cronString: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toSpec(
      cronString: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
