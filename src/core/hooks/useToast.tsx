import { changeLanguage } from "i18next";
import { AppearanceTypes, useToasts } from "react-toast-notifications";

type ToastManager = {
  onClick(lng: string, content: string, type: AppearanceTypes): void;
};
export const useToast = (): ToastManager => {
  const { addToast } = useToasts();
  const onClick = (lng: string, content: string, type: "success") => {
    changeLanguage(lng);
    addToast(content, {
      appearance: type,
      autoDismiss: true,
      autoDismissTimeout: 3000,
    });
  };
  return { onClick };
};
