import type { LocalizedText } from "@/lib/i18n";

export type WritingItem = {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  date: string;
};

// 这里预留文章数据。以后新增文章：在数组里添加一条，并补对应页面或外链。
export const writings: WritingItem[] = [];
