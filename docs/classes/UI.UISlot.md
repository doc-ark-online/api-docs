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
| **[autoSizeEnable](UI.UISlot.md#autosizeenable)**(): `boolean` <br> since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息|
| **[constraints](UI.UISlot.md#constraints)**(): [`UIConstraintAnchors`](UI.UIConstraintAnchors.md) <br> since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息|
| **[position](UI.UISlot.md#position)**(): [`Vector2`](Type.Vector2.md) <br> since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息|
| **[size](UI.UISlot.md#size)**(): [`Vector2`](Type.Vector2.md) <br> since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息|
| **[transform](UI.UISlot.md#transform)**(): `Readonly`<[`UITransform`](UI.UITransform.md)\> <br> since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息|
| **[zOrder](UI.UISlot.md#zorder)**(): `number` <br> since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息|

| Methods |
| :-----|
| **[equal](UI.UISlot.md#equal)**([`UISlot`](UI.UISlot.md)): `boolean` <br> since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息|

## Accessors

### autoSizeEnable <Score text="autoSizeEnable" /> 

• `get` **autoSizeEnable**(): `boolean` <Badge type="tip" text="other" />

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

获取是否自动设置大小


#### Returns

`boolean`

是否自动设置大小

• `set` **autoSizeEnable**(`autoSize`): `void`

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

设置是否自动设置大小

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `autoSize` | `boolean` | 是否自动设置大小 |


___

### constraints <Score text="constraints" /> 

• `get` **constraints**(): [`UIConstraintAnchors`](UI.UIConstraintAnchors.md) <Badge type="tip" text="other" />

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

获取Slot布局(Figma布局)


#### Returns

[`UIConstraintAnchors`](UI.UIConstraintAnchors.md)

Slot布局

• `set` **constraints**(`ininconstraints`): `void`

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

设置Slot布局(figma布局)

**`Effect`**


#### Parameters

| Name | Type |
| :------ | :------ |
| `ininconstraints` | [`UIConstraintAnchors`](UI.UIConstraintAnchors.md) |


___

### position <Score text="position" /> 

• `get` **position**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

获取位置


#### Returns

[`Vector2`](Type.Vector2.md)

FVector2D

• `set` **position**(`inFigmaPosition`): `void`

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

设置Slot位置

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inFigmaPosition` | [`Vector2`](Type.Vector2.md) | Slot位置 |


___

### size <Score text="size" /> 

• `get` **size**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

获取大小


#### Returns

[`Vector2`](Type.Vector2.md)

FVector2D

• `set` **size**(`inSize`): `void`

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

设置大小

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | size |


___

### transform <Score text="transform" /> 

• `get` **transform**(): `Readonly`<[`UITransform`](UI.UITransform.md)\> <Badge type="tip" text="other" />

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

得到Slot大小和位置


#### Returns

`Readonly`<[`UITransform`](UI.UITransform.md)\>

Slot大小和位置

• `set` **transform**(`inTransform`): `void`

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

设置Slot大小和位置

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTransform` | [`UITransform`](UI.UITransform.md) | 大小位置 |


___

### zOrder <Score text="zOrder" /> 

• `get` **zOrder**(): `number` <Badge type="tip" text="other" />

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

### equal <Score text="equal" /> 

• **equal**(`that`): `boolean` <Badge type="tip" text="other" />

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

判断是不是同一个Slot


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `that` | [`UISlot`](UI.UISlot.md) | 需要比较的另外一个Slot |

#### Returns

`boolean`

是否相同
