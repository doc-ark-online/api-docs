[Gameplay](../groups/Gameplay.Gameplay.md) / StaticMesh

# StaticMesh <Badge type="tip" text="Class" /> <Score text="StaticMesh" />

::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:023 reason:接口废弃 replacement:Mesh

:::

StaticMeshActor相关接口主为要物理参数设置接口与材质参数设置接口

::: warning Precautions

物理相关接口目前版本不支持证多端同步

:::

## Hierarchy

- [`Mesh`](Gameplay.Mesh.md)

  ↳ **`StaticMesh`**

## Table of contents

| Properties |
| :-----|


::: details 点击查看继承
| Properties |
| :-----|
| **[onEnter](Gameplay.Mesh.md#onenter)**: [`MulticastGameObjectDelegate`](Type.MulticastGameObjectDelegate.md) <br> 进入StaticMesh事件|
| **[onLeave](Gameplay.Mesh.md#onleave)**: [`MulticastGameObjectDelegate`](Type.MulticastGameObjectDelegate.md) <br> 离开StaticMesh事件|
:::


| Accessors |
| :-----|


::: details 点击查看继承
| Accessors |
| :-----|
| **[angularDamping](Gameplay.Mesh.md#angulardamping)**(): `number` <br> 角阻尼|
| **[applyImpulseOnDamage](Gameplay.Mesh.md#applyimpulseondamage)**(): `boolean` <br> 在伤害上应用冲量|
| **[friction](Gameplay.Mesh.md#friction)**(): `number` <br> 获取摩擦力大小|
| **[gravityEnable](Gameplay.Mesh.md#gravityenable)**(): `boolean` <br> 获取是否启用重力|
| **[ignoreRadialForce](Gameplay.Mesh.md#ignoreradialforce)**(): `boolean` <br> 获取是否忽视径向力|
| **[ignoreRadialImpulse](Gameplay.Mesh.md#ignoreradialimpulse)**(): `boolean` <br> 获取是否忽视径向冲量|
| **[isSimulatingPhysics](Gameplay.Mesh.md#issimulatingphysics)**(): `boolean` <br> 获取是否模拟物理|
| **[linerDamping](Gameplay.Mesh.md#linerdamping)**(): `number` <br> 获取线性阻尼|
| **[lockPositionX](Gameplay.Mesh.md#lockpositionx)**(): `boolean` <br> 获取是否约束位置X|
| **[lockPositionY](Gameplay.Mesh.md#lockpositiony)**(): `boolean` <br> 获取是否约束位置Y|
| **[lockPositionZ](Gameplay.Mesh.md#lockpositionz)**(): `boolean` <br> 获取是否约束位置Z|
| **[lockRotationX](Gameplay.Mesh.md#lockrotationx)**(): `boolean` <br> 获取是否约束旋转X|
| **[lockRotationY](Gameplay.Mesh.md#lockrotationy)**(): `boolean` <br> 获取是否约束旋转Y|
| **[lockRotationZ](Gameplay.Mesh.md#lockrotationz)**(): `boolean` <br> 获取是否约束旋转Z|
| **[massEnable](Gameplay.Mesh.md#massenable)**(): `boolean` <br> 获取是否使用质量|
| **[massInKg](Gameplay.Mesh.md#massinkg)**(): `number` <br> 获取质量大小|
| **[restitution](Gameplay.Mesh.md#restitution)**(): `number` <br> 获取弹力大小|
:::


| Methods |
| :-----|


::: details 点击查看继承
| Methods |
| :-----|
| **[createMaterialInstance](Gameplay.Mesh.md#creatematerialinstance)**(`Index`: `number`): `void` <br> 创建材质实例|
| **[getMaterialColor](Gameplay.Mesh.md#getmaterialcolor)**(`Index`: `number`): [`LinearColor`](Type.LinearColor.md) <br> 获取材质颜色,暂时注释材质颜色问题后续有待解决,当前版本获取会失败|
| **[getMaterialInstance](Gameplay.Mesh.md#getmaterialinstance)**(): [`MaterialInstance`](Gameplay.MaterialInstance.md)[] <br> 返回当前拥有的材质实例|
| **[resetMaterial](Gameplay.Mesh.md#resetmaterial)**(): `void` <br> 还原物体材质|
| **[setCullDistance](Gameplay.Mesh.md#setculldistance)**(`inCullDistance`: `number`): `void` <br> 与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)|
| **[setMaterial](Gameplay.Mesh.md#setmaterial)**(`MaterialGUID`: `string`): `void` <br> 设置物体材质|
| **[setMaterialColor](Gameplay.Mesh.md#setmaterialcolor)**(`Index`: `number`, `InColor`: [`LinearColor`](Type.LinearColor.md)): `void` <br> 设置材质颜色|
| **[setOutlineAndColor](Gameplay.Mesh.md#setoutlineandcolor)**(`Enable`: `boolean`, `ColorIndex`: `number`): `void` <br> 设置对象描边及描边颜色，需要场景中存在后处理对象。|
| **[setStaticMeshAsset](Gameplay.Mesh.md#setstaticmeshasset)**(`InAssetGuid`: `string`): `void` <br> 设置静态网格资源|
:::


## Properties

## Accessors

## Methods