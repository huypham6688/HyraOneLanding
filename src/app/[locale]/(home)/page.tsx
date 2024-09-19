import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations();
  return <div>{t("home")}</div>;
};

export default Page;
