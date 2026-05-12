// 这个文件提供最小可维护的双语工具：语言类型、读取嵌套翻译、选择中英文内容。
export type Language = "en" | "zh";

export type LocalizedText = {
  en: string;
  zh: string;
};

export type LocalizedList = {
  en: string[];
  zh: string[];
};

export function pickText(value: LocalizedText, language: Language): string {
  return value[language];
}

export function pickList(value: LocalizedList, language: Language): string[] {
  return value[language];
}

export function getNestedValue(source: unknown, path: string): string {
  const value = path.split(".").reduce<unknown>((current, key) => {
    if (current && typeof current === "object" && key in current) {
      return (current as Record<string, unknown>)[key];
    }

    return undefined;
  }, source);

  return typeof value === "string" ? value : path;
}
