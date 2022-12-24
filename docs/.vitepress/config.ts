import { defineConfig, DefaultTheme } from "vitepress";
import { pathToSideBar } from "../../utils";

export default defineConfig({
  ignoreDeadLinks: true,
  title: "API",
  description: "口袋方舟 编辑器的 Api 文档",
  themeConfig: {
    algolia: {
      appId: "8J64VVRP8K",
      apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
      indexName: "vitepress",
    },
    siteTitle: "一些自带的Markdown写法",
    nav: [
      {
        text: "020 版本",
        items: [
          { text: "021 预发", link: "/item-1" },
          { text: "019 版本", link: "/item-2" },
          { text: "018 版本", link: "/item-3" },
        ],
      },
      {
        text: "语言",
        items: [
          { text: "中文", link: "/item-1" },
          { text: "英文", link: "/item-2" },
        ],
      },
    ],
    sidebar: [
      {
        text: "示例",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "给用户看的demo", link: "/test/Base" },
          { text: "可用的写法", link: "/test/Class" },
          { text: "可自动化的点", link: "/test/Delegate" },
          { text: "自动化后的demo", link: "/classes/Service.Service.MessageChannelService" },
          { text: "索引的demo", link: "/test/Type" },
          { text: "variable的demo", link: "/test/Variable" },
          { text: "enums的demo", link: "/test/enums" },
          { text: "function的demo", link: "/test/function" },
          { text: "一个空白文档", link: "/test/interface" },
        ],        
      },
            {
        text: "Index",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Base", link: "/test/interface" },
          { text: "Enums", link: "/test/interface" },
          { text: "Class", link: "/test/interface" },
          { text: "Function", link: "/test/interface" },
          { text: "Interface", link: "/test/interface" },
          { text: "Variable", link: "/test/interface" },
        ],        
      },
            {
        text: "Core",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Base", link: "/test/interface" },
          { text: "GameObject", link: "/test/interface" },
          { text: "Iplayer", link: "/test/interface" },
        ],        
      },
            {
        text: "Events",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "EventListener", link: "/test/interface" },
        ],        
      },
            {
        text: "Extension.",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "GoPool", link: "/test/interface" },
          { text: "ObjPool", link: "/test/interface" },
        ],        
      },
            {
        text: "Gameplay",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "AICharacter", link: "/test/interface" },
          { text: "AbilityObject", link: "/test/interface" },
          { text: "AbilityState", link: "/test/interface" },
          { text: "Anchor", link: "/test/interface" },
          { text: "Animation", link: "/test/interface" },
          { text: "AnimationStance", link: "/test/interface" },
          { text: "AssetStance", link: "/test/interface" },
          { text: "BlockingArea", link: "/test/interface" },
          { text: "BlockingAreaManager", link: "/test/interface" },
          { text: "CameraSystem", link: "/test/interface" },
          { text: "Character", link: "/test/interface" },
          { text: "CharacterBase", link: "/test/interface" },
          { text: "ConvertScreenResult", link: "/test/interface" },
          { text: "Decoration", link: "/test/interface" },
          { text: "DirectionalLight", link: "/test/interface" },
          { text: "EffectLogical", link: "/test/interface" },
          { text: "Equipment", link: "/test/interface" },
          { text: "FireDataInfoForMultiple", link: "/test/interface" },
          { text: "HitResult", link: "/test/interface" },
          { text: "HotWeapon", link: "/test/interface" },
          { text: "HotWeaponAccuracyOfFireComponent", link: "/test/interface" },
          { text: "HotWeaponAimComponent", link: "/test/interface" },
          { text: "HotWeaponConfigData", link: "/test/interface" },
          { text: "HotWeaponFireComponent", link: "/test/interface" },
          { text: "HotWeaponLoadComponent", link: "/test/interface" },
          { text: "HotWeaponRecoilForceComponent", link: "/test/interface" },
          { text: "HotWeaponReloadComponent", link: "/test/interface" },
          { text: "HotWeaponSlotOld", link: "/test/interface" },
          { text: "Humanoid", link: "/test/interface" },
          { text: "HumanoidV1", link: "/test/interface" },
          { text: "HumanoidV1Face", link: "/test/interface" },
          { text: "HumanoidV1Hair", link: "/test/interface" },
          { text: "HumanoidV1Trunk", link: "/test/interface" },
          { text: "……", link: "/test/interface" },
        ],        
      },

            {
        text: "Service",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "AccountService", link: "/test/interface" },
          { text: "AdsService", link: "/test/interface" },
          { text: "AnalyticsService", link: "/test/interface" },
          { text: "DebugService", link: "/test/interface" },
          { text: "MessageChannelService", link: "/test/interface" },
          { text: "PurchaseService", link: "/test/interface" },
          { text: "RoomService", link: "/test/interface" },
          { text: "RouteService", link: "/test/interface" },
          { text: "SoundService", link: "/test/interface" },
          { text: "UGCService", link: "/test/interface" },         
        ],        
      },
      
            {
        text: "Index",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Base", link: "/test/interface" },
          { text: "Enums", link: "/test/interface" },
          { text: "Class", link: "/test/interface" },
          { text: "Function", link: "/test/interface" },
          { text: "Interface", link: "/test/interface" },
          { text: "Variable", link: "/test/interface" },
        ],        
      },
      
            {
        text: "Type",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Delegate", link: "/test/interface" },
          { text: "Action", link: "/test/interface" },
          { text: "Action1", link: "/test/interface" },
          { text: "Action2", link: "/test/interface" },
          { text: "Action3", link: "/test/interface" },
          { text: "LinearColor", link: "/test/interface" },
          { text: "Matrix3x3", link: "/test/interface" },
          { text: "Matrix4x4", link: "/test/interface" },
          { text: "MulticastDelegate", link: "/test/interface" },
          { text: "MulticastGameObjectDelegate", link: "/test/interface" },
          { text: "Quaternion", link: "/test/interface" },
          { text: "Rotation", link: "/test/interface" },
          { text: "Transform", link: "/test/interface" },
          { text: "Vector", link: "/test/interface" },
          { text: "Vector2", link: "/test/interface" },
          { text: "Vector4", link: "/test/interface" },
          
        ],        
      },
      
            {
        text: "UI",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "AnalogInputEvent", link: "/test/interface" },
          { text: "AssetIconData", link: "/test/interface" },
          { text: "Button", link: "/test/interface" },
          { text: "Canvas", link: "/test/interface" },
          { text: "CharacterEvent", link: "/test/interface" },
          { text: "ColorPick", link: "/test/interface" },
          { text: "DragDropOperation", link: "/test/interface" },
          { text: "DragDropPayLoad", link: "/test/interface" },
          { text: "EventReply", link: "/test/interface" },
          { text: "FocusEvent", link: "/test/interface" },
          { text: "Geometry", link: "/test/interface" },
          { text: "Image", link: "/test/interface" },
          { text: "InputEvent", link: "/test/interface" },
          { text: "……", link: "/test/interface" },
          
        ],        
      },
      
      ...pathToSideBar(["classes", "enums", "interfaces", "modules"]),
    ],
    editLink: {
      pattern: "https://github.com/Metaworld2021/api-docs/tree/main/docs/:path",
      text: "到 github 上进行修改",
    },
    lastUpdatedText: "Updated Date",
    docFooter: {
      prev: "Pagina prior",
      next: "Proxima pagina",
    },
    outline: [2, 3],
  },
});

function otherSidebar() {
  return [
    {
      text: "自动化生成",
      collapsible: true,
      collapsed: true,
      items: [{ text: "enums", link: "/auto/enums" }],
    },
    {
      text: "Common",
      collapsible: true,
      collapsed: true,
      items: [
        { text: "Delegate", link: "/common/Delegate" },
        { text: "DelegateInterface", link: "/common/DelegateInterface" },
        { text: "MulticastDelegate", link: "/common/MulticastDelegate" },
        {
          text: "MulticastDelegateInterface",
          link: "/common/MulticastDelegateInterface",
        },
      ],
    },
    {
      text: "Core",
      collapsible: true,
      collapsed: true,
      items: [
        { text: "Base", link: "/core" },
        { text: "Game Play", link: "/game-play" },
        { text: "GameObject", link: "/GameObject" },
      ],
    },
    {
      text: "DataStorage",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "Events",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "Extension",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "Gameplay",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "Global",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "GoogleAnalytics",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "KeyboardSimulation",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "MathLibrary",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "MobileEditor",
      collapsible: true,
      collapsed: true,
      items: [],
    },
  ];
}
