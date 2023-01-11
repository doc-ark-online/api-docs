[Gameplay](../modules/Gameplay.Gameplay.md) / HotWeaponLoadComponent

# HotWeaponLoadComponent <Badge type="tip" text="Class" /> 

**`Description`**

热武器上膛组件

## Table of contents

| Properties |
| :-----|
| **[onEndLoadClient](Gameplay.HotWeaponLoadComponent.md#onendloadclient)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端上膛结束时执行绑定函数|
| **[onEndLoadServer](Gameplay.HotWeaponLoadComponent.md#onendloadserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器上膛结束时执行绑定函数|
| **[onStartLoadClient](Gameplay.HotWeaponLoadComponent.md#onstartloadclient)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端开始上膛时执行绑定函数|
| **[onStartLoadServer](Gameplay.HotWeaponLoadComponent.md#onstartloadserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器开始上膛时执行绑定函数|

| Accessors |
| :-----|
| **[animationGuid](Gameplay.HotWeaponLoadComponent.md#animationguid)**(): `string` <br> 获取绑定的动画GUID|
| **[loadAfterFireEnable](Gameplay.HotWeaponLoadComponent.md#loadafterfireenable)**(): `boolean` <br> 获取是否开启开火后自动上膛的功能|
| **[loadDuration](Gameplay.HotWeaponLoadComponent.md#loadduration)**(): `number` <br> 获取上膛时间|

| Methods |
| :-----|
| **[hadAnimationGuid](Gameplay.HotWeaponLoadComponent.md#hadanimationguid)**(): `boolean` <br> 是否有动画GUID|

## Properties

### onEndLoadClient  

• **onEndLoadClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端上膛结束时执行绑定函数

___

### onEndLoadServer  

• **onEndLoadServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器上膛结束时执行绑定函数

___

### onStartLoadClient  

• **onStartLoadClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端开始上膛时执行绑定函数

___

### onStartLoadServer  

• **onStartLoadServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器开始上膛时执行绑定函数

## Accessors

### animationGuid  

• `get` **animationGuid**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取绑定的动画GUID


#### Returns

`string`

绑定的动画GUID

• `set` **animationGuid**(`GUID`): `void` <Badge type="tip" text="other" />

**`Description`**

设置动画 GUID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` |  需要设置的蒙太奇动画 GUID |


___

### loadAfterFireEnable  

• `get` **loadAfterFireEnable**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

获取是否开启开火后自动上膛的功能


#### Returns

`boolean`

是否开启开火后自动上膛的功能

• `set` **loadAfterFireEnable**(`enable`): `void` <Badge type="tip" text="other" />

**`Description`**

设置是否开启开火后自动上膛的功能


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` |  是否开启开火后自动上膛的功能 |


___

### loadDuration  

• `get` **loadDuration**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取上膛时间


#### Returns

`number`

上膛时间

• `set` **loadDuration**(`time`): `void` <Badge type="tip" text="other" />

**`Description`**

设置上膛时间

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  上膛时间 |


## Methods

### hadAnimationGuid  

▸ **hadAnimationGuid**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

是否有动画GUID


#### Returns

`boolean`

是否有动画GUID
