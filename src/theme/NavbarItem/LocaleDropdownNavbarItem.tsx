import React from "react";
import DropdownNavbarItem from "@theme/NavbarItem/DropdownNavbarItem";
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import type { Props } from "@theme/NavbarItem/DropdownNavbarItem";

const localeLabels: Record<string, { label: string; flag: string }> = {
  en: { label: "English", flag: "🇬🇧" },
  ja: { label: "日本語", flag: "🇯🇵" },
};

export default function LocaleDropdownNavbarItem(
  props: Props
): React.ReactElement {
  const location = useLocation();
  const {
    i18n: { defaultLocale, currentLocale, locales },
  } = useDocusaurusContext();

  const items = locales.map((locale) => {
    const to =
      locale === defaultLocale
        ? location.pathname
        : `/${locale}${location.pathname}`;

    return {
      label: `${localeLabels[locale]?.flag ?? ""} ${
        localeLabels[locale]?.label ?? locale
      }`,
      to,
      target: "_self",
      autoAddBaseUrl: false,
    };
  });

  return (
    <DropdownNavbarItem
      {...props}
      label={`${localeLabels[currentLocale]?.flag ?? ""} ${
        localeLabels[currentLocale]?.label ?? currentLocale
      }`}
      items={items}
    />
  );
}
