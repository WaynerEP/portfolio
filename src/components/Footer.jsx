export default function Footer() {
    const date = new Date();
    return (
        <footer className="px-20 dark:bg-dark_primary">
            <div className="flex flex-col justify-center items-center py-16 border-t-2 border-slate-200 dark:border-border_color">
                <h6 className="dark:text-white">WAYNER ESPINOZA</h6>
                <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-dark_text_primary">{date.getFullYear()} Wayner Keylor. All Rights Reserved.</p>
            </div>
        </footer>
    )
}