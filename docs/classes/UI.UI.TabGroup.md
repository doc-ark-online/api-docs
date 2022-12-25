[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / TabGroup

# Class: TabGroup<T\>

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).TabGroup

**`Author`**

wei.yang

**`Description`**

选项卡组

**`Network Status`**

usage:客户端

## Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `Object` |

## Table of contents

### Constructors

- [constructor](UI.UI.TabGroup.md#constructor)

### Accessors

- [currentIndex](UI.UI.TabGroup.md#currentindex)

### Methods

- [init](UI.UI.TabGroup.md#init)
- [select](UI.UI.TabGroup.md#select)
- [setSelectableChecker](UI.UI.TabGroup.md#setselectablechecker)

## Constructors

### constructor

• **new TabGroup**<`T`\>(`tabArr`)

构造

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `Object` |

#### Parameters

| Name     | Type  | Description          |
| :------- | :---- | :------------------- |
| `tabArr` | `T`[] | usage:标签的按钮数组 |

#### Defined in

UI/index.d.ts:2245

## Accessors

### currentIndex

• `get` **currentIndex**(): `number`

**`Description`**

当前选择的标签索引

**`Effect`**

只在客户端调用生效

#### Returns

`number`

当前标签

#### Defined in

UI/index.d.ts:2283

## Methods

### init

▸ **init**(`tabStyleHandle`, `selectCallBack`, `thisArg`, `defaultIndex?`): `void`

**`Description`**

初始化

**`Effect`**

只在客户端调用生效

#### Parameters

| Name             | Type                                          | Description                                |
| :--------------- | :-------------------------------------------- | :----------------------------------------- |
| `tabStyleHandle` | (`btn`: `T`, `isSelect`: `boolean`) => `void` | usage:设置标签的样式方法（方法参数：按钮） |
| `selectCallBack` | (`index`: `number`) => `void`                 | usage:选择标签的回调方法                   |
| `thisArg`        | `any`                                         | usage:域                                   |
| `defaultIndex?`  | `number`                                      | usage:默认选择的标签索引 default:0         |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2254

---

### select

▸ **select**(`index`, `ignoreSame?`): `boolean`

**`Description`**

设置当前的标签

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type      | Description                         |
| :------------ | :-------- | :---------------------------------- |
| `index`       | `number`  | usage:标签索引                      |
| `ignoreSame?` | `boolean` | usage:是否忽略相同索引 default:true |

#### Returns

`boolean`

是否成功

#### Defined in

UI/index.d.ts:2277

---

### setSelectableChecker

▸ **setSelectableChecker**(`selectChecker`, `thisArg`): `void`

**`Description`**

设置该标签是否可以切换的检测方法

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type                             | Description    |
| :-------------- | :------------------------------- | :------------- |
| `selectChecker` | (`index`: `number`) => `boolean` | usage:判断方法 |
| `thisArg`       | `any`                            | usage:域       |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2266
