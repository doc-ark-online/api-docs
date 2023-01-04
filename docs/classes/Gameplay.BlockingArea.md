[Gameplay](../modules/Gameplay.Gameplay.md) / BlockingArea

# BlockingArea <Badge type="tip" text="Class" />

**`Description`**

禁行区

**`Precautions`**

该对象由服务器生成同步到客户端

**`Example`**

使用示例:请尽量放置在场景中，不要动态生成，不支持重叠使用
```ts
// 不推荐动态生成，不支持重叠使用
```

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`BlockingArea`**

## Table of contents

| Accessors |
| :-----|
| **[playerStateResponse](Gameplay.BlockingArea.md#playerstateresponse)**(): `unknown` <br> 获取玩家是否拥有通过该区域屏障权限的响应回调,结果将赋值到传入的参数|

| Methods |
| :-----|
| **[getCurrentPlayerPassable](Gameplay.BlockingArea.md#getcurrentplayerpassable)**(`number`): `boolean` <br> 获取玩家是否拥有通过该区域屏障权限,结果需要监听getPlayerStateResponse()的返回值|
| **[setBlockAllPlayer](Gameplay.BlockingArea.md#setblockallplayer)**(`boolean`): `boolean` <br> 让该禁行区阻挡所有玩家|
| **[setCurrentPlayerPassable](Gameplay.BlockingArea.md#setcurrentplayerpassable)**(`number`, `boolean`): `void` <br> 设置玩家通过该区域屏障权限|
| **[setNonCharacterActorCanPass](Gameplay.BlockingArea.md#setnoncharacteractorcanpass)**(`any`, `boolean`): `void` <br> 设置非角色Actor的通过权限,是针对目标这一类Actor生效,而非单个对象.注意,这个接口对角色无效|

## Accessors

### playerStateResponse

• `get` **playerStateResponse**(): `unknown`

**`Description`**

获取玩家是否拥有通过该区域屏障权限的响应回调,结果将赋值到传入的参数

**`Effect`**

获取玩家是否能够通过该禁行区的回调对象

**`Example`**

使用示例:简单调用
```ts
BlockArea.getPlayerStateResponse()
```

#### Returns

`unknown`

bool


## Methods

### getCurrentPlayerPassable

▸ **getCurrentPlayerPassable**(`Target`): `boolean`

**`Description`**

获取玩家是否拥有通过该区域屏障权限,结果需要监听getPlayerStateResponse()的返回值

**`Effect`**

获取玩家是否能够通过该禁行区

**`Example`**

使用示例: 简单调用
```ts
BlockArea.getPlayerCanPass(player.getPlayerID())
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Target` | `number` | Guid |

#### Returns

`boolean`

bool


### setBlockAllPlayer

▸ **setBlockAllPlayer**(`BlockAll`): `boolean`

**`Description`**

让该禁行区阻挡所有玩家

**`Effect`**

让该禁行区阻挡所有玩家

**`Example`**

使用示例:让该禁行区阻挡所有玩家
```ts
BlockArea.setBlockAllPlayer()
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `BlockAll` | `boolean` | 设置是否开启阻挡所有玩家 |

#### Returns

`boolean`

bool


### setCurrentPlayerPassable

▸ **setCurrentPlayerPassable**(`Target`, `CanPass`): `void`

**`Description`**

设置玩家通过该区域屏障权限

**`Effect`**

设置玩家通过该区域屏障权限

**`Example`**

使用示例: 简单调用
```ts
BlockArea.setCurrentPlayerPassable(player,true)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Target` | `number` | Guid |
| `CanPass` | `boolean` | 是否通过 |

#### Returns

`void`


### setNonCharacterActorCanPass

▸ **setNonCharacterActorCanPass**(`targetActor`, `canPass`): `void`

**`Description`**

设置非角色Actor的通过权限,是针对目标这一类Actor生效,而非单个对象.注意,这个接口对角色无效

**`Effect`**

设置非角色Actor的通过权限

**`Example`**

使用示例:传递GameObject和bool
```ts
BlockArea.setNonCharacterActorCanPass(GameObject,true)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetActor` | `any` | 目标Actor |
| `canPass` | `boolean` | 是否通过 |

#### Returns

`void`
