[工具](../groups/工具.工具.md) / DataFile

# DataFile <Badge type="tip" text="Class" /> <Score text="DataFile" />

数据文件获取工具

## Table of contents

### Methods <Score text="Methods" /> 
| **[DirectoryExists](mw.DataFile.md#directoryexists)**(`directoryRelativePath`: `string`): `boolean`   |
| :-----|
| 查询指定目录是否存在|
| **[asyncLoad](mw.DataFile.md#asyncload)**(`fileName`: `string`): `Promise`<`string`\>   |
| 读取配置|
| **[exists](mw.DataFile.md#exists)**(`fileName`: `string`): `boolean`   |
| 判断配置是否存在|
| **[findDataFiles](mw.DataFile.md#finddatafiles)**(`fileNames`: `string`[], `directoryNames`: `string`[], `targetDirectoryRelativePath`: `string`): `boolean`   |
| 获取指定目录下所有文件夹和.data文件|

## Methods

### DirectoryExists <Score text="DirectoryExists" /> 

• `Static` **DirectoryExists**(`directoryRelativePath`): `boolean` 

查询指定目录是否存在

#### Parameters

| `directoryRelativePath` `string` |  要查找的目录于DataFile目录的相对路径(若为空则查找DataFile目录) range: 有效目录路径,末尾带‘/’与否皆可 |
| :------ | :------ |

#### Returns

| `boolean` | 目标目录是否存在 |
| :------ | :------ |

___

### asyncLoad <Score text="asyncLoad" /> 

• `Static` **asyncLoad**(`fileName`): `Promise`<`string`\> 

读取配置

#### Parameters

| `fileName` `string` |  配置文件的文件名 range: 依据文件名长度而定 |
| :------ | :------ |

#### Returns

| `Promise`<`string`\> | 配置内容 |
| :------ | :------ |

::: warning Precautions

配置文件不存在或文件名不合法将返回空字符串

:::

<span style="font-size: 14px;">
使用示例:创建一个名为"DataFileExample"的脚本，并挂载到一个物体上。代码如下：
</span>

```ts
@Component
export default class DataFileExample extends Script {
    protected async onStart(): Promise<void> {
        let data = await DataFile.asyncLoad("level2_3");
        console.log(`data: ${data}`);
    }
}
```

___

### exists <Score text="exists" /> 

• `Static` **exists**(`fileName`): `boolean` 

判断配置是否存在

#### Parameters

| `fileName` `string` |  配置文件的文件名 range: 依据文件名长度而定 |
| :------ | :------ |

#### Returns

| `boolean` | 配置是否存在 |
| :------ | :------ |

::: warning Precautions

文件名不合法将返回false，文件名称要求为a-z、A-Z、0-9、_

:::

<span style="font-size: 14px;">
使用示例:创建一个名为"DataFileExample"的脚本，并挂载到一个物体上。代码如下：
</span>

```ts
@Component
export default class DataFileExample extends Script {
    protected onStart(): void {
        let exists = DataFile.exist("level2_3");
        console.log(`exists: ${exists}`);
    }
}
```

___

### findDataFiles <Score text="findDataFiles" /> 

• `Static` **findDataFiles**(`fileNames`, `directoryNames`, `targetDirectoryRelativePath`): `boolean` 

获取指定目录下所有文件夹和.data文件

#### Parameters

| `fileNames` `string`[] |  存储.data文件的数组 default: undefined |
| :------ | :------ |
| `directoryNames` `string`[] |  存储文件夹的数组 default: undefined |
| `targetDirectoryRelativePath` `string` |  要查找的目录于DataFile目录的相对路径(若为空则查找DataFile目录) default: undefined range: 有效目录路径,末尾带‘/’与否皆可 |

#### Returns

| `boolean` | 目标目录是否存在 |
| :------ | :------ |

::: warning Precautions

指定目录不存在会返回false
