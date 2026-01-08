import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
    const t = useTranslations('NotFound');
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-lg text-gray-600 mb-8">{t('description')}</p>
            <a
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                {t('backHome')}
            </a>
        </div>
    );
}
