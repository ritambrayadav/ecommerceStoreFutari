export function ProductCard({
	title,
	description,
	href,
}: {
	title: string;
	description?: string;
	href?: string;
}) {
	return (
		<article className="border rounded-lg p-4 shadow-sm">
			<h3 className="text-lg font-semibold">{title}</h3>
			{description && <p className="text-sm text-gray-600 mt-2">{description}</p>}
			{href && (
				<a className="inline-block mt-3 text-blue-600 hover:underline" href={href}>
					View
				</a>
			)}
		</article>
	);
}
