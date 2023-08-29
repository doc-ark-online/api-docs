[GAMEPLAY](../groups/GAMEPLAY.GAMEPLAY.md) / Player

# Player <Badge type="tip" text="Class" /> <Score text="Player" />

角色控制

## Hierarchy

- `IPlayer`

  ↳ **`Player`**

## Table of contents

| Properties |
| :-----|
| **[character](Gameplay.Player.md#character)**: [`Character`](Gameplay.Character.md) <br> 玩家控制的角色|

| Accessors |
| :-----|
| **[customTimeDilation](Gameplay.Player.md#customtimedilation)**(): `number` <br> 获取当前角色对象膨胀时间速度|

| Methods |
| :-----|
| **[addNetworkDisconnectListener](Gameplay.Player.md#addnetworkdisconnectlistener)**(`callback`: () => `void`): `void` <br> 添加网络断开连接时执行的回调函数|
| **[addNetworkReconnectListener](Gameplay.Player.md#addnetworkreconnectlistener)**(`callback`: () => `void`): `void` <br> 添加网络断开连接后恢复网络时执行的回调函数|
| **[getTeamId](Gameplay.Player.md#getteamid)**(): `string` <br> 获取玩家的TeamId|
| **[getUserId](Gameplay.Player.md#getuserid)**(): `string` <br> 获取用户的平台Id，该Id可以作为玩家唯一Id使用。|
| **[ping](Gameplay.Player.md#ping)**(): `number` <br> 当前Player的Ping值(-1时表示获取失败)|
| **[removeNetworkDisconnectListener](Gameplay.Player.md#removenetworkdisconnectlistener)**(`callback`: () => `void`): `void` <br> 移除网络断开连接时执行的回调函数|
| **[removeNetworkReconnectListener](Gameplay.Player.md#removenetworkreconnectlistener)**(`callback`: () => `void`): `void` <br> 移除网络断开连接后恢复网络时执行的回调函数|
| **[setCustomTimeDilation](Gameplay.Player.md#setcustomtimedilation)**(`Time`: `number`): `void` <br> 设置当前角色对象膨胀时间速度说明：对象膨胀速度默认为1，当膨胀时间速度设置小于1时，对象的运行时间会比正常世界的运行时间减慢，膨胀时间速度最小值0.1。|

### character <Score text="character" /> 

• **character**: [`Character`](Gameplay.Character.md)

玩家控制的角色

## Accessors

### customTimeDilation <Score text="customTimeDilation" /> 

• `get` **customTimeDilation**(): `number` 

获取当前角色对象膨胀时间速度


#### Returns

`number`

膨胀时间速度

## Methods

### addNetworkDisconnectListener <Score text="addNetworkDisconnectListener" /> 

• **addNetworkDisconnectListener**(`callback`): `void` <Badge type="tip" text="client" />

添加网络断开连接时执行的回调函数


::: warning Precautions

如果需要删除回调函数，请不要使用Lambda表达式，只对当前player生效

:::

使用示例:调用方法
```ts
Gameplay.asyncGetCurrentPlayer().then((player) => {
    player.addNetworkDisconnectListener(this.testFunction);
});
public testFunction() {
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 需要触发的回调函数 |


___

### addNetworkReconnectListener <Score text="addNetworkReconnectListener" /> 

• **addNetworkReconnectListener**(`callback`): `void` <Badge type="tip" text="client" />

添加网络断开连接后恢复网络时执行的回调函数


::: warning Precautions

如果需要删除回调函数，请不要使用Lambda表达式，只对当前player生效

:::

使用示例:调用方法
```ts
Gameplay.asyncGetCurrentPlayer().then((player) => {
    player.addNetworkReconnectListener(this.testFunction);
});
public testFunction() {
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 需要触发的回调函数 |


___

### getTeamId <Score text="getTeamId" /> 

• **getTeamId**(): `string` 

获取玩家的TeamId


#### Returns

`string`

玩家的TeamId，如不在队伍中，则为空

___

### getUserId <Score text="getUserId" /> 

• **getUserId**(): `string` 

获取用户的平台Id，该Id可以作为玩家唯一Id使用。


#### Returns

`string`

用户平台Id

___

### ping <Score text="ping" /> 

• **ping**(): `number` 

当前Player的Ping值(-1时表示获取失败)


#### Returns

`number`

以毫秒为单位

___

### removeNetworkDisconnectListener <Score text="removeNetworkDisconnectListener" /> 

• **removeNetworkDisconnectListener**(`callback`): `void` <Badge type="tip" text="client" />

移除网络断开连接时执行的回调函数


使用示例:调用方法
```ts
Gameplay.asyncGetCurrentPlayer().then((player) => {
    player.removeNetworkDisconnectListener(this.testFunction);
});
public testFunction() {
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 不需要触发的回调函数 |


___

### removeNetworkReconnectListener <Score text="removeNetworkReconnectListener" /> 

• **removeNetworkReconnectListener**(`callback`): `void` <Badge type="tip" text="client" />

移除网络断开连接后恢复网络时执行的回调函数


使用示例:调用方法
```ts
Gameplay.asyncGetCurrentPlayer().then((player) => {
    player.removeNetworkReconnectListener(this.testFunction);
});
public testFunction() {
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 不需要触发的回调函数 |


___

### setCustomTimeDilation <Score text="setCustomTimeDilation" /> 

• **setCustomTimeDilation**(`Time`): `void` <Badge type="tip" text="other" />

设置当前角色对象膨胀时间速度说明：对象膨胀速度默认为1，当膨胀时间速度设置小于1时，对象的运行时间会比正常世界的运行时间减慢，膨胀时间速度最小值0.1。

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Time` | `number` |  膨胀倍数 |

