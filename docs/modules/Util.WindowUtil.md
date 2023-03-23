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


使用示例:调用方法
```ts
let viewportSize = WindowUtil.getViewportSize();
console.log(`viewportSize ${viewportSize}`);
// X=1920 Y=1080
```

#### Returns

[`Vector2`](../classes/Type.Vector2.md)

返回屏幕的分辨率大小。
