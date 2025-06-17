[基础类型](../groups/基础类型.基础类型.md) / AvatarCheckStatusCode

# AvatarCheckStatusCode <Badge type="tip" text="Enumeration" /> <Score text="AvatarCheckStatusCode" />

GameService的错误回调编码枚举

## Table of contents

### Enumeration Members <Score text="Enumeration" /> 
| **[AssetDownloadFailure](mw.AvatarCheckStatusCode.md#assetdownloadfailure)** = ``7``  |
| :----- |
| **[AssetEngineVersionHigher](mw.AvatarCheckStatusCode.md#assetengineversionhigher)** = ``5`` |
| **[AssetMisuse](mw.AvatarCheckStatusCode.md#assetmisuse)** = ``8`` |
| **[AssetNoAccess](mw.AvatarCheckStatusCode.md#assetnoaccess)** = ``6`` |
| **[AvatarDescDownloadFailure](mw.AvatarCheckStatusCode.md#avatardescdownloadfailure)** = ``4`` |
| **[AvatarTaskFailure](mw.AvatarCheckStatusCode.md#avatartaskfailure)** = ``9`` |
| **[HttpRequestFailure](mw.AvatarCheckStatusCode.md#httprequestfailure)** = ``2`` |
| **[InvalidParams](mw.AvatarCheckStatusCode.md#invalidparams)** = ``1`` |
| **[OwnerCharacterDestroyed](mw.AvatarCheckStatusCode.md#ownercharacterdestroyed)** = ``3`` |
| **[WellDone](mw.AvatarCheckStatusCode.md#welldone)** = ``0`` |

## Enumeration Members

### AssetDownloadFailure <Score text="AssetDownloadFailure" /> 

• **AssetDownloadFailure** = ``7``

资源下载失败：是不是访问了无效的资源 GUID，或者服务器内部错误

___

### AssetEngineVersionHigher <Score text="AssetEngineVersionHigher" /> 

• **AssetEngineVersionHigher** = ``5``

资源上传版本高于当前引擎版本：需要更新引擎了

___

### AssetMisuse <Score text="AssetMisuse" /> 

• **AssetMisuse** = ``8``

资源错误使用：可能衣服部位混用了

___

### AssetNoAccess <Score text="AssetNoAccess" /> 

• **AssetNoAccess** = ``6``

资源不可访问：可能没有购买所以没有权限

___

### AvatarDescDownloadFailure <Score text="AvatarDescDownloadFailure" /> 

• **AvatarDescDownloadFailure** = ``4``

平台形象下载失败：网络连接成功，但是响应中没有有效的数据，可能是账号权限或者服务器权限设置，也可能数据结构不对

___

### AvatarTaskFailure <Score text="AvatarTaskFailure" /> 

• **AvatarTaskFailure** = ``9``

换装任务失败

___

### HttpRequestFailure <Score text="HttpRequestFailure" /> 

• **HttpRequestFailure** = ``2``

http 请求错误：可能是网络问题

___

### InvalidParams <Score text="InvalidParams" /> 

• **InvalidParams** = ``1``

参数错误

___

### OwnerCharacterDestroyed <Score text="OwnerCharacterDestroyed" /> 

• **OwnerCharacterDestroyed** = ``3``

所属对象已失效：可能在完成任务之前角色已失效

___

### WellDone <Score text="WellDone" /> 

• **WellDone** = ``0``

正常
