/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface TokenClaimInterface extends ethers.utils.Interface {
  functions: {
    "addClaim(address,uint256,(uint256,uint256,tuple[]))": FunctionFragment;
    "claim()": FunctionFragment;
    "claims(address)": FunctionFragment;
    "getClaimLockSchedule(address)": FunctionFragment;
    "getClaimTotal(address)": FunctionFragment;
    "getToken()": FunctionFragment;
    "getWithdrawableAmount()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "revoke(address)": FunctionFragment;
    "totalClaimable()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addClaim",
    values: [
      string,
      BigNumberish,
      {
        totalAmount: BigNumberish;
        amountStaked: BigNumberish;
        schedules: { amount: BigNumberish; expirationBlock: BigNumberish }[];
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(functionFragment: "claims", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getClaimLockSchedule",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getClaimTotal",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getWithdrawableAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "revoke", values: [string]): string;
  encodeFunctionData(
    functionFragment: "totalClaimable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addClaim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claims", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getClaimLockSchedule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getClaimTotal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getWithdrawableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revoke", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalClaimable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "ClaimUpdated(tuple)": EventFragment;
    "NewClaimAdded(tuple)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Released(tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewClaimAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Released"): EventFragment;
}

export type ClaimUpdatedEvent = TypedEvent<
  [
    [
      BigNumber,
      [
        BigNumber,
        BigNumber,
        ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[]
      ] & {
        totalAmount: BigNumber;
        amountStaked: BigNumber;
        schedules: ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[];
      },
      boolean
    ] & {
      unlockedAmount: BigNumber;
      lock: [
        BigNumber,
        BigNumber,
        ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[]
      ] & {
        totalAmount: BigNumber;
        amountStaked: BigNumber;
        schedules: ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[];
      };
      released: boolean;
    }
  ] & {
    claim: [
      BigNumber,
      [
        BigNumber,
        BigNumber,
        ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[]
      ] & {
        totalAmount: BigNumber;
        amountStaked: BigNumber;
        schedules: ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[];
      },
      boolean
    ] & {
      unlockedAmount: BigNumber;
      lock: [
        BigNumber,
        BigNumber,
        ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[]
      ] & {
        totalAmount: BigNumber;
        amountStaked: BigNumber;
        schedules: ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[];
      };
      released: boolean;
    };
  }
>;

export type NewClaimAddedEvent = TypedEvent<
  [
    [
      BigNumber,
      [
        BigNumber,
        BigNumber,
        ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[]
      ] & {
        totalAmount: BigNumber;
        amountStaked: BigNumber;
        schedules: ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[];
      },
      boolean
    ] & {
      unlockedAmount: BigNumber;
      lock: [
        BigNumber,
        BigNumber,
        ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[]
      ] & {
        totalAmount: BigNumber;
        amountStaked: BigNumber;
        schedules: ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[];
      };
      released: boolean;
    }
  ] & {
    claim: [
      BigNumber,
      [
        BigNumber,
        BigNumber,
        ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[]
      ] & {
        totalAmount: BigNumber;
        amountStaked: BigNumber;
        schedules: ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[];
      },
      boolean
    ] & {
      unlockedAmount: BigNumber;
      lock: [
        BigNumber,
        BigNumber,
        ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[]
      ] & {
        totalAmount: BigNumber;
        amountStaked: BigNumber;
        schedules: ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[];
      };
      released: boolean;
    };
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type ReleasedEvent = TypedEvent<
  [
    [
      BigNumber,
      [
        BigNumber,
        BigNumber,
        ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[]
      ] & {
        totalAmount: BigNumber;
        amountStaked: BigNumber;
        schedules: ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[];
      },
      boolean
    ] & {
      unlockedAmount: BigNumber;
      lock: [
        BigNumber,
        BigNumber,
        ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[]
      ] & {
        totalAmount: BigNumber;
        amountStaked: BigNumber;
        schedules: ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[];
      };
      released: boolean;
    }
  ] & {
    claim: [
      BigNumber,
      [
        BigNumber,
        BigNumber,
        ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[]
      ] & {
        totalAmount: BigNumber;
        amountStaked: BigNumber;
        schedules: ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[];
      },
      boolean
    ] & {
      unlockedAmount: BigNumber;
      lock: [
        BigNumber,
        BigNumber,
        ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[]
      ] & {
        totalAmount: BigNumber;
        amountStaked: BigNumber;
        schedules: ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[];
      };
      released: boolean;
    };
  }
>;

export class TokenClaim extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TokenClaimInterface;

  functions: {
    addClaim(
      _beneficiary: string,
      _unlockedAmount: BigNumberish,
      _lock: {
        totalAmount: BigNumberish;
        amountStaked: BigNumberish;
        schedules: { amount: BigNumberish; expirationBlock: BigNumberish }[];
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claims(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        [
          BigNumber,
          BigNumber,
          ([BigNumber, BigNumber] & {
            amount: BigNumber;
            expirationBlock: BigNumber;
          })[]
        ] & {
          totalAmount: BigNumber;
          amountStaked: BigNumber;
          schedules: ([BigNumber, BigNumber] & {
            amount: BigNumber;
            expirationBlock: BigNumber;
          })[];
        },
        boolean
      ] & {
        unlockedAmount: BigNumber;
        lock: [
          BigNumber,
          BigNumber,
          ([BigNumber, BigNumber] & {
            amount: BigNumber;
            expirationBlock: BigNumber;
          })[]
        ] & {
          totalAmount: BigNumber;
          amountStaked: BigNumber;
          schedules: ([BigNumber, BigNumber] & {
            amount: BigNumber;
            expirationBlock: BigNumber;
          })[];
        };
        released: boolean;
      }
    >;

    getClaimLockSchedule(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<
      [
        ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[]
      ]
    >;

    getClaimTotal(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getToken(overrides?: CallOverrides): Promise<[string]>;

    getWithdrawableAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      token_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revoke(
      beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalClaimable(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addClaim(
    _beneficiary: string,
    _unlockedAmount: BigNumberish,
    _lock: {
      totalAmount: BigNumberish;
      amountStaked: BigNumberish;
      schedules: { amount: BigNumberish; expirationBlock: BigNumberish }[];
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claim(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claims(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      [
        BigNumber,
        BigNumber,
        ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[]
      ] & {
        totalAmount: BigNumber;
        amountStaked: BigNumber;
        schedules: ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[];
      },
      boolean
    ] & {
      unlockedAmount: BigNumber;
      lock: [
        BigNumber,
        BigNumber,
        ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[]
      ] & {
        totalAmount: BigNumber;
        amountStaked: BigNumber;
        schedules: ([BigNumber, BigNumber] & {
          amount: BigNumber;
          expirationBlock: BigNumber;
        })[];
      };
      released: boolean;
    }
  >;

  getClaimLockSchedule(
    beneficiary: string,
    overrides?: CallOverrides
  ): Promise<
    ([BigNumber, BigNumber] & {
      amount: BigNumber;
      expirationBlock: BigNumber;
    })[]
  >;

  getClaimTotal(
    beneficiary: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getToken(overrides?: CallOverrides): Promise<string>;

  getWithdrawableAmount(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    token_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revoke(
    beneficiary: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalClaimable(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addClaim(
      _beneficiary: string,
      _unlockedAmount: BigNumberish,
      _lock: {
        totalAmount: BigNumberish;
        amountStaked: BigNumberish;
        schedules: { amount: BigNumberish; expirationBlock: BigNumberish }[];
      },
      overrides?: CallOverrides
    ): Promise<void>;

    claim(overrides?: CallOverrides): Promise<void>;

    claims(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        [
          BigNumber,
          BigNumber,
          ([BigNumber, BigNumber] & {
            amount: BigNumber;
            expirationBlock: BigNumber;
          })[]
        ] & {
          totalAmount: BigNumber;
          amountStaked: BigNumber;
          schedules: ([BigNumber, BigNumber] & {
            amount: BigNumber;
            expirationBlock: BigNumber;
          })[];
        },
        boolean
      ] & {
        unlockedAmount: BigNumber;
        lock: [
          BigNumber,
          BigNumber,
          ([BigNumber, BigNumber] & {
            amount: BigNumber;
            expirationBlock: BigNumber;
          })[]
        ] & {
          totalAmount: BigNumber;
          amountStaked: BigNumber;
          schedules: ([BigNumber, BigNumber] & {
            amount: BigNumber;
            expirationBlock: BigNumber;
          })[];
        };
        released: boolean;
      }
    >;

    getClaimLockSchedule(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<
      ([BigNumber, BigNumber] & {
        amount: BigNumber;
        expirationBlock: BigNumber;
      })[]
    >;

    getClaimTotal(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getToken(overrides?: CallOverrides): Promise<string>;

    getWithdrawableAmount(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(token_: string, overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    revoke(beneficiary: string, overrides?: CallOverrides): Promise<void>;

    totalClaimable(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ClaimUpdated(tuple)"(
      claim?: null
    ): TypedEventFilter<
      [
        [
          BigNumber,
          [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          },
          boolean
        ] & {
          unlockedAmount: BigNumber;
          lock: [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          };
          released: boolean;
        }
      ],
      {
        claim: [
          BigNumber,
          [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          },
          boolean
        ] & {
          unlockedAmount: BigNumber;
          lock: [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          };
          released: boolean;
        };
      }
    >;

    ClaimUpdated(
      claim?: null
    ): TypedEventFilter<
      [
        [
          BigNumber,
          [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          },
          boolean
        ] & {
          unlockedAmount: BigNumber;
          lock: [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          };
          released: boolean;
        }
      ],
      {
        claim: [
          BigNumber,
          [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          },
          boolean
        ] & {
          unlockedAmount: BigNumber;
          lock: [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          };
          released: boolean;
        };
      }
    >;

    "NewClaimAdded(tuple)"(
      claim?: null
    ): TypedEventFilter<
      [
        [
          BigNumber,
          [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          },
          boolean
        ] & {
          unlockedAmount: BigNumber;
          lock: [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          };
          released: boolean;
        }
      ],
      {
        claim: [
          BigNumber,
          [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          },
          boolean
        ] & {
          unlockedAmount: BigNumber;
          lock: [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          };
          released: boolean;
        };
      }
    >;

    NewClaimAdded(
      claim?: null
    ): TypedEventFilter<
      [
        [
          BigNumber,
          [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          },
          boolean
        ] & {
          unlockedAmount: BigNumber;
          lock: [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          };
          released: boolean;
        }
      ],
      {
        claim: [
          BigNumber,
          [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          },
          boolean
        ] & {
          unlockedAmount: BigNumber;
          lock: [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          };
          released: boolean;
        };
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Released(tuple)"(
      claim?: null
    ): TypedEventFilter<
      [
        [
          BigNumber,
          [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          },
          boolean
        ] & {
          unlockedAmount: BigNumber;
          lock: [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          };
          released: boolean;
        }
      ],
      {
        claim: [
          BigNumber,
          [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          },
          boolean
        ] & {
          unlockedAmount: BigNumber;
          lock: [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          };
          released: boolean;
        };
      }
    >;

    Released(
      claim?: null
    ): TypedEventFilter<
      [
        [
          BigNumber,
          [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          },
          boolean
        ] & {
          unlockedAmount: BigNumber;
          lock: [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          };
          released: boolean;
        }
      ],
      {
        claim: [
          BigNumber,
          [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          },
          boolean
        ] & {
          unlockedAmount: BigNumber;
          lock: [
            BigNumber,
            BigNumber,
            ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[]
          ] & {
            totalAmount: BigNumber;
            amountStaked: BigNumber;
            schedules: ([BigNumber, BigNumber] & {
              amount: BigNumber;
              expirationBlock: BigNumber;
            })[];
          };
          released: boolean;
        };
      }
    >;
  };

  estimateGas: {
    addClaim(
      _beneficiary: string,
      _unlockedAmount: BigNumberish,
      _lock: {
        totalAmount: BigNumberish;
        amountStaked: BigNumberish;
        schedules: { amount: BigNumberish; expirationBlock: BigNumberish }[];
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claims(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getClaimLockSchedule(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getClaimTotal(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getToken(overrides?: CallOverrides): Promise<BigNumber>;

    getWithdrawableAmount(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      token_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revoke(
      beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalClaimable(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addClaim(
      _beneficiary: string,
      _unlockedAmount: BigNumberish,
      _lock: {
        totalAmount: BigNumberish;
        amountStaked: BigNumberish;
        schedules: { amount: BigNumberish; expirationBlock: BigNumberish }[];
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claims(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getClaimLockSchedule(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getClaimTotal(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getWithdrawableAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      token_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revoke(
      beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalClaimable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
