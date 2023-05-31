[Util](Util.Util.md) / WindowUtil

# WindowUtil <Badge type="tip" text="Namespace" /> <Score text="WindowUtil" />

## Table of contents

| Functions |
| :-----|
| **[getViewportSize](Util.WindowUtil.md#getviewportsize)**(): [`Vector2`](../classes/Type.Vector2.md) <br> 获取屏幕的分辨率大小（不跟随屏幕缩放变化）。|

## Functions

### getViewportSize <Score text="getViewportSize" /> 

• **getViewportSize**(): [`Vector2`](../classes/Type.Vector2.md) <Badge type="tip" text="client" />

获取屏幕的分辨率大小（不跟随屏幕缩放变化）。


使用示例:创建一个名为WindowExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在控制台打印出屏幕的分辨率大小。
```ts
@Core.Class
export default class WindowExample extends Core.Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        if (!SystemUtil.isClient()) return;
        let viewportSize = WindowUtil.getViewportSize();
        console.log(`viewportSize ${viewportSize}`);
// X=1920 Y=1080
    }
}
```

#### Returns

[`Vector2`](../classes/Type.Vector2.md)

返回屏幕的分辨率大小。
