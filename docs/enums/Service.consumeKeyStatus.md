[Monetization](../groups/Monetization.Monetization.md) / consumeKeyStatus

# consumeKeyStatus <Badge type="tip" text="Enumeration" /> <Score text="consumeKeyStatus" />

大会员扣除钥匙订单返回状态信息

## Table of contents

| Enumeration Members |
| :-----|
| **[Error](Service.consumeKeyStatus.md#error)** = ``-3`` <br> |
| **[InsufficientKeys](Service.consumeKeyStatus.md#insufficientkeys)** = ``33002`` <br> |
| **[NotPremiumMember](Service.consumeKeyStatus.md#notpremiummember)** = ``-2`` <br> |
| **[PremiumMemberNotSupported](Service.consumeKeyStatus.md#premiummembernotsupported)** = ``-1`` <br> |
| **[Success](Service.consumeKeyStatus.md#success)** = ``200`` <br> |

## Enumeration Members

### Error <Score text="Error" /> 

• **Error** = ``-3``

下单失败

___

### InsufficientKeys <Score text="InsufficientKeys" /> 

• **InsufficientKeys** = ``33002``

扣除钥匙失败，用户钥匙不足

___

### NotPremiumMember <Score text="NotPremiumMember" /> 

• **NotPremiumMember** = ``-2``

下单失败，用户不是大会员

___

### PremiumMemberNotSupported <Score text="PremiumMemberNotSupported" /> 

• **PremiumMemberNotSupported** = ``-1``

下单失败，应用程序不支持大会员功能

___

### Success <Score text="Success" /> 

• **Success** = ``200``

下单成功
