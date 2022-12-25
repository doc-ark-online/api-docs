[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Util](Util.md) / [Util](Util.Util.md) / StringUtil

# Namespace: StringUtil

[Util](Util.md).[Util](Util.Util.md).StringUtil

**`Author`**

huipeng.jia

**`Description`**

字符串工具

## Table of contents

### Functions

- [clipboardCopy](Util.Util.StringUtil.md#clipboardcopy)
- [clipboardPaste](Util.Util.StringUtil.md#clipboardpaste)
- [format](Util.Util.StringUtil.md#format)
- [isEmpty](Util.Util.StringUtil.md#isempty)

## Functions

### clipboardCopy

▸ **clipboardCopy**(`text`): `void`

**`Description`**

文本复制，将字符串复制到剪切板

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type     | Description              |
| :----- | :------- | :----------------------- |
| `text` | `string` | usage:复制到剪切板的文本 |

#### Returns

`void`

#### Defined in

Util/index.d.ts:570

---

### clipboardPaste

▸ **clipboardPaste**(): `string`

**`Description`**

文本粘贴，获取剪切板的文本

**`Effect`**

只在客户端调用生效

#### Returns

`string`

剪切板的文本

#### Defined in

Util/index.d.ts:576

---

### format

▸ **format**(`str`, `...param`): `string`

**`Description`**

将{i}中的内容依次替换为后续参数。i 从 0 开始，表示第 i+2 个参数，详细请查看使用示例。

**`Effect`**

调用端生效

**`Example`**

使用示例:格式化字符串用法

```
// targetString = "hello world!";
let targetString = Util.StringUtil.format("{0} {1}{2}", "hello", "world", "!");
```

#### Parameters

| Name       | Type     | Description           |
| :--------- | :------- | :-------------------- |
| `str`      | `string` | usage: 要处理的字符串 |
| `...param` | `any`[]  | usage: 替换序列       |

#### Returns

`string`

新的字符串

#### Defined in

Util/index.d.ts:597

---

### isEmpty

▸ **isEmpty**(`str`): `boolean`

**`Description`**

判断字符串是否为空(null 或"")

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description           |
| :---- | :------- | :-------------------- |
| `str` | `string` | usage: 要判断的字符串 |

#### Returns

`boolean`

结果

#### Defined in

Util/index.d.ts:583
