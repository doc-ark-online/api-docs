import{_ as e,c as t,o as a,a as d}from"./app.467bf6bd.js";const m=JSON.parse('{"title":"Interface: IHumanoidV2","description":"","frontmatter":{},"headers":[{"level":2,"title":"Implemented by","slug":"implemented-by","link":"#implemented-by","children":[]},{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"appearanceSync","slug":"appearancesync","link":"#appearancesync","children":[]},{"level":3,"title":"attach","slug":"attach","link":"#attach","children":[]},{"level":3,"title":"changeSomatotype","slug":"changesomatotype","link":"#changesomatotype","children":[]},{"level":3,"title":"clearAppearance","slug":"clearappearance","link":"#clearappearance","children":[]},{"level":3,"title":"detach","slug":"detach","link":"#detach","children":[]},{"level":3,"title":"getGoods","slug":"getgoods","link":"#getgoods","children":[]},{"level":3,"title":"getSlotWorldPosition","slug":"getslotworldposition","link":"#getslotworldposition","children":[]},{"level":3,"title":"getSomatotype","slug":"getsomatotype","link":"#getsomatotype","children":[]},{"level":3,"title":"setAppearanceData","slug":"setappearancedata","link":"#setappearancedata","children":[]},{"level":3,"title":"setSlot","slug":"setslot","link":"#setslot","children":[]},{"level":3,"title":"setSomatotype","slug":"setsomatotype","link":"#setsomatotype","children":[]},{"level":3,"title":"setSuit","slug":"setsuit","link":"#setsuit","children":[]}]}],"relativePath":"interfaces/Gameplay.Gameplay.IHumanoidV2.md"}'),r={name:"interfaces/Gameplay.Gameplay.IHumanoidV2.md"},o=d('<p><a href="./../README.html">auto-mwapi-lib</a> / <a href="./../modules.html">Exports</a> / <a href="./../modules/Gameplay.html">Gameplay</a> / <a href="./../modules/Gameplay.Gameplay.html">Gameplay</a> / IHumanoidV2</p><h1 id="interface-ihumanoidv2" tabindex="-1">Interface: IHumanoidV2 <a class="header-anchor" href="#interface-ihumanoidv2" aria-hidden="true">#</a></h1><p><a href="./../modules/Gameplay.html">Gameplay</a>.<a href="./../modules/Gameplay.Gameplay.html">Gameplay</a>.IHumanoidV2</p><p><strong><code>Description</code></strong></p><p>人形对象 V2 插槽和外形加载</p><p><strong><code>Author</code></strong></p><p>guang.deng</p><h2 id="implemented-by" tabindex="-1">Implemented by <a class="header-anchor" href="#implemented-by" aria-hidden="true">#</a></h2><ul><li><a href="./../classes/Gameplay.Gameplay.HumanoidV2.html"><code>HumanoidV2</code></a></li></ul><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><ul><li><a href="./Gameplay.Gameplay.IHumanoidV2.html#appearancesync">appearanceSync</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2.html#attach">attach</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2.html#changesomatotype">changeSomatotype</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2.html#clearappearance">clearAppearance</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2.html#detach">detach</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2.html#getgoods">getGoods</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2.html#getslotworldposition">getSlotWorldPosition</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2.html#getsomatotype">getSomatotype</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2.html#setappearancedata">setAppearanceData</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2.html#setslot">setSlot</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2.html#setsomatotype">setSomatotype</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2.html#setsuit">setSuit</a></li></ul><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-hidden="true">#</a></h2><h3 id="appearancesync" tabindex="-1">appearanceSync <a class="header-anchor" href="#appearancesync" aria-hidden="true">#</a></h3><p>▸ <strong>appearanceSync</strong>(): <code>void</code></p><p><strong><code>Description</code></strong></p><p>把本地角色形象数据同步到多端</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><p><strong><code>Precautions</code></strong></p><p>不要频繁调用，等本地角色编辑完成后再使用</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:2893</p><hr><h3 id="attach" tabindex="-1">attach <a class="header-anchor" href="#attach" aria-hidden="true">#</a></h3><p>▸ <strong>attach</strong>(<code>gameObject</code>, <code>slotName</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>将物体附着到 V2 人物角色的指定插槽</p><p><strong><code>Effect</code></strong></p><p>双端都可以使用</p><p><strong><code>Precautions</code></strong></p><p>1.只适用于 V2 角色，人形对象</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>gameObject</code></td><td style="text-align:left;"><code>GameObject</code></td><td style="text-align:left;">usage: 被附着的物体</td></tr><tr><td style="text-align:left;"><code>slotName</code></td><td style="text-align:left;"><a href="./../enums/Gameplay.Gameplay.SlotType.html"><code>SlotType</code></a></td><td style="text-align:left;">usage: 插槽名字，被附着到指定的插槽名</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:2839</p><hr><h3 id="changesomatotype" tabindex="-1">changeSomatotype <a class="header-anchor" href="#changesomatotype" aria-hidden="true">#</a></h3><p>▸ <strong>changeSomatotype</strong>(<code>value</code>, <code>sync</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>切换角色主 Mesh</p><p><strong><code>Effect</code></strong></p><p>sync = false:客户端; sync = true:双端</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><a href="./../enums/Gameplay.Gameplay.SomatotypeV2.html"><code>SomatotypeV2</code></a></td><td style="text-align:left;">usage: 主 Mesh 类型：&quot;None&quot;不能作为参数</td></tr><tr><td style="text-align:left;"><code>sync</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">usage:true 同步; false 不同步</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:2862</p><hr><h3 id="clearappearance" tabindex="-1">clearAppearance <a class="header-anchor" href="#clearappearance" aria-hidden="true">#</a></h3><p>▸ <strong>clearAppearance</strong>(): <code>void</code></p><p><strong><code>Description</code></strong></p><p>清空角色形象数据</p><p><strong><code>Effect</code></strong></p><p>双端</p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:2887</p><hr><h3 id="detach" tabindex="-1">detach <a class="header-anchor" href="#detach" aria-hidden="true">#</a></h3><p>▸ <strong>detach</strong>(<code>gameObject</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>将物体从人物身上附着的物品预览插槽中分离</p><p><strong><code>Effect</code></strong></p><p>双端</p><p><strong><code>Precautions</code></strong></p><p>带同步</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>gameObject</code></td><td style="text-align:left;"><code>GameObject</code></td><td style="text-align:left;">usage:物体 GameObject</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:2846</p><hr><h3 id="getgoods" tabindex="-1">getGoods <a class="header-anchor" href="#getgoods" aria-hidden="true">#</a></h3><p>▸ <strong>getGoods</strong>(<code>guid</code>): [<code>string</code>, <code>string</code>][]</p><p><strong><code>Description</code></strong></p><p>获取插槽文件里面的数据，Array&lt;[string, string]&gt;：Array&lt;[物品资源 Id, 插入的插槽名]&gt;</p><p><strong><code>Effect</code></strong></p><p>双端</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>guid</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:Slot Guid</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h4><p>[<code>string</code>, <code>string</code>][]</p><p>插槽数据中物品 Guid 数组</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:2831</p><hr><h3 id="getslotworldposition" tabindex="-1">getSlotWorldPosition <a class="header-anchor" href="#getslotworldposition" aria-hidden="true">#</a></h3><p>▸ <strong>getSlotWorldPosition</strong>(<code>slotName</code>): <a href="./../classes/Type.Type.Vector.html"><code>Vector</code></a></p><p><strong><code>Description</code></strong></p><p>获取 Slot 世界坐标位置,V2 物品预览的插槽使用</p><p><strong><code>Effect</code></strong></p><p>双端</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>slotName</code></td><td style="text-align:left;"><a href="./../enums/Gameplay.Gameplay.SlotType.html"><code>SlotType</code></a></td><td style="text-align:left;">usage:插槽名字</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-hidden="true">#</a></h4><p><a href="./../classes/Type.Type.Vector.html"><code>Vector</code></a></p><p>坐标位置</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:2853</p><hr><h3 id="getsomatotype" tabindex="-1">getSomatotype <a class="header-anchor" href="#getsomatotype" aria-hidden="true">#</a></h3><p>▸ <strong>getSomatotype</strong>(): <a href="./../enums/Gameplay.Gameplay.SomatotypeV2.html"><code>SomatotypeV2</code></a></p><p><strong><code>Description</code></strong></p><p>获取当前的主 Mesh</p><p><strong><code>Effect</code></strong></p><p>双端</p><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-hidden="true">#</a></h4><p><a href="./../enums/Gameplay.Gameplay.SomatotypeV2.html"><code>SomatotypeV2</code></a></p><p>主 Mesh</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:2868</p><hr><h3 id="setappearancedata" tabindex="-1">setAppearanceData <a class="header-anchor" href="#setappearancedata" aria-hidden="true">#</a></h3><p>▸ <strong>setAppearanceData</strong>(<code>guidArray</code>, <code>callback</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>通过 Guid 加载数据另存为角色数据</p><p><strong><code>Effect</code></strong></p><p>双端</p><p><strong><code>Precautions</code></strong></p><p>客户端：如果角色 GUID 没有被预加载，则是异步的，需要再 callback 里再触发下一次加载 。双端：接口数据是叠加的；只有当前端生效，要同步到多端，请调用同步接口；使用前可以使用重置接口清空之前的数据</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>guidArray</code></td><td style="text-align:left;"><code>string</code>[]</td><td style="text-align:left;">usage:换装数据 GuidArray</td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><a href="./../modules/Gameplay.Gameplay.html#emptycallback"><code>EmptyCallback</code></a></td><td style="text-align:left;">usage:加载完成的回调 default:null</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:2882</p><hr><h3 id="setslot" tabindex="-1">setSlot <a class="header-anchor" href="#setslot" aria-hidden="true">#</a></h3><p>▸ <strong>setSlot</strong>(<code>guid</code>, <code>sync</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>通过插槽 Guid 加载数据</p><p><strong><code>Effect</code></strong></p><p>双端</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>guid</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:Slot Guid</td></tr><tr><td style="text-align:left;"><code>sync</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">usage:true 同步; false 不同步</td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:2824</p><hr><h3 id="setsomatotype" tabindex="-1">setSomatotype <a class="header-anchor" href="#setsomatotype" aria-hidden="true">#</a></h3><p>▸ <strong>setSomatotype</strong>(<code>somatotype</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>设置形象(如果没有预加载对应的 GUID，则是异步的,监听 onLoadAppearanceDataAllCompleted 获取加载完成回调)</p><p><strong><code>Effect</code></strong></p><p>客户端</p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>somatotype</code></td><td style="text-align:left;"><a href="./../enums/Gameplay.Gameplay.SomatotypeV2.html"><code>SomatotypeV2</code></a></td><td style="text-align:left;">usage:角色类型</td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:2874</p><hr><h3 id="setsuit" tabindex="-1">setSuit <a class="header-anchor" href="#setsuit" aria-hidden="true">#</a></h3><p>▸ <strong>setSuit</strong>(<code>somatotype</code>, <code>head</code>, <code>upperCloth</code>, <code>lowerCloth</code>, <code>gloves</code>, <code>shoe</code>, <code>frontHair</code>, <code>behindHair</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>加载一套角色数据</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><p><strong><code>Precautions</code></strong></p><p>如果没有预加载对应的 GUID，则是异步的,监听 onLoadAppearanceDataAllCompleted 获取加载完成回调</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>somatotype</code></td><td style="text-align:left;"><a href="./../enums/Gameplay.Gameplay.SomatotypeV2.html"><code>SomatotypeV2</code></a></td><td style="text-align:left;">usage: 主 Mesh 类型：&quot;None&quot;不能作为参数</td></tr><tr><td style="text-align:left;"><code>head</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage: 头部资源的 GUID(MWEditor 左侧资源列表里面的 GUID)</td></tr><tr><td style="text-align:left;"><code>upperCloth</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage: 上衣资源的 GUID(MWEditor 左侧资源列表里面的 GUID)</td></tr><tr><td style="text-align:left;"><code>lowerCloth</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage: 下衣资源的 GUID(MWEditor 左侧资源列表里面的 GUID)</td></tr><tr><td style="text-align:left;"><code>gloves</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage: 手套资源的 GUID(MWEditor 左侧资源列表里面的 GUID)</td></tr><tr><td style="text-align:left;"><code>shoe</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage: 鞋子资源的 GUID(MWEditor 左侧资源列表里面的 GUID)</td></tr><tr><td style="text-align:left;"><code>frontHair</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage: 前发资源的 GUID(MWEditor 左侧资源列表里面的 GUID)</td></tr><tr><td style="text-align:left;"><code>behindHair</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage: 后发资源的 GUID(MWEditor 左侧资源列表里面的 GUID)</td></tr></tbody></table><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:2907</p>',175),l=[o];function n(i,s,c,h,p,g){return a(),t("div",null,l)}const f=e(r,[["render",n]]);export{m as __pageData,f as default};