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
    type OrderInfoStruct = {
        orderStatus: BigNumberish;
        orderHash: BytesLike;
        orderTakerAssetFilledAmount: BigNumberish;
    };
    type OrderInfoStructOutput = [number, string, BigNumber] & {
        orderStatus: number;
        orderHash: string;
        orderTakerAssetFilledAmount: BigNumber;
    };
}
export declare namespace LibZeroExTransaction {
    type ZeroExTransactionStruct = {
        salt: BigNumberish;
        expirationTimeSeconds: BigNumberish;
        gasPrice: BigNumberish;
        signerAddress: string;
        data: BytesLike;
    };
    type ZeroExTransactionStructOutput = [BigNumber, BigNumber, BigNumber, string, string] & {
        salt: BigNumber;
        expirationTimeSeconds: BigNumber;
        gasPrice: BigNumber;
        signerAddress: string;
        data: string;
    };
}
export declare namespace LibFillResults {
    type FillResultsStruct = {
        makerAssetFilledAmount: BigNumberish;
        takerAssetFilledAmount: BigNumberish;
        makerFeePaid: BigNumberish;
        takerFeePaid: BigNumberish;
        protocolFeePaid: BigNumberish;
    };
    type FillResultsStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        makerAssetFilledAmount: BigNumber;
        takerAssetFilledAmount: BigNumber;
        makerFeePaid: BigNumber;
        takerFeePaid: BigNumber;
        protocolFeePaid: BigNumber;
    };
    type BatchMatchedFillResultsStruct = {
        left: LibFillResults.FillResultsStruct[];
        right: LibFillResults.FillResultsStruct[];
        profitInLeftMakerAsset: BigNumberish;
        profitInRightMakerAsset: BigNumberish;
    };
    type BatchMatchedFillResultsStructOutput = [LibFillResults.FillResultsStructOutput[], LibFillResults.FillResultsStructOutput[], BigNumber, BigNumber] & {
        left: LibFillResults.FillResultsStructOutput[];
        right: LibFillResults.FillResultsStructOutput[];
        profitInLeftMakerAsset: BigNumber;
        profitInRightMakerAsset: BigNumber;
    };
    type MatchedFillResultsStruct = {
        left: LibFillResults.FillResultsStruct;
        right: LibFillResults.FillResultsStruct;
        profitInLeftMakerAsset: BigNumberish;
        profitInRightMakerAsset: BigNumberish;
    };
    type MatchedFillResultsStructOutput = [LibFillResults.FillResultsStructOutput, LibFillResults.FillResultsStructOutput, BigNumber, BigNumber] & {
        left: LibFillResults.FillResultsStructOutput;
        right: LibFillResults.FillResultsStructOutput;
        profitInLeftMakerAsset: BigNumber;
        profitInRightMakerAsset: BigNumber;
    };
}
export interface ExchangeContractInterface extends utils.Interface {
    functions: {
        'EIP1271_MAGIC_VALUE()': FunctionFragment;
        'EIP712_EXCHANGE_DOMAIN_HASH()': FunctionFragment;
        'allowedValidators(address,address)': FunctionFragment;
        'batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[])': FunctionFragment;
        'batchExecuteTransactions((uint256,uint256,uint256,address,bytes)[],bytes[])': FunctionFragment;
        'batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[])': FunctionFragment;
        'batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[])': FunctionFragment;
        'batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[])': FunctionFragment;
        'batchMatchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],bytes[],bytes[])': FunctionFragment;
        'batchMatchOrdersWithMaximalFill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],bytes[],bytes[])': FunctionFragment;
        'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))': FunctionFragment;
        'cancelOrdersUpTo(uint256)': FunctionFragment;
        'cancelled(bytes32)': FunctionFragment;
        'currentContextAddress()': FunctionFragment;
        'detachProtocolFeeCollector()': FunctionFragment;
        'executeTransaction((uint256,uint256,uint256,address,bytes),bytes)': FunctionFragment;
        'fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes)': FunctionFragment;
        'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes)': FunctionFragment;
        'filled(bytes32)': FunctionFragment;
        'getAssetProxy(bytes4)': FunctionFragment;
        'getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))': FunctionFragment;
        'isValidHashSignature(bytes32,address,bytes)': FunctionFragment;
        'isValidOrderSignature((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes)': FunctionFragment;
        'isValidTransactionSignature((uint256,uint256,uint256,address,bytes),bytes)': FunctionFragment;
        'marketBuyOrdersFillOrKill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': FunctionFragment;
        'marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': FunctionFragment;
        'marketSellOrdersFillOrKill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': FunctionFragment;
        'marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': FunctionFragment;
        'matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes,bytes)': FunctionFragment;
        'matchOrdersWithMaximalFill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes,bytes)': FunctionFragment;
        'orderEpoch(address,address)': FunctionFragment;
        'owner()': FunctionFragment;
        'preSign(bytes32)': FunctionFragment;
        'preSigned(bytes32,address)': FunctionFragment;
        'protocolFeeCollector()': FunctionFragment;
        'protocolFeeMultiplier()': FunctionFragment;
        'registerAssetProxy(address)': FunctionFragment;
        'setProtocolFeeCollectorAddress(address)': FunctionFragment;
        'setProtocolFeeMultiplier(uint256)': FunctionFragment;
        'setSignatureValidatorApproval(address,bool)': FunctionFragment;
        'simulateDispatchTransferFromCalls(bytes[],address[],address[],uint256[])': FunctionFragment;
        'transactionsExecuted(bytes32)': FunctionFragment;
        'transferOwnership(address)': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'EIP1271_MAGIC_VALUE' | 'EIP712_EXCHANGE_DOMAIN_HASH' | 'allowedValidators' | 'batchCancelOrders' | 'batchExecuteTransactions' | 'batchFillOrKillOrders' | 'batchFillOrders' | 'batchFillOrdersNoThrow' | 'batchMatchOrders' | 'batchMatchOrdersWithMaximalFill' | 'cancelOrder' | 'cancelOrdersUpTo' | 'cancelled' | 'currentContextAddress' | 'detachProtocolFeeCollector' | 'executeTransaction' | 'fillOrKillOrder' | 'fillOrder' | 'filled' | 'getAssetProxy' | 'getOrderInfo' | 'isValidHashSignature' | 'isValidOrderSignature' | 'isValidTransactionSignature' | 'marketBuyOrdersFillOrKill' | 'marketBuyOrdersNoThrow' | 'marketSellOrdersFillOrKill' | 'marketSellOrdersNoThrow' | 'matchOrders' | 'matchOrdersWithMaximalFill' | 'orderEpoch' | 'owner' | 'preSign' | 'preSigned' | 'protocolFeeCollector' | 'protocolFeeMultiplier' | 'registerAssetProxy' | 'setProtocolFeeCollectorAddress' | 'setProtocolFeeMultiplier' | 'setSignatureValidatorApproval' | 'simulateDispatchTransferFromCalls' | 'transactionsExecuted' | 'transferOwnership'): FunctionFragment;
    encodeFunctionData(functionFragment: 'EIP1271_MAGIC_VALUE', values?: undefined): string;
    encodeFunctionData(functionFragment: 'EIP712_EXCHANGE_DOMAIN_HASH', values?: undefined): string;
    encodeFunctionData(functionFragment: 'allowedValidators', values: [string, string]): string;
    encodeFunctionData(functionFragment: 'batchCancelOrders', values: [LibOrder.OrderStruct[]]): string;
    encodeFunctionData(functionFragment: 'batchExecuteTransactions', values: [LibZeroExTransaction.ZeroExTransactionStruct[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: 'batchFillOrKillOrders', values: [LibOrder.OrderStruct[], BigNumberish[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: 'batchFillOrders', values: [LibOrder.OrderStruct[], BigNumberish[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: 'batchFillOrdersNoThrow', values: [LibOrder.OrderStruct[], BigNumberish[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: 'batchMatchOrders', values: [LibOrder.OrderStruct[], LibOrder.OrderStruct[], BytesLike[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: 'batchMatchOrdersWithMaximalFill', values: [LibOrder.OrderStruct[], LibOrder.OrderStruct[], BytesLike[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: 'cancelOrder', values: [LibOrder.OrderStruct]): string;
    encodeFunctionData(functionFragment: 'cancelOrdersUpTo', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'cancelled', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'currentContextAddress', values?: undefined): string;
    encodeFunctionData(functionFragment: 'detachProtocolFeeCollector', values?: undefined): string;
    encodeFunctionData(functionFragment: 'executeTransaction', values: [LibZeroExTransaction.ZeroExTransactionStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: 'fillOrKillOrder', values: [LibOrder.OrderStruct, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: 'fillOrder', values: [LibOrder.OrderStruct, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: 'filled', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'getAssetProxy', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'getOrderInfo', values: [LibOrder.OrderStruct]): string;
    encodeFunctionData(functionFragment: 'isValidHashSignature', values: [BytesLike, string, BytesLike]): string;
    encodeFunctionData(functionFragment: 'isValidOrderSignature', values: [LibOrder.OrderStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: 'isValidTransactionSignature', values: [LibZeroExTransaction.ZeroExTransactionStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: 'marketBuyOrdersFillOrKill', values: [LibOrder.OrderStruct[], BigNumberish, BytesLike[]]): string;
    encodeFunctionData(functionFragment: 'marketBuyOrdersNoThrow', values: [LibOrder.OrderStruct[], BigNumberish, BytesLike[]]): string;
    encodeFunctionData(functionFragment: 'marketSellOrdersFillOrKill', values: [LibOrder.OrderStruct[], BigNumberish, BytesLike[]]): string;
    encodeFunctionData(functionFragment: 'marketSellOrdersNoThrow', values: [LibOrder.OrderStruct[], BigNumberish, BytesLike[]]): string;
    encodeFunctionData(functionFragment: 'matchOrders', values: [LibOrder.OrderStruct, LibOrder.OrderStruct, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: 'matchOrdersWithMaximalFill', values: [LibOrder.OrderStruct, LibOrder.OrderStruct, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: 'orderEpoch', values: [string, string]): string;
    encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
    encodeFunctionData(functionFragment: 'preSign', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'preSigned', values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: 'protocolFeeCollector', values?: undefined): string;
    encodeFunctionData(functionFragment: 'protocolFeeMultiplier', values?: undefined): string;
    encodeFunctionData(functionFragment: 'registerAssetProxy', values: [string]): string;
    encodeFunctionData(functionFragment: 'setProtocolFeeCollectorAddress', values: [string]): string;
    encodeFunctionData(functionFragment: 'setProtocolFeeMultiplier', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'setSignatureValidatorApproval', values: [string, boolean]): string;
    encodeFunctionData(functionFragment: 'simulateDispatchTransferFromCalls', values: [BytesLike[], string[], string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: 'transactionsExecuted', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
    decodeFunctionResult(functionFragment: 'EIP1271_MAGIC_VALUE', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'EIP712_EXCHANGE_DOMAIN_HASH', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'allowedValidators', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchCancelOrders', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchExecuteTransactions', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchFillOrKillOrders', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchFillOrders', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchFillOrdersNoThrow', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchMatchOrders', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchMatchOrdersWithMaximalFill', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'cancelOrder', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'cancelOrdersUpTo', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'cancelled', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'currentContextAddress', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'detachProtocolFeeCollector', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'executeTransaction', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'fillOrKillOrder', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'fillOrder', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'filled', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getAssetProxy', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getOrderInfo', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isValidHashSignature', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isValidOrderSignature', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isValidTransactionSignature', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'marketBuyOrdersFillOrKill', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'marketBuyOrdersNoThrow', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'marketSellOrdersFillOrKill', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'marketSellOrdersNoThrow', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'matchOrders', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'matchOrdersWithMaximalFill', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'orderEpoch', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'preSign', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'preSigned', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'protocolFeeCollector', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'protocolFeeMultiplier', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'registerAssetProxy', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setProtocolFeeCollectorAddress', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setProtocolFeeMultiplier', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setSignatureValidatorApproval', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'simulateDispatchTransferFromCalls', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transactionsExecuted', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
    events: {
        'AssetProxyRegistered(bytes4,address)': EventFragment;
        'Cancel(address,address,bytes,bytes,address,bytes32)': EventFragment;
        'CancelUpTo(address,address,uint256)': EventFragment;
        'Fill(address,address,bytes,bytes,bytes,bytes,bytes32,address,address,uint256,uint256,uint256,uint256,uint256)': EventFragment;
        'OwnershipTransferred(address,address)': EventFragment;
        'ProtocolFeeCollectorAddress(address,address)': EventFragment;
        'ProtocolFeeMultiplier(uint256,uint256)': EventFragment;
        'SignatureValidatorApproval(address,address,bool)': EventFragment;
        'TransactionExecution(bytes32)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'AssetProxyRegistered'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Cancel'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'CancelUpTo'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Fill'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ProtocolFeeCollectorAddress'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ProtocolFeeMultiplier'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'SignatureValidatorApproval'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'TransactionExecution'): EventFragment;
}
export interface AssetProxyRegisteredEventObject {
    id: string;
    assetProxy: string;
}
export declare type AssetProxyRegisteredEvent = TypedEvent<[string, string], AssetProxyRegisteredEventObject>;
export declare type AssetProxyRegisteredEventFilter = TypedEventFilter<AssetProxyRegisteredEvent>;
export interface CancelEventObject {
    makerAddress: string;
    feeRecipientAddress: string;
    makerAssetData: string;
    takerAssetData: string;
    senderAddress: string;
    orderHash: string;
}
export declare type CancelEvent = TypedEvent<[string, string, string, string, string, string], CancelEventObject>;
export declare type CancelEventFilter = TypedEventFilter<CancelEvent>;
export interface CancelUpToEventObject {
    makerAddress: string;
    orderSenderAddress: string;
    orderEpoch: BigNumber;
}
export declare type CancelUpToEvent = TypedEvent<[string, string, BigNumber], CancelUpToEventObject>;
export declare type CancelUpToEventFilter = TypedEventFilter<CancelUpToEvent>;
export interface FillEventObject {
    makerAddress: string;
    feeRecipientAddress: string;
    makerAssetData: string;
    takerAssetData: string;
    makerFeeAssetData: string;
    takerFeeAssetData: string;
    orderHash: string;
    takerAddress: string;
    senderAddress: string;
    makerAssetFilledAmount: BigNumber;
    takerAssetFilledAmount: BigNumber;
    makerFeePaid: BigNumber;
    takerFeePaid: BigNumber;
    protocolFeePaid: BigNumber;
}
export declare type FillEvent = TypedEvent<[string, string, string, string, string, string, string, string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber], FillEventObject>;
export declare type FillEventFilter = TypedEventFilter<FillEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ProtocolFeeCollectorAddressEventObject {
    oldProtocolFeeCollector: string;
    updatedProtocolFeeCollector: string;
}
export declare type ProtocolFeeCollectorAddressEvent = TypedEvent<[string, string], ProtocolFeeCollectorAddressEventObject>;
export declare type ProtocolFeeCollectorAddressEventFilter = TypedEventFilter<ProtocolFeeCollectorAddressEvent>;
export interface ProtocolFeeMultiplierEventObject {
    oldProtocolFeeMultiplier: BigNumber;
    updatedProtocolFeeMultiplier: BigNumber;
}
export declare type ProtocolFeeMultiplierEvent = TypedEvent<[BigNumber, BigNumber], ProtocolFeeMultiplierEventObject>;
export declare type ProtocolFeeMultiplierEventFilter = TypedEventFilter<ProtocolFeeMultiplierEvent>;
export interface SignatureValidatorApprovalEventObject {
    signerAddress: string;
    validatorAddress: string;
    isApproved: boolean;
}
export declare type SignatureValidatorApprovalEvent = TypedEvent<[string, string, boolean], SignatureValidatorApprovalEventObject>;
export declare type SignatureValidatorApprovalEventFilter = TypedEventFilter<SignatureValidatorApprovalEvent>;
export interface TransactionExecutionEventObject {
    transactionHash: string;
}
export declare type TransactionExecutionEvent = TypedEvent<[string], TransactionExecutionEventObject>;
export declare type TransactionExecutionEventFilter = TypedEventFilter<TransactionExecutionEvent>;
export interface ExchangeContract extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ExchangeContractInterface;
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
        EIP1271_MAGIC_VALUE(overrides?: CallOverrides): Promise<[string]>;
        EIP712_EXCHANGE_DOMAIN_HASH(overrides?: CallOverrides): Promise<[string]>;
        allowedValidators(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[boolean]>;
        batchCancelOrders(orders: LibOrder.OrderStruct[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchExecuteTransactions(transactions: LibZeroExTransaction.ZeroExTransactionStruct[], signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchFillOrKillOrders(orders: LibOrder.OrderStruct[], takerAssetFillAmounts: BigNumberish[], signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchFillOrders(orders: LibOrder.OrderStruct[], takerAssetFillAmounts: BigNumberish[], signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchFillOrdersNoThrow(orders: LibOrder.OrderStruct[], takerAssetFillAmounts: BigNumberish[], signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchMatchOrders(leftOrders: LibOrder.OrderStruct[], rightOrders: LibOrder.OrderStruct[], leftSignatures: BytesLike[], rightSignatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchMatchOrdersWithMaximalFill(leftOrders: LibOrder.OrderStruct[], rightOrders: LibOrder.OrderStruct[], leftSignatures: BytesLike[], rightSignatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelOrder(order: LibOrder.OrderStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelOrdersUpTo(targetOrderEpoch: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelled(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        currentContextAddress(overrides?: CallOverrides): Promise<[string]>;
        detachProtocolFeeCollector(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeTransaction(transaction: LibZeroExTransaction.ZeroExTransactionStruct, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fillOrKillOrder(order: LibOrder.OrderStruct, takerAssetFillAmount: BigNumberish, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fillOrder(order: LibOrder.OrderStruct, takerAssetFillAmount: BigNumberish, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        filled(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetProxy(assetProxyId: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getOrderInfo(order: LibOrder.OrderStruct, overrides?: CallOverrides): Promise<[LibOrder.OrderInfoStructOutput] & {
            orderInfo: LibOrder.OrderInfoStructOutput;
        }>;
        isValidHashSignature(hash: BytesLike, signerAddress: string, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean] & {
            isValid: boolean;
        }>;
        isValidOrderSignature(order: LibOrder.OrderStruct, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean] & {
            isValid: boolean;
        }>;
        isValidTransactionSignature(transaction: LibZeroExTransaction.ZeroExTransactionStruct, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean] & {
            isValid: boolean;
        }>;
        marketBuyOrdersFillOrKill(orders: LibOrder.OrderStruct[], makerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        marketBuyOrdersNoThrow(orders: LibOrder.OrderStruct[], makerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        marketSellOrdersFillOrKill(orders: LibOrder.OrderStruct[], takerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        marketSellOrdersNoThrow(orders: LibOrder.OrderStruct[], takerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        matchOrders(leftOrder: LibOrder.OrderStruct, rightOrder: LibOrder.OrderStruct, leftSignature: BytesLike, rightSignature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        matchOrdersWithMaximalFill(leftOrder: LibOrder.OrderStruct, rightOrder: LibOrder.OrderStruct, leftSignature: BytesLike, rightSignature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        orderEpoch(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        preSign(hash: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        preSigned(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<[boolean]>;
        protocolFeeCollector(overrides?: CallOverrides): Promise<[string]>;
        protocolFeeMultiplier(overrides?: CallOverrides): Promise<[BigNumber]>;
        registerAssetProxy(assetProxy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setProtocolFeeCollectorAddress(updatedProtocolFeeCollector: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setProtocolFeeMultiplier(updatedProtocolFeeMultiplier: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSignatureValidatorApproval(validatorAddress: string, approval: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        simulateDispatchTransferFromCalls(assetData: BytesLike[], fromAddresses: string[], toAddresses: string[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transactionsExecuted(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    EIP1271_MAGIC_VALUE(overrides?: CallOverrides): Promise<string>;
    EIP712_EXCHANGE_DOMAIN_HASH(overrides?: CallOverrides): Promise<string>;
    allowedValidators(arg0: string, arg1: string, overrides?: CallOverrides): Promise<boolean>;
    batchCancelOrders(orders: LibOrder.OrderStruct[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchExecuteTransactions(transactions: LibZeroExTransaction.ZeroExTransactionStruct[], signatures: BytesLike[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchFillOrKillOrders(orders: LibOrder.OrderStruct[], takerAssetFillAmounts: BigNumberish[], signatures: BytesLike[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchFillOrders(orders: LibOrder.OrderStruct[], takerAssetFillAmounts: BigNumberish[], signatures: BytesLike[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchFillOrdersNoThrow(orders: LibOrder.OrderStruct[], takerAssetFillAmounts: BigNumberish[], signatures: BytesLike[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchMatchOrders(leftOrders: LibOrder.OrderStruct[], rightOrders: LibOrder.OrderStruct[], leftSignatures: BytesLike[], rightSignatures: BytesLike[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchMatchOrdersWithMaximalFill(leftOrders: LibOrder.OrderStruct[], rightOrders: LibOrder.OrderStruct[], leftSignatures: BytesLike[], rightSignatures: BytesLike[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelOrder(order: LibOrder.OrderStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelOrdersUpTo(targetOrderEpoch: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelled(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    currentContextAddress(overrides?: CallOverrides): Promise<string>;
    detachProtocolFeeCollector(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeTransaction(transaction: LibZeroExTransaction.ZeroExTransactionStruct, signature: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fillOrKillOrder(order: LibOrder.OrderStruct, takerAssetFillAmount: BigNumberish, signature: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fillOrder(order: LibOrder.OrderStruct, takerAssetFillAmount: BigNumberish, signature: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    filled(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getAssetProxy(assetProxyId: BytesLike, overrides?: CallOverrides): Promise<string>;
    getOrderInfo(order: LibOrder.OrderStruct, overrides?: CallOverrides): Promise<LibOrder.OrderInfoStructOutput>;
    isValidHashSignature(hash: BytesLike, signerAddress: string, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    isValidOrderSignature(order: LibOrder.OrderStruct, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    isValidTransactionSignature(transaction: LibZeroExTransaction.ZeroExTransactionStruct, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    marketBuyOrdersFillOrKill(orders: LibOrder.OrderStruct[], makerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    marketBuyOrdersNoThrow(orders: LibOrder.OrderStruct[], makerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    marketSellOrdersFillOrKill(orders: LibOrder.OrderStruct[], takerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    marketSellOrdersNoThrow(orders: LibOrder.OrderStruct[], takerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    matchOrders(leftOrder: LibOrder.OrderStruct, rightOrder: LibOrder.OrderStruct, leftSignature: BytesLike, rightSignature: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    matchOrdersWithMaximalFill(leftOrder: LibOrder.OrderStruct, rightOrder: LibOrder.OrderStruct, leftSignature: BytesLike, rightSignature: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    orderEpoch(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    preSign(hash: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    preSigned(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<boolean>;
    protocolFeeCollector(overrides?: CallOverrides): Promise<string>;
    protocolFeeMultiplier(overrides?: CallOverrides): Promise<BigNumber>;
    registerAssetProxy(assetProxy: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setProtocolFeeCollectorAddress(updatedProtocolFeeCollector: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setProtocolFeeMultiplier(updatedProtocolFeeMultiplier: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSignatureValidatorApproval(validatorAddress: string, approval: boolean, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    simulateDispatchTransferFromCalls(assetData: BytesLike[], fromAddresses: string[], toAddresses: string[], amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transactionsExecuted(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        EIP1271_MAGIC_VALUE(overrides?: CallOverrides): Promise<string>;
        EIP712_EXCHANGE_DOMAIN_HASH(overrides?: CallOverrides): Promise<string>;
        allowedValidators(arg0: string, arg1: string, overrides?: CallOverrides): Promise<boolean>;
        batchCancelOrders(orders: LibOrder.OrderStruct[], overrides?: CallOverrides): Promise<void>;
        batchExecuteTransactions(transactions: LibZeroExTransaction.ZeroExTransactionStruct[], signatures: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        batchFillOrKillOrders(orders: LibOrder.OrderStruct[], takerAssetFillAmounts: BigNumberish[], signatures: BytesLike[], overrides?: CallOverrides): Promise<LibFillResults.FillResultsStructOutput[]>;
        batchFillOrders(orders: LibOrder.OrderStruct[], takerAssetFillAmounts: BigNumberish[], signatures: BytesLike[], overrides?: CallOverrides): Promise<LibFillResults.FillResultsStructOutput[]>;
        batchFillOrdersNoThrow(orders: LibOrder.OrderStruct[], takerAssetFillAmounts: BigNumberish[], signatures: BytesLike[], overrides?: CallOverrides): Promise<LibFillResults.FillResultsStructOutput[]>;
        batchMatchOrders(leftOrders: LibOrder.OrderStruct[], rightOrders: LibOrder.OrderStruct[], leftSignatures: BytesLike[], rightSignatures: BytesLike[], overrides?: CallOverrides): Promise<LibFillResults.BatchMatchedFillResultsStructOutput>;
        batchMatchOrdersWithMaximalFill(leftOrders: LibOrder.OrderStruct[], rightOrders: LibOrder.OrderStruct[], leftSignatures: BytesLike[], rightSignatures: BytesLike[], overrides?: CallOverrides): Promise<LibFillResults.BatchMatchedFillResultsStructOutput>;
        cancelOrder(order: LibOrder.OrderStruct, overrides?: CallOverrides): Promise<void>;
        cancelOrdersUpTo(targetOrderEpoch: BigNumberish, overrides?: CallOverrides): Promise<void>;
        cancelled(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        currentContextAddress(overrides?: CallOverrides): Promise<string>;
        detachProtocolFeeCollector(overrides?: CallOverrides): Promise<void>;
        executeTransaction(transaction: LibZeroExTransaction.ZeroExTransactionStruct, signature: BytesLike, overrides?: CallOverrides): Promise<string>;
        fillOrKillOrder(order: LibOrder.OrderStruct, takerAssetFillAmount: BigNumberish, signature: BytesLike, overrides?: CallOverrides): Promise<LibFillResults.FillResultsStructOutput>;
        fillOrder(order: LibOrder.OrderStruct, takerAssetFillAmount: BigNumberish, signature: BytesLike, overrides?: CallOverrides): Promise<LibFillResults.FillResultsStructOutput>;
        filled(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetProxy(assetProxyId: BytesLike, overrides?: CallOverrides): Promise<string>;
        getOrderInfo(order: LibOrder.OrderStruct, overrides?: CallOverrides): Promise<LibOrder.OrderInfoStructOutput>;
        isValidHashSignature(hash: BytesLike, signerAddress: string, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        isValidOrderSignature(order: LibOrder.OrderStruct, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        isValidTransactionSignature(transaction: LibZeroExTransaction.ZeroExTransactionStruct, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        marketBuyOrdersFillOrKill(orders: LibOrder.OrderStruct[], makerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: CallOverrides): Promise<LibFillResults.FillResultsStructOutput>;
        marketBuyOrdersNoThrow(orders: LibOrder.OrderStruct[], makerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: CallOverrides): Promise<LibFillResults.FillResultsStructOutput>;
        marketSellOrdersFillOrKill(orders: LibOrder.OrderStruct[], takerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: CallOverrides): Promise<LibFillResults.FillResultsStructOutput>;
        marketSellOrdersNoThrow(orders: LibOrder.OrderStruct[], takerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: CallOverrides): Promise<LibFillResults.FillResultsStructOutput>;
        matchOrders(leftOrder: LibOrder.OrderStruct, rightOrder: LibOrder.OrderStruct, leftSignature: BytesLike, rightSignature: BytesLike, overrides?: CallOverrides): Promise<LibFillResults.MatchedFillResultsStructOutput>;
        matchOrdersWithMaximalFill(leftOrder: LibOrder.OrderStruct, rightOrder: LibOrder.OrderStruct, leftSignature: BytesLike, rightSignature: BytesLike, overrides?: CallOverrides): Promise<LibFillResults.MatchedFillResultsStructOutput>;
        orderEpoch(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        preSign(hash: BytesLike, overrides?: CallOverrides): Promise<void>;
        preSigned(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<boolean>;
        protocolFeeCollector(overrides?: CallOverrides): Promise<string>;
        protocolFeeMultiplier(overrides?: CallOverrides): Promise<BigNumber>;
        registerAssetProxy(assetProxy: string, overrides?: CallOverrides): Promise<void>;
        setProtocolFeeCollectorAddress(updatedProtocolFeeCollector: string, overrides?: CallOverrides): Promise<void>;
        setProtocolFeeMultiplier(updatedProtocolFeeMultiplier: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setSignatureValidatorApproval(validatorAddress: string, approval: boolean, overrides?: CallOverrides): Promise<void>;
        simulateDispatchTransferFromCalls(assetData: BytesLike[], fromAddresses: string[], toAddresses: string[], amounts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        transactionsExecuted(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        'AssetProxyRegistered(bytes4,address)'(id?: null, assetProxy?: null): AssetProxyRegisteredEventFilter;
        AssetProxyRegistered(id?: null, assetProxy?: null): AssetProxyRegisteredEventFilter;
        'Cancel(address,address,bytes,bytes,address,bytes32)'(makerAddress?: string | null, feeRecipientAddress?: string | null, makerAssetData?: null, takerAssetData?: null, senderAddress?: null, orderHash?: BytesLike | null): CancelEventFilter;
        Cancel(makerAddress?: string | null, feeRecipientAddress?: string | null, makerAssetData?: null, takerAssetData?: null, senderAddress?: null, orderHash?: BytesLike | null): CancelEventFilter;
        'CancelUpTo(address,address,uint256)'(makerAddress?: string | null, orderSenderAddress?: string | null, orderEpoch?: null): CancelUpToEventFilter;
        CancelUpTo(makerAddress?: string | null, orderSenderAddress?: string | null, orderEpoch?: null): CancelUpToEventFilter;
        'Fill(address,address,bytes,bytes,bytes,bytes,bytes32,address,address,uint256,uint256,uint256,uint256,uint256)'(makerAddress?: string | null, feeRecipientAddress?: string | null, makerAssetData?: null, takerAssetData?: null, makerFeeAssetData?: null, takerFeeAssetData?: null, orderHash?: BytesLike | null, takerAddress?: null, senderAddress?: null, makerAssetFilledAmount?: null, takerAssetFilledAmount?: null, makerFeePaid?: null, takerFeePaid?: null, protocolFeePaid?: null): FillEventFilter;
        Fill(makerAddress?: string | null, feeRecipientAddress?: string | null, makerAssetData?: null, takerAssetData?: null, makerFeeAssetData?: null, takerFeeAssetData?: null, orderHash?: BytesLike | null, takerAddress?: null, senderAddress?: null, makerAssetFilledAmount?: null, takerAssetFilledAmount?: null, makerFeePaid?: null, takerFeePaid?: null, protocolFeePaid?: null): FillEventFilter;
        'OwnershipTransferred(address,address)'(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        'ProtocolFeeCollectorAddress(address,address)'(oldProtocolFeeCollector?: null, updatedProtocolFeeCollector?: null): ProtocolFeeCollectorAddressEventFilter;
        ProtocolFeeCollectorAddress(oldProtocolFeeCollector?: null, updatedProtocolFeeCollector?: null): ProtocolFeeCollectorAddressEventFilter;
        'ProtocolFeeMultiplier(uint256,uint256)'(oldProtocolFeeMultiplier?: null, updatedProtocolFeeMultiplier?: null): ProtocolFeeMultiplierEventFilter;
        ProtocolFeeMultiplier(oldProtocolFeeMultiplier?: null, updatedProtocolFeeMultiplier?: null): ProtocolFeeMultiplierEventFilter;
        'SignatureValidatorApproval(address,address,bool)'(signerAddress?: string | null, validatorAddress?: string | null, isApproved?: null): SignatureValidatorApprovalEventFilter;
        SignatureValidatorApproval(signerAddress?: string | null, validatorAddress?: string | null, isApproved?: null): SignatureValidatorApprovalEventFilter;
        'TransactionExecution(bytes32)'(transactionHash?: BytesLike | null): TransactionExecutionEventFilter;
        TransactionExecution(transactionHash?: BytesLike | null): TransactionExecutionEventFilter;
    };
    estimateGas: {
        EIP1271_MAGIC_VALUE(overrides?: CallOverrides): Promise<BigNumber>;
        EIP712_EXCHANGE_DOMAIN_HASH(overrides?: CallOverrides): Promise<BigNumber>;
        allowedValidators(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        batchCancelOrders(orders: LibOrder.OrderStruct[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchExecuteTransactions(transactions: LibZeroExTransaction.ZeroExTransactionStruct[], signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchFillOrKillOrders(orders: LibOrder.OrderStruct[], takerAssetFillAmounts: BigNumberish[], signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchFillOrders(orders: LibOrder.OrderStruct[], takerAssetFillAmounts: BigNumberish[], signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchFillOrdersNoThrow(orders: LibOrder.OrderStruct[], takerAssetFillAmounts: BigNumberish[], signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchMatchOrders(leftOrders: LibOrder.OrderStruct[], rightOrders: LibOrder.OrderStruct[], leftSignatures: BytesLike[], rightSignatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchMatchOrdersWithMaximalFill(leftOrders: LibOrder.OrderStruct[], rightOrders: LibOrder.OrderStruct[], leftSignatures: BytesLike[], rightSignatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelOrder(order: LibOrder.OrderStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelOrdersUpTo(targetOrderEpoch: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelled(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        currentContextAddress(overrides?: CallOverrides): Promise<BigNumber>;
        detachProtocolFeeCollector(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeTransaction(transaction: LibZeroExTransaction.ZeroExTransactionStruct, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fillOrKillOrder(order: LibOrder.OrderStruct, takerAssetFillAmount: BigNumberish, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fillOrder(order: LibOrder.OrderStruct, takerAssetFillAmount: BigNumberish, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        filled(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetProxy(assetProxyId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getOrderInfo(order: LibOrder.OrderStruct, overrides?: CallOverrides): Promise<BigNumber>;
        isValidHashSignature(hash: BytesLike, signerAddress: string, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        isValidOrderSignature(order: LibOrder.OrderStruct, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        isValidTransactionSignature(transaction: LibZeroExTransaction.ZeroExTransactionStruct, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        marketBuyOrdersFillOrKill(orders: LibOrder.OrderStruct[], makerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        marketBuyOrdersNoThrow(orders: LibOrder.OrderStruct[], makerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        marketSellOrdersFillOrKill(orders: LibOrder.OrderStruct[], takerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        marketSellOrdersNoThrow(orders: LibOrder.OrderStruct[], takerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        matchOrders(leftOrder: LibOrder.OrderStruct, rightOrder: LibOrder.OrderStruct, leftSignature: BytesLike, rightSignature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        matchOrdersWithMaximalFill(leftOrder: LibOrder.OrderStruct, rightOrder: LibOrder.OrderStruct, leftSignature: BytesLike, rightSignature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        orderEpoch(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        preSign(hash: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        preSigned(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        protocolFeeCollector(overrides?: CallOverrides): Promise<BigNumber>;
        protocolFeeMultiplier(overrides?: CallOverrides): Promise<BigNumber>;
        registerAssetProxy(assetProxy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setProtocolFeeCollectorAddress(updatedProtocolFeeCollector: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setProtocolFeeMultiplier(updatedProtocolFeeMultiplier: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSignatureValidatorApproval(validatorAddress: string, approval: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        simulateDispatchTransferFromCalls(assetData: BytesLike[], fromAddresses: string[], toAddresses: string[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transactionsExecuted(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        EIP1271_MAGIC_VALUE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        EIP712_EXCHANGE_DOMAIN_HASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowedValidators(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        batchCancelOrders(orders: LibOrder.OrderStruct[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchExecuteTransactions(transactions: LibZeroExTransaction.ZeroExTransactionStruct[], signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchFillOrKillOrders(orders: LibOrder.OrderStruct[], takerAssetFillAmounts: BigNumberish[], signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchFillOrders(orders: LibOrder.OrderStruct[], takerAssetFillAmounts: BigNumberish[], signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchFillOrdersNoThrow(orders: LibOrder.OrderStruct[], takerAssetFillAmounts: BigNumberish[], signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchMatchOrders(leftOrders: LibOrder.OrderStruct[], rightOrders: LibOrder.OrderStruct[], leftSignatures: BytesLike[], rightSignatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchMatchOrdersWithMaximalFill(leftOrders: LibOrder.OrderStruct[], rightOrders: LibOrder.OrderStruct[], leftSignatures: BytesLike[], rightSignatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelOrder(order: LibOrder.OrderStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelOrdersUpTo(targetOrderEpoch: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelled(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentContextAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        detachProtocolFeeCollector(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeTransaction(transaction: LibZeroExTransaction.ZeroExTransactionStruct, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fillOrKillOrder(order: LibOrder.OrderStruct, takerAssetFillAmount: BigNumberish, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fillOrder(order: LibOrder.OrderStruct, takerAssetFillAmount: BigNumberish, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        filled(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetProxy(assetProxyId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOrderInfo(order: LibOrder.OrderStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isValidHashSignature(hash: BytesLike, signerAddress: string, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isValidOrderSignature(order: LibOrder.OrderStruct, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isValidTransactionSignature(transaction: LibZeroExTransaction.ZeroExTransactionStruct, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        marketBuyOrdersFillOrKill(orders: LibOrder.OrderStruct[], makerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        marketBuyOrdersNoThrow(orders: LibOrder.OrderStruct[], makerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        marketSellOrdersFillOrKill(orders: LibOrder.OrderStruct[], takerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        marketSellOrdersNoThrow(orders: LibOrder.OrderStruct[], takerAssetFillAmount: BigNumberish, signatures: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        matchOrders(leftOrder: LibOrder.OrderStruct, rightOrder: LibOrder.OrderStruct, leftSignature: BytesLike, rightSignature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        matchOrdersWithMaximalFill(leftOrder: LibOrder.OrderStruct, rightOrder: LibOrder.OrderStruct, leftSignature: BytesLike, rightSignature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        orderEpoch(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        preSign(hash: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        preSigned(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolFeeCollector(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolFeeMultiplier(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerAssetProxy(assetProxy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setProtocolFeeCollectorAddress(updatedProtocolFeeCollector: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setProtocolFeeMultiplier(updatedProtocolFeeMultiplier: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSignatureValidatorApproval(validatorAddress: string, approval: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        simulateDispatchTransferFromCalls(assetData: BytesLike[], fromAddresses: string[], toAddresses: string[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transactionsExecuted(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
