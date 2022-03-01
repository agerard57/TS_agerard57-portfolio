import { i18n as contact } from "../contact";
import { i18n as core } from "../core";
import { i18n as landingPage } from "../landingPage";
import { i18n as loadingScreen } from "../loadingScreen";
import { i18n as presentation } from "../presentation";
import { i18n as projects } from "../projects";
import { i18n as resume } from "../resume";
import { i18n as skills } from "../skills";

type Modules = Record<string, { fr: any; en: any }>; // eslint-disable-line @typescript-eslint/no-explicit-any

const normalize = (
  modules: Modules,
  formatNamespace: (name: string) => string = (name) => name
) =>
  Object.entries(modules).reduce(
    ({ fr, en }, [namespace, translations]) => ({
      fr: { ...fr, [formatNamespace(namespace)]: translations.fr },
      en: { ...en, [formatNamespace(namespace)]: translations.en },
    }),
    { fr: {}, en: {} }
  );

const moduleResources = normalize({
  contact,
  core,
  landingPage,
  loadingScreen,
  presentation,
  projects,
  resume,
  skills,
});

export const resources = {
  fr: { ...moduleResources.fr },
  en: { ...moduleResources.en },
};
