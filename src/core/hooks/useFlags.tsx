import i18next, { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { useToasts } from "react-toast-notifications";

type ToastManager = {
  onClick(lng: string): void;
};
export const useFlags = (): ToastManager => {
  const { t } = useTranslation();
  const { addToast } = useToasts();
  const onClick = (lng: string) => {
    const isSameLang = i18next.language === lng;
    const toasterLangManager = isSameLang
      ? addToast(t("Core.deniedMessage"), {
          appearance: "info",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        })
      : (changeLanguage(lng),
        addToast(t("Core.confirmationMessage"), {
          appearance: "success",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        }));
    return toasterLangManager;
  };
  return { onClick };
};
