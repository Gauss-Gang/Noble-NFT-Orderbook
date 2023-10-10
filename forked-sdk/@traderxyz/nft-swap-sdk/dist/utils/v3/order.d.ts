import { BigNumber } from '@ethersproject/bignumber';
import { Order, EipDomain } from '../../sdk/v3/types';
export declare const TRADER_ADDRESS_IDENTIFIER = "0xBCC02a155c374263321155555Ccf41070017649e";
export declare const INFINITE_TIMESTAMP_SEC: BigNumber;
export declare const getEipDomain: (chainId: number, exchangeContractAddress: string) => EipDomain;
export declare const hashOrder: (order: Order, chainId: number, exchangeContractAddress: string) => string;
export declare const normalizeOrder: (order: Order) => Order;
export declare const generateOrderFromAssetDatas: (orderConfig: {
    makerAddress: string;
    makerAssetData: string;
    takerAssetData: string;
    makerAssetAmount: BigNumber;
    takerAssetAmount: BigNumber;
    exchangeAddress: string;
    takerAddress?: string;
    expiration?: Date | number;
    salt?: string;
    feeRecipientAddress?: string;
    makerFeeAssetData?: string;
    takerFeeAssetData?: string;
    makerFee?: string;
    takerFee?: string;
}) => Order;
export declare const generateTimeBasedSalt: () => string;
