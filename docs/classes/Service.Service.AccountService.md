[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Service](../modules/Service.md) / [Service](../modules/Service.Service.md) / AccountService

# Class: AccountService

[Service](../modules/Service.md).[Service](../modules/Service.Service.md).AccountService

**`Author`**

huipeng.jia & guang.deng

**`Instance`**

**`Description`**

用户账号信息管理相关服务

**`Precautions`**

单例类，请使用getInstance获取对象

**`Network Status`**

usage: 客户端

## Table of contents

### Constructors

- [constructor](Service.Service.AccountService.md#constructor)

### Methods

- [applySharedId](Service.Service.AccountService.md#applysharedid)
- [createSharedId](Service.Service.AccountService.md#createsharedid)
- [dataShowToOther](Service.Service.AccountService.md#datashowtoother)
- [downloadData](Service.Service.AccountService.md#downloaddata)
- [downloadDefaultDataString](Service.Service.AccountService.md#downloaddefaultdatastring)
- [fillAvatar](Service.Service.AccountService.md#fillavatar)
- [getNickName](Service.Service.AccountService.md#getnickname)
- [getOpenId](Service.Service.AccountService.md#getopenid)
- [getUserData](Service.Service.AccountService.md#getuserdata)
- [getUserId](Service.Service.AccountService.md#getuserid)
- [setUserData](Service.Service.AccountService.md#setuserdata)
- [uploadData](Service.Service.AccountService.md#uploaddata)
- [getInstance](Service.Service.AccountService.md#getinstance)

## Constructors

### constructor

• **new AccountService**()

## Methods

### applySharedId

▸ **applySharedId**(`character`, `id`, `callback`): `void`

**`Description`**

应用分享Id的角色数据

**`Effect`**

客户端调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md) | usage:分享换装数据的角色 |
| `id` | `string` | usage:分享Id |
| `callback` | [`BoolResponse`](../modules/Service.Service.md#boolresponse) | usage: 回调参数，true:应用成功；false:应用失败 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:135

___

### createSharedId

▸ **createSharedId**(`character`, `callback`): `void`

**`Description`**

生成分享Id

**`Effect`**

客户端调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md) | usage:分享换装数据的角色 |
| `callback` | [`StringResponse`](../modules/Service.Service.md#stringresponse) | usage: 回调参数，返回生成的Id |

#### Returns

`void`

#### Defined in

Service/index.d.ts:124

___

### dataShowToOther

▸ **dataShowToOther**(`index`, `isOpen`, `callback?`): `void`

**`Description`**

设置数据是否公开给其他用户

**`Effect`**

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | usage:资源位(0-5) default:0,主角资源位 |
| `isOpen` | `boolean` | usage:是否公开 |
| `callback?` | [`BoolResponse`](../modules/Service.Service.md#boolresponse) | usage:设置是否成功的回调 default:无回调 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:113

___

### downloadData

▸ **downloadData**(`character`, `callback?`, `index?`): `void`

**`Description`**

下载角色形象并应用到当前角色身上

**`Effect`**

客户端调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md) | usage:要应用换装数据的角色 |
| `callback?` | [`BoolResponse`](../modules/Service.Service.md#boolresponse) \| [`VoidResponse`](../modules/Service.Service.md#voidresponse) | usage:设置是否成功的回调 default:默认没有回调 |
| `index?` | `number` | usage:角色位(0-5) default:0,主角资源位 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:101

___

### downloadDefaultDataString

▸ **downloadDefaultDataString**(`callback`): `void`

**`Description`**

下载默认角色数据

**`Effect`**

客户端调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`StringResponse`](../modules/Service.Service.md#stringresponse) | usage:回调 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:79

___

### fillAvatar

▸ **fillAvatar**(`img`): `void`

**`Description`**

将头像赋值到Image变量上

**`Effect`**

客户端调用

**`Precautions`**

只在由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `img` | [`Image`](UI.UI.Image.md) | usage:需要赋值获得头像的Image变量 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:73

___

### getNickName

▸ **getNickName**(): `string`

**`Description`**

获取玩家昵称

**`Effect`**

客户端调用

**`Precautions`**

只在由233拉起生效

#### Returns

`string`

昵称

#### Defined in

Service/index.d.ts:66

___

### getOpenId

▸ **getOpenId**(): `string`

**`Description`**

获取OpenId

**`Effect`**

客户端调用

**`Precautions`**

只在由233拉起生效

#### Returns

`string`

OpenId

#### Defined in

Service/index.d.ts:53

___

### getUserData

▸ **getUserData**(`userId`, `index`, `callback`): `void`

**`Description`**

获取用户存储在服务器上的角色形象数据

**`Effect`**

客户端调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | usage:用户Id |
| `index` | `number` | usage:资源位(0-5) |
| `callback` | [`StringResponse`](../modules/Service.Service.md#stringresponse) | usage:返回获取的数据string. |

#### Returns

`void`

#### Defined in

Service/index.d.ts:147

___

### getUserId

▸ **getUserId**(): `string`

**`Description`**

获取平台的用户Id,可以用于getUserData接口

**`Effect`**

客户端调用

#### Returns

`string`

用户Id

#### Defined in

Service/index.d.ts:59

___

### setUserData

▸ **setUserData**(`character`, `dataString`, `callback?`): `void`

**`Description`**

将角色形象数据应用至角色

**`Effect`**

客户端调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md) | usage: 用于换装的角色 |
| `dataString` | `string` | usage: 返回的数据 |
| `callback?` | [`BoolResponse`](../modules/Service.Service.md#boolresponse) | usage:设置是否成功的回调 default:无回调 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:155

___

### uploadData

▸ **uploadData**(`character`, `callback?`, `index?`, `openStatus?`): `void`

**`Description`**

上传角色形象资源到服务器  Character， Hair, UpperCloth, LowerCloth, Gloves, Shoe

**`Effect`**

客户端调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md) | usage:要上传换装数据的角色 |
| `callback?` | [`BoolResponse`](../modules/Service.Service.md#boolresponse) \| [`VoidResponse`](../modules/Service.Service.md#voidresponse) | usage:设置是否成功的回调 default:默认没有回调 |
| `index?` | `number` | usage:角色位(0-5) default:0,主角资源位 |
| `openStatus?` | `number` | usage:开发状态 default:1,默认是开放状态 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:88

___

### getInstance

▸ `Static` **getInstance**(): [`AccountService`](Service.Service.AccountService.md)

**`Description`**

获取用户账号信息管理器全局实例

**`Effect`**

调用端生效

#### Returns

[`AccountService`](Service.Service.AccountService.md)

用户账号信息管理器全局实例

#### Defined in

Service/index.d.ts:46
