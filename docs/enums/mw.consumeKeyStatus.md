[MONETIZATION](../groups/Core.MONETIZATION.md) / consumeKeyStatus

# consumeKeyStatus <Badge type="tip" text="Enumeration" /> <Score text="consumeKeyStatus" />

<p class="content-big">

大会员扣除钥匙订单返回状态信息

</p>

## Table of contents

### Enumeration Members <Score text="Enumeration" /> 
| **[Error](mw.consumeKeyStatus.md#error)** = ``-3``  |
| :----- |
| **[InsufficientKeys](mw.consumeKeyStatus.md#insufficientkeys)** = ``33002`` |
| **[NotPremiumMember](mw.consumeKeyStatus.md#notpremiummember)** = ``-2`` |
| **[PremiumMemberNotSupported](mw.consumeKeyStatus.md#premiummembernotsupported)** = ``-1`` |
| **[Success](mw.consumeKeyStatus.md#success)** = ``200`` |

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
