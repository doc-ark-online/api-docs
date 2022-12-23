[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Core](../modules/Core.md) / [Core](../modules/Core.Core.md) / IPropertyOptions

# Interface: IPropertyOptions

[Core](../modules/Core.md).[Core](../modules/Core.Core.md).IPropertyOptions

**`Author`**

孙向坤

**`Description`**

用户属性标记的参数选项

## Table of contents

### Properties

- [arrayDefault](Core.Core.IPropertyOptions.md#arraydefault)
- [asset](Core.Core.IPropertyOptions.md#asset)
- [capture](Core.Core.IPropertyOptions.md#capture)
- [displayName](Core.Core.IPropertyOptions.md#displayname)
- [enumType](Core.Core.IPropertyOptions.md#enumtype)
- [group](Core.Core.IPropertyOptions.md#group)
- [hideInEditor](Core.Core.IPropertyOptions.md#hideineditor)
- [isAsset](Core.Core.IPropertyOptions.md#isasset)
- [multicast](Core.Core.IPropertyOptions.md#multicast)
- [onChanged](Core.Core.IPropertyOptions.md#onchanged)
- [onChangedInEditor](Core.Core.IPropertyOptions.md#onchangedineditor)
- [override](Core.Core.IPropertyOptions.md#override)
- [range](Core.Core.IPropertyOptions.md#range)
- [readonly](Core.Core.IPropertyOptions.md#readonly)
- [replicated](Core.Core.IPropertyOptions.md#replicated)
- [selectOptions](Core.Core.IPropertyOptions.md#selectoptions)
- [tooltip](Core.Core.IPropertyOptions.md#tooltip)

## Properties

### arrayDefault

• `Optional` **arrayDefault**: `unknown`

**`Description`**

数组的默认值

#### Defined in

Core/index.d.ts:772

___

### asset

• `Optional` **asset**: [`AssetType`](../enums/Type.Type.AssetType.md) \| [`AssetType`](../enums/Type.Type.AssetType.md)[]

**`Description`**

是否为资源类型，目前仅支持字符串

#### Defined in

Core/index.d.ts:770

___

### capture

• `Optional` **capture**: `boolean`

**`Description`**

捕获其他属性

#### Defined in

Core/index.d.ts:774

___

### displayName

• `Optional` **displayName**: `string`

**`Description`**

该属性在编辑器中的显示名称，如果不设置则默认为变量名

#### Defined in

Core/index.d.ts:750

___

### enumType

• `Optional` **enumType**: `Object`

**`Description`**

是否为组件

#### Index signature

▪ [key: `string` \| `number`]: `string` \| `number`

#### Defined in

Core/index.d.ts:776

___

### group

• `Optional` **group**: `string`

**`Description`**

组名

#### Defined in

Core/index.d.ts:762

___

### hideInEditor

• `Optional` **hideInEditor**: `boolean`

**`Description`**

是否在编辑器里隐藏

#### Defined in

Core/index.d.ts:764

___

### isAsset

• `Optional` **isAsset**: `boolean`

**`Description`**

是否为资源

#### Defined in

Core/index.d.ts:786

___

### multicast

• `Optional` **multicast**: `boolean`

**`Description`**

是否广播

#### Defined in

Core/index.d.ts:760

___

### onChanged

• `Optional` **onChanged**: `string` \| (`path`: `string`[]) => `void`

**`Description`**

属性同步修改后的回调函数

#### Defined in

Core/index.d.ts:758

___

### onChangedInEditor

• `Optional` **onChangedInEditor**: `string` \| () => `void`

**`Description`**

Editor监听属性变更

#### Defined in

Core/index.d.ts:784

___

### override

• `Optional` **override**: `boolean`

**`Description`**

是否覆盖父类的属性

#### Defined in

Core/index.d.ts:754

___

### range

• `Optional` **range**: [`IRangeOptions`](Core.Core.IRangeOptions.md)

**`Description`**

范围（只有number生效）

#### Defined in

Core/index.d.ts:768

___

### readonly

• `Optional` **readonly**: `boolean`

**`Description`**

是否为只读属性

#### Defined in

Core/index.d.ts:766

___

### replicated

• `Optional` **replicated**: `boolean`

**`Description`**

是否同步

#### Defined in

Core/index.d.ts:756

___

### selectOptions

• `Optional` **selectOptions**: `Object`

**`Description`**

Select Options

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

Core/index.d.ts:780

___

### tooltip

• `Optional` **tooltip**: `string`

**`Description`**

该属性在编辑器中的提示内容

#### Defined in

Core/index.d.ts:752
