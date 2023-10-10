import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from '../../common';
export declare namespace LibNFTOrder {
    type FeeStruct = {
        recipient: string;
        amount: BigNumberish;
        feeData: BytesLike;
    };
    type FeeStructOutput = [string, BigNumber, string] & {
        recipient: string;
        amount: BigNumber;
        feeData: string;
    };
    type PropertyStruct = {
        propertyValidator: string;
        propertyData: BytesLike;
    };
    type PropertyStructOutput = [string, string] & {
        propertyValidator: string;
        propertyData: string;
    };
    type ERC1155OrderStruct = {
        direction: BigNumberish;
        maker: string;
        taker: string;
        expiry: BigNumberish;
        nonce: BigNumberish;
        erc20Token: string;
        erc20TokenAmount: BigNumberish;
        fees: LibNFTOrder.FeeStruct[];
        erc1155Token: string;
        erc1155TokenId: BigNumberish;
        erc1155TokenProperties: LibNFTOrder.PropertyStruct[];
        erc1155TokenAmount: BigNumberish;
    };
    type ERC1155OrderStructOutput = [number, string, string, BigNumber, BigNumber, string, BigNumber, LibNFTOrder.FeeStructOutput[], string, BigNumber, LibNFTOrder.PropertyStructOutput[], BigNumber] & {
        direction: number;
        maker: string;
        taker: string;
        expiry: BigNumber;
        nonce: BigNumber;
        erc20Token: string;
        erc20TokenAmount: BigNumber;
        fees: LibNFTOrder.FeeStructOutput[];
        erc1155Token: string;
        erc1155TokenId: BigNumber;
        erc1155TokenProperties: LibNFTOrder.PropertyStructOutput[];
        erc1155TokenAmount: BigNumber;
    };
    type ERC721OrderStruct = {
        direction: BigNumberish;
        maker: string;
        taker: string;
        expiry: BigNumberish;
        nonce: BigNumberish;
        erc20Token: string;
        erc20TokenAmount: BigNumberish;
        fees: LibNFTOrder.FeeStruct[];
        erc721Token: string;
        erc721TokenId: BigNumberish;
        erc721TokenProperties: LibNFTOrder.PropertyStruct[];
    };
    type ERC721OrderStructOutput = [number, string, string, BigNumber, BigNumber, string, BigNumber, LibNFTOrder.FeeStructOutput[], string, BigNumber, LibNFTOrder.PropertyStructOutput[]] & {
        direction: number;
        maker: string;
        taker: string;
        expiry: BigNumber;
        nonce: BigNumber;
        erc20Token: string;
        erc20TokenAmount: BigNumber;
        fees: LibNFTOrder.FeeStructOutput[];
        erc721Token: string;
        erc721TokenId: BigNumber;
        erc721TokenProperties: LibNFTOrder.PropertyStructOutput[];
    };
    type OrderInfoStruct = {
        orderHash: BytesLike;
        status: BigNumberish;
        orderAmount: BigNumberish;
        remainingAmount: BigNumberish;
    };
    type OrderInfoStructOutput = [string, number, BigNumber, BigNumber] & {
        orderHash: string;
        status: number;
        orderAmount: BigNumber;
        remainingAmount: BigNumber;
    };
}
export declare namespace LibNativeOrder {
    type LimitOrderStruct = {
        makerToken: string;
        takerToken: string;
        makerAmount: BigNumberish;
        takerAmount: BigNumberish;
        takerTokenFeeAmount: BigNumberish;
        maker: string;
        taker: string;
        sender: string;
        feeRecipient: string;
        pool: BytesLike;
        expiry: BigNumberish;
        salt: BigNumberish;
    };
    type LimitOrderStructOutput = [string, string, BigNumber, BigNumber, BigNumber, string, string, string, string, string, BigNumber, BigNumber] & {
        makerToken: string;
        takerToken: string;
        makerAmount: BigNumber;
        takerAmount: BigNumber;
        takerTokenFeeAmount: BigNumber;
        maker: string;
        taker: string;
        sender: string;
        feeRecipient: string;
        pool: string;
        expiry: BigNumber;
        salt: BigNumber;
    };
    type OtcOrderStruct = {
        makerToken: string;
        takerToken: string;
        makerAmount: BigNumberish;
        takerAmount: BigNumberish;
        maker: string;
        taker: string;
        txOrigin: string;
        expiryAndNonce: BigNumberish;
    };
    type OtcOrderStructOutput = [string, string, BigNumber, BigNumber, string, string, string, BigNumber] & {
        makerToken: string;
        takerToken: string;
        makerAmount: BigNumber;
        takerAmount: BigNumber;
        maker: string;
        taker: string;
        txOrigin: string;
        expiryAndNonce: BigNumber;
    };
    type RfqOrderStruct = {
        makerToken: string;
        takerToken: string;
        makerAmount: BigNumberish;
        takerAmount: BigNumberish;
        maker: string;
        taker: string;
        txOrigin: string;
        pool: BytesLike;
        expiry: BigNumberish;
        salt: BigNumberish;
    };
    type RfqOrderStructOutput = [string, string, BigNumber, BigNumber, string, string, string, string, BigNumber, BigNumber] & {
        makerToken: string;
        takerToken: string;
        makerAmount: BigNumber;
        takerAmount: BigNumber;
        maker: string;
        taker: string;
        txOrigin: string;
        pool: string;
        expiry: BigNumber;
        salt: BigNumber;
    };
    type OrderInfoStruct = {
        orderHash: BytesLike;
        status: BigNumberish;
        takerTokenFilledAmount: BigNumberish;
    };
    type OrderInfoStructOutput = [string, number, BigNumber] & {
        orderHash: string;
        status: number;
        takerTokenFilledAmount: BigNumber;
    };
    type OtcOrderInfoStruct = {
        orderHash: BytesLike;
        status: BigNumberish;
    };
    type OtcOrderInfoStructOutput = [string, number] & {
        orderHash: string;
        status: number;
    };
}
export declare namespace LibSignature {
    type SignatureStruct = {
        signatureType: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
    };
    type SignatureStructOutput = [number, number, string, string] & {
        signatureType: number;
        v: number;
        r: string;
        s: string;
    };
}
export declare namespace ITransformERC20Feature {
    type TransformationStruct = {
        deploymentNonce: BigNumberish;
        data: BytesLike;
    };
    type TransformationStructOutput = [number, string] & {
        deploymentNonce: number;
        data: string;
    };
    type TransformERC20ArgsStruct = {
        taker: string;
        inputToken: string;
        outputToken: string;
        inputTokenAmount: BigNumberish;
        minOutputTokenAmount: BigNumberish;
        transformations: ITransformERC20Feature.TransformationStruct[];
        useSelfBalance: boolean;
        recipient: string;
    };
    type TransformERC20ArgsStructOutput = [string, string, string, BigNumber, BigNumber, ITransformERC20Feature.TransformationStructOutput[], boolean, string] & {
        taker: string;
        inputToken: string;
        outputToken: string;
        inputTokenAmount: BigNumber;
        minOutputTokenAmount: BigNumber;
        transformations: ITransformERC20Feature.TransformationStructOutput[];
        useSelfBalance: boolean;
        recipient: string;
    };
}
export declare namespace IMetaTransactionsFeature {
    type MetaTransactionDataStruct = {
        signer: string;
        sender: string;
        minGasPrice: BigNumberish;
        maxGasPrice: BigNumberish;
        expirationTimeSeconds: BigNumberish;
        salt: BigNumberish;
        callData: BytesLike;
        value: BigNumberish;
        feeToken: string;
        feeAmount: BigNumberish;
    };
    type MetaTransactionDataStructOutput = [string, string, BigNumber, BigNumber, BigNumber, BigNumber, string, BigNumber, string, BigNumber] & {
        signer: string;
        sender: string;
        minGasPrice: BigNumber;
        maxGasPrice: BigNumber;
        expirationTimeSeconds: BigNumber;
        salt: BigNumber;
        callData: string;
        value: BigNumber;
        feeToken: string;
        feeAmount: BigNumber;
    };
}
export declare namespace IMultiplexFeature {
    type BatchSellSubcallStruct = {
        id: BigNumberish;
        sellAmount: BigNumberish;
        data: BytesLike;
    };
    type BatchSellSubcallStructOutput = [number, BigNumber, string] & {
        id: number;
        sellAmount: BigNumber;
        data: string;
    };
    type MultiHopSellSubcallStruct = {
        id: BigNumberish;
        data: BytesLike;
    };
    type MultiHopSellSubcallStructOutput = [number, string] & {
        id: number;
        data: string;
    };
}
export interface IZeroExInterface extends utils.Interface {
    functions: {
        '_fillLimitOrder((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256),(uint8,uint8,bytes32,bytes32),uint128,address,address)': FunctionFragment;
        '_fillOtcOrder((address,address,uint128,uint128,address,address,address,uint256),(uint8,uint8,bytes32,bytes32),uint128,address,bool,address)': FunctionFragment;
        '_fillRfqOrder((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256),(uint8,uint8,bytes32,bytes32),uint128,address,bool,address)': FunctionFragment;
        '_sellHeldTokenForTokenToUniswapV3(bytes,uint256,uint256,address)': FunctionFragment;
        '_transformERC20((address,address,address,uint256,uint256,(uint32,bytes)[],bool,address))': FunctionFragment;
        'batchBuyERC1155s((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[],uint128)[],(uint8,uint8,bytes32,bytes32)[],uint128[],bytes[],bool)': FunctionFragment;
        'batchBuyERC721s((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[])[],(uint8,uint8,bytes32,bytes32)[],bytes[],bool)': FunctionFragment;
        'batchCancelERC1155Orders(uint256[])': FunctionFragment;
        'batchCancelERC721Orders(uint256[])': FunctionFragment;
        'batchCancelLimitOrders((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256)[])': FunctionFragment;
        'batchCancelPairLimitOrders(address[],address[],uint256[])': FunctionFragment;
        'batchCancelPairLimitOrdersWithSigner(address,address[],address[],uint256[])': FunctionFragment;
        'batchCancelPairRfqOrders(address[],address[],uint256[])': FunctionFragment;
        'batchCancelPairRfqOrdersWithSigner(address,address[],address[],uint256[])': FunctionFragment;
        'batchCancelRfqOrders((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256)[])': FunctionFragment;
        'batchExecuteMetaTransactions((address,address,uint256,uint256,uint256,uint256,bytes,uint256,address,uint256)[],(uint8,uint8,bytes32,bytes32)[])': FunctionFragment;
        'batchFillLimitOrders((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256)[],(uint8,uint8,bytes32,bytes32)[],uint128[],bool)': FunctionFragment;
        'batchFillRfqOrders((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256)[],(uint8,uint8,bytes32,bytes32)[],uint128[],bool)': FunctionFragment;
        'batchFillTakerSignedOtcOrders((address,address,uint128,uint128,address,address,address,uint256)[],(uint8,uint8,bytes32,bytes32)[],(uint8,uint8,bytes32,bytes32)[],bool[])': FunctionFragment;
        'batchGetLimitOrderRelevantStates((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256)[],(uint8,uint8,bytes32,bytes32)[])': FunctionFragment;
        'batchGetRfqOrderRelevantStates((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256)[],(uint8,uint8,bytes32,bytes32)[])': FunctionFragment;
        'batchMatchERC721Orders((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[])[],(uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[])[],(uint8,uint8,bytes32,bytes32)[],(uint8,uint8,bytes32,bytes32)[])': FunctionFragment;
        'buyERC1155((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[],uint128),(uint8,uint8,bytes32,bytes32),uint128,bytes)': FunctionFragment;
        'buyERC721((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[]),(uint8,uint8,bytes32,bytes32),bytes)': FunctionFragment;
        'cancelERC1155Order(uint256)': FunctionFragment;
        'cancelERC721Order(uint256)': FunctionFragment;
        'cancelLimitOrder((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256))': FunctionFragment;
        'cancelPairLimitOrders(address,address,uint256)': FunctionFragment;
        'cancelPairLimitOrdersWithSigner(address,address,address,uint256)': FunctionFragment;
        'cancelPairRfqOrders(address,address,uint256)': FunctionFragment;
        'cancelPairRfqOrdersWithSigner(address,address,address,uint256)': FunctionFragment;
        'cancelRfqOrder((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256))': FunctionFragment;
        'createTransformWallet()': FunctionFragment;
        'executeMetaTransaction((address,address,uint256,uint256,uint256,uint256,bytes,uint256,address,uint256),(uint8,uint8,bytes32,bytes32))': FunctionFragment;
        'extend(bytes4,address)': FunctionFragment;
        'fillLimitOrder((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256),(uint8,uint8,bytes32,bytes32),uint128)': FunctionFragment;
        'fillOrKillLimitOrder((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256),(uint8,uint8,bytes32,bytes32),uint128)': FunctionFragment;
        'fillOrKillRfqOrder((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256),(uint8,uint8,bytes32,bytes32),uint128)': FunctionFragment;
        'fillOtcOrder((address,address,uint128,uint128,address,address,address,uint256),(uint8,uint8,bytes32,bytes32),uint128)': FunctionFragment;
        'fillOtcOrderForEth((address,address,uint128,uint128,address,address,address,uint256),(uint8,uint8,bytes32,bytes32),uint128)': FunctionFragment;
        'fillOtcOrderWithEth((address,address,uint128,uint128,address,address,address,uint256),(uint8,uint8,bytes32,bytes32))': FunctionFragment;
        'fillRfqOrder((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256),(uint8,uint8,bytes32,bytes32),uint128)': FunctionFragment;
        'fillTakerSignedOtcOrder((address,address,uint128,uint128,address,address,address,uint256),(uint8,uint8,bytes32,bytes32),(uint8,uint8,bytes32,bytes32))': FunctionFragment;
        'fillTakerSignedOtcOrderForEth((address,address,uint128,uint128,address,address,address,uint256),(uint8,uint8,bytes32,bytes32),(uint8,uint8,bytes32,bytes32))': FunctionFragment;
        'getERC1155OrderHash((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[],uint128))': FunctionFragment;
        'getERC1155OrderInfo((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[],uint128))': FunctionFragment;
        'getERC721OrderHash((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[]))': FunctionFragment;
        'getERC721OrderStatus((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[]))': FunctionFragment;
        'getERC721OrderStatusBitVector(address,uint248)': FunctionFragment;
        'getLimitOrderHash((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256))': FunctionFragment;
        'getLimitOrderInfo((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256))': FunctionFragment;
        'getLimitOrderRelevantState((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256),(uint8,uint8,bytes32,bytes32))': FunctionFragment;
        'getMetaTransactionExecutedBlock((address,address,uint256,uint256,uint256,uint256,bytes,uint256,address,uint256))': FunctionFragment;
        'getMetaTransactionHash((address,address,uint256,uint256,uint256,uint256,bytes,uint256,address,uint256))': FunctionFragment;
        'getMetaTransactionHashExecutedBlock(bytes32)': FunctionFragment;
        'getOtcOrderHash((address,address,uint128,uint128,address,address,address,uint256))': FunctionFragment;
        'getOtcOrderInfo((address,address,uint128,uint128,address,address,address,uint256))': FunctionFragment;
        'getProtocolFeeMultiplier()': FunctionFragment;
        'getQuoteSigner()': FunctionFragment;
        'getRfqOrderHash((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256))': FunctionFragment;
        'getRfqOrderInfo((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256))': FunctionFragment;
        'getRfqOrderRelevantState((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256),(uint8,uint8,bytes32,bytes32))': FunctionFragment;
        'getRollbackEntryAtIndex(bytes4,uint256)': FunctionFragment;
        'getRollbackLength(bytes4)': FunctionFragment;
        'getTransformWallet()': FunctionFragment;
        'getTransformerDeployer()': FunctionFragment;
        'isValidOrderSigner(address,address)': FunctionFragment;
        'lastOtcTxOriginNonce(address,uint64)': FunctionFragment;
        'matchERC721Orders((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[]),(uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[]),(uint8,uint8,bytes32,bytes32),(uint8,uint8,bytes32,bytes32))': FunctionFragment;
        'migrate(address,bytes,address)': FunctionFragment;
        'multiplexBatchSellEthForToken(address,(uint8,uint256,bytes)[],uint256)': FunctionFragment;
        'multiplexBatchSellTokenForEth(address,(uint8,uint256,bytes)[],uint256,uint256)': FunctionFragment;
        'multiplexBatchSellTokenForToken(address,address,(uint8,uint256,bytes)[],uint256,uint256)': FunctionFragment;
        'multiplexMultiHopSellEthForToken(address[],(uint8,bytes)[],uint256)': FunctionFragment;
        'multiplexMultiHopSellTokenForEth(address[],(uint8,bytes)[],uint256,uint256)': FunctionFragment;
        'multiplexMultiHopSellTokenForToken(address[],(uint8,bytes)[],uint256,uint256)': FunctionFragment;
        'onERC1155Received(address,address,uint256,uint256,bytes)': FunctionFragment;
        'onERC721Received(address,address,uint256,bytes)': FunctionFragment;
        'owner()': FunctionFragment;
        'preSignERC1155Order((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[],uint128))': FunctionFragment;
        'preSignERC721Order((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[]))': FunctionFragment;
        'registerAllowedOrderSigner(address,bool)': FunctionFragment;
        'registerAllowedRfqOrigins(address[],bool)': FunctionFragment;
        'rollback(bytes4,address)': FunctionFragment;
        'sellERC1155((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[],uint128),(uint8,uint8,bytes32,bytes32),uint256,uint128,bool,bytes)': FunctionFragment;
        'sellERC721((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[]),(uint8,uint8,bytes32,bytes32),uint256,bool,bytes)': FunctionFragment;
        'sellEthForTokenToUniswapV3(bytes,uint256,address)': FunctionFragment;
        'sellToLiquidityProvider(address,address,address,address,uint256,uint256,bytes)': FunctionFragment;
        'sellToPancakeSwap(address[],uint256,uint256,uint8)': FunctionFragment;
        'sellToUniswap(address[],uint256,uint256,bool)': FunctionFragment;
        'sellTokenForEthToUniswapV3(bytes,uint256,uint256,address)': FunctionFragment;
        'sellTokenForTokenToUniswapV3(bytes,uint256,uint256,address)': FunctionFragment;
        'setQuoteSigner(address)': FunctionFragment;
        'setTransformerDeployer(address)': FunctionFragment;
        'supportInterface(bytes4)': FunctionFragment;
        'transferOwnership(address)': FunctionFragment;
        'transferProtocolFeesForPools(bytes32[])': FunctionFragment;
        'transferTrappedTokensTo(address,uint256,address)': FunctionFragment;
        'transformERC20(address,address,uint256,uint256,(uint32,bytes)[])': FunctionFragment;
        'uniswapV3SwapCallback(int256,int256,bytes)': FunctionFragment;
        'validateERC1155OrderProperties((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[],uint128),uint256)': FunctionFragment;
        'validateERC1155OrderSignature((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[],uint128),(uint8,uint8,bytes32,bytes32))': FunctionFragment;
        'validateERC721OrderProperties((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[]),uint256)': FunctionFragment;
        'validateERC721OrderSignature((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[]),(uint8,uint8,bytes32,bytes32))': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: '_fillLimitOrder' | '_fillOtcOrder' | '_fillRfqOrder' | '_sellHeldTokenForTokenToUniswapV3' | '_transformERC20' | 'batchBuyERC1155s' | 'batchBuyERC721s' | 'batchCancelERC1155Orders' | 'batchCancelERC721Orders' | 'batchCancelLimitOrders' | 'batchCancelPairLimitOrders' | 'batchCancelPairLimitOrdersWithSigner' | 'batchCancelPairRfqOrders' | 'batchCancelPairRfqOrdersWithSigner' | 'batchCancelRfqOrders' | 'batchExecuteMetaTransactions' | 'batchFillLimitOrders' | 'batchFillRfqOrders' | 'batchFillTakerSignedOtcOrders' | 'batchGetLimitOrderRelevantStates' | 'batchGetRfqOrderRelevantStates' | 'batchMatchERC721Orders' | 'buyERC1155' | 'buyERC721' | 'cancelERC1155Order' | 'cancelERC721Order' | 'cancelLimitOrder' | 'cancelPairLimitOrders' | 'cancelPairLimitOrdersWithSigner' | 'cancelPairRfqOrders' | 'cancelPairRfqOrdersWithSigner' | 'cancelRfqOrder' | 'createTransformWallet' | 'executeMetaTransaction' | 'extend' | 'fillLimitOrder' | 'fillOrKillLimitOrder' | 'fillOrKillRfqOrder' | 'fillOtcOrder' | 'fillOtcOrderForEth' | 'fillOtcOrderWithEth' | 'fillRfqOrder' | 'fillTakerSignedOtcOrder' | 'fillTakerSignedOtcOrderForEth' | 'getERC1155OrderHash' | 'getERC1155OrderInfo' | 'getERC721OrderHash' | 'getERC721OrderStatus' | 'getERC721OrderStatusBitVector' | 'getLimitOrderHash' | 'getLimitOrderInfo' | 'getLimitOrderRelevantState' | 'getMetaTransactionExecutedBlock' | 'getMetaTransactionHash' | 'getMetaTransactionHashExecutedBlock' | 'getOtcOrderHash' | 'getOtcOrderInfo' | 'getProtocolFeeMultiplier' | 'getQuoteSigner' | 'getRfqOrderHash' | 'getRfqOrderInfo' | 'getRfqOrderRelevantState' | 'getRollbackEntryAtIndex' | 'getRollbackLength' | 'getTransformWallet' | 'getTransformerDeployer' | 'isValidOrderSigner' | 'lastOtcTxOriginNonce' | 'matchERC721Orders' | 'migrate' | 'multiplexBatchSellEthForToken' | 'multiplexBatchSellTokenForEth' | 'multiplexBatchSellTokenForToken' | 'multiplexMultiHopSellEthForToken' | 'multiplexMultiHopSellTokenForEth' | 'multiplexMultiHopSellTokenForToken' | 'onERC1155Received' | 'onERC721Received' | 'owner' | 'preSignERC1155Order' | 'preSignERC721Order' | 'registerAllowedOrderSigner' | 'registerAllowedRfqOrigins' | 'rollback' | 'sellERC1155' | 'sellERC721' | 'sellEthForTokenToUniswapV3' | 'sellToLiquidityProvider' | 'sellToPancakeSwap' | 'sellToUniswap' | 'sellTokenForEthToUniswapV3' | 'sellTokenForTokenToUniswapV3' | 'setQuoteSigner' | 'setTransformerDeployer' | 'supportInterface' | 'transferOwnership' | 'transferProtocolFeesForPools' | 'transferTrappedTokensTo' | 'transformERC20' | 'uniswapV3SwapCallback' | 'validateERC1155OrderProperties' | 'validateERC1155OrderSignature' | 'validateERC721OrderProperties' | 'validateERC721OrderSignature'): FunctionFragment;
    encodeFunctionData(functionFragment: '_fillLimitOrder', values: [LibNativeOrder.LimitOrderStruct, LibSignature.SignatureStruct, BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: '_fillOtcOrder', values: [LibNativeOrder.OtcOrderStruct, LibSignature.SignatureStruct, BigNumberish, string, boolean, string]): string;
    encodeFunctionData(functionFragment: '_fillRfqOrder', values: [LibNativeOrder.RfqOrderStruct, LibSignature.SignatureStruct, BigNumberish, string, boolean, string]): string;
    encodeFunctionData(functionFragment: '_sellHeldTokenForTokenToUniswapV3', values: [BytesLike, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: '_transformERC20', values: [ITransformERC20Feature.TransformERC20ArgsStruct]): string;
    encodeFunctionData(functionFragment: 'batchBuyERC1155s', values: [LibNFTOrder.ERC1155OrderStruct[], LibSignature.SignatureStruct[], BigNumberish[], BytesLike[], boolean]): string;
    encodeFunctionData(functionFragment: 'batchBuyERC721s', values: [LibNFTOrder.ERC721OrderStruct[], LibSignature.SignatureStruct[], BytesLike[], boolean]): string;
    encodeFunctionData(functionFragment: 'batchCancelERC1155Orders', values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: 'batchCancelERC721Orders', values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: 'batchCancelLimitOrders', values: [LibNativeOrder.LimitOrderStruct[]]): string;
    encodeFunctionData(functionFragment: 'batchCancelPairLimitOrders', values: [string[], string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: 'batchCancelPairLimitOrdersWithSigner', values: [string, string[], string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: 'batchCancelPairRfqOrders', values: [string[], string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: 'batchCancelPairRfqOrdersWithSigner', values: [string, string[], string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: 'batchCancelRfqOrders', values: [LibNativeOrder.RfqOrderStruct[]]): string;
    encodeFunctionData(functionFragment: 'batchExecuteMetaTransactions', values: [IMetaTransactionsFeature.MetaTransactionDataStruct[], LibSignature.SignatureStruct[]]): string;
    encodeFunctionData(functionFragment: 'batchFillLimitOrders', values: [LibNativeOrder.LimitOrderStruct[], LibSignature.SignatureStruct[], BigNumberish[], boolean]): string;
    encodeFunctionData(functionFragment: 'batchFillRfqOrders', values: [LibNativeOrder.RfqOrderStruct[], LibSignature.SignatureStruct[], BigNumberish[], boolean]): string;
    encodeFunctionData(functionFragment: 'batchFillTakerSignedOtcOrders', values: [LibNativeOrder.OtcOrderStruct[], LibSignature.SignatureStruct[], LibSignature.SignatureStruct[], boolean[]]): string;
    encodeFunctionData(functionFragment: 'batchGetLimitOrderRelevantStates', values: [LibNativeOrder.LimitOrderStruct[], LibSignature.SignatureStruct[]]): string;
    encodeFunctionData(functionFragment: 'batchGetRfqOrderRelevantStates', values: [LibNativeOrder.RfqOrderStruct[], LibSignature.SignatureStruct[]]): string;
    encodeFunctionData(functionFragment: 'batchMatchERC721Orders', values: [LibNFTOrder.ERC721OrderStruct[], LibNFTOrder.ERC721OrderStruct[], LibSignature.SignatureStruct[], LibSignature.SignatureStruct[]]): string;
    encodeFunctionData(functionFragment: 'buyERC1155', values: [LibNFTOrder.ERC1155OrderStruct, LibSignature.SignatureStruct, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: 'buyERC721', values: [LibNFTOrder.ERC721OrderStruct, LibSignature.SignatureStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: 'cancelERC1155Order', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'cancelERC721Order', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'cancelLimitOrder', values: [LibNativeOrder.LimitOrderStruct]): string;
    encodeFunctionData(functionFragment: 'cancelPairLimitOrders', values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'cancelPairLimitOrdersWithSigner', values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'cancelPairRfqOrders', values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'cancelPairRfqOrdersWithSigner', values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'cancelRfqOrder', values: [LibNativeOrder.RfqOrderStruct]): string;
    encodeFunctionData(functionFragment: 'createTransformWallet', values?: undefined): string;
    encodeFunctionData(functionFragment: 'executeMetaTransaction', values: [IMetaTransactionsFeature.MetaTransactionDataStruct, LibSignature.SignatureStruct]): string;
    encodeFunctionData(functionFragment: 'extend', values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: 'fillLimitOrder', values: [LibNativeOrder.LimitOrderStruct, LibSignature.SignatureStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'fillOrKillLimitOrder', values: [LibNativeOrder.LimitOrderStruct, LibSignature.SignatureStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'fillOrKillRfqOrder', values: [LibNativeOrder.RfqOrderStruct, LibSignature.SignatureStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'fillOtcOrder', values: [LibNativeOrder.OtcOrderStruct, LibSignature.SignatureStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'fillOtcOrderForEth', values: [LibNativeOrder.OtcOrderStruct, LibSignature.SignatureStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'fillOtcOrderWithEth', values: [LibNativeOrder.OtcOrderStruct, LibSignature.SignatureStruct]): string;
    encodeFunctionData(functionFragment: 'fillRfqOrder', values: [LibNativeOrder.RfqOrderStruct, LibSignature.SignatureStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'fillTakerSignedOtcOrder', values: [LibNativeOrder.OtcOrderStruct, LibSignature.SignatureStruct, LibSignature.SignatureStruct]): string;
    encodeFunctionData(functionFragment: 'fillTakerSignedOtcOrderForEth', values: [LibNativeOrder.OtcOrderStruct, LibSignature.SignatureStruct, LibSignature.SignatureStruct]): string;
    encodeFunctionData(functionFragment: 'getERC1155OrderHash', values: [LibNFTOrder.ERC1155OrderStruct]): string;
    encodeFunctionData(functionFragment: 'getERC1155OrderInfo', values: [LibNFTOrder.ERC1155OrderStruct]): string;
    encodeFunctionData(functionFragment: 'getERC721OrderHash', values: [LibNFTOrder.ERC721OrderStruct]): string;
    encodeFunctionData(functionFragment: 'getERC721OrderStatus', values: [LibNFTOrder.ERC721OrderStruct]): string;
    encodeFunctionData(functionFragment: 'getERC721OrderStatusBitVector', values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'getLimitOrderHash', values: [LibNativeOrder.LimitOrderStruct]): string;
    encodeFunctionData(functionFragment: 'getLimitOrderInfo', values: [LibNativeOrder.LimitOrderStruct]): string;
    encodeFunctionData(functionFragment: 'getLimitOrderRelevantState', values: [LibNativeOrder.LimitOrderStruct, LibSignature.SignatureStruct]): string;
    encodeFunctionData(functionFragment: 'getMetaTransactionExecutedBlock', values: [IMetaTransactionsFeature.MetaTransactionDataStruct]): string;
    encodeFunctionData(functionFragment: 'getMetaTransactionHash', values: [IMetaTransactionsFeature.MetaTransactionDataStruct]): string;
    encodeFunctionData(functionFragment: 'getMetaTransactionHashExecutedBlock', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'getOtcOrderHash', values: [LibNativeOrder.OtcOrderStruct]): string;
    encodeFunctionData(functionFragment: 'getOtcOrderInfo', values: [LibNativeOrder.OtcOrderStruct]): string;
    encodeFunctionData(functionFragment: 'getProtocolFeeMultiplier', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getQuoteSigner', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getRfqOrderHash', values: [LibNativeOrder.RfqOrderStruct]): string;
    encodeFunctionData(functionFragment: 'getRfqOrderInfo', values: [LibNativeOrder.RfqOrderStruct]): string;
    encodeFunctionData(functionFragment: 'getRfqOrderRelevantState', values: [LibNativeOrder.RfqOrderStruct, LibSignature.SignatureStruct]): string;
    encodeFunctionData(functionFragment: 'getRollbackEntryAtIndex', values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'getRollbackLength', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'getTransformWallet', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getTransformerDeployer', values?: undefined): string;
    encodeFunctionData(functionFragment: 'isValidOrderSigner', values: [string, string]): string;
    encodeFunctionData(functionFragment: 'lastOtcTxOriginNonce', values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'matchERC721Orders', values: [LibNFTOrder.ERC721OrderStruct, LibNFTOrder.ERC721OrderStruct, LibSignature.SignatureStruct, LibSignature.SignatureStruct]): string;
    encodeFunctionData(functionFragment: 'migrate', values: [string, BytesLike, string]): string;
    encodeFunctionData(functionFragment: 'multiplexBatchSellEthForToken', values: [string, IMultiplexFeature.BatchSellSubcallStruct[], BigNumberish]): string;
    encodeFunctionData(functionFragment: 'multiplexBatchSellTokenForEth', values: [string, IMultiplexFeature.BatchSellSubcallStruct[], BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'multiplexBatchSellTokenForToken', values: [string, string, IMultiplexFeature.BatchSellSubcallStruct[], BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'multiplexMultiHopSellEthForToken', values: [string[], IMultiplexFeature.MultiHopSellSubcallStruct[], BigNumberish]): string;
    encodeFunctionData(functionFragment: 'multiplexMultiHopSellTokenForEth', values: [string[], IMultiplexFeature.MultiHopSellSubcallStruct[], BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'multiplexMultiHopSellTokenForToken', values: [string[], IMultiplexFeature.MultiHopSellSubcallStruct[], BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'onERC1155Received', values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: 'onERC721Received', values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
    encodeFunctionData(functionFragment: 'preSignERC1155Order', values: [LibNFTOrder.ERC1155OrderStruct]): string;
    encodeFunctionData(functionFragment: 'preSignERC721Order', values: [LibNFTOrder.ERC721OrderStruct]): string;
    encodeFunctionData(functionFragment: 'registerAllowedOrderSigner', values: [string, boolean]): string;
    encodeFunctionData(functionFragment: 'registerAllowedRfqOrigins', values: [string[], boolean]): string;
    encodeFunctionData(functionFragment: 'rollback', values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: 'sellERC1155', values: [LibNFTOrder.ERC1155OrderStruct, LibSignature.SignatureStruct, BigNumberish, BigNumberish, boolean, BytesLike]): string;
    encodeFunctionData(functionFragment: 'sellERC721', values: [LibNFTOrder.ERC721OrderStruct, LibSignature.SignatureStruct, BigNumberish, boolean, BytesLike]): string;
    encodeFunctionData(functionFragment: 'sellEthForTokenToUniswapV3', values: [BytesLike, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: 'sellToLiquidityProvider', values: [string, string, string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: 'sellToPancakeSwap', values: [string[], BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'sellToUniswap', values: [string[], BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: 'sellTokenForEthToUniswapV3', values: [BytesLike, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: 'sellTokenForTokenToUniswapV3', values: [BytesLike, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: 'setQuoteSigner', values: [string]): string;
    encodeFunctionData(functionFragment: 'setTransformerDeployer', values: [string]): string;
    encodeFunctionData(functionFragment: 'supportInterface', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
    encodeFunctionData(functionFragment: 'transferProtocolFeesForPools', values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: 'transferTrappedTokensTo', values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: 'transformERC20', values: [string, string, BigNumberish, BigNumberish, ITransformERC20Feature.TransformationStruct[]]): string;
    encodeFunctionData(functionFragment: 'uniswapV3SwapCallback', values: [BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: 'validateERC1155OrderProperties', values: [LibNFTOrder.ERC1155OrderStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'validateERC1155OrderSignature', values: [LibNFTOrder.ERC1155OrderStruct, LibSignature.SignatureStruct]): string;
    encodeFunctionData(functionFragment: 'validateERC721OrderProperties', values: [LibNFTOrder.ERC721OrderStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'validateERC721OrderSignature', values: [LibNFTOrder.ERC721OrderStruct, LibSignature.SignatureStruct]): string;
    decodeFunctionResult(functionFragment: '_fillLimitOrder', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: '_fillOtcOrder', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: '_fillRfqOrder', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: '_sellHeldTokenForTokenToUniswapV3', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: '_transformERC20', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchBuyERC1155s', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchBuyERC721s', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchCancelERC1155Orders', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchCancelERC721Orders', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchCancelLimitOrders', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchCancelPairLimitOrders', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchCancelPairLimitOrdersWithSigner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchCancelPairRfqOrders', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchCancelPairRfqOrdersWithSigner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchCancelRfqOrders', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchExecuteMetaTransactions', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchFillLimitOrders', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchFillRfqOrders', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchFillTakerSignedOtcOrders', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchGetLimitOrderRelevantStates', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchGetRfqOrderRelevantStates', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchMatchERC721Orders', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'buyERC1155', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'buyERC721', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'cancelERC1155Order', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'cancelERC721Order', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'cancelLimitOrder', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'cancelPairLimitOrders', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'cancelPairLimitOrdersWithSigner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'cancelPairRfqOrders', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'cancelPairRfqOrdersWithSigner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'cancelRfqOrder', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'createTransformWallet', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'executeMetaTransaction', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'extend', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'fillLimitOrder', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'fillOrKillLimitOrder', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'fillOrKillRfqOrder', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'fillOtcOrder', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'fillOtcOrderForEth', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'fillOtcOrderWithEth', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'fillRfqOrder', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'fillTakerSignedOtcOrder', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'fillTakerSignedOtcOrderForEth', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getERC1155OrderHash', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getERC1155OrderInfo', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getERC721OrderHash', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getERC721OrderStatus', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getERC721OrderStatusBitVector', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getLimitOrderHash', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getLimitOrderInfo', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getLimitOrderRelevantState', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getMetaTransactionExecutedBlock', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getMetaTransactionHash', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getMetaTransactionHashExecutedBlock', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getOtcOrderHash', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getOtcOrderInfo', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getProtocolFeeMultiplier', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getQuoteSigner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getRfqOrderHash', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getRfqOrderInfo', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getRfqOrderRelevantState', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getRollbackEntryAtIndex', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getRollbackLength', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getTransformWallet', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getTransformerDeployer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isValidOrderSigner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'lastOtcTxOriginNonce', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'matchERC721Orders', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'migrate', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'multiplexBatchSellEthForToken', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'multiplexBatchSellTokenForEth', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'multiplexBatchSellTokenForToken', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'multiplexMultiHopSellEthForToken', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'multiplexMultiHopSellTokenForEth', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'multiplexMultiHopSellTokenForToken', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'onERC1155Received', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'onERC721Received', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'preSignERC1155Order', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'preSignERC721Order', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'registerAllowedOrderSigner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'registerAllowedRfqOrigins', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'rollback', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'sellERC1155', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'sellERC721', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'sellEthForTokenToUniswapV3', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'sellToLiquidityProvider', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'sellToPancakeSwap', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'sellToUniswap', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'sellTokenForEthToUniswapV3', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'sellTokenForTokenToUniswapV3', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setQuoteSigner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setTransformerDeployer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'supportInterface', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferProtocolFeesForPools', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferTrappedTokensTo', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transformERC20', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'uniswapV3SwapCallback', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'validateERC1155OrderProperties', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'validateERC1155OrderSignature', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'validateERC721OrderProperties', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'validateERC721OrderSignature', data: BytesLike): Result;
    events: {
        'ERC1155OrderCancelled(address,uint256)': EventFragment;
        'ERC1155OrderFilled(uint8,address,address,uint256,address,uint256,address,uint256,uint128,address)': EventFragment;
        'ERC1155OrderPreSigned(uint8,address,address,uint256,uint256,address,uint256,tuple[],address,uint256,tuple[],uint128)': EventFragment;
        'ERC721OrderCancelled(address,uint256)': EventFragment;
        'ERC721OrderFilled(uint8,address,address,uint256,address,uint256,address,uint256,address)': EventFragment;
        'ERC721OrderPreSigned(uint8,address,address,uint256,uint256,address,uint256,tuple[],address,uint256,tuple[])': EventFragment;
        'LimitOrderFilled(bytes32,address,address,address,address,address,uint128,uint128,uint128,uint256,bytes32)': EventFragment;
        'LiquidityProviderSwap(address,address,uint256,uint256,address,address)': EventFragment;
        'MetaTransactionExecuted(bytes32,bytes4,address,address)': EventFragment;
        'Migrated(address,address,address)': EventFragment;
        'OrderCancelled(bytes32,address)': EventFragment;
        'OrderSignerRegistered(address,address,bool)': EventFragment;
        'OtcOrderFilled(bytes32,address,address,address,address,uint128,uint128)': EventFragment;
        'OwnershipTransferred(address,address)': EventFragment;
        'PairCancelledLimitOrders(address,address,address,uint256)': EventFragment;
        'PairCancelledRfqOrders(address,address,address,uint256)': EventFragment;
        'ProxyFunctionUpdated(bytes4,address,address)': EventFragment;
        'QuoteSignerUpdated(address)': EventFragment;
        'RfqOrderFilled(bytes32,address,address,address,address,uint128,uint128,bytes32)': EventFragment;
        'RfqOrderOriginsAllowed(address,address[],bool)': EventFragment;
        'TransformedERC20(address,address,address,uint256,uint256)': EventFragment;
        'TransformerDeployerUpdated(address)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'ERC1155OrderCancelled'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ERC1155OrderFilled'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ERC1155OrderPreSigned'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ERC721OrderCancelled'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ERC721OrderFilled'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ERC721OrderPreSigned'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'LimitOrderFilled'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'LiquidityProviderSwap'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'MetaTransactionExecuted'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Migrated'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'OrderCancelled'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'OrderSignerRegistered'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'OtcOrderFilled'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'PairCancelledLimitOrders'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'PairCancelledRfqOrders'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ProxyFunctionUpdated'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'QuoteSignerUpdated'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'RfqOrderFilled'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'RfqOrderOriginsAllowed'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'TransformedERC20'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'TransformerDeployerUpdated'): EventFragment;
}
export interface ERC1155OrderCancelledEventObject {
    maker: string;
    nonce: BigNumber;
}
export declare type ERC1155OrderCancelledEvent = TypedEvent<[string, BigNumber], ERC1155OrderCancelledEventObject>;
export declare type ERC1155OrderCancelledEventFilter = TypedEventFilter<ERC1155OrderCancelledEvent>;
export interface ERC1155OrderFilledEventObject {
    direction: number;
    maker: string;
    taker: string;
    nonce: BigNumber;
    erc20Token: string;
    erc20FillAmount: BigNumber;
    erc1155Token: string;
    erc1155TokenId: BigNumber;
    erc1155FillAmount: BigNumber;
    matcher: string;
}
export declare type ERC1155OrderFilledEvent = TypedEvent<[number, string, string, BigNumber, string, BigNumber, string, BigNumber, BigNumber, string], ERC1155OrderFilledEventObject>;
export declare type ERC1155OrderFilledEventFilter = TypedEventFilter<ERC1155OrderFilledEvent>;
export interface ERC1155OrderPreSignedEventObject {
    direction: number;
    maker: string;
    taker: string;
    expiry: BigNumber;
    nonce: BigNumber;
    erc20Token: string;
    erc20TokenAmount: BigNumber;
    fees: LibNFTOrder.FeeStructOutput[];
    erc1155Token: string;
    erc1155TokenId: BigNumber;
    erc1155TokenProperties: LibNFTOrder.PropertyStructOutput[];
    erc1155TokenAmount: BigNumber;
}
export declare type ERC1155OrderPreSignedEvent = TypedEvent<[number, string, string, BigNumber, BigNumber, string, BigNumber, LibNFTOrder.FeeStructOutput[], string, BigNumber, LibNFTOrder.PropertyStructOutput[], BigNumber], ERC1155OrderPreSignedEventObject>;
export declare type ERC1155OrderPreSignedEventFilter = TypedEventFilter<ERC1155OrderPreSignedEvent>;
export interface ERC721OrderCancelledEventObject {
    maker: string;
    nonce: BigNumber;
}
export declare type ERC721OrderCancelledEvent = TypedEvent<[string, BigNumber], ERC721OrderCancelledEventObject>;
export declare type ERC721OrderCancelledEventFilter = TypedEventFilter<ERC721OrderCancelledEvent>;
export interface ERC721OrderFilledEventObject {
    direction: number;
    maker: string;
    taker: string;
    nonce: BigNumber;
    erc20Token: string;
    erc20TokenAmount: BigNumber;
    erc721Token: string;
    erc721TokenId: BigNumber;
    matcher: string;
}
export declare type ERC721OrderFilledEvent = TypedEvent<[number, string, string, BigNumber, string, BigNumber, string, BigNumber, string], ERC721OrderFilledEventObject>;
export declare type ERC721OrderFilledEventFilter = TypedEventFilter<ERC721OrderFilledEvent>;
export interface ERC721OrderPreSignedEventObject {
    direction: number;
    maker: string;
    taker: string;
    expiry: BigNumber;
    nonce: BigNumber;
    erc20Token: string;
    erc20TokenAmount: BigNumber;
    fees: LibNFTOrder.FeeStructOutput[];
    erc721Token: string;
    erc721TokenId: BigNumber;
    erc721TokenProperties: LibNFTOrder.PropertyStructOutput[];
}
export declare type ERC721OrderPreSignedEvent = TypedEvent<[number, string, string, BigNumber, BigNumber, string, BigNumber, LibNFTOrder.FeeStructOutput[], string, BigNumber, LibNFTOrder.PropertyStructOutput[]], ERC721OrderPreSignedEventObject>;
export declare type ERC721OrderPreSignedEventFilter = TypedEventFilter<ERC721OrderPreSignedEvent>;
export interface LimitOrderFilledEventObject {
    orderHash: string;
    maker: string;
    taker: string;
    feeRecipient: string;
    makerToken: string;
    takerToken: string;
    takerTokenFilledAmount: BigNumber;
    makerTokenFilledAmount: BigNumber;
    takerTokenFeeFilledAmount: BigNumber;
    protocolFeePaid: BigNumber;
    pool: string;
}
export declare type LimitOrderFilledEvent = TypedEvent<[string, string, string, string, string, string, BigNumber, BigNumber, BigNumber, BigNumber, string], LimitOrderFilledEventObject>;
export declare type LimitOrderFilledEventFilter = TypedEventFilter<LimitOrderFilledEvent>;
export interface LiquidityProviderSwapEventObject {
    inputToken: string;
    outputToken: string;
    inputTokenAmount: BigNumber;
    outputTokenAmount: BigNumber;
    provider: string;
    recipient: string;
}
export declare type LiquidityProviderSwapEvent = TypedEvent<[string, string, BigNumber, BigNumber, string, string], LiquidityProviderSwapEventObject>;
export declare type LiquidityProviderSwapEventFilter = TypedEventFilter<LiquidityProviderSwapEvent>;
export interface MetaTransactionExecutedEventObject {
    hash: string;
    selector: string;
    signer: string;
    sender: string;
}
export declare type MetaTransactionExecutedEvent = TypedEvent<[string, string, string, string], MetaTransactionExecutedEventObject>;
export declare type MetaTransactionExecutedEventFilter = TypedEventFilter<MetaTransactionExecutedEvent>;
export interface MigratedEventObject {
    caller: string;
    migrator: string;
    newOwner: string;
}
export declare type MigratedEvent = TypedEvent<[string, string, string], MigratedEventObject>;
export declare type MigratedEventFilter = TypedEventFilter<MigratedEvent>;
export interface OrderCancelledEventObject {
    orderHash: string;
    maker: string;
}
export declare type OrderCancelledEvent = TypedEvent<[string, string], OrderCancelledEventObject>;
export declare type OrderCancelledEventFilter = TypedEventFilter<OrderCancelledEvent>;
export interface OrderSignerRegisteredEventObject {
    maker: string;
    signer: string;
    allowed: boolean;
}
export declare type OrderSignerRegisteredEvent = TypedEvent<[string, string, boolean], OrderSignerRegisteredEventObject>;
export declare type OrderSignerRegisteredEventFilter = TypedEventFilter<OrderSignerRegisteredEvent>;
export interface OtcOrderFilledEventObject {
    orderHash: string;
    maker: string;
    taker: string;
    makerToken: string;
    takerToken: string;
    makerTokenFilledAmount: BigNumber;
    takerTokenFilledAmount: BigNumber;
}
export declare type OtcOrderFilledEvent = TypedEvent<[string, string, string, string, string, BigNumber, BigNumber], OtcOrderFilledEventObject>;
export declare type OtcOrderFilledEventFilter = TypedEventFilter<OtcOrderFilledEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PairCancelledLimitOrdersEventObject {
    maker: string;
    makerToken: string;
    takerToken: string;
    minValidSalt: BigNumber;
}
export declare type PairCancelledLimitOrdersEvent = TypedEvent<[string, string, string, BigNumber], PairCancelledLimitOrdersEventObject>;
export declare type PairCancelledLimitOrdersEventFilter = TypedEventFilter<PairCancelledLimitOrdersEvent>;
export interface PairCancelledRfqOrdersEventObject {
    maker: string;
    makerToken: string;
    takerToken: string;
    minValidSalt: BigNumber;
}
export declare type PairCancelledRfqOrdersEvent = TypedEvent<[string, string, string, BigNumber], PairCancelledRfqOrdersEventObject>;
export declare type PairCancelledRfqOrdersEventFilter = TypedEventFilter<PairCancelledRfqOrdersEvent>;
export interface ProxyFunctionUpdatedEventObject {
    selector: string;
    oldImpl: string;
    newImpl: string;
}
export declare type ProxyFunctionUpdatedEvent = TypedEvent<[string, string, string], ProxyFunctionUpdatedEventObject>;
export declare type ProxyFunctionUpdatedEventFilter = TypedEventFilter<ProxyFunctionUpdatedEvent>;
export interface QuoteSignerUpdatedEventObject {
    quoteSigner: string;
}
export declare type QuoteSignerUpdatedEvent = TypedEvent<[string], QuoteSignerUpdatedEventObject>;
export declare type QuoteSignerUpdatedEventFilter = TypedEventFilter<QuoteSignerUpdatedEvent>;
export interface RfqOrderFilledEventObject {
    orderHash: string;
    maker: string;
    taker: string;
    makerToken: string;
    takerToken: string;
    takerTokenFilledAmount: BigNumber;
    makerTokenFilledAmount: BigNumber;
    pool: string;
}
export declare type RfqOrderFilledEvent = TypedEvent<[string, string, string, string, string, BigNumber, BigNumber, string], RfqOrderFilledEventObject>;
export declare type RfqOrderFilledEventFilter = TypedEventFilter<RfqOrderFilledEvent>;
export interface RfqOrderOriginsAllowedEventObject {
    origin: string;
    addrs: string[];
    allowed: boolean;
}
export declare type RfqOrderOriginsAllowedEvent = TypedEvent<[string, string[], boolean], RfqOrderOriginsAllowedEventObject>;
export declare type RfqOrderOriginsAllowedEventFilter = TypedEventFilter<RfqOrderOriginsAllowedEvent>;
export interface TransformedERC20EventObject {
    taker: string;
    inputToken: string;
    outputToken: string;
    inputTokenAmount: BigNumber;
    outputTokenAmount: BigNumber;
}
export declare type TransformedERC20Event = TypedEvent<[string, string, string, BigNumber, BigNumber], TransformedERC20EventObject>;
export declare type TransformedERC20EventFilter = TypedEventFilter<TransformedERC20Event>;
export interface TransformerDeployerUpdatedEventObject {
    transformerDeployer: string;
}
export declare type TransformerDeployerUpdatedEvent = TypedEvent<[string], TransformerDeployerUpdatedEventObject>;
export declare type TransformerDeployerUpdatedEventFilter = TypedEventFilter<TransformerDeployerUpdatedEvent>;
export interface IZeroEx extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IZeroExInterface;
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
        _fillLimitOrder(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, taker: string, sender: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _fillOtcOrder(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, taker: string, useSelfBalance: boolean, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _fillRfqOrder(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, taker: string, useSelfBalance: boolean, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _sellHeldTokenForTokenToUniswapV3(encodedPath: BytesLike, sellAmount: BigNumberish, minBuyAmount: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _transformERC20(args: ITransformERC20Feature.TransformERC20ArgsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchBuyERC1155s(sellOrders: LibNFTOrder.ERC1155OrderStruct[], signatures: LibSignature.SignatureStruct[], erc1155TokenAmounts: BigNumberish[], callbackData: BytesLike[], revertIfIncomplete: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchBuyERC721s(sellOrders: LibNFTOrder.ERC721OrderStruct[], signatures: LibSignature.SignatureStruct[], callbackData: BytesLike[], revertIfIncomplete: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchCancelERC1155Orders(orderNonces: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchCancelERC721Orders(orderNonces: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchCancelLimitOrders(orders: LibNativeOrder.LimitOrderStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchCancelPairLimitOrders(makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchCancelPairLimitOrdersWithSigner(maker: string, makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchCancelPairRfqOrders(makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchCancelPairRfqOrdersWithSigner(maker: string, makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchCancelRfqOrders(orders: LibNativeOrder.RfqOrderStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchExecuteMetaTransactions(mtxs: IMetaTransactionsFeature.MetaTransactionDataStruct[], signatures: LibSignature.SignatureStruct[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchFillLimitOrders(orders: LibNativeOrder.LimitOrderStruct[], signatures: LibSignature.SignatureStruct[], takerTokenFillAmounts: BigNumberish[], revertIfIncomplete: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchFillRfqOrders(orders: LibNativeOrder.RfqOrderStruct[], signatures: LibSignature.SignatureStruct[], takerTokenFillAmounts: BigNumberish[], revertIfIncomplete: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchFillTakerSignedOtcOrders(orders: LibNativeOrder.OtcOrderStruct[], makerSignatures: LibSignature.SignatureStruct[], takerSignatures: LibSignature.SignatureStruct[], unwrapWeth: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchGetLimitOrderRelevantStates(orders: LibNativeOrder.LimitOrderStruct[], signatures: LibSignature.SignatureStruct[], overrides?: CallOverrides): Promise<[LibNativeOrder.OrderInfoStructOutput[], BigNumber[], boolean[]] & {
            orderInfos: LibNativeOrder.OrderInfoStructOutput[];
            actualFillableTakerTokenAmounts: BigNumber[];
            isSignatureValids: boolean[];
        }>;
        batchGetRfqOrderRelevantStates(orders: LibNativeOrder.RfqOrderStruct[], signatures: LibSignature.SignatureStruct[], overrides?: CallOverrides): Promise<[LibNativeOrder.OrderInfoStructOutput[], BigNumber[], boolean[]] & {
            orderInfos: LibNativeOrder.OrderInfoStructOutput[];
            actualFillableTakerTokenAmounts: BigNumber[];
            isSignatureValids: boolean[];
        }>;
        batchMatchERC721Orders(sellOrders: LibNFTOrder.ERC721OrderStruct[], buyOrders: LibNFTOrder.ERC721OrderStruct[], sellOrderSignatures: LibSignature.SignatureStruct[], buyOrderSignatures: LibSignature.SignatureStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        buyERC1155(sellOrder: LibNFTOrder.ERC1155OrderStruct, signature: LibSignature.SignatureStruct, erc1155BuyAmount: BigNumberish, callbackData: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        buyERC721(sellOrder: LibNFTOrder.ERC721OrderStruct, signature: LibSignature.SignatureStruct, callbackData: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelERC1155Order(orderNonce: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelERC721Order(orderNonce: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelLimitOrder(order: LibNativeOrder.LimitOrderStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelPairLimitOrders(makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelPairLimitOrdersWithSigner(maker: string, makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelPairRfqOrders(makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelPairRfqOrdersWithSigner(maker: string, makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelRfqOrder(order: LibNativeOrder.RfqOrderStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createTransformWallet(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeMetaTransaction(mtx: IMetaTransactionsFeature.MetaTransactionDataStruct, signature: LibSignature.SignatureStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        extend(selector: BytesLike, impl: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fillLimitOrder(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fillOrKillLimitOrder(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fillOrKillRfqOrder(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fillOtcOrder(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fillOtcOrderForEth(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fillOtcOrderWithEth(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fillRfqOrder(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fillTakerSignedOtcOrder(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerSignature: LibSignature.SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fillTakerSignedOtcOrderForEth(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerSignature: LibSignature.SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getERC1155OrderHash(order: LibNFTOrder.ERC1155OrderStruct, overrides?: CallOverrides): Promise<[string] & {
            orderHash: string;
        }>;
        getERC1155OrderInfo(order: LibNFTOrder.ERC1155OrderStruct, overrides?: CallOverrides): Promise<[LibNFTOrder.OrderInfoStructOutput] & {
            orderInfo: LibNFTOrder.OrderInfoStructOutput;
        }>;
        getERC721OrderHash(order: LibNFTOrder.ERC721OrderStruct, overrides?: CallOverrides): Promise<[string] & {
            orderHash: string;
        }>;
        getERC721OrderStatus(order: LibNFTOrder.ERC721OrderStruct, overrides?: CallOverrides): Promise<[number] & {
            status: number;
        }>;
        getERC721OrderStatusBitVector(maker: string, nonceRange: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            bitVector: BigNumber;
        }>;
        getLimitOrderHash(order: LibNativeOrder.LimitOrderStruct, overrides?: CallOverrides): Promise<[string] & {
            orderHash: string;
        }>;
        getLimitOrderInfo(order: LibNativeOrder.LimitOrderStruct, overrides?: CallOverrides): Promise<[LibNativeOrder.OrderInfoStructOutput] & {
            orderInfo: LibNativeOrder.OrderInfoStructOutput;
        }>;
        getLimitOrderRelevantState(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<[LibNativeOrder.OrderInfoStructOutput, BigNumber, boolean] & {
            orderInfo: LibNativeOrder.OrderInfoStructOutput;
            actualFillableTakerTokenAmount: BigNumber;
            isSignatureValid: boolean;
        }>;
        getMetaTransactionExecutedBlock(mtx: IMetaTransactionsFeature.MetaTransactionDataStruct, overrides?: CallOverrides): Promise<[BigNumber] & {
            blockNumber: BigNumber;
        }>;
        getMetaTransactionHash(mtx: IMetaTransactionsFeature.MetaTransactionDataStruct, overrides?: CallOverrides): Promise<[string] & {
            mtxHash: string;
        }>;
        getMetaTransactionHashExecutedBlock(mtxHash: BytesLike, overrides?: CallOverrides): Promise<[BigNumber] & {
            blockNumber: BigNumber;
        }>;
        getOtcOrderHash(order: LibNativeOrder.OtcOrderStruct, overrides?: CallOverrides): Promise<[string] & {
            orderHash: string;
        }>;
        getOtcOrderInfo(order: LibNativeOrder.OtcOrderStruct, overrides?: CallOverrides): Promise<[LibNativeOrder.OtcOrderInfoStructOutput] & {
            orderInfo: LibNativeOrder.OtcOrderInfoStructOutput;
        }>;
        getProtocolFeeMultiplier(overrides?: CallOverrides): Promise<[number] & {
            multiplier: number;
        }>;
        getQuoteSigner(overrides?: CallOverrides): Promise<[string] & {
            signer: string;
        }>;
        getRfqOrderHash(order: LibNativeOrder.RfqOrderStruct, overrides?: CallOverrides): Promise<[string] & {
            orderHash: string;
        }>;
        getRfqOrderInfo(order: LibNativeOrder.RfqOrderStruct, overrides?: CallOverrides): Promise<[LibNativeOrder.OrderInfoStructOutput] & {
            orderInfo: LibNativeOrder.OrderInfoStructOutput;
        }>;
        getRfqOrderRelevantState(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<[LibNativeOrder.OrderInfoStructOutput, BigNumber, boolean] & {
            orderInfo: LibNativeOrder.OrderInfoStructOutput;
            actualFillableTakerTokenAmount: BigNumber;
            isSignatureValid: boolean;
        }>;
        getRollbackEntryAtIndex(selector: BytesLike, idx: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            impl: string;
        }>;
        getRollbackLength(selector: BytesLike, overrides?: CallOverrides): Promise<[BigNumber] & {
            rollbackLength: BigNumber;
        }>;
        getTransformWallet(overrides?: CallOverrides): Promise<[string] & {
            wallet: string;
        }>;
        getTransformerDeployer(overrides?: CallOverrides): Promise<[string] & {
            deployer: string;
        }>;
        isValidOrderSigner(maker: string, signer: string, overrides?: CallOverrides): Promise<[boolean] & {
            isAllowed: boolean;
        }>;
        lastOtcTxOriginNonce(txOrigin: string, nonceBucket: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            lastNonce: BigNumber;
        }>;
        matchERC721Orders(sellOrder: LibNFTOrder.ERC721OrderStruct, buyOrder: LibNFTOrder.ERC721OrderStruct, sellOrderSignature: LibSignature.SignatureStruct, buyOrderSignature: LibSignature.SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        migrate(target: string, data: BytesLike, newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        multiplexBatchSellEthForToken(outputToken: string, calls: IMultiplexFeature.BatchSellSubcallStruct[], minBuyAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        multiplexBatchSellTokenForEth(inputToken: string, calls: IMultiplexFeature.BatchSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        multiplexBatchSellTokenForToken(inputToken: string, outputToken: string, calls: IMultiplexFeature.BatchSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        multiplexMultiHopSellEthForToken(tokens: string[], calls: IMultiplexFeature.MultiHopSellSubcallStruct[], minBuyAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        multiplexMultiHopSellTokenForEth(tokens: string[], calls: IMultiplexFeature.MultiHopSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        multiplexMultiHopSellTokenForToken(tokens: string[], calls: IMultiplexFeature.MultiHopSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC1155Received(operator: string, from: string, tokenId: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC721Received(operator: string, from: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string] & {
            ownerAddress: string;
        }>;
        preSignERC1155Order(order: LibNFTOrder.ERC1155OrderStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        preSignERC721Order(order: LibNFTOrder.ERC721OrderStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        registerAllowedOrderSigner(signer: string, allowed: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        registerAllowedRfqOrigins(origins: string[], allowed: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        rollback(selector: BytesLike, targetImpl: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sellERC1155(buyOrder: LibNFTOrder.ERC1155OrderStruct, signature: LibSignature.SignatureStruct, erc1155TokenId: BigNumberish, erc1155SellAmount: BigNumberish, unwrapNativeToken: boolean, callbackData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sellERC721(buyOrder: LibNFTOrder.ERC721OrderStruct, signature: LibSignature.SignatureStruct, erc721TokenId: BigNumberish, unwrapNativeToken: boolean, callbackData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sellEthForTokenToUniswapV3(encodedPath: BytesLike, minBuyAmount: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sellToLiquidityProvider(inputToken: string, outputToken: string, provider: string, recipient: string, sellAmount: BigNumberish, minBuyAmount: BigNumberish, auxiliaryData: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sellToPancakeSwap(tokens: string[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, fork: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sellToUniswap(tokens: string[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, isSushi: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sellTokenForEthToUniswapV3(encodedPath: BytesLike, sellAmount: BigNumberish, minBuyAmount: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sellTokenForTokenToUniswapV3(encodedPath: BytesLike, sellAmount: BigNumberish, minBuyAmount: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setQuoteSigner(quoteSigner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTransformerDeployer(transformerDeployer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean] & {
            isSupported: boolean;
        }>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferProtocolFeesForPools(poolIds: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferTrappedTokensTo(erc20: string, amountOut: BigNumberish, recipientWallet: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transformERC20(inputToken: string, outputToken: string, inputTokenAmount: BigNumberish, minOutputTokenAmount: BigNumberish, transformations: ITransformERC20Feature.TransformationStruct[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validateERC1155OrderProperties(order: LibNFTOrder.ERC1155OrderStruct, erc1155TokenId: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        validateERC1155OrderSignature(order: LibNFTOrder.ERC1155OrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<[void]>;
        validateERC721OrderProperties(order: LibNFTOrder.ERC721OrderStruct, erc721TokenId: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        validateERC721OrderSignature(order: LibNFTOrder.ERC721OrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<[void]>;
    };
    _fillLimitOrder(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, taker: string, sender: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _fillOtcOrder(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, taker: string, useSelfBalance: boolean, recipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _fillRfqOrder(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, taker: string, useSelfBalance: boolean, recipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _sellHeldTokenForTokenToUniswapV3(encodedPath: BytesLike, sellAmount: BigNumberish, minBuyAmount: BigNumberish, recipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _transformERC20(args: ITransformERC20Feature.TransformERC20ArgsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchBuyERC1155s(sellOrders: LibNFTOrder.ERC1155OrderStruct[], signatures: LibSignature.SignatureStruct[], erc1155TokenAmounts: BigNumberish[], callbackData: BytesLike[], revertIfIncomplete: boolean, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchBuyERC721s(sellOrders: LibNFTOrder.ERC721OrderStruct[], signatures: LibSignature.SignatureStruct[], callbackData: BytesLike[], revertIfIncomplete: boolean, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchCancelERC1155Orders(orderNonces: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchCancelERC721Orders(orderNonces: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchCancelLimitOrders(orders: LibNativeOrder.LimitOrderStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchCancelPairLimitOrders(makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchCancelPairLimitOrdersWithSigner(maker: string, makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchCancelPairRfqOrders(makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchCancelPairRfqOrdersWithSigner(maker: string, makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchCancelRfqOrders(orders: LibNativeOrder.RfqOrderStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchExecuteMetaTransactions(mtxs: IMetaTransactionsFeature.MetaTransactionDataStruct[], signatures: LibSignature.SignatureStruct[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchFillLimitOrders(orders: LibNativeOrder.LimitOrderStruct[], signatures: LibSignature.SignatureStruct[], takerTokenFillAmounts: BigNumberish[], revertIfIncomplete: boolean, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchFillRfqOrders(orders: LibNativeOrder.RfqOrderStruct[], signatures: LibSignature.SignatureStruct[], takerTokenFillAmounts: BigNumberish[], revertIfIncomplete: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchFillTakerSignedOtcOrders(orders: LibNativeOrder.OtcOrderStruct[], makerSignatures: LibSignature.SignatureStruct[], takerSignatures: LibSignature.SignatureStruct[], unwrapWeth: boolean[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchGetLimitOrderRelevantStates(orders: LibNativeOrder.LimitOrderStruct[], signatures: LibSignature.SignatureStruct[], overrides?: CallOverrides): Promise<[LibNativeOrder.OrderInfoStructOutput[], BigNumber[], boolean[]] & {
        orderInfos: LibNativeOrder.OrderInfoStructOutput[];
        actualFillableTakerTokenAmounts: BigNumber[];
        isSignatureValids: boolean[];
    }>;
    batchGetRfqOrderRelevantStates(orders: LibNativeOrder.RfqOrderStruct[], signatures: LibSignature.SignatureStruct[], overrides?: CallOverrides): Promise<[LibNativeOrder.OrderInfoStructOutput[], BigNumber[], boolean[]] & {
        orderInfos: LibNativeOrder.OrderInfoStructOutput[];
        actualFillableTakerTokenAmounts: BigNumber[];
        isSignatureValids: boolean[];
    }>;
    batchMatchERC721Orders(sellOrders: LibNFTOrder.ERC721OrderStruct[], buyOrders: LibNFTOrder.ERC721OrderStruct[], sellOrderSignatures: LibSignature.SignatureStruct[], buyOrderSignatures: LibSignature.SignatureStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    buyERC1155(sellOrder: LibNFTOrder.ERC1155OrderStruct, signature: LibSignature.SignatureStruct, erc1155BuyAmount: BigNumberish, callbackData: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    buyERC721(sellOrder: LibNFTOrder.ERC721OrderStruct, signature: LibSignature.SignatureStruct, callbackData: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelERC1155Order(orderNonce: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelERC721Order(orderNonce: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelLimitOrder(order: LibNativeOrder.LimitOrderStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelPairLimitOrders(makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelPairLimitOrdersWithSigner(maker: string, makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelPairRfqOrders(makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelPairRfqOrdersWithSigner(maker: string, makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelRfqOrder(order: LibNativeOrder.RfqOrderStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createTransformWallet(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeMetaTransaction(mtx: IMetaTransactionsFeature.MetaTransactionDataStruct, signature: LibSignature.SignatureStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    extend(selector: BytesLike, impl: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fillLimitOrder(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fillOrKillLimitOrder(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fillOrKillRfqOrder(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fillOtcOrder(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fillOtcOrderForEth(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fillOtcOrderWithEth(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fillRfqOrder(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fillTakerSignedOtcOrder(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerSignature: LibSignature.SignatureStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fillTakerSignedOtcOrderForEth(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerSignature: LibSignature.SignatureStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getERC1155OrderHash(order: LibNFTOrder.ERC1155OrderStruct, overrides?: CallOverrides): Promise<string>;
    getERC1155OrderInfo(order: LibNFTOrder.ERC1155OrderStruct, overrides?: CallOverrides): Promise<LibNFTOrder.OrderInfoStructOutput>;
    getERC721OrderHash(order: LibNFTOrder.ERC721OrderStruct, overrides?: CallOverrides): Promise<string>;
    getERC721OrderStatus(order: LibNFTOrder.ERC721OrderStruct, overrides?: CallOverrides): Promise<number>;
    getERC721OrderStatusBitVector(maker: string, nonceRange: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getLimitOrderHash(order: LibNativeOrder.LimitOrderStruct, overrides?: CallOverrides): Promise<string>;
    getLimitOrderInfo(order: LibNativeOrder.LimitOrderStruct, overrides?: CallOverrides): Promise<LibNativeOrder.OrderInfoStructOutput>;
    getLimitOrderRelevantState(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<[LibNativeOrder.OrderInfoStructOutput, BigNumber, boolean] & {
        orderInfo: LibNativeOrder.OrderInfoStructOutput;
        actualFillableTakerTokenAmount: BigNumber;
        isSignatureValid: boolean;
    }>;
    getMetaTransactionExecutedBlock(mtx: IMetaTransactionsFeature.MetaTransactionDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
    getMetaTransactionHash(mtx: IMetaTransactionsFeature.MetaTransactionDataStruct, overrides?: CallOverrides): Promise<string>;
    getMetaTransactionHashExecutedBlock(mtxHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getOtcOrderHash(order: LibNativeOrder.OtcOrderStruct, overrides?: CallOverrides): Promise<string>;
    getOtcOrderInfo(order: LibNativeOrder.OtcOrderStruct, overrides?: CallOverrides): Promise<LibNativeOrder.OtcOrderInfoStructOutput>;
    getProtocolFeeMultiplier(overrides?: CallOverrides): Promise<number>;
    getQuoteSigner(overrides?: CallOverrides): Promise<string>;
    getRfqOrderHash(order: LibNativeOrder.RfqOrderStruct, overrides?: CallOverrides): Promise<string>;
    getRfqOrderInfo(order: LibNativeOrder.RfqOrderStruct, overrides?: CallOverrides): Promise<LibNativeOrder.OrderInfoStructOutput>;
    getRfqOrderRelevantState(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<[LibNativeOrder.OrderInfoStructOutput, BigNumber, boolean] & {
        orderInfo: LibNativeOrder.OrderInfoStructOutput;
        actualFillableTakerTokenAmount: BigNumber;
        isSignatureValid: boolean;
    }>;
    getRollbackEntryAtIndex(selector: BytesLike, idx: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRollbackLength(selector: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getTransformWallet(overrides?: CallOverrides): Promise<string>;
    getTransformerDeployer(overrides?: CallOverrides): Promise<string>;
    isValidOrderSigner(maker: string, signer: string, overrides?: CallOverrides): Promise<boolean>;
    lastOtcTxOriginNonce(txOrigin: string, nonceBucket: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    matchERC721Orders(sellOrder: LibNFTOrder.ERC721OrderStruct, buyOrder: LibNFTOrder.ERC721OrderStruct, sellOrderSignature: LibSignature.SignatureStruct, buyOrderSignature: LibSignature.SignatureStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    migrate(target: string, data: BytesLike, newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    multiplexBatchSellEthForToken(outputToken: string, calls: IMultiplexFeature.BatchSellSubcallStruct[], minBuyAmount: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    multiplexBatchSellTokenForEth(inputToken: string, calls: IMultiplexFeature.BatchSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    multiplexBatchSellTokenForToken(inputToken: string, outputToken: string, calls: IMultiplexFeature.BatchSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    multiplexMultiHopSellEthForToken(tokens: string[], calls: IMultiplexFeature.MultiHopSellSubcallStruct[], minBuyAmount: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    multiplexMultiHopSellTokenForEth(tokens: string[], calls: IMultiplexFeature.MultiHopSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    multiplexMultiHopSellTokenForToken(tokens: string[], calls: IMultiplexFeature.MultiHopSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC1155Received(operator: string, from: string, tokenId: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC721Received(operator: string, from: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    preSignERC1155Order(order: LibNFTOrder.ERC1155OrderStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    preSignERC721Order(order: LibNFTOrder.ERC721OrderStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    registerAllowedOrderSigner(signer: string, allowed: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    registerAllowedRfqOrigins(origins: string[], allowed: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    rollback(selector: BytesLike, targetImpl: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sellERC1155(buyOrder: LibNFTOrder.ERC1155OrderStruct, signature: LibSignature.SignatureStruct, erc1155TokenId: BigNumberish, erc1155SellAmount: BigNumberish, unwrapNativeToken: boolean, callbackData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sellERC721(buyOrder: LibNFTOrder.ERC721OrderStruct, signature: LibSignature.SignatureStruct, erc721TokenId: BigNumberish, unwrapNativeToken: boolean, callbackData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sellEthForTokenToUniswapV3(encodedPath: BytesLike, minBuyAmount: BigNumberish, recipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sellToLiquidityProvider(inputToken: string, outputToken: string, provider: string, recipient: string, sellAmount: BigNumberish, minBuyAmount: BigNumberish, auxiliaryData: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sellToPancakeSwap(tokens: string[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, fork: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sellToUniswap(tokens: string[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, isSushi: boolean, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sellTokenForEthToUniswapV3(encodedPath: BytesLike, sellAmount: BigNumberish, minBuyAmount: BigNumberish, recipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sellTokenForTokenToUniswapV3(encodedPath: BytesLike, sellAmount: BigNumberish, minBuyAmount: BigNumberish, recipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setQuoteSigner(quoteSigner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTransformerDeployer(transformerDeployer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferProtocolFeesForPools(poolIds: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferTrappedTokensTo(erc20: string, amountOut: BigNumberish, recipientWallet: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transformERC20(inputToken: string, outputToken: string, inputTokenAmount: BigNumberish, minOutputTokenAmount: BigNumberish, transformations: ITransformERC20Feature.TransformationStruct[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validateERC1155OrderProperties(order: LibNFTOrder.ERC1155OrderStruct, erc1155TokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
    validateERC1155OrderSignature(order: LibNFTOrder.ERC1155OrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<void>;
    validateERC721OrderProperties(order: LibNFTOrder.ERC721OrderStruct, erc721TokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
    validateERC721OrderSignature(order: LibNFTOrder.ERC721OrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        _fillLimitOrder(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, taker: string, sender: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            takerTokenFilledAmount: BigNumber;
            makerTokenFilledAmount: BigNumber;
        }>;
        _fillOtcOrder(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, taker: string, useSelfBalance: boolean, recipient: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            takerTokenFilledAmount: BigNumber;
            makerTokenFilledAmount: BigNumber;
        }>;
        _fillRfqOrder(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, taker: string, useSelfBalance: boolean, recipient: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            takerTokenFilledAmount: BigNumber;
            makerTokenFilledAmount: BigNumber;
        }>;
        _sellHeldTokenForTokenToUniswapV3(encodedPath: BytesLike, sellAmount: BigNumberish, minBuyAmount: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<BigNumber>;
        _transformERC20(args: ITransformERC20Feature.TransformERC20ArgsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        batchBuyERC1155s(sellOrders: LibNFTOrder.ERC1155OrderStruct[], signatures: LibSignature.SignatureStruct[], erc1155TokenAmounts: BigNumberish[], callbackData: BytesLike[], revertIfIncomplete: boolean, overrides?: CallOverrides): Promise<boolean[]>;
        batchBuyERC721s(sellOrders: LibNFTOrder.ERC721OrderStruct[], signatures: LibSignature.SignatureStruct[], callbackData: BytesLike[], revertIfIncomplete: boolean, overrides?: CallOverrides): Promise<boolean[]>;
        batchCancelERC1155Orders(orderNonces: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        batchCancelERC721Orders(orderNonces: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        batchCancelLimitOrders(orders: LibNativeOrder.LimitOrderStruct[], overrides?: CallOverrides): Promise<void>;
        batchCancelPairLimitOrders(makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        batchCancelPairLimitOrdersWithSigner(maker: string, makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        batchCancelPairRfqOrders(makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        batchCancelPairRfqOrdersWithSigner(maker: string, makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        batchCancelRfqOrders(orders: LibNativeOrder.RfqOrderStruct[], overrides?: CallOverrides): Promise<void>;
        batchExecuteMetaTransactions(mtxs: IMetaTransactionsFeature.MetaTransactionDataStruct[], signatures: LibSignature.SignatureStruct[], overrides?: CallOverrides): Promise<string[]>;
        batchFillLimitOrders(orders: LibNativeOrder.LimitOrderStruct[], signatures: LibSignature.SignatureStruct[], takerTokenFillAmounts: BigNumberish[], revertIfIncomplete: boolean, overrides?: CallOverrides): Promise<[BigNumber[], BigNumber[]] & {
            takerTokenFilledAmounts: BigNumber[];
            makerTokenFilledAmounts: BigNumber[];
        }>;
        batchFillRfqOrders(orders: LibNativeOrder.RfqOrderStruct[], signatures: LibSignature.SignatureStruct[], takerTokenFillAmounts: BigNumberish[], revertIfIncomplete: boolean, overrides?: CallOverrides): Promise<[BigNumber[], BigNumber[]] & {
            takerTokenFilledAmounts: BigNumber[];
            makerTokenFilledAmounts: BigNumber[];
        }>;
        batchFillTakerSignedOtcOrders(orders: LibNativeOrder.OtcOrderStruct[], makerSignatures: LibSignature.SignatureStruct[], takerSignatures: LibSignature.SignatureStruct[], unwrapWeth: boolean[], overrides?: CallOverrides): Promise<boolean[]>;
        batchGetLimitOrderRelevantStates(orders: LibNativeOrder.LimitOrderStruct[], signatures: LibSignature.SignatureStruct[], overrides?: CallOverrides): Promise<[LibNativeOrder.OrderInfoStructOutput[], BigNumber[], boolean[]] & {
            orderInfos: LibNativeOrder.OrderInfoStructOutput[];
            actualFillableTakerTokenAmounts: BigNumber[];
            isSignatureValids: boolean[];
        }>;
        batchGetRfqOrderRelevantStates(orders: LibNativeOrder.RfqOrderStruct[], signatures: LibSignature.SignatureStruct[], overrides?: CallOverrides): Promise<[LibNativeOrder.OrderInfoStructOutput[], BigNumber[], boolean[]] & {
            orderInfos: LibNativeOrder.OrderInfoStructOutput[];
            actualFillableTakerTokenAmounts: BigNumber[];
            isSignatureValids: boolean[];
        }>;
        batchMatchERC721Orders(sellOrders: LibNFTOrder.ERC721OrderStruct[], buyOrders: LibNFTOrder.ERC721OrderStruct[], sellOrderSignatures: LibSignature.SignatureStruct[], buyOrderSignatures: LibSignature.SignatureStruct[], overrides?: CallOverrides): Promise<[BigNumber[], boolean[]] & {
            profits: BigNumber[];
            successes: boolean[];
        }>;
        buyERC1155(sellOrder: LibNFTOrder.ERC1155OrderStruct, signature: LibSignature.SignatureStruct, erc1155BuyAmount: BigNumberish, callbackData: BytesLike, overrides?: CallOverrides): Promise<void>;
        buyERC721(sellOrder: LibNFTOrder.ERC721OrderStruct, signature: LibSignature.SignatureStruct, callbackData: BytesLike, overrides?: CallOverrides): Promise<void>;
        cancelERC1155Order(orderNonce: BigNumberish, overrides?: CallOverrides): Promise<void>;
        cancelERC721Order(orderNonce: BigNumberish, overrides?: CallOverrides): Promise<void>;
        cancelLimitOrder(order: LibNativeOrder.LimitOrderStruct, overrides?: CallOverrides): Promise<void>;
        cancelPairLimitOrders(makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: CallOverrides): Promise<void>;
        cancelPairLimitOrdersWithSigner(maker: string, makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: CallOverrides): Promise<void>;
        cancelPairRfqOrders(makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: CallOverrides): Promise<void>;
        cancelPairRfqOrdersWithSigner(maker: string, makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: CallOverrides): Promise<void>;
        cancelRfqOrder(order: LibNativeOrder.RfqOrderStruct, overrides?: CallOverrides): Promise<void>;
        createTransformWallet(overrides?: CallOverrides): Promise<string>;
        executeMetaTransaction(mtx: IMetaTransactionsFeature.MetaTransactionDataStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<string>;
        extend(selector: BytesLike, impl: string, overrides?: CallOverrides): Promise<void>;
        fillLimitOrder(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            takerTokenFilledAmount: BigNumber;
            makerTokenFilledAmount: BigNumber;
        }>;
        fillOrKillLimitOrder(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        fillOrKillRfqOrder(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        fillOtcOrder(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            takerTokenFilledAmount: BigNumber;
            makerTokenFilledAmount: BigNumber;
        }>;
        fillOtcOrderForEth(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            takerTokenFilledAmount: BigNumber;
            makerTokenFilledAmount: BigNumber;
        }>;
        fillOtcOrderWithEth(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            takerTokenFilledAmount: BigNumber;
            makerTokenFilledAmount: BigNumber;
        }>;
        fillRfqOrder(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            takerTokenFilledAmount: BigNumber;
            makerTokenFilledAmount: BigNumber;
        }>;
        fillTakerSignedOtcOrder(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerSignature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<void>;
        fillTakerSignedOtcOrderForEth(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerSignature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<void>;
        getERC1155OrderHash(order: LibNFTOrder.ERC1155OrderStruct, overrides?: CallOverrides): Promise<string>;
        getERC1155OrderInfo(order: LibNFTOrder.ERC1155OrderStruct, overrides?: CallOverrides): Promise<LibNFTOrder.OrderInfoStructOutput>;
        getERC721OrderHash(order: LibNFTOrder.ERC721OrderStruct, overrides?: CallOverrides): Promise<string>;
        getERC721OrderStatus(order: LibNFTOrder.ERC721OrderStruct, overrides?: CallOverrides): Promise<number>;
        getERC721OrderStatusBitVector(maker: string, nonceRange: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLimitOrderHash(order: LibNativeOrder.LimitOrderStruct, overrides?: CallOverrides): Promise<string>;
        getLimitOrderInfo(order: LibNativeOrder.LimitOrderStruct, overrides?: CallOverrides): Promise<LibNativeOrder.OrderInfoStructOutput>;
        getLimitOrderRelevantState(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<[LibNativeOrder.OrderInfoStructOutput, BigNumber, boolean] & {
            orderInfo: LibNativeOrder.OrderInfoStructOutput;
            actualFillableTakerTokenAmount: BigNumber;
            isSignatureValid: boolean;
        }>;
        getMetaTransactionExecutedBlock(mtx: IMetaTransactionsFeature.MetaTransactionDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getMetaTransactionHash(mtx: IMetaTransactionsFeature.MetaTransactionDataStruct, overrides?: CallOverrides): Promise<string>;
        getMetaTransactionHashExecutedBlock(mtxHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getOtcOrderHash(order: LibNativeOrder.OtcOrderStruct, overrides?: CallOverrides): Promise<string>;
        getOtcOrderInfo(order: LibNativeOrder.OtcOrderStruct, overrides?: CallOverrides): Promise<LibNativeOrder.OtcOrderInfoStructOutput>;
        getProtocolFeeMultiplier(overrides?: CallOverrides): Promise<number>;
        getQuoteSigner(overrides?: CallOverrides): Promise<string>;
        getRfqOrderHash(order: LibNativeOrder.RfqOrderStruct, overrides?: CallOverrides): Promise<string>;
        getRfqOrderInfo(order: LibNativeOrder.RfqOrderStruct, overrides?: CallOverrides): Promise<LibNativeOrder.OrderInfoStructOutput>;
        getRfqOrderRelevantState(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<[LibNativeOrder.OrderInfoStructOutput, BigNumber, boolean] & {
            orderInfo: LibNativeOrder.OrderInfoStructOutput;
            actualFillableTakerTokenAmount: BigNumber;
            isSignatureValid: boolean;
        }>;
        getRollbackEntryAtIndex(selector: BytesLike, idx: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRollbackLength(selector: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getTransformWallet(overrides?: CallOverrides): Promise<string>;
        getTransformerDeployer(overrides?: CallOverrides): Promise<string>;
        isValidOrderSigner(maker: string, signer: string, overrides?: CallOverrides): Promise<boolean>;
        lastOtcTxOriginNonce(txOrigin: string, nonceBucket: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        matchERC721Orders(sellOrder: LibNFTOrder.ERC721OrderStruct, buyOrder: LibNFTOrder.ERC721OrderStruct, sellOrderSignature: LibSignature.SignatureStruct, buyOrderSignature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<BigNumber>;
        migrate(target: string, data: BytesLike, newOwner: string, overrides?: CallOverrides): Promise<void>;
        multiplexBatchSellEthForToken(outputToken: string, calls: IMultiplexFeature.BatchSellSubcallStruct[], minBuyAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        multiplexBatchSellTokenForEth(inputToken: string, calls: IMultiplexFeature.BatchSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        multiplexBatchSellTokenForToken(inputToken: string, outputToken: string, calls: IMultiplexFeature.BatchSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        multiplexMultiHopSellEthForToken(tokens: string[], calls: IMultiplexFeature.MultiHopSellSubcallStruct[], minBuyAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        multiplexMultiHopSellTokenForEth(tokens: string[], calls: IMultiplexFeature.MultiHopSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        multiplexMultiHopSellTokenForToken(tokens: string[], calls: IMultiplexFeature.MultiHopSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155Received(operator: string, from: string, tokenId: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC721Received(operator: string, from: string, tokenId: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        preSignERC1155Order(order: LibNFTOrder.ERC1155OrderStruct, overrides?: CallOverrides): Promise<void>;
        preSignERC721Order(order: LibNFTOrder.ERC721OrderStruct, overrides?: CallOverrides): Promise<void>;
        registerAllowedOrderSigner(signer: string, allowed: boolean, overrides?: CallOverrides): Promise<void>;
        registerAllowedRfqOrigins(origins: string[], allowed: boolean, overrides?: CallOverrides): Promise<void>;
        rollback(selector: BytesLike, targetImpl: string, overrides?: CallOverrides): Promise<void>;
        sellERC1155(buyOrder: LibNFTOrder.ERC1155OrderStruct, signature: LibSignature.SignatureStruct, erc1155TokenId: BigNumberish, erc1155SellAmount: BigNumberish, unwrapNativeToken: boolean, callbackData: BytesLike, overrides?: CallOverrides): Promise<void>;
        sellERC721(buyOrder: LibNFTOrder.ERC721OrderStruct, signature: LibSignature.SignatureStruct, erc721TokenId: BigNumberish, unwrapNativeToken: boolean, callbackData: BytesLike, overrides?: CallOverrides): Promise<void>;
        sellEthForTokenToUniswapV3(encodedPath: BytesLike, minBuyAmount: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<BigNumber>;
        sellToLiquidityProvider(inputToken: string, outputToken: string, provider: string, recipient: string, sellAmount: BigNumberish, minBuyAmount: BigNumberish, auxiliaryData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        sellToPancakeSwap(tokens: string[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, fork: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        sellToUniswap(tokens: string[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, isSushi: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        sellTokenForEthToUniswapV3(encodedPath: BytesLike, sellAmount: BigNumberish, minBuyAmount: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<BigNumber>;
        sellTokenForTokenToUniswapV3(encodedPath: BytesLike, sellAmount: BigNumberish, minBuyAmount: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<BigNumber>;
        setQuoteSigner(quoteSigner: string, overrides?: CallOverrides): Promise<void>;
        setTransformerDeployer(transformerDeployer: string, overrides?: CallOverrides): Promise<void>;
        supportInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        transferProtocolFeesForPools(poolIds: BytesLike[], overrides?: CallOverrides): Promise<void>;
        transferTrappedTokensTo(erc20: string, amountOut: BigNumberish, recipientWallet: string, overrides?: CallOverrides): Promise<void>;
        transformERC20(inputToken: string, outputToken: string, inputTokenAmount: BigNumberish, minOutputTokenAmount: BigNumberish, transformations: ITransformERC20Feature.TransformationStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        validateERC1155OrderProperties(order: LibNFTOrder.ERC1155OrderStruct, erc1155TokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        validateERC1155OrderSignature(order: LibNFTOrder.ERC1155OrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<void>;
        validateERC721OrderProperties(order: LibNFTOrder.ERC721OrderStruct, erc721TokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        validateERC721OrderSignature(order: LibNFTOrder.ERC721OrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        'ERC1155OrderCancelled(address,uint256)'(maker?: null, nonce?: null): ERC1155OrderCancelledEventFilter;
        ERC1155OrderCancelled(maker?: null, nonce?: null): ERC1155OrderCancelledEventFilter;
        'ERC1155OrderFilled(uint8,address,address,uint256,address,uint256,address,uint256,uint128,address)'(direction?: null, maker?: null, taker?: null, nonce?: null, erc20Token?: null, erc20FillAmount?: null, erc1155Token?: null, erc1155TokenId?: null, erc1155FillAmount?: null, matcher?: null): ERC1155OrderFilledEventFilter;
        ERC1155OrderFilled(direction?: null, maker?: null, taker?: null, nonce?: null, erc20Token?: null, erc20FillAmount?: null, erc1155Token?: null, erc1155TokenId?: null, erc1155FillAmount?: null, matcher?: null): ERC1155OrderFilledEventFilter;
        'ERC1155OrderPreSigned(uint8,address,address,uint256,uint256,address,uint256,tuple[],address,uint256,tuple[],uint128)'(direction?: null, maker?: null, taker?: null, expiry?: null, nonce?: null, erc20Token?: null, erc20TokenAmount?: null, fees?: null, erc1155Token?: null, erc1155TokenId?: null, erc1155TokenProperties?: null, erc1155TokenAmount?: null): ERC1155OrderPreSignedEventFilter;
        ERC1155OrderPreSigned(direction?: null, maker?: null, taker?: null, expiry?: null, nonce?: null, erc20Token?: null, erc20TokenAmount?: null, fees?: null, erc1155Token?: null, erc1155TokenId?: null, erc1155TokenProperties?: null, erc1155TokenAmount?: null): ERC1155OrderPreSignedEventFilter;
        'ERC721OrderCancelled(address,uint256)'(maker?: null, nonce?: null): ERC721OrderCancelledEventFilter;
        ERC721OrderCancelled(maker?: null, nonce?: null): ERC721OrderCancelledEventFilter;
        'ERC721OrderFilled(uint8,address,address,uint256,address,uint256,address,uint256,address)'(direction?: null, maker?: null, taker?: null, nonce?: null, erc20Token?: null, erc20TokenAmount?: null, erc721Token?: null, erc721TokenId?: null, matcher?: null): ERC721OrderFilledEventFilter;
        ERC721OrderFilled(direction?: null, maker?: null, taker?: null, nonce?: null, erc20Token?: null, erc20TokenAmount?: null, erc721Token?: null, erc721TokenId?: null, matcher?: null): ERC721OrderFilledEventFilter;
        'ERC721OrderPreSigned(uint8,address,address,uint256,uint256,address,uint256,tuple[],address,uint256,tuple[])'(direction?: null, maker?: null, taker?: null, expiry?: null, nonce?: null, erc20Token?: null, erc20TokenAmount?: null, fees?: null, erc721Token?: null, erc721TokenId?: null, erc721TokenProperties?: null): ERC721OrderPreSignedEventFilter;
        ERC721OrderPreSigned(direction?: null, maker?: null, taker?: null, expiry?: null, nonce?: null, erc20Token?: null, erc20TokenAmount?: null, fees?: null, erc721Token?: null, erc721TokenId?: null, erc721TokenProperties?: null): ERC721OrderPreSignedEventFilter;
        'LimitOrderFilled(bytes32,address,address,address,address,address,uint128,uint128,uint128,uint256,bytes32)'(orderHash?: null, maker?: null, taker?: null, feeRecipient?: null, makerToken?: null, takerToken?: null, takerTokenFilledAmount?: null, makerTokenFilledAmount?: null, takerTokenFeeFilledAmount?: null, protocolFeePaid?: null, pool?: null): LimitOrderFilledEventFilter;
        LimitOrderFilled(orderHash?: null, maker?: null, taker?: null, feeRecipient?: null, makerToken?: null, takerToken?: null, takerTokenFilledAmount?: null, makerTokenFilledAmount?: null, takerTokenFeeFilledAmount?: null, protocolFeePaid?: null, pool?: null): LimitOrderFilledEventFilter;
        'LiquidityProviderSwap(address,address,uint256,uint256,address,address)'(inputToken?: null, outputToken?: null, inputTokenAmount?: null, outputTokenAmount?: null, provider?: null, recipient?: null): LiquidityProviderSwapEventFilter;
        LiquidityProviderSwap(inputToken?: null, outputToken?: null, inputTokenAmount?: null, outputTokenAmount?: null, provider?: null, recipient?: null): LiquidityProviderSwapEventFilter;
        'MetaTransactionExecuted(bytes32,bytes4,address,address)'(hash?: null, selector?: BytesLike | null, signer?: null, sender?: null): MetaTransactionExecutedEventFilter;
        MetaTransactionExecuted(hash?: null, selector?: BytesLike | null, signer?: null, sender?: null): MetaTransactionExecutedEventFilter;
        'Migrated(address,address,address)'(caller?: null, migrator?: null, newOwner?: null): MigratedEventFilter;
        Migrated(caller?: null, migrator?: null, newOwner?: null): MigratedEventFilter;
        'OrderCancelled(bytes32,address)'(orderHash?: null, maker?: null): OrderCancelledEventFilter;
        OrderCancelled(orderHash?: null, maker?: null): OrderCancelledEventFilter;
        'OrderSignerRegistered(address,address,bool)'(maker?: null, signer?: null, allowed?: null): OrderSignerRegisteredEventFilter;
        OrderSignerRegistered(maker?: null, signer?: null, allowed?: null): OrderSignerRegisteredEventFilter;
        'OtcOrderFilled(bytes32,address,address,address,address,uint128,uint128)'(orderHash?: null, maker?: null, taker?: null, makerToken?: null, takerToken?: null, makerTokenFilledAmount?: null, takerTokenFilledAmount?: null): OtcOrderFilledEventFilter;
        OtcOrderFilled(orderHash?: null, maker?: null, taker?: null, makerToken?: null, takerToken?: null, makerTokenFilledAmount?: null, takerTokenFilledAmount?: null): OtcOrderFilledEventFilter;
        'OwnershipTransferred(address,address)'(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        'PairCancelledLimitOrders(address,address,address,uint256)'(maker?: null, makerToken?: null, takerToken?: null, minValidSalt?: null): PairCancelledLimitOrdersEventFilter;
        PairCancelledLimitOrders(maker?: null, makerToken?: null, takerToken?: null, minValidSalt?: null): PairCancelledLimitOrdersEventFilter;
        'PairCancelledRfqOrders(address,address,address,uint256)'(maker?: null, makerToken?: null, takerToken?: null, minValidSalt?: null): PairCancelledRfqOrdersEventFilter;
        PairCancelledRfqOrders(maker?: null, makerToken?: null, takerToken?: null, minValidSalt?: null): PairCancelledRfqOrdersEventFilter;
        'ProxyFunctionUpdated(bytes4,address,address)'(selector?: BytesLike | null, oldImpl?: null, newImpl?: null): ProxyFunctionUpdatedEventFilter;
        ProxyFunctionUpdated(selector?: BytesLike | null, oldImpl?: null, newImpl?: null): ProxyFunctionUpdatedEventFilter;
        'QuoteSignerUpdated(address)'(quoteSigner?: null): QuoteSignerUpdatedEventFilter;
        QuoteSignerUpdated(quoteSigner?: null): QuoteSignerUpdatedEventFilter;
        'RfqOrderFilled(bytes32,address,address,address,address,uint128,uint128,bytes32)'(orderHash?: null, maker?: null, taker?: null, makerToken?: null, takerToken?: null, takerTokenFilledAmount?: null, makerTokenFilledAmount?: null, pool?: null): RfqOrderFilledEventFilter;
        RfqOrderFilled(orderHash?: null, maker?: null, taker?: null, makerToken?: null, takerToken?: null, takerTokenFilledAmount?: null, makerTokenFilledAmount?: null, pool?: null): RfqOrderFilledEventFilter;
        'RfqOrderOriginsAllowed(address,address[],bool)'(origin?: null, addrs?: null, allowed?: null): RfqOrderOriginsAllowedEventFilter;
        RfqOrderOriginsAllowed(origin?: null, addrs?: null, allowed?: null): RfqOrderOriginsAllowedEventFilter;
        'TransformedERC20(address,address,address,uint256,uint256)'(taker?: string | null, inputToken?: null, outputToken?: null, inputTokenAmount?: null, outputTokenAmount?: null): TransformedERC20EventFilter;
        TransformedERC20(taker?: string | null, inputToken?: null, outputToken?: null, inputTokenAmount?: null, outputTokenAmount?: null): TransformedERC20EventFilter;
        'TransformerDeployerUpdated(address)'(transformerDeployer?: null): TransformerDeployerUpdatedEventFilter;
        TransformerDeployerUpdated(transformerDeployer?: null): TransformerDeployerUpdatedEventFilter;
    };
    estimateGas: {
        _fillLimitOrder(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, taker: string, sender: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _fillOtcOrder(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, taker: string, useSelfBalance: boolean, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _fillRfqOrder(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, taker: string, useSelfBalance: boolean, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _sellHeldTokenForTokenToUniswapV3(encodedPath: BytesLike, sellAmount: BigNumberish, minBuyAmount: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _transformERC20(args: ITransformERC20Feature.TransformERC20ArgsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchBuyERC1155s(sellOrders: LibNFTOrder.ERC1155OrderStruct[], signatures: LibSignature.SignatureStruct[], erc1155TokenAmounts: BigNumberish[], callbackData: BytesLike[], revertIfIncomplete: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchBuyERC721s(sellOrders: LibNFTOrder.ERC721OrderStruct[], signatures: LibSignature.SignatureStruct[], callbackData: BytesLike[], revertIfIncomplete: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchCancelERC1155Orders(orderNonces: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchCancelERC721Orders(orderNonces: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchCancelLimitOrders(orders: LibNativeOrder.LimitOrderStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchCancelPairLimitOrders(makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchCancelPairLimitOrdersWithSigner(maker: string, makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchCancelPairRfqOrders(makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchCancelPairRfqOrdersWithSigner(maker: string, makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchCancelRfqOrders(orders: LibNativeOrder.RfqOrderStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchExecuteMetaTransactions(mtxs: IMetaTransactionsFeature.MetaTransactionDataStruct[], signatures: LibSignature.SignatureStruct[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchFillLimitOrders(orders: LibNativeOrder.LimitOrderStruct[], signatures: LibSignature.SignatureStruct[], takerTokenFillAmounts: BigNumberish[], revertIfIncomplete: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchFillRfqOrders(orders: LibNativeOrder.RfqOrderStruct[], signatures: LibSignature.SignatureStruct[], takerTokenFillAmounts: BigNumberish[], revertIfIncomplete: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchFillTakerSignedOtcOrders(orders: LibNativeOrder.OtcOrderStruct[], makerSignatures: LibSignature.SignatureStruct[], takerSignatures: LibSignature.SignatureStruct[], unwrapWeth: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchGetLimitOrderRelevantStates(orders: LibNativeOrder.LimitOrderStruct[], signatures: LibSignature.SignatureStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        batchGetRfqOrderRelevantStates(orders: LibNativeOrder.RfqOrderStruct[], signatures: LibSignature.SignatureStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        batchMatchERC721Orders(sellOrders: LibNFTOrder.ERC721OrderStruct[], buyOrders: LibNFTOrder.ERC721OrderStruct[], sellOrderSignatures: LibSignature.SignatureStruct[], buyOrderSignatures: LibSignature.SignatureStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        buyERC1155(sellOrder: LibNFTOrder.ERC1155OrderStruct, signature: LibSignature.SignatureStruct, erc1155BuyAmount: BigNumberish, callbackData: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        buyERC721(sellOrder: LibNFTOrder.ERC721OrderStruct, signature: LibSignature.SignatureStruct, callbackData: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelERC1155Order(orderNonce: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelERC721Order(orderNonce: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelLimitOrder(order: LibNativeOrder.LimitOrderStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelPairLimitOrders(makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelPairLimitOrdersWithSigner(maker: string, makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelPairRfqOrders(makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelPairRfqOrdersWithSigner(maker: string, makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelRfqOrder(order: LibNativeOrder.RfqOrderStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createTransformWallet(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeMetaTransaction(mtx: IMetaTransactionsFeature.MetaTransactionDataStruct, signature: LibSignature.SignatureStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        extend(selector: BytesLike, impl: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fillLimitOrder(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fillOrKillLimitOrder(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fillOrKillRfqOrder(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fillOtcOrder(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fillOtcOrderForEth(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fillOtcOrderWithEth(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fillRfqOrder(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fillTakerSignedOtcOrder(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerSignature: LibSignature.SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fillTakerSignedOtcOrderForEth(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerSignature: LibSignature.SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getERC1155OrderHash(order: LibNFTOrder.ERC1155OrderStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getERC1155OrderInfo(order: LibNFTOrder.ERC1155OrderStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getERC721OrderHash(order: LibNFTOrder.ERC721OrderStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getERC721OrderStatus(order: LibNFTOrder.ERC721OrderStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getERC721OrderStatusBitVector(maker: string, nonceRange: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLimitOrderHash(order: LibNativeOrder.LimitOrderStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getLimitOrderInfo(order: LibNativeOrder.LimitOrderStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getLimitOrderRelevantState(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getMetaTransactionExecutedBlock(mtx: IMetaTransactionsFeature.MetaTransactionDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getMetaTransactionHash(mtx: IMetaTransactionsFeature.MetaTransactionDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getMetaTransactionHashExecutedBlock(mtxHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getOtcOrderHash(order: LibNativeOrder.OtcOrderStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getOtcOrderInfo(order: LibNativeOrder.OtcOrderStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getProtocolFeeMultiplier(overrides?: CallOverrides): Promise<BigNumber>;
        getQuoteSigner(overrides?: CallOverrides): Promise<BigNumber>;
        getRfqOrderHash(order: LibNativeOrder.RfqOrderStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getRfqOrderInfo(order: LibNativeOrder.RfqOrderStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getRfqOrderRelevantState(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getRollbackEntryAtIndex(selector: BytesLike, idx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRollbackLength(selector: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getTransformWallet(overrides?: CallOverrides): Promise<BigNumber>;
        getTransformerDeployer(overrides?: CallOverrides): Promise<BigNumber>;
        isValidOrderSigner(maker: string, signer: string, overrides?: CallOverrides): Promise<BigNumber>;
        lastOtcTxOriginNonce(txOrigin: string, nonceBucket: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        matchERC721Orders(sellOrder: LibNFTOrder.ERC721OrderStruct, buyOrder: LibNFTOrder.ERC721OrderStruct, sellOrderSignature: LibSignature.SignatureStruct, buyOrderSignature: LibSignature.SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        migrate(target: string, data: BytesLike, newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        multiplexBatchSellEthForToken(outputToken: string, calls: IMultiplexFeature.BatchSellSubcallStruct[], minBuyAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        multiplexBatchSellTokenForEth(inputToken: string, calls: IMultiplexFeature.BatchSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        multiplexBatchSellTokenForToken(inputToken: string, outputToken: string, calls: IMultiplexFeature.BatchSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        multiplexMultiHopSellEthForToken(tokens: string[], calls: IMultiplexFeature.MultiHopSellSubcallStruct[], minBuyAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        multiplexMultiHopSellTokenForEth(tokens: string[], calls: IMultiplexFeature.MultiHopSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        multiplexMultiHopSellTokenForToken(tokens: string[], calls: IMultiplexFeature.MultiHopSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC1155Received(operator: string, from: string, tokenId: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC721Received(operator: string, from: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        preSignERC1155Order(order: LibNFTOrder.ERC1155OrderStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        preSignERC721Order(order: LibNFTOrder.ERC721OrderStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        registerAllowedOrderSigner(signer: string, allowed: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        registerAllowedRfqOrigins(origins: string[], allowed: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        rollback(selector: BytesLike, targetImpl: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sellERC1155(buyOrder: LibNFTOrder.ERC1155OrderStruct, signature: LibSignature.SignatureStruct, erc1155TokenId: BigNumberish, erc1155SellAmount: BigNumberish, unwrapNativeToken: boolean, callbackData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sellERC721(buyOrder: LibNFTOrder.ERC721OrderStruct, signature: LibSignature.SignatureStruct, erc721TokenId: BigNumberish, unwrapNativeToken: boolean, callbackData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sellEthForTokenToUniswapV3(encodedPath: BytesLike, minBuyAmount: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sellToLiquidityProvider(inputToken: string, outputToken: string, provider: string, recipient: string, sellAmount: BigNumberish, minBuyAmount: BigNumberish, auxiliaryData: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sellToPancakeSwap(tokens: string[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, fork: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sellToUniswap(tokens: string[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, isSushi: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sellTokenForEthToUniswapV3(encodedPath: BytesLike, sellAmount: BigNumberish, minBuyAmount: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sellTokenForTokenToUniswapV3(encodedPath: BytesLike, sellAmount: BigNumberish, minBuyAmount: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setQuoteSigner(quoteSigner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTransformerDeployer(transformerDeployer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferProtocolFeesForPools(poolIds: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferTrappedTokensTo(erc20: string, amountOut: BigNumberish, recipientWallet: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transformERC20(inputToken: string, outputToken: string, inputTokenAmount: BigNumberish, minOutputTokenAmount: BigNumberish, transformations: ITransformERC20Feature.TransformationStruct[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validateERC1155OrderProperties(order: LibNFTOrder.ERC1155OrderStruct, erc1155TokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        validateERC1155OrderSignature(order: LibNFTOrder.ERC1155OrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<BigNumber>;
        validateERC721OrderProperties(order: LibNFTOrder.ERC721OrderStruct, erc721TokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        validateERC721OrderSignature(order: LibNFTOrder.ERC721OrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _fillLimitOrder(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, taker: string, sender: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _fillOtcOrder(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, taker: string, useSelfBalance: boolean, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _fillRfqOrder(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, taker: string, useSelfBalance: boolean, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _sellHeldTokenForTokenToUniswapV3(encodedPath: BytesLike, sellAmount: BigNumberish, minBuyAmount: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _transformERC20(args: ITransformERC20Feature.TransformERC20ArgsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchBuyERC1155s(sellOrders: LibNFTOrder.ERC1155OrderStruct[], signatures: LibSignature.SignatureStruct[], erc1155TokenAmounts: BigNumberish[], callbackData: BytesLike[], revertIfIncomplete: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchBuyERC721s(sellOrders: LibNFTOrder.ERC721OrderStruct[], signatures: LibSignature.SignatureStruct[], callbackData: BytesLike[], revertIfIncomplete: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchCancelERC1155Orders(orderNonces: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchCancelERC721Orders(orderNonces: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchCancelLimitOrders(orders: LibNativeOrder.LimitOrderStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchCancelPairLimitOrders(makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchCancelPairLimitOrdersWithSigner(maker: string, makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchCancelPairRfqOrders(makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchCancelPairRfqOrdersWithSigner(maker: string, makerTokens: string[], takerTokens: string[], minValidSalts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchCancelRfqOrders(orders: LibNativeOrder.RfqOrderStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchExecuteMetaTransactions(mtxs: IMetaTransactionsFeature.MetaTransactionDataStruct[], signatures: LibSignature.SignatureStruct[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchFillLimitOrders(orders: LibNativeOrder.LimitOrderStruct[], signatures: LibSignature.SignatureStruct[], takerTokenFillAmounts: BigNumberish[], revertIfIncomplete: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchFillRfqOrders(orders: LibNativeOrder.RfqOrderStruct[], signatures: LibSignature.SignatureStruct[], takerTokenFillAmounts: BigNumberish[], revertIfIncomplete: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchFillTakerSignedOtcOrders(orders: LibNativeOrder.OtcOrderStruct[], makerSignatures: LibSignature.SignatureStruct[], takerSignatures: LibSignature.SignatureStruct[], unwrapWeth: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchGetLimitOrderRelevantStates(orders: LibNativeOrder.LimitOrderStruct[], signatures: LibSignature.SignatureStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        batchGetRfqOrderRelevantStates(orders: LibNativeOrder.RfqOrderStruct[], signatures: LibSignature.SignatureStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        batchMatchERC721Orders(sellOrders: LibNFTOrder.ERC721OrderStruct[], buyOrders: LibNFTOrder.ERC721OrderStruct[], sellOrderSignatures: LibSignature.SignatureStruct[], buyOrderSignatures: LibSignature.SignatureStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        buyERC1155(sellOrder: LibNFTOrder.ERC1155OrderStruct, signature: LibSignature.SignatureStruct, erc1155BuyAmount: BigNumberish, callbackData: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        buyERC721(sellOrder: LibNFTOrder.ERC721OrderStruct, signature: LibSignature.SignatureStruct, callbackData: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelERC1155Order(orderNonce: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelERC721Order(orderNonce: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelLimitOrder(order: LibNativeOrder.LimitOrderStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelPairLimitOrders(makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelPairLimitOrdersWithSigner(maker: string, makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelPairRfqOrders(makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelPairRfqOrdersWithSigner(maker: string, makerToken: string, takerToken: string, minValidSalt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelRfqOrder(order: LibNativeOrder.RfqOrderStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createTransformWallet(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeMetaTransaction(mtx: IMetaTransactionsFeature.MetaTransactionDataStruct, signature: LibSignature.SignatureStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        extend(selector: BytesLike, impl: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fillLimitOrder(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fillOrKillLimitOrder(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fillOrKillRfqOrder(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fillOtcOrder(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fillOtcOrderForEth(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fillOtcOrderWithEth(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fillRfqOrder(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, takerTokenFillAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fillTakerSignedOtcOrder(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerSignature: LibSignature.SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fillTakerSignedOtcOrderForEth(order: LibNativeOrder.OtcOrderStruct, makerSignature: LibSignature.SignatureStruct, takerSignature: LibSignature.SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getERC1155OrderHash(order: LibNFTOrder.ERC1155OrderStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getERC1155OrderInfo(order: LibNFTOrder.ERC1155OrderStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getERC721OrderHash(order: LibNFTOrder.ERC721OrderStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getERC721OrderStatus(order: LibNFTOrder.ERC721OrderStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getERC721OrderStatusBitVector(maker: string, nonceRange: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLimitOrderHash(order: LibNativeOrder.LimitOrderStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLimitOrderInfo(order: LibNativeOrder.LimitOrderStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLimitOrderRelevantState(order: LibNativeOrder.LimitOrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMetaTransactionExecutedBlock(mtx: IMetaTransactionsFeature.MetaTransactionDataStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMetaTransactionHash(mtx: IMetaTransactionsFeature.MetaTransactionDataStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMetaTransactionHashExecutedBlock(mtxHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOtcOrderHash(order: LibNativeOrder.OtcOrderStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOtcOrderInfo(order: LibNativeOrder.OtcOrderStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProtocolFeeMultiplier(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getQuoteSigner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRfqOrderHash(order: LibNativeOrder.RfqOrderStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRfqOrderInfo(order: LibNativeOrder.RfqOrderStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRfqOrderRelevantState(order: LibNativeOrder.RfqOrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRollbackEntryAtIndex(selector: BytesLike, idx: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRollbackLength(selector: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTransformWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTransformerDeployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isValidOrderSigner(maker: string, signer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastOtcTxOriginNonce(txOrigin: string, nonceBucket: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        matchERC721Orders(sellOrder: LibNFTOrder.ERC721OrderStruct, buyOrder: LibNFTOrder.ERC721OrderStruct, sellOrderSignature: LibSignature.SignatureStruct, buyOrderSignature: LibSignature.SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        migrate(target: string, data: BytesLike, newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        multiplexBatchSellEthForToken(outputToken: string, calls: IMultiplexFeature.BatchSellSubcallStruct[], minBuyAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        multiplexBatchSellTokenForEth(inputToken: string, calls: IMultiplexFeature.BatchSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        multiplexBatchSellTokenForToken(inputToken: string, outputToken: string, calls: IMultiplexFeature.BatchSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        multiplexMultiHopSellEthForToken(tokens: string[], calls: IMultiplexFeature.MultiHopSellSubcallStruct[], minBuyAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        multiplexMultiHopSellTokenForEth(tokens: string[], calls: IMultiplexFeature.MultiHopSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        multiplexMultiHopSellTokenForToken(tokens: string[], calls: IMultiplexFeature.MultiHopSellSubcallStruct[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(operator: string, from: string, tokenId: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC721Received(operator: string, from: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        preSignERC1155Order(order: LibNFTOrder.ERC1155OrderStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        preSignERC721Order(order: LibNFTOrder.ERC721OrderStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        registerAllowedOrderSigner(signer: string, allowed: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        registerAllowedRfqOrigins(origins: string[], allowed: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        rollback(selector: BytesLike, targetImpl: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sellERC1155(buyOrder: LibNFTOrder.ERC1155OrderStruct, signature: LibSignature.SignatureStruct, erc1155TokenId: BigNumberish, erc1155SellAmount: BigNumberish, unwrapNativeToken: boolean, callbackData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sellERC721(buyOrder: LibNFTOrder.ERC721OrderStruct, signature: LibSignature.SignatureStruct, erc721TokenId: BigNumberish, unwrapNativeToken: boolean, callbackData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sellEthForTokenToUniswapV3(encodedPath: BytesLike, minBuyAmount: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sellToLiquidityProvider(inputToken: string, outputToken: string, provider: string, recipient: string, sellAmount: BigNumberish, minBuyAmount: BigNumberish, auxiliaryData: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sellToPancakeSwap(tokens: string[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, fork: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sellToUniswap(tokens: string[], sellAmount: BigNumberish, minBuyAmount: BigNumberish, isSushi: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sellTokenForEthToUniswapV3(encodedPath: BytesLike, sellAmount: BigNumberish, minBuyAmount: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sellTokenForTokenToUniswapV3(encodedPath: BytesLike, sellAmount: BigNumberish, minBuyAmount: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setQuoteSigner(quoteSigner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTransformerDeployer(transformerDeployer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferProtocolFeesForPools(poolIds: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferTrappedTokensTo(erc20: string, amountOut: BigNumberish, recipientWallet: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transformERC20(inputToken: string, outputToken: string, inputTokenAmount: BigNumberish, minOutputTokenAmount: BigNumberish, transformations: ITransformERC20Feature.TransformationStruct[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validateERC1155OrderProperties(order: LibNFTOrder.ERC1155OrderStruct, erc1155TokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateERC1155OrderSignature(order: LibNFTOrder.ERC1155OrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateERC721OrderProperties(order: LibNFTOrder.ERC721OrderStruct, erc721TokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateERC721OrderSignature(order: LibNFTOrder.ERC721OrderStruct, signature: LibSignature.SignatureStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
