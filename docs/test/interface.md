[test](../README.md) /  IHumanoidV1Part

# IHumanoidV1Part

**`Description`**

人形对象V1部位

## Implemented by

- [`HumanoidV1`](../classes/Gameplay.Gameplay.HumanoidV1.md)

## Methods

### getWholeBody

▸ **getWholeBody**(): `string`

**`Description`**

获取全身模型

**`Effect`**

双端

#### Returns

`string`

模型Guid

___

### setWholeBody

▸ **setWholeBody**(`guid`, `sync`): `void`

**`Description`**

设置全身模型

**`Precautions`**

如果模型Guid没有预加载，则v2本地设置时异步的

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:模型Guid |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

