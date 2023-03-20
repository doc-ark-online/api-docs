[Util](Util.Util.md) / StringUtil

# StringUtil <Badge type="tip" text="Namespace" /> <Score text="StringUtil" />

字符串工具

## Table of contents

| Type Aliases |
| :-----|
| **[maskWordCheckResult](Util.StringUtil.md#maskwordcheckresult)**: `Object` <br> 屏蔽字检测的结果|

| Functions |
| :-----|
| **[clipboardCopy](Util.StringUtil.md#clipboardcopy)**(`text`: `string`): `void` <br> 文本复制，将字符串复制到剪切板|
| **[clipboardPaste](Util.StringUtil.md#clipboardpaste)**(): `string` <br> 文本粘贴，获取剪切板的文本|
| **[format](Util.StringUtil.md#format)**(`str`: `string`, `...param`: `any`[]): `string` <br> 将`{i}`中的内容依次替换为后续参数。i从0开始，表示第i+2个参数，详细请查看使用示例。|
| **[isEmpty](Util.StringUtil.md#isempty)**(`str`: `string`): `boolean` <br> 判断字符串是否为空(null或"")|
| **[maskWordCheck](Util.StringUtil.md#maskwordcheck)**(`text`: `string`): `Promise`<[`[maskWordCheck](Util.StringUtil.md#maskwordcheck)Result`](Util.StringUtil.md#maskwordcheckresult)\> <br> 屏蔽字检测|

## Type Aliases

### maskWordCheckResult <Score text="maskWordCheckResult" /> 

Ƭ **maskWordCheckResult**: `Object`

屏蔽字检测的结果

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `hits` | `string`[] | 命中的文本，如果通过检测则为空 |
| `result` | `boolean` | 是否通过，true - 通过、false - 不通过 |

## Functions

### clipboardCopy <Score text="clipboardCopy" /> 

• **clipboardCopy**(`text`): `void` <Badge type="tip" text="client" />

文本复制，将字符串复制到剪切板


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | 复制到剪切板的文本 |


• **clipboardCopy**(`text`): `void`

文本复制，将字符串复制到剪切板

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | 复制到剪切板的文本 |


• **clipboardCopy**(`text`): `void`

文本复制，将字符串复制到剪切板

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | 复制到剪切板的文本 |


• **clipboardCopy**(`text`): `void`

文本复制，将字符串复制到剪切板

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | 复制到剪切板的文本 |


___

### clipboardPaste <Score text="clipboardPaste" /> 

• **clipboardPaste**(): `string` <Badge type="tip" text="client" />

文本粘贴，获取剪切板的文本


#### Returns

`string`

剪切板的文本

• **clipboardPaste**(): `string`

文本粘贴，获取剪切板的文本

**`Effect`**


#### Returns

`string`

剪切板的文本

• **clipboardPaste**(): `string`

文本粘贴，获取剪切板的文本

**`Effect`**


#### Returns

`string`

剪切板的文本

• **clipboardPaste**(): `string`

文本粘贴，获取剪切板的文本

**`Effect`**


#### Returns

`string`

剪切板的文本

___

### format <Score text="format" /> 

• **format**(`str`, `...param`): `string` 

将`{i}`中的内容依次替换为后续参数。i从0开始，表示第i+2个参数，详细请查看使用示例。


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

• **format**(`str`, `...param`): `string`

将`{i}`中的内容依次替换为后续参数。i从0开始，表示第i+2个参数，详细请查看使用示例。

**`Effect`**


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

• **format**(`str`, `...param`): `string`

将`{i}`中的内容依次替换为后续参数。i从0开始，表示第i+2个参数，详细请查看使用示例。

**`Effect`**


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

• **format**(`str`, `...param`): `string`

将`{i}`中的内容依次替换为后续参数。i从0开始，表示第i+2个参数，详细请查看使用示例。

**`Effect`**


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

• **isEmpty**(`str`): `boolean` 

判断字符串是否为空(null或"")


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` |  要判断的字符串 |

#### Returns

`boolean`

结果

• **isEmpty**(`str`): `boolean`

判断字符串是否为空(null或"")

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` |  要判断的字符串 |

#### Returns

`boolean`

结果

• **isEmpty**(`str`): `boolean`

判断字符串是否为空(null或"")

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` |  要判断的字符串 |

#### Returns

`boolean`

结果

• **isEmpty**(`str`): `boolean`

判断字符串是否为空(null或"")

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` |  要判断的字符串 |

#### Returns

`boolean`

结果

___

### maskWordCheck <Score text="maskWordCheck" /> 

• **maskWordCheck**(`text`): `Promise`<[`maskWordCheckResult`](Util.StringUtil.md#maskwordcheckresult)\> 

屏蔽字检测


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  要检测的文本 |

#### Returns

`Promise`<[`maskWordCheckResult`](Util.StringUtil.md#maskwordcheckresult)\>

检测结果回调

• **maskWordCheck**(`text`): `Promise`<[`maskWordCheckResult`](Util.StringUtil.md#maskwordcheckresult)\>

屏蔽字检测

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  要检测的文本 |

#### Returns

`Promise`<[`maskWordCheckResult`](Util.StringUtil.md#maskwordcheckresult)\>

检测结果回调

• **maskWordCheck**(`text`): `Promise`<[`maskWordCheckResult`](Util.StringUtil.md#maskwordcheckresult)\>

屏蔽字检测

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  要检测的文本 |

#### Returns

`Promise`<[`maskWordCheckResult`](Util.StringUtil.md#maskwordcheckresult)\>

检测结果回调

• **maskWordCheck**(`text`): `Promise`<[`maskWordCheckResult`](Util.StringUtil.md#maskwordcheckresult)\>

屏蔽字检测

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  要检测的文本 |

#### Returns

`Promise`<[`maskWordCheckResult`](Util.StringUtil.md#maskwordcheckresult)\>

检测结果回调
