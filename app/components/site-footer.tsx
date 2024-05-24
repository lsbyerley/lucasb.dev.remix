const SiteFooter = () => {
	return (
		<footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
			<p className="text-xs text-gray-500 dark:text-gray-400">
				© {new Date().getFullYear()} lucasb.dev | All rights reserved.
			</p>
		</footer>
	)
}

export default SiteFooter
