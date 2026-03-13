import {getTranslations, setRequestLocale} from "next-intl/server";
import Image from "next/image";

import {isLocale} from "@/i18n/routing";
import {asset} from "@/lib/asset";

export default async function AboutPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!isLocale(locale)) return null;

  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: "about"});

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          {t("subtitle")}
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 md:items-start">
        <div className="rounded-2xl border border-black/5 p-8 text-sm leading-7 text-zinc-700 dark:border-white/10 dark:text-zinc-200">
          {t("body")}
        </div>
        <div className="overflow-hidden rounded-2xl border border-black/5 dark:border-white/10">
          <div className="relative aspect-[4/3]">
            <Image
              src={asset("/images/about/tea-garden.jpg")}
              alt="Production"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight">
          Factory & QC Highlights
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-black/5 dark:border-white/10">
            <div className="relative aspect-[4/3]">
              <Image
                src={asset("/images/about/tea-tasting.jpg")}
                alt="Lab"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-black/5 dark:border-white/10">
            <div className="relative aspect-[4/3]">
              <Image
                src={asset("/images/about/tea-packaging.jpg")}
                alt="Packaging"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-black/5 dark:border-white/10">
            <div className="relative aspect-[4/3]">
              <Image
                src={asset("/images/about/tea-storage.jpg")}
                alt="Storage"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-black/5 dark:border-white/10">
          <div className="relative aspect-[16/10]">
            <Image
              src={asset("/images/about/export-1.jpg")}
              alt="Packing process"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-black/5 dark:border-white/10">
          <div className="relative aspect-[16/10]">
            <Image
              src={asset("/images/about/export-2.jpg")}
              alt="Packing process"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}


