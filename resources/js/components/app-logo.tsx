import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white shadow-sm dark:bg-brand-500">
                <AppLogoIcon className="size-5" />
            </div>
            <div className="ml-1 grid flex-1 text-left">
                <span className="font-display truncate pt-0.5 text-lg leading-none font-bold tracking-tight text-brand-700 dark:text-brand-100">
                    Langkah
                </span>
            </div>
        </>
    );
}
