import type { Metadata } from "next";
import HomePage from "@/app/page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata(
    "周梓洋 · UBC 统计学与机器学习",
    "周梓洋（Ziyang Zhou），英属哥伦比亚大学 UBC 统计学大四本科生，专注机器学习、特征工程、预测建模与模型验证。了解精选 ML 项目、AI 应用与实习经历。",
    "/zh/"
  ),
  alternates: { canonical: "/zh/", languages: { en: "/", "zh-CN": "/zh/", "x-default": "/" } },
  openGraph: {
    ...pageMetadata("周梓洋 · UBC 统计学与机器学习", "应用机器学习、预测建模与 AI 项目。", "/zh/").openGraph,
    locale: "zh_CN"
  }
};

export default function ChineseHomePage() {
  return <div lang="zh-CN"><HomePage /></div>;
}
