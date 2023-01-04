[Gameplay](../modules/Gameplay.Gameplay.md) / StaticMesh

# StaticMesh <Badge type="tip" text="Class" />

**`Description`**

StaticMeshActor相关接口主为要物理参数设置接口与材质参数设置接口

**`Precautions`**

物理相关接口目前版本不支持证多端同步

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`StaticMesh`**

## Table of contents

| Accessors |
| :-----|
| **[angularDamping](Gameplay.StaticMesh.md#angulardamping)**(): `number` <br> 角阻尼|
| **[applyImpulseOnDamage](Gameplay.StaticMesh.md#applyimpulseondamage)**(): `boolean` <br> 在伤害上应用冲量|
| **[gravityEnable](Gameplay.StaticMesh.md#gravityenable)**(): `boolean` <br> 获取是否启用重力|
| **[ignoreRadialForce](Gameplay.StaticMesh.md#ignoreradialforce)**(): `boolean` <br> 获取是否忽视径向力|
| **[ignoreRadialImpulse](Gameplay.StaticMesh.md#ignoreradialimpulse)**(): `boolean` <br> 获取是否忽视径向冲量|
| **[isSimulatingPhysics](Gameplay.StaticMesh.md#issimulatingphysics)**(): `boolean` <br> 获取是否模拟物理|
| **[linerDamping](Gameplay.StaticMesh.md#linerdamping)**(): `number` <br> 获取线性阻尼|
| **[lockPositionX](Gameplay.StaticMesh.md#lockpositionx)**(): `boolean` <br> 获取是否约束位置X|
| **[lockPositionY](Gameplay.StaticMesh.md#lockpositiony)**(): `boolean` <br> 获取是否约束位置Y|
| **[lockPositionZ](Gameplay.StaticMesh.md#lockpositionz)**(): `boolean` <br> 获取是否约束位置Z|
| **[lockRotationX](Gameplay.StaticMesh.md#lockrotationx)**(): `boolean` <br> 获取是否约束旋转X|
| **[lockRotationY](Gameplay.StaticMesh.md#lockrotationy)**(): `boolean` <br> 获取是否约束旋转Y|
| **[lockRotationZ](Gameplay.StaticMesh.md#lockrotationz)**(): `boolean` <br> 获取是否约束旋转Z|
| **[massEnable](Gameplay.StaticMesh.md#massenable)**(): `boolean` <br> 获取是否使用质量|
| **[massInKg](Gameplay.StaticMesh.md#massinkg)**(): `number` <br> 获取质量大小|

| Methods |
| :-----|
| **[createMaterialInstance](Gameplay.StaticMesh.md#creatematerialinstance)**(`number`): `void` <br> 创建材质实例|
| **[getMaterialColor](Gameplay.StaticMesh.md#getmaterialcolor)**(`number`): [`LinearColor`](Type.LinearColor.md) <br> 获取材质颜色,暂时注释材质颜色问题后续有待解决,当前版本获取会失败|
| **[resetMaterial](Gameplay.StaticMesh.md#resetmaterial)**(): `void` <br> 还原物体材质|
| **[setCullDistance](Gameplay.StaticMesh.md#setculldistance)**(`number`): `void` <br> 与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)|
| **[setMaterial](Gameplay.StaticMesh.md#setmaterial)**(`string`): `void` <br> 设置物体材质|
| **[setMaterialColor](Gameplay.StaticMesh.md#setmaterialcolor)**(`number`, [`LinearColor`](Type.LinearColor.md)): `void` <br> 设置材质颜色|
| **[setOutlineAndColor](Gameplay.StaticMesh.md#setoutlineandcolor)**(`boolean`, `number`): `void` <br> 设置对象描边及描边颜色，需要场景中存在后处理对象。|
| **[setStaticMeshAsset](Gameplay.StaticMesh.md#setstaticmeshasset)**(`string`): `void` <br> 设置静态网格资源|

## Accessors

### angularDamping

• `get` **angularDamping**(): `number`

**`Description`**

角阻尼

#### Returns

`number`

• `set` **angularDamping**(`value`): `void`

**`Description`**

设置角阻尼

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### applyImpulseOnDamage

• `get` **applyImpulseOnDamage**(): `boolean`

**`Description`**

在伤害上应用冲量

#### Returns

`boolean`

• `set` **applyImpulseOnDamage**(`value`): `void`

**`Description`**

在伤害上应用冲量

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`


### gravityEnable

• `get` **gravityEnable**(): `boolean`

**`Description`**

获取是否启用重力

#### Returns

`boolean`

• `set` **gravityEnable**(`value`): `void`

**`Description`**

是否启用重力

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`


### ignoreRadialForce

• `get` **ignoreRadialForce**(): `boolean`

**`Description`**

获取是否忽视径向力

#### Returns

`boolean`

• `set` **ignoreRadialForce**(`value`): `void`

**`Description`**

设置是否忽视径向力

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### ignoreRadialImpulse

• `get` **ignoreRadialImpulse**(): `boolean`

**`Description`**

获取是否忽视径向冲量

#### Returns

`boolean`

• `set` **ignoreRadialImpulse**(`value`): `void`

**`Description`**

忽视径向冲量

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### isSimulatingPhysics

• `get` **isSimulatingPhysics**(): `boolean`

**`Description`**

获取是否模拟物理

#### Returns

`boolean`

• `set` **isSimulatingPhysics**(`value`): `void`

**`Description`**

设置模拟物理状态

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### linerDamping

• `get` **linerDamping**(): `number`

**`Description`**

获取线性阻尼

#### Returns

`number`

• `set` **linerDamping**(`value`): `void`

**`Description`**

设置线性阻尼

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### lockPositionX

• `get` **lockPositionX**(): `boolean`

**`Description`**

获取是否约束位置X

#### Returns

`boolean`

• `set` **lockPositionX**(`value`): `void`

**`Description`**

设置是否约束位置X

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### lockPositionY

• `get` **lockPositionY**(): `boolean`

**`Description`**

获取是否约束位置Y

#### Returns

`boolean`

• `set` **lockPositionY**(`value`): `void`

**`Description`**

设置是否约束位置Y

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### lockPositionZ

• `get` **lockPositionZ**(): `boolean`

**`Description`**

获取是否约束位置Z

#### Returns

`boolean`

• `set` **lockPositionZ**(`value`): `void`

**`Description`**

设置是否约束位置Z

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### lockRotationX

• `get` **lockRotationX**(): `boolean`

**`Description`**

获取是否约束旋转X

#### Returns

`boolean`

• `set` **lockRotationX**(`value`): `void`

**`Description`**

设置是否约束旋转X

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### lockRotationY

• `get` **lockRotationY**(): `boolean`

**`Description`**

获取是否约束旋转Y

#### Returns

`boolean`

• `set` **lockRotationY**(`value`): `void`

**`Description`**

设置是否约束旋转Y

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### lockRotationZ

• `get` **lockRotationZ**(): `boolean`

**`Description`**

获取是否约束旋转Z

#### Returns

`boolean`

• `set` **lockRotationZ**(`value`): `void`

**`Description`**

约束旋转Z

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`


### massEnable

• `get` **massEnable**(): `boolean`

**`Description`**

获取是否使用质量

#### Returns

`boolean`

• `set` **massEnable**(`value`): `void`

**`Description`**

是否启用质量

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### massInKg

• `get` **massInKg**(): `number`

**`Description`**

获取质量大小

#### Returns

`number`

• `set` **massInKg**(`value`): `void`

**`Description`**

设置质量大小

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`


## Methods

### createMaterialInstance

▸ **createMaterialInstance**(`Index`): `void`

**`Description`**

创建材质实例

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 第几个材质 |

#### Returns

`void`


### getMaterialColor

▸ **getMaterialColor**(`Index`): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取材质颜色,暂时注释材质颜色问题后续有待解决,当前版本获取会失败

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 第几个材质 |

#### Returns

[`LinearColor`](Type.LinearColor.md)

获取的颜色


### resetMaterial

▸ **resetMaterial**(): `void`

**`Description`**

还原物体材质

**`Effect`**

调用端生效

#### Returns

`void`


### setCullDistance

▸ **setCullDistance**(`inCullDistance`): `void`

**`Description`**

与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)

**`Effect`**

只在客户端调用生效

**`Precautions`**

最终的裁剪距离会和画质等级有关

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inCullDistance` | `number` | 裁剪距离 |

#### Returns

`void`


### setMaterial

▸ **setMaterial**(`MaterialGUID`): `void`

**`Description`**

设置物体材质

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `MaterialGUID` | `string` |  材质ID default: |

#### Returns

`void`

▸ **setMaterial**(`MaterialGUID`, `Transparency`, `isTransparent`): `void`

**`Description`**

设置物体材质

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `MaterialGUID` | `string` |  材质ID |
| `Transparency` | `number` |  透明度 default: 0.8 |
| `isTransparent` | `boolean` |  是否透明 default: false |

#### Returns

`void`

___

### setMaterialColor

▸ **setMaterialColor**(`Index`, `InColor`): `void`

**`Description`**

设置材质颜色

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 第几个材质 |
| `InColor` | [`LinearColor`](Type.LinearColor.md) | 要赋值的颜色 |

#### Returns

`void`

___

### setOutlineAndColor

▸ **setOutlineAndColor**(`Enable`, `ColorIndex`): `void`

**`Description`**

设置对象描边及描边颜色，需要场景中存在后处理对象。

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Enable` | `boolean` |  是否开启描边 default: |
| `ColorIndex` | `number` |  设置描边颜色，与后处理中颜色Index对应，-1为无颜色 default: |

#### Returns

`void`


### setStaticMeshAsset

▸ **setStaticMeshAsset**(`InAssetGuid`): `void`

**`Description`**

设置静态网格资源

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetGuid` | `string` |  资源GUID default: |

#### Returns

`void`
