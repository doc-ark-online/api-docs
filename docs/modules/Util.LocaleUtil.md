[Util](Util.Util.md) / LocaleUtil

# LocaleUtil <Badge type="tip" text="Namespace" /> <Score text="LocaleUtil" />

## Table of contents

| Functions |
| :-----|
| **[getDefaultLocale](Util.LocaleUtil.md#getdefaultlocale)**(): `string` <br> 获取默认的语言和地区|

## Functions

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
可选ISO 3166-1 国家码 (如, "CN")
