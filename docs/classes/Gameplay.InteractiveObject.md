[Gameplay](../groups/Gameplay.Gameplay.md) / InteractiveObject

# InteractiveObject <Badge type="tip" text="Class" /> <Score text="InteractiveObject" />

::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:024 reason: 交互物 v1 v2 兼容 replacement: Interactor

:::

交互物功能对象，提供角色与场景中物体的交互功能，交互即将角色切换到特定姿态、位置并绑定到交互物上的过程。此对象常用于场景中椅子，沙发，器材等位置。

## Hierarchy

- [`Interactor`](Gameplay.Interactor.md)

  ↳ **`InteractiveObject`**

## Table of contents

| Properties |
| :-----|


::: details 点击查看继承
| Properties |
| :-----|
| **[onInteractiveEnded](Gameplay.Interactor.md#oninteractiveended)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 交互结束时执行绑定函数|
| **[onInteractiveStarted](Gameplay.Interactor.md#oninteractivestarted)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 交互开始时执行绑定函数|
| **[onInteractorEnter](Gameplay.Interactor.md#oninteractorenter)**: [`Delegate`](Type.Delegate.md)<(`result`: `boolean`) => `void`\> <br> （请不要使用此委托，绑定的回调会在调用交互时被重置，外部回调不会触发）激活交互时执行绑定函数|
| **[onInteractorExit](Gameplay.Interactor.md#oninteractorexit)**: [`Delegate`](Type.Delegate.md)<(`result`: `boolean`) => `void`\> <br> （请不要使用此委托，绑定的回调会在调用退出交互时被重置，外部回调不会触发）退出交互时执行绑定函数|
:::


| Accessors |
| :-----|


::: details 点击查看继承
| Accessors |
| :-----|
| **[interactiveSlot](Gameplay.Interactor.md#interactiveslot)**(): [`InteractiveSlot`](../enums/Gameplay.InteractiveSlot.md) <br> 交互物插槽|
| **[interactiveStance](Gameplay.Interactor.md#interactivestance)**(): `string` <br> 交互动画姿态资源 id|
:::


| Methods |
| :-----|


::: details 点击查看继承
| Methods |
| :-----|
| **[endInteract](Gameplay.Interactor.md#endinteract)**(`endLoc?`: [`Vector`](Type.Vector.md), `endRot?`: [`Rotation`](Type.Rotation.md), `newStance?`: `string`): `boolean` <br> 结束交互|
| **[enterInteractiveState](Gameplay.Interactor.md#enterinteractivestate)**(`characterObj`: `GameObject`): `Promise`<`boolean`\> <br> 激活交互，将角色切换到特定姿态和位置，并绑定到交互物上|
| **[exitInteractiveState](Gameplay.Interactor.md#exitinteractivestate)**(`Location`: [`Vector`](Type.Vector.md), `stance?`: `string`): `Promise`<`boolean`\> <br> 退出交互，恢复角色的绑定关系，姿态和位置|
| **[getInteractCharacter](Gameplay.Interactor.md#getinteractcharacter)**(): [`CharacterBase`](Gameplay.CharacterBase.md) <br> 获取正在交互的角色|
| **[getInteractiveState](Gameplay.Interactor.md#getinteractivestate)**(): `boolean` <br> 获取该交互物的交互状态|
| **[getInteractiveStatus](Gameplay.Interactor.md#getinteractivestatus)**(): `boolean` <br> 获取该交互物的交互状态|
| **[interactiveCharacter](Gameplay.Interactor.md#interactivecharacter)**(): [`Character`](Gameplay.Character.md) <br> 获取和交互物发生交互的角色|
| **[startInteract](Gameplay.Interactor.md#startinteract)**(`newCharObj`: [`CharacterBase`](Gameplay.CharacterBase.md), `newSlot?`: [`InteractiveSlot`](../enums/Gameplay.InteractiveSlot.md), `newStance?`: `string`): `boolean` <br> 开始交互|
:::


## Properties

## Accessors

## Methods