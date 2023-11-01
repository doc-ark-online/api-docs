[UTILITY](../groups/UTILITY.UTILITY.md) / AssetUtil

# AssetUtil <Badge type="tip" text="Class" /> <Score text="AssetUtil" />

资源管理工具

在使用左侧工具栏中的资源时，需要预先下载并加载。

可使用asyncDownloadAsset接口在代码中动态下载对应资源。也可将资源手动拖入编辑器右边优先加载队列中。

## Table of contents

### Methods <Score text="Methods" /> 
| **[assetLoaded](mw.AssetUtil.md#assetloaded)**(`InAssetId`: `string`): `boolean`  |
| :-----|
| 资源是否加载|
| **[asyncDownloadAsset](mw.AssetUtil.md#asyncdownloadasset)**(`InAssetId`: `string`): `Promise`<`boolean`\>  |
| 资源下载并加载|

## Methods

### assetLoaded <Score text="assetLoaded" /> 

• `Static` **assetLoaded**(`InAssetId`): `boolean` 

资源是否加载

#### Parameters

| `InAssetId` `string` | 资源GUID |
| :------ | :------ |

#### Returns

| `boolean` | 未加载将返回false |
| :------ | :------ |


<span style="font-size: 14px;">

使用示例:创建一个名为AssetExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出7711资源id是否加载的情况，并且会在资源加载完成后在原点处生成一个楼梯

</span>

```ts
@Component
export default class AssetExample extends Script {

    protected onStart(): void {
        const cubeAssetId = "7711";
        if (AssetUtil.assetLoaded(cubeAssetId)) {
            console.log("AssetExample: Cube asset is already loaded.");
            let obj = GameObject.spawn({ guid: cubeAssetId });
            obj.worldTransform.position = new Vector(0, 0, 0);
        } else {
            console.log("AssetExample: Cube asset is not loaded, downloading...");
            AssetUtil.asyncDownloadAsset(cubeAssetId).then(() => {
                let obj = GameObject.spawn({ guid: cubeAssetId });
                obj.worldTransform.position = new Vector(0, 0, 0);
            });
        }
    }
}
```

___

### asyncDownloadAsset <Score text="asyncDownloadAsset" /> 

• `Static` **asyncDownloadAsset**(`InAssetId`): `Promise`<`boolean`\> 

资源下载并加载

#### Parameters

| `InAssetId` `string` | 资源GUID |
| :------ | :------ |

#### Returns

| `Promise`<`boolean`\> | 下载失败将返回false |
| :------ | :------ |


<span style="font-size: 14px;">

使用示例:创建一个名为AssetExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出7711资源id是否加载的情况，并且会在资源加载完成后在原点处生成一个楼梯

</span>

```ts
@Component
export default class AssetExample extends Script {

    protected onStart(): void {
        const cubeAssetId = "7711";
        if (AssetUtil.assetLoaded(cubeAssetId)) {
            console.log("AssetExample: Cube asset is already loaded.");
            let obj = GameObject.spawn({ guid: cubeAssetId });
            obj.worldTransform.position = new Vector(0, 0, 0);
        } else {
            console.log("AssetExample: Cube asset is not loaded, downloading...");
            AssetUtil.asyncDownloadAsset(cubeAssetId).then(() => {
                let obj = GameObject.spawn({ guid: cubeAssetId });
                obj.worldTransform.position = new Vector(0, 0, 0);
            });
        }
    }
}
```
