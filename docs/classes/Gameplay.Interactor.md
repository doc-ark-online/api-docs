[Gameplay](../modules/Gameplay.Gameplay.md) / Interactor

# Interactor <Badge type="tip" text="Class" />

**`Description`**

交互物功能对象，正重新改版，新交互物 InteractiveObject

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`Interactor`**

## Table of contents

| Properties |
| :-----|
| **[onInteractorEnter](Gameplay.Interactor.md#oninteractorenter)**: [`Delegate`](Type.Delegate.md)<(`result`: `boolean`) => `void`\> <br> 激活交互时执行绑定函数|
| **[onInteractorExit](Gameplay.Interactor.md#oninteractorexit)**: [`Delegate`](Type.Delegate.md)<(`result`: `boolean`) => `void`\> <br> 退出交互时执行绑定函数|
| **[serverSetShowDebugLog](Gameplay.Interactor.md#serversetshowdebuglog)**: `any` <br> 服务器设置显示debug日志|

| Accessors |
| :-----|

| Methods |
| :-----|
| **[convertStringToStanceGuid](Gameplay.Interactor.md#convertstringtostanceguid)**(`string`): `string` <br> 将姿态转换为GUID|
| **[enterInteractiveState](Gameplay.Interactor.md#enterinteractivestate)**(`GameObject`): `Promise`<`boolean`\> <br> 激活交互|
| **[exitInteractiveState](Gameplay.Interactor.md#exitinteractivestate)**([`Vector`](Type.Vector.md), `string`): `Promise`<`boolean`\> <br> 客户端请求退出交互|
| **[getInteractiveState](Gameplay.Interactor.md#getinteractivestate)**(): `boolean` <br> 获取该交互物的交互状态|
| **[interactiveCharacter](Gameplay.Interactor.md#interactivecharacter)**(): [`Character`](Gameplay.Character.md) <br> 获取和交互物发生交互的角色|

## Properties

### onInteractorEnter

• **onInteractorEnter**: [`Delegate`](Type.Delegate.md)<(`result`: `boolean`) => `void`\>

**`Description`**

激活交互时执行绑定函数

___

### onInteractorExit

• **onInteractorExit**: [`Delegate`](Type.Delegate.md)<(`result`: `boolean`) => `void`\>

**`Description`**

退出交互时执行绑定函数

___

### serverSetShowDebugLog

• `Private` **serverSetShowDebugLog**: `any`

**`Description`**

服务器设置显示debug日志

**`Param`**

usage:是否显示debug日志

## Accessors

## Methods

### convertStringToStanceGuid

▸ **convertStringToStanceGuid**(`stance`): `string`

**`Description`**

将姿态转换为GUID

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stance` | `string` |  姿态 default: |

#### Returns

`string`

姿态对应的GUID


### enterInteractiveState

▸ **enterInteractiveState**(`characterObj`): `Promise`<`boolean`\>

**`Description`**

激活交互

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `characterObj` | `GameObject` |  激活交互的角色 default: |

#### Returns

`Promise`<`boolean`\>

将返回是否激活成功的 Promise

___

### exitInteractiveState

▸ **exitInteractiveState**(`Location`, `stance?`): `Promise`<`boolean`\>

**`Description`**

客户端请求退出交互

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Location` | [`Vector`](Type.Vector.md) |  退出交互的位置 |
| `stance?` | `string` |  退出交互物的姿态 default: undefined |

#### Returns

`Promise`<`boolean`\>

将返回是否退出激活成功的 Promise


### getInteractiveState

▸ **getInteractiveState**(): `boolean`

**`Description`**

获取该交互物的交互状态

**`Effect`**

调用端生效

#### Returns

`boolean`

true: 为交互中


### interactiveCharacter

▸ **interactiveCharacter**(): [`Character`](Gameplay.Character.md)

**`Description`**

获取和交互物发生交互的角色

**`Effect`**

调用端生效

#### Returns

[`Character`](Gameplay.Character.md)

和交互物发生交互的角色，可能为空
