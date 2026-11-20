import type { IconType } from "react-icons";
import { SiAngular, SiBootstrap, SiCss, SiDotnet, SiHtml5, SiJavascript, SiJquery, SiJson } from "react-icons/si";
import {
  TbApi,
  TbArrowsExchange,
  TbBolt,
  TbBrandCSharp,
  TbBraces,
  TbDatabase,
  TbDatabaseCog,
  TbEye,
  TbFunction,
  TbLayoutGrid,
  TbListSearch,
  TbPlugConnected,
  TbRefresh,
  TbServer2,
  TbSql,
  TbStack2,
  TbTable,
  TbTransform,
  TbWorldCode,
} from "react-icons/tb";
import type { SkillKey } from "@/data/profile";

export const skillIcons: Record<SkillKey, IconType> = {
  html: SiHtml5,
  css: SiCss,
  bootstrap: SiBootstrap,
  js: SiJavascript,
  jquery: SiJquery,
  ajax: TbRefresh,
  angular: SiAngular,
  csharp: TbBrandCSharp,
  mvc: TbLayoutGrid,
  core: SiDotnet,
  webforms: TbWorldCode,
  webapi: TbApi,
  adonet: TbDatabaseCog,
  ef: TbStack2,
  linq: TbListSearch,
  sqlserver: TbDatabase,
  sp: TbSql,
  functions: TbFunction,
  views: TbEye,
  indexes: TbTable,
  optimization: TbBolt,
  ddl: TbBraces,
  rest: TbApi,
  soap: TbServer2,
  xmljson: SiJson,
  supplier: TbPlugConnected,
  reqres: TbArrowsExchange,
};

const groupIcons: Record<string, IconType> = {
  frontend: SiAngular,
  backend: SiDotnet,
  database: TbDatabase,
  api: TbTransform,
};

export function getGroupIcon(id: string): IconType {
  return groupIcons[id] ?? TbApi;
}
