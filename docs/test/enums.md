# 枚举

用于定义一些常见的状态或者是常用的值

## DataStorageResultCode

```ts
enum DataStorageResultCode {
  /** 操作成功 */
  Sucess = 200,
  /** 未知错误失败 */
  Failure = 400,
  /** 数据保存失败：文件大小过大 */
  ExceededSizeLimit = 2,
  /** 非法调用 只可服务器端调用 */
  OnlyServerCall = 3,
  /** 请求间隔错误 */
  RequestInteralTooClose = 423,
  /** 请求频率过高 */
  RequestTooFrequent = 424,
  /** key或者Value格式错误 */
  KeyValueError = 1010,
}
```

## BALL

球相关的默认值

```typescript
enum BALL {
  /** 篮球 */
  basketball,
  /** 足球 */
  football,
  /** 乒乓球 */
  tableTennis,
  /** 羽毛球 */
  badminton,
}
```

## Colors

颜色相关的默认值

```typescript
enum Colors {
  /** 红色 */
  red,
  /** 黄色 */
  yellow,
  /** 绿色 */
  green,
  /** 蓝色 */
  blue,
}
```

## 其他乱七八糟的

```typescript
enum BALL {
  /** 红色 */
  red,
  /** 黄色 */
  yellow,
  /** 绿色 */
  green,
  /** 蓝色 */
  blue,
}
```
