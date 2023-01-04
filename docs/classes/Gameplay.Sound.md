[Gameplay](../modules/Gameplay.Gameplay.md) / Sound

# Sound <Badge type="tip" text="Class" />

**`Description`**

音效组件

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`Sound`**

## Table of contents

| Properties |
| :-----|
| **[onSoundFinished](Gameplay.Sound.md#onsoundfinished)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 声音结束事件|
| **[onSoundPaused](Gameplay.Sound.md#onsoundpaused)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 声音暂停事件|
| **[onSoundStarted](Gameplay.Sound.md#onsoundstarted)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 声音开始事件|

| Accessors |
| :-----|
| **[attenuationDistanceModel](Gameplay.Sound.md#attenuationdistancemodel)**(): [`AttenuationDistanceModel`](../enums/Gameplay.AttenuationDistanceModel.md) <br> 获取音效的衰减方式|
| **[audioAsset](Gameplay.Sound.md#audioasset)**(`string`): `void` <br> 设置音效|
| **[autoPlay](Gameplay.Sound.md#autoplay)**(): `boolean` <br> 获取是否自动播放|
| **[currentProgress](Gameplay.Sound.md#currentprogress)**(): `number` <br> 获取当前播放时长进度|
| **[drawInnerBounds](Gameplay.Sound.md#drawinnerbounds)**(): `boolean` <br> 获取是否绘制Bounds辅助线|
| **[duration](Gameplay.Sound.md#duration)**(): `number` <br> 获取音效时长|
| **[innerRadius](Gameplay.Sound.md#innerradius)**(): `number` <br> 获取音量内部半径|
| **[loop](Gameplay.Sound.md#loop)**(): `boolean` <br> 获取是否循环播放|
| **[outerRadius](Gameplay.Sound.md#outerradius)**(): `number` <br> 获取衰减距离|
| **[playState](Gameplay.Sound.md#playstate)**(): `boolean` <br> 获取音效播放状态|
| **[spatialization](Gameplay.Sound.md#spatialization)**(): `boolean` <br> 获取音效空间化|
| **[uiSound](Gameplay.Sound.md#uisound)**(): `boolean` <br> 获取是否是空间音效,UI音效和循环|
| **[volumeMultiplier](Gameplay.Sound.md#volumemultiplier)**(): `number` <br> 获取音量比例|

| Methods |
| :-----|
| **[getIsDrawInnerBounds](Gameplay.Sound.md#getisdrawinnerbounds)**(): `boolean` <br> 获取是否启用Bounds辅助线|
| **[pause](Gameplay.Sound.md#pause)**(): `void` <br> 暂停播放特效|
| **[play](Gameplay.Sound.md#play)**(): `void` <br> 播放音效|
| **[setSoundSphere](Gameplay.Sound.md#setsoundsphere)**(`number`, `number`, `boolean`, [`AttenuationDistanceModel`](../enums/Gameplay.AttenuationDistanceModel.md)): `void` <br> 设置音效.复合函数|
| **[stop](Gameplay.Sound.md#stop)**(): `void` <br> 停止播放特效|

## Properties

### onSoundFinished

• **onSoundFinished**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

声音结束事件

___

### onSoundPaused

• **onSoundPaused**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

声音暂停事件

___

### onSoundStarted

• **onSoundStarted**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

声音开始事件

## Accessors

### attenuationDistanceModel

• `get` **attenuationDistanceModel**(): [`AttenuationDistanceModel`](../enums/Gameplay.AttenuationDistanceModel.md)

**`Description`**

获取音效的衰减方式

**`Effect`**

调用端生效

#### Returns

[`AttenuationDistanceModel`](../enums/Gameplay.AttenuationDistanceModel.md)

衰减方式

___

### audioAsset

• `set` **audioAsset**(`assetGuid`): `void`

**`Description`**

设置音效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetGuid` | `string` | 音效资源ID |

#### Returns

`void`

___

### autoPlay

• `get` **autoPlay**(): `boolean`

**`Description`**

获取是否自动播放

#### Returns

`boolean`

是否自动播放

• `set` **autoPlay**(`autoPlay`): `void`

**`Description`**

设置是否自动播放

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `autoPlay` | `boolean` | 是否自动播放 |

#### Returns

`void`

___

### currentProgress

• `get` **currentProgress**(): `number`

**`Description`**

获取当前播放时长进度

#### Returns

`number`

播放时长进度

___

### drawInnerBounds

• `get` **drawInnerBounds**(): `boolean`

**`Description`**

获取是否绘制Bounds辅助线

#### Returns

`boolean`

是否绘制

• `set` **drawInnerBounds**(`drawInnerBounds`): `void`

**`Description`**

设置是否绘制Bounds辅助线

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `drawInnerBounds` | `boolean` | 是否绘制 |

#### Returns

`void`

___

### duration

• `get` **duration**(): `number`

**`Description`**

获取音效时长

**`Effect`**

调用端生效

#### Returns

`number`

音效时长(ms)


### innerRadius

• `get` **innerRadius**(): `number`

**`Description`**

获取音量内部半径

#### Returns

`number`

音量内部半径

• `set` **innerRadius**(`innerRadius`): `void`

**`Description`**

设置音量内部半径

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `innerRadius` | `number` | 设置半径 |

#### Returns

`void`


### loop

• `get` **loop**(): `boolean`

**`Description`**

获取是否循环播放

#### Returns

`boolean`

是否循环

• `set` **loop**(`Loop`): `void`

**`Description`**

设置循环播放

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Loop` | `boolean` | 设置是否开启循环 |

#### Returns

`void`


### outerRadius

• `get` **outerRadius**(): `number`

**`Description`**

获取衰减距离

#### Returns

`number`

距离

• `set` **outerRadius**(`outerRadius`): `void`

**`Description`**

设置外部半径（衰减距离）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outerRadius` | `number` | 距离 |

#### Returns

`void`


### playState

• `get` **playState**(): `boolean`

**`Description`**

获取音效播放状态

**`Effect`**

调用端生效

#### Returns

`boolean`

是否正在播放


### spatialization

• `get` **spatialization**(): `boolean`

**`Description`**

获取音效空间化

#### Returns

`boolean`

是否开启音效空间化

• `set` **spatialization**(`spatialization`): `void`

**`Description`**

设置音效空间化

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `spatialization` | `boolean` | 设置开启音效空间化 |

#### Returns

`void`


### uiSound

• `get` **uiSound**(): `boolean`

**`Description`**

获取是否是空间音效,UI音效和循环

**`Effect`**

调用端生效

#### Returns

`boolean`

Vector XYZ 0-1

• `set` **uiSound**(`uiSound`): `void`

**`Description`**

设置UI音效

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uiSound` | `boolean` | 是否用于UI |

#### Returns

`void`


### volumeMultiplier

• `get` **volumeMultiplier**(): `number`

**`Description`**

获取音量比例

#### Returns

`number`

音量比例

• `set` **volumeMultiplier**(`volumeMultiplier`): `void`

**`Description`**

设置音量比例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `volumeMultiplier` | `number` | 音量比例 |

#### Returns

`void`


## Methods

### getIsDrawInnerBounds

▸ **getIsDrawInnerBounds**(): `boolean`

**`Description`**

获取是否启用Bounds辅助线

**`Effect`**

调用端生效

#### Returns

`boolean`

是否启用


### pause

▸ **pause**(): `void`

**`Description`**

暂停播放特效

**`Effect`**

调用端生效

#### Returns

`void`

___

### play

▸ **play**(): `void`

**`Description`**

播放音效

**`Effect`**

调用端生效

#### Returns

`void`


### setSoundSphere

▸ **setSoundSphere**(`radius`, `volume`, `drawBoundLine`, `newFunction`): `void`

**`Description`**

设置音效.复合函数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | `number` | 半径 |
| `volume` | `number` | 音量大小 |
| `drawBoundLine` | `boolean` | 是否画辅助线 |
| `newFunction` | [`AttenuationDistanceModel`](../enums/Gameplay.AttenuationDistanceModel.md) | 音效衰减类型 |

#### Returns

`void`


### stop

▸ **stop**(): `void`

**`Description`**

停止播放特效

**`Effect`**

调用端生效

#### Returns

`void`
