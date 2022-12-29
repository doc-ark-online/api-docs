[Util](Util.Util.md) / StringUtil

# StringUtil <Badge type="tip" text="Namespace" />

**`Description`**

字符串工具

## Table of contents

| Functions                                                                                                                                                            |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[clipboardCopy](Util.Util.StringUtil.md#clipboardcopy)**(`string`): `void` <br> 文本复制，将字符串复制到剪切板                                                     |
| **[clipboardPaste](Util.Util.StringUtil.md#clipboardpaste)**(): `string` <br> 文本粘贴，获取剪切板的文本                                                             |
| **[format](Util.Util.StringUtil.md#format)**(`string`, `any`[]): `string` <br> 将{i}中的内容依次替换为后续参数。i 从 0 开始，表示第 i+2 个参数，详细请查看使用示例。 |
| **[isEmpty](Util.Util.StringUtil.md#isempty)**(`string`): `boolean` <br> 判断字符串是否为空(null 或"")                                                               |

## Functions

### clipboardCopy

▸ **clipboardCopy**(`text`): `void`

**`Description`**

文本复制，将字符串复制到剪切板

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type     | Description        |
| :----- | :------- | :----------------- |
| `text` | `string` | 复制到剪切板的文本 |

#### Returns

`void`

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

---

### format

▸ **format**(`str`, `...param`): `string`

**`Description`**

将{i}中的内容依次替换为后续参数。i 从 0 开始，表示第 i+2 个参数，详细请查看使用示例。

**`Effect`**

调用端生效

**`Example`**

使用示例:格式化字符串用法

```ts
// targetString = "hello world!";
let targetString = Util.StringUtil.format("{0} {1}{2}", "hello", "world", "!");
```

#### Parameters

| Name       | Type     | Description    |
| :--------- | :------- | :------------- |
| `str`      | `string` | 要处理的字符串 |
| `...param` | `any`[]  | 替换序列       |

#### Returns

`string`

新的字符串

---

### isEmpty

▸ **isEmpty**(`str`): `boolean`

**`Description`**

判断字符串是否为空(null 或"")

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description    |
| :---- | :------- | :------------- |
| `str` | `string` | 要判断的字符串 |

#### Returns

`boolean`

结果
