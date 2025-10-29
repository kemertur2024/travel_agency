import ProductDetails from "@/components/ProductDetails";
import { getItemBySlug } from "@/lib/api/items";

export default async function ExcursionPage({ params }) {
    const { locale, slug, category } = params;

    const item = await getItemBySlug(slug);

    return <ProductDetails item={item} category={category} locale={locale} />;
}
