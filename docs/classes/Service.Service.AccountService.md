[Service](../modules/Service.Service.md) / AccountService

# AccountService <Badge type="tip" text="Class" />

**`Instance`**

**`Description`**

用户账号信息管理相关服务

**`Precautions`**

单例类，请使用 getInstance 获取对象

## Table of contents

| Methods                                                                                                                                                                                                                                                                                                |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[applySharedId](Service.Service.AccountService.md#applysharedid)**([`CharacterBase`](Gameplay.Gameplay.CharacterBase.md), `string`, [`BoolResponse`](../modules/Service.Service.md#boolresponse)): `void` <br> 应用分享 Id 的角色数据                                                                |
| **[createSharedId](Service.Service.AccountService.md#createsharedid)**([`CharacterBase`](Gameplay.Gameplay.CharacterBase.md), [`StringResponse`](../modules/Service.Service.md#stringresponse)): `void` <br> 生成分享 Id                                                                               |
| **[dataShowToOther](Service.Service.AccountService.md#datashowtoother)**(`number`, `boolean`, [`BoolResponse`](../modules/Service.Service.md#boolresponse)): `void` <br> 设置数据是否公开给其他用户                                                                                                    |
| **[downloadData](Service.Service.AccountService.md#downloaddata)**([`CharacterBase`](Gameplay.Gameplay.CharacterBase.md), [`BoolResponse`](../modules/Service.Service.md#boolresponse) \, `number`): `void` <br> 下载角色形象并应用到当前角色身上                                                      |
| **[downloadDefaultDataString](Service.Service.AccountService.md#downloaddefaultdatastring)**([`StringResponse`](../modules/Service.Service.md#stringresponse)): `void` <br> 下载默认角色数据                                                                                                           |
| **[fillAvatar](Service.Service.AccountService.md#fillavatar)**([`Image`](UI.UI.Image.md)): `void` <br> 将头像赋值到 Image 变量上                                                                                                                                                                       |
| **[getNickName](Service.Service.AccountService.md#getnickname)**(): `string` <br> 获取玩家昵称                                                                                                                                                                                                         |
| **[getOpenId](Service.Service.AccountService.md#getopenid)**(): `string` <br> 获取 OpenId                                                                                                                                                                                                              |
| **[getUserData](Service.Service.AccountService.md#getuserdata)**(`string`, `number`, [`StringResponse`](../modules/Service.Service.md#stringresponse)): `void` <br> 获取用户存储在服务器上的角色形象数据                                                                                               |
| **[getUserId](Service.Service.AccountService.md#getuserid)**(): `string` <br> 获取平台的用户 Id,可以用于 getUserData 接口                                                                                                                                                                              |
| **[setUserData](Service.Service.AccountService.md#setuserdata)**([`CharacterBase`](Gameplay.Gameplay.CharacterBase.md), `string`, [`BoolResponse`](../modules/Service.Service.md#boolresponse)): `void` <br> 将角色形象数据应用至角色                                                                  |
| **[uploadData](Service.Service.AccountService.md#uploaddata)**([`CharacterBase`](Gameplay.Gameplay.CharacterBase.md), [`BoolResponse`](../modules/Service.Service.md#boolresponse) \, `number`, `number`): `void` <br> 上传角色形象资源到服务器 Character， Hair, UpperCloth, LowerCloth, Gloves, Shoe |
| **[getInstance](Service.Service.AccountService.md#getinstance)**(): [`AccountService`](Service.Service.AccountService.md) <br> 获取用户账号信息管理器全局实例                                                                                                                                          |

## Methods

### applySharedId

▸ **applySharedId**(`character`, `id`, `callback`): `void`

**`Description`**

应用分享 Id 的角色数据

**`Effect`**

客户端调用

#### Parameters

| Name        | Type                                                         | Description                             |
| :---------- | :----------------------------------------------------------- | :-------------------------------------- |
| `character` | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md)        | 分享换装数据的角色                      |
| `id`        | `string`                                                     | 分享 Id                                 |
| `callback`  | [`BoolResponse`](../modules/Service.Service.md#boolresponse) | 回调参数，true:应用成功；false:应用失败 |

#### Returns

`void`

---

### createSharedId

▸ **createSharedId**(`character`, `callback`): `void`

**`Description`**

生成分享 Id

**`Effect`**

客户端调用

#### Parameters

| Name        | Type                                                             | Description             |
| :---------- | :--------------------------------------------------------------- | :---------------------- |
| `character` | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md)            | 分享换装数据的角色      |
| `callback`  | [`StringResponse`](../modules/Service.Service.md#stringresponse) | 回调参数，返回生成的 Id |

#### Returns

`void`

---

### dataShowToOther

▸ **dataShowToOther**(`index`, `isOpen`, `callback?`): `void`

**`Description`**

设置数据是否公开给其他用户

**`Effect`**

客户端

#### Parameters

| Name        | Type                                                         | Description                       |
| :---------- | :----------------------------------------------------------- | :-------------------------------- |
| `index`     | `number`                                                     | 资源位(0-5) default:0,主角资源位  |
| `isOpen`    | `boolean`                                                    | 是否公开                          |
| `callback?` | [`BoolResponse`](../modules/Service.Service.md#boolresponse) | 设置是否成功的回调 default:无回调 |

#### Returns

`void`

---

### downloadData

▸ **downloadData**(`character`, `callback?`, `index?`): `void`

**`Description`**

下载角色形象并应用到当前角色身上

**`Effect`**

客户端调用

#### Parameters

| Name        | Type                                                                                                                         | Description                             |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------- |
| `character` | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md)                                                                        | 要应用换装数据的角色                    |
| `callback?` | [`BoolResponse`](../modules/Service.Service.md#boolresponse) \| [`VoidResponse`](../modules/Service.Service.md#voidresponse) | 设置是否成功的回调 default:默认没有回调 |
| `index?`    | `number`                                                                                                                     | 角色位(0-5) default:0,主角资源位        |

#### Returns

`void`

---

### downloadDefaultDataString

▸ **downloadDefaultDataString**(`callback`): `void`

**`Description`**

下载默认角色数据

**`Effect`**

客户端调用

#### Parameters

| Name       | Type                                                             | Description |
| :--------- | :--------------------------------------------------------------- | :---------- |
| `callback` | [`StringResponse`](../modules/Service.Service.md#stringresponse) | 回调        |

#### Returns

`void`

---

### fillAvatar

▸ **fillAvatar**(`img`): `void`

**`Description`**

将头像赋值到 Image 变量上

**`Effect`**

客户端调用

**`Precautions`**

只在由 233 拉起生效

#### Parameters

| Name  | Type                      | Description                   |
| :---- | :------------------------ | :---------------------------- |
| `img` | [`Image`](UI.UI.Image.md) | 需要赋值获得头像的 Image 变量 |

#### Returns

`void`

---

### getNickName

▸ **getNickName**(): `string`

**`Description`**

获取玩家昵称

**`Effect`**

客户端调用

**`Precautions`**

只在由 233 拉起生效

#### Returns

`string`

昵称

---

### getOpenId

▸ **getOpenId**(): `string`

**`Description`**

获取 OpenId

**`Effect`**

客户端调用

**`Precautions`**

只在由 233 拉起生效

#### Returns

`string`

OpenId

---

### getUserData

▸ **getUserData**(`userId`, `index`, `callback`): `void`

**`Description`**

获取用户存储在服务器上的角色形象数据

**`Effect`**

客户端调用

#### Parameters

| Name       | Type                                                             | Description            |
| :--------- | :--------------------------------------------------------------- | :--------------------- |
| `userId`   | `string`                                                         | 用户 Id                |
| `index`    | `number`                                                         | 资源位(0-5)            |
| `callback` | [`StringResponse`](../modules/Service.Service.md#stringresponse) | 返回获取的数据 string. |

#### Returns

`void`

---

### getUserId

▸ **getUserId**(): `string`

**`Description`**

获取平台的用户 Id,可以用于 getUserData 接口

**`Effect`**

客户端调用

#### Returns

`string`

用户 Id

---

### setUserData

▸ **setUserData**(`character`, `dataString`, `callback?`): `void`

**`Description`**

将角色形象数据应用至角色

**`Effect`**

客户端调用

#### Parameters

| Name         | Type                                                         | Description                       |
| :----------- | :----------------------------------------------------------- | :-------------------------------- |
| `character`  | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md)        | 用于换装的角色                    |
| `dataString` | `string`                                                     | 返回的数据                        |
| `callback?`  | [`BoolResponse`](../modules/Service.Service.md#boolresponse) | 设置是否成功的回调 default:无回调 |

#### Returns

`void`

---

### uploadData

▸ **uploadData**(`character`, `callback?`, `index?`, `openStatus?`): `void`

**`Description`**

上传角色形象资源到服务器 Character， Hair, UpperCloth, LowerCloth, Gloves, Shoe

**`Effect`**

客户端调用

#### Parameters

| Name          | Type                                                                                                                         | Description                             |
| :------------ | :--------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------- |
| `character`   | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md)                                                                        | 要上传换装数据的角色                    |
| `callback?`   | [`BoolResponse`](../modules/Service.Service.md#boolresponse) \| [`VoidResponse`](../modules/Service.Service.md#voidresponse) | 设置是否成功的回调 default:默认没有回调 |
| `index?`      | `number`                                                                                                                     | 角色位(0-5) default:0,主角资源位        |
| `openStatus?` | `number`                                                                                                                     | 开发状态 default:1,默认是开放状态       |

#### Returns

`void`

---

### getInstance

▸ `Static` **getInstance**(): [`AccountService`](Service.Service.AccountService.md)

**`Description`**

获取用户账号信息管理器全局实例

**`Effect`**

调用端生效

#### Returns

[`AccountService`](Service.Service.AccountService.md)

用户账号信息管理器全局实例
