[GAMEPLAY](../groups/GAMEPLAY.GAMEPLAY.md) / HotWeaponLoadComponent

# HotWeaponLoadComponent <Badge type="tip" text="Class" /> <Score text="HotWeaponLoadComponent" />

热武器上膛组件，负责维护热武器播放上膛动作的相关参数，和逻辑

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

### onEndLoadClient <Score text="onEndLoadClient" /> 

• **onEndLoadClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

客户端上膛结束时执行绑定函数

___

### onEndLoadServer <Score text="onEndLoadServer" /> 

• **onEndLoadServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

服务器上膛结束时执行绑定函数

___

### onStartLoadClient <Score text="onStartLoadClient" /> 

• **onStartLoadClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

客户端开始上膛时执行绑定函数

___

### onStartLoadServer <Score text="onStartLoadServer" /> 

• **onStartLoadServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

服务器开始上膛时执行绑定函数

## Accessors

### animationGuid <Score text="animationGuid" /> 

• `get` **animationGuid**(): `string` 

获取绑定的动画GUID


#### Returns

`string`

绑定的动画GUID

• `set` **animationGuid**(`GUID`): `void` <Badge type="tip" text="other" />

设置动画 GUID

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` |  需要设置的蒙太奇动画 GUID |


___

### loadAfterFireEnable <Score text="loadAfterFireEnable" /> 

• `get` **loadAfterFireEnable**(): `boolean` 

获取是否开启开火后自动上膛的功能


#### Returns

`boolean`

是否开启开火后自动上膛的功能

• `set` **loadAfterFireEnable**(`enable`): `void` <Badge type="tip" text="other" />

设置是否开启开火后自动上膛的功能

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` |  是否开启开火后自动上膛的功能 |


___

### loadDuration <Score text="loadDuration" /> 

• `get` **loadDuration**(): `number` 

获取上膛时间


#### Returns

`number`

上膛时间

• `set` **loadDuration**(`time`): `void` 

设置上膛时间


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  上膛时间 |


## Methods

### hadAnimationGuid <Score text="hadAnimationGuid" /> 

• **hadAnimationGuid**(): `boolean` 

是否有动画GUID


#### Returns

`boolean`

是否有动画GUID
