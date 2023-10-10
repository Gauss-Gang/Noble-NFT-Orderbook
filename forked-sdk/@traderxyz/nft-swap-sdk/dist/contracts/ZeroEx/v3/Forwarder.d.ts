import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from '../../common';
export declare namespace LibOrder {
    type OrderStruct = {
        makerAddress: string;
        takerAddress: string;
        feeRecipientAddress: string;
        senderAddress: string;
        makerAssetAmount: BigNumberish;
        takerAssetAmount: BigNumberish;
        makerFee: BigNumberish;
        takerFee: BigNumberish;
        expirationTimeSeconds: BigNumberish;
        salt: BigNumberish;
        makerAssetData: BytesLike;
        takerAssetData: BytesLike;
        makerFeeAssetData: BytesLike;
        takerFeeAssetData: BytesLike;
    };
    type OrderStructOutput = [string, string, string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, string, string, string, string] & {
        makerAddress: string;
        takerAddress: string;
        feeRecipientAddress: string;
        senderAddress: string;
        makerAssetAmount: BigNumber;
        takerAssetAmount: BigNumber;
        makerFee: BigNumber;
        takerFee: BigNumber;
        expirationTimeSeconds: BigNumber;
        salt: BigNumber;
        makerAssetData: string;
        takerAssetData: string;
        makerFeeAssetData: string;
        takerFeeAssetData: string;
    };
}
export interface ForwarderInterface extends utils.Interface {
    functions: {
        'ERC1155_BATCH_RECEIVED()': FunctionFragment;
        'ERC1155_RECEIVED()': FunctionFragment;
        'EXCHANGE_V2_ORDER_ID()': FunctionFragment;
        'approveMakerAssetProxy(bytes)': FunctionFragment;
        'marketBuyOrdersWithEth((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[],uint256[],address[])': FunctionFragment;
        'marketSellAmountWithEth((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[],uint256[],address[])': FunctionFragment;
        'marketSellOrdersWithEth((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],bytes[],uint256[],address[])': FunctionFragment;
        'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)': FunctionFragment;
        'onERC1155Received(address,address,uint256,uint256,bytes)': FunctionFragment;
        'owner()': FunctionFragment;
        'transferOwnership(address)': FunctionFragment;
        'withdrawAsset(bytes,uint256)': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'ERC1155_BATCH_RECEIVED' | 'ERC1155_RECEIVED' | 'EXCHANGE_V2_ORDER_ID' | 'approveMakerAssetProxy' | 'marketBuyOrdersWithEth' | 'marketSellAmountWithEth' | 'marketSellOrdersWithEth' | 'onERC1155BatchReceived' | 'onERC1155Received' | 'owner' | 'transferOwnership' | 'withdrawAsset'): FunctionFragment;
    encodeFunctionData(functionFragment: 'ERC1155_BATCH_RECEIVED', values?: undefined): string;
    encodeFunctionData(functionFragment: 'ERC1155_RECEIVED', values?: undefined): string;
    encodeFunctionData(functionFragment: 'EXCHANGE_V2_ORDER_ID', values?: undefined): string;
    encodeFunctionData(functionFragment: 'approveMakerAssetProxy', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'marketBuyOrdersWithEth', values: [LibOrder.OrderStruct[], BigNumberish, BytesLike[], BigNumberish[], string[]]): string;
    encodeFunctionData(functionFragment: 'marketSellAmountWithEth', values: [LibOrder.OrderStruct[], BigNumberish, BytesLike[], BigNumberish[], string[]]): string;
    encodeFunctionData(functionFragment: 'marketSellOrdersWithEth', values: [LibOrder.OrderStruct[], BytesLike[], BigNumberish[], string[]]): string;
    encodeFunctionData(functionFragment: 'onERC1155BatchReceived', values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: 'onERC1155Received', values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
    encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
    encodeFunctionData(functionFragment: 'withdrawAsset', values: [BytesLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: 'ERC1155_BATCH_RECEIVED', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'ERC1155_RECEIVED', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'EXCHANGE_V2_ORDER_ID', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'approveMakerAssetProxy', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'marketBuyOrdersWithEth', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'marketSellAmountWithEth', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'marketSellOrdersWithEth', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'onERC1155BatchReceived', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'onERC1155Received', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'withdrawAsset', data: BytesLike): Result;
    events: {
        'OwnershipTransferred(address,address)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface Forwarder extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ForwarderInterface;
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
        ERC1155_BATCH_RECEIVED(overrides?: CallOverrides): Promise<[string]>;
        ERC1155_RECEIVED(overrides?: CallOverrides): Promise<[string]>;
        EXCHANGE_V2_ORDER_ID(overrides?: CallOverrides): Promise<[string]>;
        approveMakerAssetProxy(assetData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        marketBuyOrdersWithEth(orders: LibOrder.OrderStruct[], makerAssetBuyAmount: BigNumberish, signatures: BytesLike[], ethFeeAmounts: BigNumberish[], feeRecipients: string[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        marketSellAmountWithEth(orders: LibOrder.OrderStruct[], ethSellAmount: BigNumberish, signatures: BytesLike[], ethFeeAmounts: BigNumberish[], feeRecipients: string[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        marketSellOrdersWithEth(orders: LibOrder.OrderStruct[], signatures: BytesLike[], ethFeeAmounts: BigNumberish[], feeRecipients: string[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC1155BatchReceived(operator: string, from: string, ids: BigNumberish[], values: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC1155Received(operator: string, from: string, id: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawAsset(assetData: BytesLike, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    ERC1155_BATCH_RECEIVED(overrides?: CallOverrides): Promise<string>;
    ERC1155_RECEIVED(overrides?: CallOverrides): Promise<string>;
    EXCHANGE_V2_ORDER_ID(overrides?: CallOverrides): Promise<string>;
    approveMakerAssetProxy(assetData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    marketBuyOrdersWithEth(orders: LibOrder.OrderStruct[], makerAssetBuyAmount: BigNumberish, signatures: BytesLike[], ethFeeAmounts: BigNumberish[], feeRecipients: string[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    marketSellAmountWithEth(orders: LibOrder.OrderStruct[], ethSellAmount: BigNumberish, signatures: BytesLike[], ethFeeAmounts: BigNumberish[], feeRecipients: string[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    marketSellOrdersWithEth(orders: LibOrder.OrderStruct[], signatures: BytesLike[], ethFeeAmounts: BigNumberish[], feeRecipients: string[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC1155BatchReceived(operator: string, from: string, ids: BigNumberish[], values: BigNumberish[], data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC1155Received(operator: string, from: string, id: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawAsset(assetData: BytesLike, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ERC1155_BATCH_RECEIVED(overrides?: CallOverrides): Promise<string>;
        ERC1155_RECEIVED(overrides?: CallOverrides): Promise<string>;
        EXCHANGE_V2_ORDER_ID(overrides?: CallOverrides): Promise<string>;
        approveMakerAssetProxy(assetData: BytesLike, overrides?: CallOverrides): Promise<void>;
        marketBuyOrdersWithEth(orders: LibOrder.OrderStruct[], makerAssetBuyAmount: BigNumberish, signatures: BytesLike[], ethFeeAmounts: BigNumberish[], feeRecipients: string[], overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            wethSpentAmount: BigNumber;
            makerAssetAcquiredAmount: BigNumber;
        }>;
        marketSellAmountWithEth(orders: LibOrder.OrderStruct[], ethSellAmount: BigNumberish, signatures: BytesLike[], ethFeeAmounts: BigNumberish[], feeRecipients: string[], overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            wethSpentAmount: BigNumber;
            makerAssetAcquiredAmount: BigNumber;
        }>;
        marketSellOrdersWithEth(orders: LibOrder.OrderStruct[], signatures: BytesLike[], ethFeeAmounts: BigNumberish[], feeRecipients: string[], overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            wethSpentAmount: BigNumber;
            makerAssetAcquiredAmount: BigNumber;
        }>;
        onERC1155BatchReceived(operator: string, from: string, ids: BigNumberish[], values: BigNumberish[], data: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(operator: string, from: string, id: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        withdrawAsset(assetData: BytesLike, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        'OwnershipTransferred(address,address)'(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        ERC1155_BATCH_RECEIVED(overrides?: CallOverrides): Promise<BigNumber>;
        ERC1155_RECEIVED(overrides?: CallOverrides): Promise<BigNumber>;
        EXCHANGE_V2_ORDER_ID(overrides?: CallOverrides): Promise<BigNumber>;
        approveMakerAssetProxy(assetData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        marketBuyOrdersWithEth(orders: LibOrder.OrderStruct[], makerAssetBuyAmount: BigNumberish, signatures: BytesLike[], ethFeeAmounts: BigNumberish[], feeRecipients: string[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        marketSellAmountWithEth(orders: LibOrder.OrderStruct[], ethSellAmount: BigNumberish, signatures: BytesLike[], ethFeeAmounts: BigNumberish[], feeRecipients: string[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        marketSellOrdersWithEth(orders: LibOrder.OrderStruct[], signatures: BytesLike[], ethFeeAmounts: BigNumberish[], feeRecipients: string[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC1155BatchReceived(operator: string, from: string, ids: BigNumberish[], values: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC1155Received(operator: string, from: string, id: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawAsset(assetData: BytesLike, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ERC1155_BATCH_RECEIVED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ERC1155_RECEIVED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        EXCHANGE_V2_ORDER_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approveMakerAssetProxy(assetData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        marketBuyOrdersWithEth(orders: LibOrder.OrderStruct[], makerAssetBuyAmount: BigNumberish, signatures: BytesLike[], ethFeeAmounts: BigNumberish[], feeRecipients: string[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        marketSellAmountWithEth(orders: LibOrder.OrderStruct[], ethSellAmount: BigNumberish, signatures: BytesLike[], ethFeeAmounts: BigNumberish[], feeRecipients: string[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        marketSellOrdersWithEth(orders: LibOrder.OrderStruct[], signatures: BytesLike[], ethFeeAmounts: BigNumberish[], feeRecipients: string[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(operator: string, from: string, ids: BigNumberish[], values: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(operator: string, from: string, id: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAsset(assetData: BytesLike, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
