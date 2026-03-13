import {getTranslations, setRequestLocale} from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

import {isLocale} from "@/i18n/routing";
import {asset} from "@/lib/asset";
import {products} from "@/data/products";

export default async function ProductsPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!isLocale(locale)) return null;

  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: "products"});

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          {t("subtitle")}
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">
        {products.map((item) => (
          <Link
            key={item.slug}
            href={`/${locale}/products/${item.slug}`}
            className="group block overflow-hidden rounded-2xl border border-black/5 dark:border-white/10"
          >
            <div className="relative aspect-[4/3] bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-black">
              {item.images?.length ? (
                <>
                  <Image
                    src={asset(item.images[0])}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.images[1] ? (
                    <Image
                      src={asset(item.images[1])}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  ) : null}
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-white/15 dark:bg-black/40 dark:text-zinc-200">
                    Photo coming soon
                  </div>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="text-sm font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {item.name}
              </div>
              <div className="mt-2 text-sm leading-6 text-zinc-600 line-clamp-2 dark:text-zinc-300">
                {item.description}
              </div>
              <div className="mt-4 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {item.priceRange}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
