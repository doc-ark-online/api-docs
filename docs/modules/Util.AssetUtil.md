[Util](Util.Util.md) / AssetUtil

# AssetUtil <Badge type="tip" text="Namespace" /> <Score text="AssetUtil" />

## Table of contents

| Functions |
| :-----|
| **[assetLoaded](Util.AssetUtil.md#assetloaded)**(`InAssetId`: `string`): `boolean` <br> 资源是否加载|
| **[asyncDownloadAsset](Util.AssetUtil.md#asyncdownloadasset)**(`InAssetId`: `string`): `Promise`<`boolean`\> <br> 资源下载并加载|

## Functions

### assetLoaded <Score text="assetLoaded" /> 

• **assetLoaded**(`InAssetId`): `boolean` 

资源是否加载


使用示例:创建一个名为AssetExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出7711资源id是否加载的情况，并且会在资源加载完成后在原点处生成一个楼梯
```ts
@Core.Class
export default class AssetExample extends Core.Script {

    protected onStart(): void {
        const cubeAssetId = "7711";
        if (AssetUtil.assetLoaded(cubeAssetId)) {
            console.log("AssetExample: Cube asset is already loaded.");
            let obj = Core.GameObject.spawn({ guid: cubeAssetId });
            obj.worldLocation = new Type.Vector(0, 0, 0);
        } else {
            console.log("AssetExample: Cube asset is not loaded, downloading...");
            AssetUtil.asyncDownloadAsset(cubeAssetId).then(() => {
                let obj = Core.GameObject.spawn({ guid: cubeAssetId });
                obj.worldLocation = new Type.Vector(0, 0, 0);
            });
        }
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetId` | `string` | 资源GUID |

#### Returns

`boolean`

未加载将返回false

___

### asyncDownloadAsset <Score text="asyncDownloadAsset" /> 

• **asyncDownloadAsset**(`InAssetId`): `Promise`<`boolean`\> 

资源下载并加载


使用示例:创建一个名为AssetExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出7711资源id是否加载的情况，并且会在资源加载完成后在原点处生成一个楼梯
```ts
@Core.Class
export default class AssetExample extends Core.Script {

    protected onStart(): void {
        const cubeAssetId = "7711";
        if (AssetUtil.assetLoaded(cubeAssetId)) {
            console.log("AssetExample: Cube asset is already loaded.");
            let obj = Core.GameObject.spawn({ guid: cubeAssetId });
            obj.worldLocation = new Type.Vector(0, 0, 0);
        } else {
            console.log("AssetExample: Cube asset is not loaded, downloading...");
            AssetUtil.asyncDownloadAsset(cubeAssetId).then(() => {
                let obj = Core.GameObject.spawn({ guid: cubeAssetId });
                obj.worldLocation = new Type.Vector(0, 0, 0);
            });
        }
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetId` | `string` | 资源GUID |

#### Returns

`Promise`<`boolean`\>

下载失败将返回false

