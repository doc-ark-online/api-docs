[Gui](../groups/Gui.Gui.md) / TabGroup

# TabGroup<T\> <Badge type="tip" text="Class" /> <Score text="TabGroup<T\>" />

选项卡组

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

## Table of contents

| Accessors |
| :-----|
| **[currentIndex](UI.TabGroup.md#currentindex)**(): `number` <br> 当前选择的标签索引|

| Methods |
| :-----|
| **[init](UI.TabGroup.md#init)**(`tabStyleHandle`: (`btn`: `T`, `isSelect`: `boolean`) => `void`, `selectCallBack`: (`index`: `number`) => `void`, `thisArg`: `any`, `defaultIndex?`: `number`): `void` <br> 初始化|
| **[select](UI.TabGroup.md#select)**(`index`: `number`, `ignoreSame?`: `boolean`): `boolean` <br> 设置当前的标签|
| **[setSelectableChecker](UI.TabGroup.md#setselectablechecker)**(`selectChecker`: (`index`: `number`) => `boolean`, `thisArg`: `any`): `void` <br> 设置该标签是否可以切换的检测方法|

构造

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tabArr` | `T`[] | 标签的按钮数组 |

## Accessors

### currentIndex <Score text="currentIndex" /> 

• `get` **currentIndex**(): `number` <Badge type="tip" text="client" />

当前选择的标签索引


#### Returns

`number`

当前标签

## Methods

### init <Score text="init" /> 

• **init**(`tabStyleHandle`, `selectCallBack`, `thisArg`, `defaultIndex?`): `void` <Badge type="tip" text="client" />

初始化


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tabStyleHandle` | (`btn`: `T`, `isSelect`: `boolean`) => `void` | 设置标签的样式方法（方法参数：按钮） |
| `selectCallBack` | (`index`: `number`) => `void` | 选择标签的回调方法 |
| `thisArg` | `any` | 域 |
| `defaultIndex?` | `number` | 默认选择的标签索引 default:0 |


___

### select <Score text="select" /> 

• **select**(`index`, `ignoreSame?`): `boolean` <Badge type="tip" text="client" />

设置当前的标签


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 标签索引 |
| `ignoreSame?` | `boolean` | 是否忽略相同索引 default:true |

#### Returns

`boolean`

是否成功

___

### setSelectableChecker <Score text="setSelectableChecker" /> 

• **setSelectableChecker**(`selectChecker`, `thisArg`): `void` <Badge type="tip" text="client" />

设置该标签是否可以切换的检测方法


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectChecker` | (`index`: `number`) => `boolean` | 判断方法 |
| `thisArg` | `any` | 域 |

