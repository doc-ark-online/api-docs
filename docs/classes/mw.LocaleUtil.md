[工具](../groups/工具.工具.md) / LocaleUtil

# LocaleUtil <Badge type="tip" text="Class" /> <Score text="LocaleUtil" />

本地化工具

## Table of contents

### Methods <Score text="Methods" /> 
| **[getDefaultLocale](mw.LocaleUtil.md#getdefaultlocale)**(): `string`   |
| :-----|
| 获取默认的语言和地区|

## Methods

### getDefaultLocale <Score text="getDefaultLocale" /> 

• `Static` **getDefaultLocale**(): `string` 

获取默认的语言和地区

#### Returns

| `string` | 可选ISO 3166-1 国家码 (如, "CN") |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为LocaleExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出默认的语言和地区
</span>

```ts
@Component
export default class LocaleExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        const locale = LocaleUtil.getDefaultLocale();
        console.log(`locale: ${locale}`);
// zh-CN
    }
}
```
