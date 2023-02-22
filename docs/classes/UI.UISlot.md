[UI](../modules/UI.UI.md) / UISlot

# UISlot <Badge type="tip" text="Class" /> <Score text="UISlot" />

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Groups`**

GUI

UI插槽

## Table of contents

| Accessors |
| :-----|
| **[zOrder](UI.UISlot.md#zorder)**(): `number` <br> 获取zOrder|

| Methods |
| :-----|

## Accessors

### autoSizeEnable <Score text="autoSizeEnable" /> 

• `get` **autoSizeEnable**(): `boolean` <Badge type="tip" text="client" />

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

获取是否自动设置大小


#### Returns

`boolean`

是否自动设置大小

• `get` **constraints**(): [`UIConstraintAnchors`](UI.UIConstraintAnchors.md) <Badge type="tip" text="client" />

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

获取Slot布局(Figma布局)


#### Returns

[`UIConstraintAnchors`](UI.UIConstraintAnchors.md)

Slot布局

• `get` **position**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="client" />

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

获取位置


#### Returns

[`Vector2`](Type.Vector2.md)

FVector2D

• `get` **size**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="client" />

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

获取大小


#### Returns

[`Vector2`](Type.Vector2.md)

FVector2D

• `get` **transform**(): `Readonly`<[`UITransform`](UI.UITransform.md)\> <Badge type="tip" text="client" />

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

得到Slot大小和位置


#### Returns

`Readonly`<[`UITransform`](UI.UITransform.md)\>

Slot大小和位置

• `get` **zOrder**(): `number` <Badge type="tip" text="client" />

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

获取zOrder


#### Returns

`number`

zOrder

• `set` **zOrder**(`InZOrder`): `void`

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

设置zOrder

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InZOrder` | `number` | 值越大在越上层 |


## Methods