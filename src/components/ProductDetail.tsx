"use client";

import Image from "next/image";
import {useState} from "react";

import {asset} from "@/lib/asset";
import {Product} from "@/data/products";

export function ProductDetail({product}: {product: Product}) {
  const [selectedImage, setSelectedImage] = useState(
    product.images.length > 0 ? product.images[0] : ""
  );
  const [quantity, setQuantity] = useState(1);

  if (!selectedImage) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-zinc-500">No images available for this product.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
      {/* Image Gallery */}
      <div className="space-y-4">
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-black/5 bg-zinc-50 dark:border-white/10 dark:bg-zinc-900">
          <Image
            src={asset(selectedImage)}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        {product.images.length > 1 && (
          <div className="flex gap-4 overflow-x-auto pb-2">
            {product.images.map((img) => (
              <button
                key={img}
                onClick={() => setSelectedImage(img)}
                className={`relative h-20 w-20 flex-none overflow-hidden rounded-lg border ${
                  selectedImage === img
                    ? "border-emerald-600 ring-2 ring-emerald-600/20"
                    : "border-black/5 hover:border-black/20 dark:border-white/10 dark:hover:border-white/20"
                }`}
              >
                <Image
                  src={asset(img)}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            {product.name}
          </h1>
          <div className="text-2xl font-medium text-emerald-600 dark:text-emerald-400">
            {product.priceRange}
          </div>
          <div className="prose prose-zinc dark:prose-invert">
            <p>{product.description}</p>
          </div>
        </div>

        <div className="space-y-4 border-t border-black/5 pt-8 dark:border-white/10">
          <div className="flex items-center gap-4">
            <label htmlFor="quantity" className="text-sm font-medium">
              Quantity
            </label>
            <div className="flex items-center rounded-lg border border-black/10 dark:border-white/15">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="flex h-10 w-10 items-center justify-center border-r border-black/10 hover:bg-zinc-50 dark:border-white/15 dark:hover:bg-zinc-900"
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="h-10 w-16 bg-transparent text-center text-sm outline-none"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="flex h-10 w-10 items-center justify-center border-l border-black/10 hover:bg-zinc-50 dark:border-white/15 dark:hover:bg-zinc-900"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="flex-1 rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
              Add to Cart
            </button>
            <button className="flex-1 rounded-full border border-black/10 bg-white px-8 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-white/15 dark:bg-black/20 dark:text-white dark:hover:bg-white/10">
              Buy Now
            </button>
          </div>
          <p className="text-xs text-zinc-500">
            * Wholesale pricing available for bulk orders. Please contact us for details.
          </p>
        </div>
      </div>
    </div>
  );
}
