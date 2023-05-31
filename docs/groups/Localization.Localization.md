Localization

# Localization <Badge type="tip" text="Groups" /> <Score text="Localization" />

## Table of contents
| Modules Functions |
| :-----|
| **[getDefaultLocale](Localization.Localization.md#getdefaultlocale)**(): `string` <br> 获取默认的语言和地区|
| **[getLocTextValue](Localization.Localization.md#getloctextvalue)**(`textkey`: `string`): `string` <br> 根据key获取翻译内容|
| **[locText](Localization.Localization.md#loctext)**(`textkey`: `string`): `string` <br> 多语言标记|
| **[useLocalizedLanguage](Localization.Localization.md#uselocalizedlanguage)**(`type`: [`LanguageType`](../enums/Type.LanguageType.md)): `boolean` <br> 游戏语言设置|


## Modules Functions


___

### getDefaultLocale <Score text="getDefaultLocale" /> 

• **getDefaultLocale**(): `string` 

获取默认的语言和地区


使用示例:创建一个名为LocaleExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出默认的语言和地区
```ts
@Core.Class
export default class LocaleExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const locale = LocaleUtil.getDefaultLocale();
        console.log(`locale: ${locale}`);
// zh-CN
    }

}
```

#### Returns

`string`

以IETF语言标签表示的字符串包含:ISO 639-1 两位字母语言码 (如, "zh");
可选ISO 15924 四位字母脚本码 (如, "Hans");
___

### getLocTextValue <Score text="getLocTextValue" /> 

• **getLocTextValue**(`textkey`): `string` 

根据key获取翻译内容


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `textkey` | `string` | 需要查找的翻译的key |

#### Returns

`string`

返回Key对应的当前语言环境的翻译内容
___

### locText <Score text="locText" /> 

• **locText**(`textkey`): `string` 

多语言标记


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `textkey` | `string` | 用户多语言配置表收集的Key |

#### Returns

`string`

返回Key，此函数只用于做翻译文本收集标识。
___

### useLocalizedLanguage <Score text="useLocalizedLanguage" /> 

• **useLocalizedLanguage**(`type`): `boolean` 

游戏语言设置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`LanguageType`](../enums/Type.LanguageType.md) | 切换游戏语言种类 |

#### Returns

`boolean`
