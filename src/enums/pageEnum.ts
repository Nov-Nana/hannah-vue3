import { ResultEnum } from './httpEnum'

export enum ChartEnum {
  // 图表创建
  CHART_HOME = '/chart/home/:id(.*)*',
  CHART_HOME_NAME = 'ChartHome',
}

export enum PreviewEnum {
  //  图表预览
  CHART_PREVIEW = '/chart/preview/:id(.*)*',
  CHART_PREVIEW_NAME = 'ChartPreview',
}

export enum EditEnum {
  //  图表JSON编辑
  CHART_EDIT = '/chart/edit/:id(.*)*',
  CHART_EDIT_NAME = 'ChartEdit',
}

export enum PageEnum {
  // 登录
  BASE_LOGIN = '/login',
  BASE_LOGIN_NAME = 'Login',

  //重定向
  REDIRECT = '/redirect',
  REDIRECT_NAME = 'Redirect',
  RELOAD = '/reload',
  RELOAD_NAME = 'Reload',

  // 首页
  BASE_HOME = '/home',
  BASE_HOME_NAME = 'Home',

  // 错误
  ERROR_PAGE_NAME_403 = 'ErrorPage403',
  ERROR_PAGE_NAME_404 = 'ErrorPage404',
  ERROR_PAGE_NAME_500 = 'ErrorPage500',
  
  // -----项目-----

  // 测试
  PROJECT_TEST = '/test',
  PROJECT_TEST_NAME = 'Test',
  
  // 后台管理项目
  PROJECT_ADMIN = '/admin',
  PROJECT_ADMIN_NAME = 'Admin',
  ADMIN_DASHBOARD = '/admin/dashboard', // 主页
  ADMIN_DASHBOARD_NAME = 'AdminDashboard', 
  
  ADMIN_COMPONENTS_DEMO = '/components', // 组件demo
  ADMIN_COMPONENTS_DEMO_NAME = 'AdminComponents',
  ADMIN_COMPONENTS_TINYCME = '/components/tinymce', // 富文本编辑器
  ADMIN_COMPONENTS_TINYCME_NAME = 'ComponentsTinyMce', 
  ADMIN_COMPONENTS_MARKDOWN = '/components/markdown', // markdown
  ADMIN_COMPONENTS_MARKDOWN_NAME = 'ComponentsMarkdown',
  ADMIN_COMPONENTS_SCROLLING = '/components/scrolling',
  ADMIN_COMPONENTS_SCROLLING_NAME = 'ComponentsScrolling',

  // excel
  PROJECT_EXCEL = '/admin/excel', // EXCEL
  PROJECT_EXCEL_NAME = 'AdminExcel',
  EXCEL_EXPORT = '/admin/exportExcel',
  EXCEL_EXPORT_NAME = 'AdminExportExcel',
  EXCEL_EXPORT_SELECT = '/admin/selectExcel',
  EXCEL_EXPORT_SELECT_NAME = 'AdminSelectExcel',
  EXCEL_EXPORT_MERGE = '/admin/mergeExcel',
  EXCEL_EXPORT_MERGE_NAME = 'AdminMergeExcel',
  EXCEL_UPLOAD = '/admin/importExce;',
  EXCEL_UPLOAD_NAME = 'AdminImportExcel',

  // table
  PROJECT_TABLE = '/admin/table',
  PROJECT_TABLE_NAME = 'AdminTable',
  TABLE_DRAG = '/admin/draggableTabel',
  TABLE_DRAG_NAME = 'DraggableTable',

  
  
  // 音乐
  PROJECT_MUSIC = '/music',
  PROJECT_MUSIC_NAME = 'ProjectMusic',
  // 发现音乐
  MUSIC_HOME= '/music/home',
  MUSIC_HOME_NAME = 'MuiscHome',
  // 个性推荐
  MUSIC_RECOMMEND = '/music/recommend',
  MUSIC_RECOMMEND_NAME = 'MusicRecommend',
  // 歌单
  MUSIC_SONGLIST = '/music/songlist',
  MUSIC_SONGLIST_NAME = 'MusicSongList',
  // 精品歌单
  MUSIC_QUALITYSONGLIST = '/music/qualityonglist',
  MUSIC_QUALITYSONGLIST_NAME = 'MusicQualitySongList',
  // 歌单详情
  MUSIC_SONGLIST_DETAIL = '/music/songlistdetail',
  MUSIC_SONGLIST_DETAIL_NAME = 'MusicSongListDetail',
  // 搜索列表
  MUISC_SEARCH = '/music/search',
  MUISC_SEARCH_NAME = 'MusicSearch',
  

}

export const ErrorPageNameMap = new Map([
  [ResultEnum.NOT_FOUND, PageEnum.ERROR_PAGE_NAME_404],
  [ResultEnum.SERVER_FORBIDDEN, PageEnum.ERROR_PAGE_NAME_403],
  [ResultEnum.SERVER_ERROR, PageEnum.ERROR_PAGE_NAME_500]
])
