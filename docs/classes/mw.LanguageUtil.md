[工具](../groups/工具.工具.md) / LanguageUtil

# LanguageUtil <Badge type="tip" text="Class" /> <Score text="LanguageUtil" />

多语言工具

## Table of contents

### Methods <Score text="Methods" /> 
| **[getLocTextValue](mw.LanguageUtil.md#getloctextvalue)**(`textkey`: `string`): `string`   |
| :-----|
| 根据key获取翻译内容|
| **[locText](mw.LanguageUtil.md#loctext)**(`textkey`: `string`): `string`   |
| 多语言标记|
| **[useLocalizedLanguage](mw.LanguageUtil.md#uselocalizedlanguage)**(`type`: [`LanguageType`](../enums/mw.LanguageType.md)): `boolean`   |
| 游戏语言设置|

## Methods

### getLocTextValue <Score text="getLocTextValue" /> 

• `Static` **getLocTextValue**(`textkey`): `string` 

根据key获取翻译内容

#### Parameters

| `textkey` `string` | 需要查找的翻译的 key range: 不做限制 |
| :------ | :------ |

#### Returns

| `string` | 返回Key对应的当前语言环境的翻译内容 |
| :------ | :------ |

___

### locText <Score text="locText" /> 

• `Static` **locText**(`textkey`): `string` 

多语言标记

#### Parameters

| `textkey` `string` | 用户多语言配置表收集的 Key range: 不做限制 |
| :------ | :------ |

#### Returns

| `string` | 返回Key，此函数只用于做翻译文本收集标识。 |
| :------ | :------ |

___

### useLocalizedLanguage <Score text="useLocalizedLanguage" /> 

• `Static` **useLocalizedLanguage**(`type`): `boolean` 

游戏语言设置

#### Parameters

| `type` [`LanguageType`](../enums/mw.LanguageType.md) | 切换游戏语言种类 |
| :------ | :------ |

#### Returns

| `boolean` | true修改成功 false修改失败 |
| :------ | :------ |
