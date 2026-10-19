type MenuItem = {
  name: string;
  description?: string;
  priceCents?: number;
  priceLabel?: string;
};

type MenuCategory = {
  name: string;
  note?: string;
  items: MenuItem[];
};

const euro = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

export default function Menu({
  categories,
  emptyMessage,
}: {
  categories: MenuCategory[];
  emptyMessage: string;
}) {
  if (categories.length === 0) {
    return (
      <p className="rounded-xl border border-white/10 bg-white/[0.03] p-6 leading-7 text-ember-50/75">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
      {categories.map((category) => (
        <section key={category.name} aria-labelledby={`category-${slug(category.name)}`}>
          <h2
            id={`category-${slug(category.name)}`}
            className="border-b border-ember-300/35 pb-3 font-display text-2xl font-medium text-ember-100"
          >
            {category.name}
          </h2>
          {category.note && (
            <p className="mt-3 text-sm leading-6 text-ember-50/60">{category.note}</p>
          )}
          <ul className="mt-5 space-y-5">
            {category.items.map((item, index) => (
              <li key={`${item.name}-${index}`}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-medium text-ember-50">{item.name}</h3>
                  {typeof item.priceCents === "number" ? (
                    <span className="shrink-0 font-medium tabular-nums text-ember-200">
                      {euro.format(item.priceCents / 100)}
                    </span>
                  ) : item.priceLabel ? (
                    <span className="shrink-0 text-sm text-ember-200">{item.priceLabel}</span>
                  ) : null}
                </div>
                {item.description && (
                  <p className="mt-1 text-sm leading-6 text-ember-50/60">
                    {item.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
