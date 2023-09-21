[UI](../groups/Core.UI.md) / TabGroup

# TabGroup<T\> <Badge type="tip" text="Class" /> <Score text="TabGroup<T\>" />

<p class="content-big"> 选项卡组 </p>

## Type parameters

| `T` | extends [`TabGroupOnClickedProps`](../modules/Core.mw.md#tabgrouponclickedprops) |
| :------ | :------ |

## Table of contents

### Constructors <Score text="Constructors" /> 
| **new TabGroup**<`T`: extends [`TabGroupOnClickedProps`](../modules/Core.mw.md#tabgrouponclickedprops)\>(`tabArr`: `T`[])  |
| :----- |

### Accessors <Score text="Accessors" /> 
| **[currentIndex](mw.TabGroup.md#currentindex)**(): `number`  |
| :-----|
| 当前选择的标签索引|

### Methods <Score text="Methods" /> 
| **[init](mw.TabGroup.md#init)**(`tabStyleHandle`: (`btn`: `T`, `isSelect`: `boolean`) => `void`, `selectCallBack`: (`index`: `number`) => `void`, `thisArg`: `any`, `defaultIndex?`: `number`): `void`  |
| :-----|
| 初始化|
| **[select](mw.TabGroup.md#select)**(`index`: `number`, `ignoreSame?`: `boolean`): `boolean`  |
| 设置当前的标签|
| **[setSelectableChecker](mw.TabGroup.md#setselectablechecker)**(`selectChecker`: (`index`: `number`) => `boolean`, `thisArg`: `any`): `void`  |
| 设置该标签是否可以切换的检测方法|

构造

#### Type parameters

| `T` | extends [`TabGroupOnClickedProps`](../modules/Core.mw.md#tabgrouponclickedprops) |
| :------ | :------ |

#### Parameters

| `tabArr` `T`[] | 标签的按钮数组 |
| :------ | :------ |

## Accessors

### currentIndex <Score text="currentIndex" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **currentIndex**(): `number` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


当前选择的标签索引


#### Returns

</td>
</tr></tbody>
</table>

| `number` | 当前标签 |
| :------ | :------ |

## Methods

### init <Score text="init" /> 

• **init**(`tabStyleHandle`, `selectCallBack`, `thisArg`, `defaultIndex?`): `void` <Badge type="tip" text="client" />

初始化

#### Parameters

| `tabStyleHandle` (`btn`: `T`, `isSelect`: `boolean`) => `void` | 设置标签的样式方法（方法参数：按钮） |
| :------ | :------ |
| `selectCallBack` (`index`: `number`) => `void` | 选择标签的回调方法 |
| `thisArg` `any` | 域 |
| `defaultIndex?` `number` | 默认选择的标签索引 default:0 |



___

### select <Score text="select" /> 

• **select**(`index`, `ignoreSame?`): `boolean` <Badge type="tip" text="client" />

设置当前的标签

#### Parameters

| `index` `number` | 标签索引 |
| :------ | :------ |
| `ignoreSame?` `boolean` | 是否忽略相同索引 default:true |

#### Returns

| `boolean` | 是否成功 |
| :------ | :------ |


___

### setSelectableChecker <Score text="setSelectableChecker" /> 

• **setSelectableChecker**(`selectChecker`, `thisArg`): `void` <Badge type="tip" text="client" />

设置该标签是否可以切换的检测方法

#### Parameters

| `selectChecker` (`index`: `number`) => `boolean` | 判断方法 |
| :------ | :------ |
| `thisArg` `any` | 域 |


