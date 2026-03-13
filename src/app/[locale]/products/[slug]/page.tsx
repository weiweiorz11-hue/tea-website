import {notFound} from "next/navigation";
import {getTranslations, setRequestLocale} from "next-intl/server";

import {isLocale} from "@/i18n/routing";
import {products} from "@/data/products";
import {ProductDetail} from "@/components/ProductDetail";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  if (!isLocale(locale)) return null;

  setRequestLocale(locale);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ProductDetail product={product} />
    </div>
  );
}
