[Util](Util.Util.md) / StringUtil

# StringUtil <Badge type="tip" text="Namespace" /> <Score text="StringUtil" />

字符串工具

## Table of contents

| Type Aliases |
| :-----|
| **[maskWordCheckResult](Util.StringUtil.md#maskwordcheckresult)**: `Object` <br> 屏蔽字检测的结果|

| Functions |
| :-----|
| **[clipboardCopy](Util.StringUtil.md#clipboardcopy)**(`string`): `void` <br> 文本复制，将字符串复制到剪切板|
| **[clipboardPaste](Util.StringUtil.md#clipboardpaste)**(): `string` <br> 文本粘贴，获取剪切板的文本|
| **[format](Util.StringUtil.md#format)**(`string`, `any`[]): `string` <br> 将`{i}`中的内容依次替换为后续参数。i从0开始，表示第i+2个参数，详细请查看使用示例。|
| **[isEmpty](Util.StringUtil.md#isempty)**(`string`): `boolean` <br> 判断字符串是否为空(null或"")|
| **[maskWordCheck](Util.StringUtil.md#maskwordcheck)**(`string`): `Promise`<[`[maskWordCheck](Util.StringUtil.md#maskwordcheck)Result`](Util.StringUtil.md#maskwordcheckresult)\> <br> 屏蔽字检测|

## Type Aliases

### maskWordCheckResult <Score text="maskWordCheckResult" /> 

Ƭ **maskWordCheckResult**: `Object`

屏蔽字检测的结果

**`Groups`**

UTILITY

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `hits` | `string`[] | 命中的文本，如果通过检测则为空 |
| `result` | `boolean` | 是否通过，true - 通过、false - 不通过 |

## Functions

### clipboardCopy <Score text="clipboardCopy" /> 

• **clipboardCopy**(`text`): `void` <Badge type="tip" text="other" />

文本复制，将字符串复制到剪切板

**`Groups`**

UTILITY


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | 复制到剪切板的文本 |


___

### clipboardPaste <Score text="clipboardPaste" /> 

• **clipboardPaste**(): `string` <Badge type="tip" text="other" />

文本粘贴，获取剪切板的文本

**`Groups`**

UTILITY


#### Returns

`string`

剪切板的文本

___

### format <Score text="format" /> 

• **format**(`str`, `...param`): `string` <Badge type="tip" text="other" />

将`{i}`中的内容依次替换为后续参数。i从0开始，表示第i+2个参数，详细请查看使用示例。

**`Groups`**

UTILITY


使用示例:格式化字符串用法
```ts
// targetString = "hello world!";
let targetString = Util.StringUtil.format("{0} {1}{2}", "hello", "world", "!");
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` |  要处理的字符串 |
| `...param` | `any`[] |  替换序列 |

#### Returns

`string`

新的字符串

___

### isEmpty <Score text="isEmpty" /> 

• **isEmpty**(`str`): `boolean` <Badge type="tip" text="other" />

判断字符串是否为空(null或"")

**`Groups`**

UTILITY


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` |  要判断的字符串 |

#### Returns

`boolean`

结果

___

### maskWordCheck <Score text="maskWordCheck" /> 

• **maskWordCheck**(`text`): `Promise`<[`maskWordCheckResult`](Util.StringUtil.md#maskwordcheckresult)\> <Badge type="tip" text="other" />

屏蔽字检测

**`Groups`**

UTILITY


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  要检测的文本 |

#### Returns

`Promise`<[`maskWordCheckResult`](Util.StringUtil.md#maskwordcheckresult)\>

检测结果回调
