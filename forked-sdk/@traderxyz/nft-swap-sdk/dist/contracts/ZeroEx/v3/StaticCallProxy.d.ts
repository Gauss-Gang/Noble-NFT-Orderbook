import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from '../../common';
export interface StaticCallProxyInterface extends utils.Interface {
    functions: {
        'transferFrom(bytes,address,address,uint256)': FunctionFragment;
        'getProxyId()': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'transferFrom' | 'getProxyId'): FunctionFragment;
    encodeFunctionData(functionFragment: 'transferFrom', values: [BytesLike, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'getProxyId', values?: undefined): string;
    decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getProxyId', data: BytesLike): Result;
    events: {};
}
export interface StaticCallProxy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StaticCallProxyInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        transferFrom(assetData: BytesLike, from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        getProxyId(overrides?: CallOverrides): Promise<[string]>;
    };
    transferFrom(assetData: BytesLike, from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    getProxyId(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        transferFrom(assetData: BytesLike, from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getProxyId(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        transferFrom(assetData: BytesLike, from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getProxyId(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        transferFrom(assetData: BytesLike, from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProxyId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
