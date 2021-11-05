import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {"context":{"clientName":"subgraph"}}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Bytes: any;
  BigInt: any;
  BigDecimal: any;
};




export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}



export type Block_Height = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
};


export type CreditLine = {
  __typename?: 'CreditLine';
  id: Scalars['ID'];
  active: Scalars['Boolean'];
  underwritee: Scalars['Bytes'];
  underwriter: Underwriter;
  collateral: Scalars['BigInt'];
  creditLimit: Scalars['BigInt'];
  balance: Scalars['BigInt'];
  networkToken: Scalars['Bytes'];
  issueDate: Scalars['BigInt'];
  outstandingReward: Scalars['BigInt'];
  totalReward: Scalars['BigInt'];
};

export type CreditLine_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  active?: Maybe<Scalars['Boolean']>;
  active_not?: Maybe<Scalars['Boolean']>;
  active_in?: Maybe<Array<Scalars['Boolean']>>;
  active_not_in?: Maybe<Array<Scalars['Boolean']>>;
  underwritee?: Maybe<Scalars['Bytes']>;
  underwritee_not?: Maybe<Scalars['Bytes']>;
  underwritee_in?: Maybe<Array<Scalars['Bytes']>>;
  underwritee_not_in?: Maybe<Array<Scalars['Bytes']>>;
  underwritee_contains?: Maybe<Scalars['Bytes']>;
  underwritee_not_contains?: Maybe<Scalars['Bytes']>;
  underwriter?: Maybe<Scalars['String']>;
  underwriter_not?: Maybe<Scalars['String']>;
  underwriter_gt?: Maybe<Scalars['String']>;
  underwriter_lt?: Maybe<Scalars['String']>;
  underwriter_gte?: Maybe<Scalars['String']>;
  underwriter_lte?: Maybe<Scalars['String']>;
  underwriter_in?: Maybe<Array<Scalars['String']>>;
  underwriter_not_in?: Maybe<Array<Scalars['String']>>;
  underwriter_contains?: Maybe<Scalars['String']>;
  underwriter_not_contains?: Maybe<Scalars['String']>;
  underwriter_starts_with?: Maybe<Scalars['String']>;
  underwriter_not_starts_with?: Maybe<Scalars['String']>;
  underwriter_ends_with?: Maybe<Scalars['String']>;
  underwriter_not_ends_with?: Maybe<Scalars['String']>;
  collateral?: Maybe<Scalars['BigInt']>;
  collateral_not?: Maybe<Scalars['BigInt']>;
  collateral_gt?: Maybe<Scalars['BigInt']>;
  collateral_lt?: Maybe<Scalars['BigInt']>;
  collateral_gte?: Maybe<Scalars['BigInt']>;
  collateral_lte?: Maybe<Scalars['BigInt']>;
  collateral_in?: Maybe<Array<Scalars['BigInt']>>;
  collateral_not_in?: Maybe<Array<Scalars['BigInt']>>;
  creditLimit?: Maybe<Scalars['BigInt']>;
  creditLimit_not?: Maybe<Scalars['BigInt']>;
  creditLimit_gt?: Maybe<Scalars['BigInt']>;
  creditLimit_lt?: Maybe<Scalars['BigInt']>;
  creditLimit_gte?: Maybe<Scalars['BigInt']>;
  creditLimit_lte?: Maybe<Scalars['BigInt']>;
  creditLimit_in?: Maybe<Array<Scalars['BigInt']>>;
  creditLimit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  balance?: Maybe<Scalars['BigInt']>;
  balance_not?: Maybe<Scalars['BigInt']>;
  balance_gt?: Maybe<Scalars['BigInt']>;
  balance_lt?: Maybe<Scalars['BigInt']>;
  balance_gte?: Maybe<Scalars['BigInt']>;
  balance_lte?: Maybe<Scalars['BigInt']>;
  balance_in?: Maybe<Array<Scalars['BigInt']>>;
  balance_not_in?: Maybe<Array<Scalars['BigInt']>>;
  networkToken?: Maybe<Scalars['Bytes']>;
  networkToken_not?: Maybe<Scalars['Bytes']>;
  networkToken_in?: Maybe<Array<Scalars['Bytes']>>;
  networkToken_not_in?: Maybe<Array<Scalars['Bytes']>>;
  networkToken_contains?: Maybe<Scalars['Bytes']>;
  networkToken_not_contains?: Maybe<Scalars['Bytes']>;
  issueDate?: Maybe<Scalars['BigInt']>;
  issueDate_not?: Maybe<Scalars['BigInt']>;
  issueDate_gt?: Maybe<Scalars['BigInt']>;
  issueDate_lt?: Maybe<Scalars['BigInt']>;
  issueDate_gte?: Maybe<Scalars['BigInt']>;
  issueDate_lte?: Maybe<Scalars['BigInt']>;
  issueDate_in?: Maybe<Array<Scalars['BigInt']>>;
  issueDate_not_in?: Maybe<Array<Scalars['BigInt']>>;
  outstandingReward?: Maybe<Scalars['BigInt']>;
  outstandingReward_not?: Maybe<Scalars['BigInt']>;
  outstandingReward_gt?: Maybe<Scalars['BigInt']>;
  outstandingReward_lt?: Maybe<Scalars['BigInt']>;
  outstandingReward_gte?: Maybe<Scalars['BigInt']>;
  outstandingReward_lte?: Maybe<Scalars['BigInt']>;
  outstandingReward_in?: Maybe<Array<Scalars['BigInt']>>;
  outstandingReward_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalReward?: Maybe<Scalars['BigInt']>;
  totalReward_not?: Maybe<Scalars['BigInt']>;
  totalReward_gt?: Maybe<Scalars['BigInt']>;
  totalReward_lt?: Maybe<Scalars['BigInt']>;
  totalReward_gte?: Maybe<Scalars['BigInt']>;
  totalReward_lte?: Maybe<Scalars['BigInt']>;
  totalReward_in?: Maybe<Array<Scalars['BigInt']>>;
  totalReward_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum CreditLine_OrderBy {
  Id = 'id',
  Active = 'active',
  Underwritee = 'underwritee',
  Underwriter = 'underwriter',
  Collateral = 'collateral',
  CreditLimit = 'creditLimit',
  Balance = 'balance',
  NetworkToken = 'networkToken',
  IssueDate = 'issueDate',
  OutstandingReward = 'outstandingReward',
  TotalReward = 'totalReward'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  underwriter?: Maybe<Underwriter>;
  underwriters: Array<Underwriter>;
  underwritee?: Maybe<Underwritee>;
  underwritees: Array<Underwritee>;
  creditLine?: Maybe<CreditLine>;
  creditLines: Array<CreditLine>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryUnderwriterArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUnderwritersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Underwriter_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Underwriter_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUnderwriteeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUnderwriteesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Underwritee_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Underwritee_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCreditLineArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCreditLinesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CreditLine_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CreditLine_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Subscription = {
  __typename?: 'Subscription';
  underwriter?: Maybe<Underwriter>;
  underwriters: Array<Underwriter>;
  underwritee?: Maybe<Underwritee>;
  underwritees: Array<Underwritee>;
  creditLine?: Maybe<CreditLine>;
  creditLines: Array<CreditLine>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionUnderwriterArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUnderwritersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Underwriter_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Underwriter_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUnderwriteeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUnderwriteesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Underwritee_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Underwritee_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCreditLineArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCreditLinesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CreditLine_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CreditLine_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Underwritee = {
  __typename?: 'Underwritee';
  id: Scalars['ID'];
  creditLine?: Maybe<CreditLine>;
};

export type Underwritee_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  creditLine?: Maybe<Scalars['String']>;
  creditLine_not?: Maybe<Scalars['String']>;
  creditLine_gt?: Maybe<Scalars['String']>;
  creditLine_lt?: Maybe<Scalars['String']>;
  creditLine_gte?: Maybe<Scalars['String']>;
  creditLine_lte?: Maybe<Scalars['String']>;
  creditLine_in?: Maybe<Array<Scalars['String']>>;
  creditLine_not_in?: Maybe<Array<Scalars['String']>>;
  creditLine_contains?: Maybe<Scalars['String']>;
  creditLine_not_contains?: Maybe<Scalars['String']>;
  creditLine_starts_with?: Maybe<Scalars['String']>;
  creditLine_not_starts_with?: Maybe<Scalars['String']>;
  creditLine_ends_with?: Maybe<Scalars['String']>;
  creditLine_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Underwritee_OrderBy {
  Id = 'id',
  CreditLine = 'creditLine'
}

export type Underwriter = {
  __typename?: 'Underwriter';
  id: Scalars['ID'];
  creditLines: Array<Maybe<CreditLine>>;
  totalRewards: Scalars['BigInt'];
  totalCollateral: Scalars['BigInt'];
  balance: Scalars['BigInt'];
};


export type UnderwriterCreditLinesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CreditLine_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CreditLine_Filter>;
};

export type Underwriter_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  totalRewards?: Maybe<Scalars['BigInt']>;
  totalRewards_not?: Maybe<Scalars['BigInt']>;
  totalRewards_gt?: Maybe<Scalars['BigInt']>;
  totalRewards_lt?: Maybe<Scalars['BigInt']>;
  totalRewards_gte?: Maybe<Scalars['BigInt']>;
  totalRewards_lte?: Maybe<Scalars['BigInt']>;
  totalRewards_in?: Maybe<Array<Scalars['BigInt']>>;
  totalRewards_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalCollateral?: Maybe<Scalars['BigInt']>;
  totalCollateral_not?: Maybe<Scalars['BigInt']>;
  totalCollateral_gt?: Maybe<Scalars['BigInt']>;
  totalCollateral_lt?: Maybe<Scalars['BigInt']>;
  totalCollateral_gte?: Maybe<Scalars['BigInt']>;
  totalCollateral_lte?: Maybe<Scalars['BigInt']>;
  totalCollateral_in?: Maybe<Array<Scalars['BigInt']>>;
  totalCollateral_not_in?: Maybe<Array<Scalars['BigInt']>>;
  balance?: Maybe<Scalars['BigInt']>;
  balance_not?: Maybe<Scalars['BigInt']>;
  balance_gt?: Maybe<Scalars['BigInt']>;
  balance_lt?: Maybe<Scalars['BigInt']>;
  balance_gte?: Maybe<Scalars['BigInt']>;
  balance_lte?: Maybe<Scalars['BigInt']>;
  balance_in?: Maybe<Array<Scalars['BigInt']>>;
  balance_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Underwriter_OrderBy {
  Id = 'id',
  CreditLines = 'creditLines',
  TotalRewards = 'totalRewards',
  TotalCollateral = 'totalCollateral',
  Balance = 'balance'
}

export type CreditLineFieldsFragment = { __typename?: 'CreditLine', id: string, active: boolean, underwritee: any, collateral: any, creditLimit: any, balance: any, networkToken: any, issueDate: any, outstandingReward: any, totalReward: any };

export type GetCreditLineQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCreditLineQuery = { __typename?: 'Query', creditLine?: Maybe<(
    { __typename?: 'CreditLine', underwriter: { __typename?: 'Underwriter', id: string } }
    & CreditLineFieldsFragment
  )> };

export type GetCreditLinesQueryVariables = Exact<{
  where?: Maybe<CreditLine_Filter>;
}>;


export type GetCreditLinesQuery = { __typename?: 'Query', creditLines: Array<(
    { __typename?: 'CreditLine', underwriter: { __typename?: 'Underwriter', id: string } }
    & CreditLineFieldsFragment
  )> };

export type GetUnderwriteeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUnderwriteeQuery = { __typename?: 'Query', underwritee?: Maybe<{ __typename?: 'Underwritee', id: string, creditLine?: Maybe<(
      { __typename?: 'CreditLine', underwriter: { __typename?: 'Underwriter', id: string } }
      & CreditLineFieldsFragment
    )> }> };

export type GetUnderwriteesQueryVariables = Exact<{
  where?: Maybe<Underwritee_Filter>;
}>;


export type GetUnderwriteesQuery = { __typename?: 'Query', underwritees: Array<{ __typename?: 'Underwritee', id: string }> };

export type GetUnderwriterWalletInfoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUnderwriterWalletInfoQuery = { __typename?: 'Query', underwriter?: Maybe<{ __typename?: 'Underwriter', totalCollateral: any, totalRewards: any, balance: any }> };

export type GetUnderwriterQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUnderwriterQuery = { __typename?: 'Query', underwriter?: Maybe<{ __typename?: 'Underwriter', totalRewards: any, creditLines: Array<Maybe<(
      { __typename?: 'CreditLine', underwriter: { __typename?: 'Underwriter', id: string } }
      & CreditLineFieldsFragment
    )>> }> };

export const CreditLineFieldsFragmentDoc = gql`
    fragment CreditLineFields on CreditLine {
  id
  active
  underwritee
  collateral
  creditLimit
  balance
  networkToken
  issueDate
  outstandingReward
  totalReward
}
    `;
export const GetCreditLineDocument = gql`
    query getCreditLine($id: ID!) {
  creditLine(id: $id) {
    ...CreditLineFields
    underwriter {
      id
    }
  }
}
    ${CreditLineFieldsFragmentDoc}`;

/**
 * __useGetCreditLineQuery__
 *
 * To run a query within a React component, call `useGetCreditLineQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCreditLineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCreditLineQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCreditLineQuery(baseOptions: Apollo.QueryHookOptions<GetCreditLineQuery, GetCreditLineQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCreditLineQuery, GetCreditLineQueryVariables>(GetCreditLineDocument, options);
      }
export function useGetCreditLineLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCreditLineQuery, GetCreditLineQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCreditLineQuery, GetCreditLineQueryVariables>(GetCreditLineDocument, options);
        }
export type GetCreditLineQueryHookResult = ReturnType<typeof useGetCreditLineQuery>;
export type GetCreditLineLazyQueryHookResult = ReturnType<typeof useGetCreditLineLazyQuery>;
export type GetCreditLineQueryResult = Apollo.QueryResult<GetCreditLineQuery, GetCreditLineQueryVariables>;
export const GetCreditLinesDocument = gql`
    query getCreditLines($where: CreditLine_filter) {
  creditLines(where: $where) {
    ...CreditLineFields
    underwriter {
      id
    }
  }
}
    ${CreditLineFieldsFragmentDoc}`;

/**
 * __useGetCreditLinesQuery__
 *
 * To run a query within a React component, call `useGetCreditLinesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCreditLinesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCreditLinesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetCreditLinesQuery(baseOptions?: Apollo.QueryHookOptions<GetCreditLinesQuery, GetCreditLinesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCreditLinesQuery, GetCreditLinesQueryVariables>(GetCreditLinesDocument, options);
      }
export function useGetCreditLinesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCreditLinesQuery, GetCreditLinesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCreditLinesQuery, GetCreditLinesQueryVariables>(GetCreditLinesDocument, options);
        }
export type GetCreditLinesQueryHookResult = ReturnType<typeof useGetCreditLinesQuery>;
export type GetCreditLinesLazyQueryHookResult = ReturnType<typeof useGetCreditLinesLazyQuery>;
export type GetCreditLinesQueryResult = Apollo.QueryResult<GetCreditLinesQuery, GetCreditLinesQueryVariables>;
export const GetUnderwriteeDocument = gql`
    query getUnderwritee($id: ID!) {
  underwritee(id: $id) {
    id
    creditLine {
      ...CreditLineFields
      underwriter {
        id
      }
    }
  }
}
    ${CreditLineFieldsFragmentDoc}`;

/**
 * __useGetUnderwriteeQuery__
 *
 * To run a query within a React component, call `useGetUnderwriteeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnderwriteeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnderwriteeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUnderwriteeQuery(baseOptions: Apollo.QueryHookOptions<GetUnderwriteeQuery, GetUnderwriteeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUnderwriteeQuery, GetUnderwriteeQueryVariables>(GetUnderwriteeDocument, options);
      }
export function useGetUnderwriteeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUnderwriteeQuery, GetUnderwriteeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUnderwriteeQuery, GetUnderwriteeQueryVariables>(GetUnderwriteeDocument, options);
        }
export type GetUnderwriteeQueryHookResult = ReturnType<typeof useGetUnderwriteeQuery>;
export type GetUnderwriteeLazyQueryHookResult = ReturnType<typeof useGetUnderwriteeLazyQuery>;
export type GetUnderwriteeQueryResult = Apollo.QueryResult<GetUnderwriteeQuery, GetUnderwriteeQueryVariables>;
export const GetUnderwriteesDocument = gql`
    query getUnderwritees($where: Underwritee_filter) {
  underwritees(where: $where) {
    id
  }
}
    `;

/**
 * __useGetUnderwriteesQuery__
 *
 * To run a query within a React component, call `useGetUnderwriteesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnderwriteesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnderwriteesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetUnderwriteesQuery(baseOptions?: Apollo.QueryHookOptions<GetUnderwriteesQuery, GetUnderwriteesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUnderwriteesQuery, GetUnderwriteesQueryVariables>(GetUnderwriteesDocument, options);
      }
export function useGetUnderwriteesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUnderwriteesQuery, GetUnderwriteesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUnderwriteesQuery, GetUnderwriteesQueryVariables>(GetUnderwriteesDocument, options);
        }
export type GetUnderwriteesQueryHookResult = ReturnType<typeof useGetUnderwriteesQuery>;
export type GetUnderwriteesLazyQueryHookResult = ReturnType<typeof useGetUnderwriteesLazyQuery>;
export type GetUnderwriteesQueryResult = Apollo.QueryResult<GetUnderwriteesQuery, GetUnderwriteesQueryVariables>;
export const GetUnderwriterWalletInfoDocument = gql`
    query getUnderwriterWalletInfo($id: ID!) {
  underwriter(id: $id) {
    totalCollateral
    totalRewards
    balance
  }
}
    `;

/**
 * __useGetUnderwriterWalletInfoQuery__
 *
 * To run a query within a React component, call `useGetUnderwriterWalletInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnderwriterWalletInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnderwriterWalletInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUnderwriterWalletInfoQuery(baseOptions: Apollo.QueryHookOptions<GetUnderwriterWalletInfoQuery, GetUnderwriterWalletInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUnderwriterWalletInfoQuery, GetUnderwriterWalletInfoQueryVariables>(GetUnderwriterWalletInfoDocument, options);
      }
export function useGetUnderwriterWalletInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUnderwriterWalletInfoQuery, GetUnderwriterWalletInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUnderwriterWalletInfoQuery, GetUnderwriterWalletInfoQueryVariables>(GetUnderwriterWalletInfoDocument, options);
        }
export type GetUnderwriterWalletInfoQueryHookResult = ReturnType<typeof useGetUnderwriterWalletInfoQuery>;
export type GetUnderwriterWalletInfoLazyQueryHookResult = ReturnType<typeof useGetUnderwriterWalletInfoLazyQuery>;
export type GetUnderwriterWalletInfoQueryResult = Apollo.QueryResult<GetUnderwriterWalletInfoQuery, GetUnderwriterWalletInfoQueryVariables>;
export const GetUnderwriterDocument = gql`
    query getUnderwriter($id: ID!) {
  underwriter(id: $id) {
    totalRewards
    creditLines {
      ...CreditLineFields
      underwriter {
        id
      }
    }
  }
}
    ${CreditLineFieldsFragmentDoc}`;

/**
 * __useGetUnderwriterQuery__
 *
 * To run a query within a React component, call `useGetUnderwriterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnderwriterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnderwriterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUnderwriterQuery(baseOptions: Apollo.QueryHookOptions<GetUnderwriterQuery, GetUnderwriterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUnderwriterQuery, GetUnderwriterQueryVariables>(GetUnderwriterDocument, options);
      }
export function useGetUnderwriterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUnderwriterQuery, GetUnderwriterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUnderwriterQuery, GetUnderwriterQueryVariables>(GetUnderwriterDocument, options);
        }
export type GetUnderwriterQueryHookResult = ReturnType<typeof useGetUnderwriterQuery>;
export type GetUnderwriterLazyQueryHookResult = ReturnType<typeof useGetUnderwriterLazyQuery>;
export type GetUnderwriterQueryResult = Apollo.QueryResult<GetUnderwriterQuery, GetUnderwriterQueryVariables>;