import { FC } from "react";
import { useTranslation } from "react-i18next";

import { BlueBorderBackground, BackgroundVideo, PageTitle } from "../../core";
import { PartTitle } from "../../core";
import { SkillsGrid } from "./SkillsGrid";

export const Skills: FC = () => {
  const { t } = useTranslation("skills");
  const softwares = ["ae", "blender", "fls", "git", "mso", "obs", "psd", "veg"];
  const languages = [
    "asm",
    "bash",
    "cpp",
    "htmlCss",
    "php",
    "python",
    "java",
    "js",
    "ts",
    "sql",
  ];

  return (
    <>
      <BlueBorderBackground backgroundColor={"transparent"}>
        <BackgroundVideo />
        <PageTitle title={t("title")} />
        <PartTitle title={t("parts.software")} />
        <SkillsGrid skillType="software" skillArray={softwares} />
        <PartTitle title={t("parts.language")} />
        <SkillsGrid skillType="language" skillArray={languages} />
      </BlueBorderBackground>
    </>
  );
};
