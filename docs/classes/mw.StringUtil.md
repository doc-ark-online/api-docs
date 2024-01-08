[工具](../groups/工具.工具.md) / StringUtil

# StringUtil <Badge type="tip" text="Class" /> <Score text="StringUtil" />

字符串工具

## Table of contents

### Methods <Score text="Methods" /> 
| **[clipboardCopy](mw.StringUtil.md#clipboardcopy)**(`text`: `string`): `void` <Badge type="tip" text="client" />  |
| :-----|
| 文本复制|
| **[clipboardPaste](mw.StringUtil.md#clipboardpaste)**(): `string` <Badge type="tip" text="client" />  |
| 文本粘贴，获取剪切板的文本|
| **[format](mw.StringUtil.md#format)**(`str`: `string`, `...param`: `any`[]): `string`   |
| 将`{i}`中的内容依次替换为后续参数。i从0开始，表示第i+2个参数，详细请查看使用示例。|
| **[isEmpty](mw.StringUtil.md#isempty)**(`str`: `string`): `boolean`   |
| 判断字符串是否为空 (null或"")|
| **[maskWordCheck](mw.StringUtil.md#maskwordcheck)**(`text`: `string`): `Promise`<[`[maskWordCheck](mw.StringUtil.md#maskwordcheck)Result`](../modules/Core.mw.md#maskwordcheckresult)\>   |
| 屏蔽字检测|

## Methods

### clipboardCopy <Score text="clipboardCopy" /> 

• `Static` **clipboardCopy**(`text`): `void` <Badge type="tip" text="client" />

文本复制

#### Parameters

| `text` `string` | 复制到剪切板的文本  <br> range: 无限制 |
| :------ | :------ |


将字符串复制到剪切板

<span style="font-size: 14px;">
使用示例:创建一个名为StringExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将hello world!文本复制到剪切板，此时可以在其他地方粘贴
</span>

```ts
@Component
export default class StringExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        StringUtil.clipboardCopy("hello world!");
    }

}
```

___

### clipboardPaste <Score text="clipboardPaste" /> 

• `Static` **clipboardPaste**(): `string` <Badge type="tip" text="client" />

文本粘贴，获取剪切板的文本

#### Returns

| `string` | 剪切板的文本 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为StringExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将剪切板的文本打印到控制台
</span>

```ts
@Component
export default class StringExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        let text = StringUtil.clipboardPaste();
        console.log("clipboardPaste", text);
    }

}
```

___

### format <Score text="format" /> 

• `Static` **format**(`str`, `...param`): `string` 

将`{i}`中的内容依次替换为后续参数。i从0开始，表示第i+2个参数，详细请查看使用示例。

#### Parameters

| `str` `string` |  要处理的字符串<br> range: 不做限制 |
| :------ | :------ |
| `...param` `any`[] |  替换序列 |

#### Returns

| `string` | 新的字符串 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为StringExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会输出hello world!
</span>

```ts
@Component
export default class StringExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        let targetString = StringUtil.format("{0} {1}{2}", "hello", "world", "!");
        console.log(targetString);
    }

}
```

___

### isEmpty <Score text="isEmpty" /> 

• `Static` **isEmpty**(`str`): `boolean` 

判断字符串是否为空 (null或"")

#### Parameters

| `str` `string` |  要判断的字符串<br> range: 不做限制 |
| :------ | :------ |

#### Returns

| `boolean` | 结果 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为StringExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会输出isEmpty1: false
</span>

```ts
@Component
export default class StringExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        let isEmpty1 = StringUtil.isEmpty("hello world!");
        console.log("isEmpty1: " + isEmpty1);
    }

}
```

___

### maskWordCheck <Score text="maskWordCheck" /> 

• `Static` **maskWordCheck**(`text`): `Promise`<[`maskWordCheckResult`](../modules/Core.mw.md#maskwordcheckresult)\> 

屏蔽字检测

#### Parameters

| `text` `string` |  要检测的文本<br> range: 不做限制 |
| :------ | :------ |

#### Returns

| `Promise`<[`maskWordCheckResult`](../modules/Core.mw.md#maskwordcheckresult)\> | 检测结果回调 |
| :------ | :------ |

::: warning Precautions

接口中遇到异常情况会返回 reject，使用该接口需要用 catch 处理这种异常情况

:::

<span style="font-size: 14px;">
使用示例:创建一个名为StringExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会输出屏蔽字检测不通过
</span>

```ts
@Component
export default class StringExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        StringUtil.maskWordCheck("自杀之王").then(result => {
            if (!result.result) {
                console.log("屏蔽字检测不通过");
                console.log("命中的文本：" + result.hits);
            }
        }).catch(error => {
            console.log("屏蔽字检测出错");
            console.log(error);
        });
    }

}
```
