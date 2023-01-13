[Util](Util.Util.md) / LanguageUtil

# LanguageUtil <Badge type="tip" text="Namespace" /> <Score text="LanguageUtil" />

## Table of contents

| Functions |
| :-----|
| **[locText](Util.LanguageUtil.md#loctext)**(`string` |): `string` <br> 多语言标记|
| **[useLocalizedLanguage](Util.LanguageUtil.md#uselocalizedlanguage)**([`LanguageType`](../enums/Type.LanguageType.md) |): `boolean` <br> 游戏语言设置|

## Functions

### locText <Score text="locText" /> 

▸ **locText**(`textkey`): `string` <Badge type="tip" text="other" />

多语言标记


#### Parameters

| Name | Type |
| :------ | :------ |
| `textkey` | `string` |

#### Returns

`string`

返回此Key当前语言下对应的翻译，没有翻译则返回Key

___

### useLocalizedLanguage <Score text="useLocalizedLanguage" /> 

▸ **useLocalizedLanguage**(`type`): `boolean` <Badge type="tip" text="other" />

游戏语言设置


#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`LanguageType`](../enums/Type.LanguageType.md) |

#### Returns

`boolean`

true修改成功 false修改失败
