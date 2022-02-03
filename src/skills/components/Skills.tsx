import { FC } from "react";
import { useTranslation } from "react-i18next";

import { BlueBorderBackground, BackgroundVideo, PageTitle } from "../../core";
import { PartTitle } from "../../core";
import { SkillsGrid } from "./SkillsGrid";

export const Skills: FC = () => {
  const { t } = useTranslation();
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
        <PageTitle title={t("Skills.title")} />
        <PartTitle title={t("Skills.parts.software")} />
        <SkillsGrid skillType="software" skillArray={softwares} />
        <PartTitle title={t("Skills.parts.language")} />
        <SkillsGrid skillType="language" skillArray={languages} />
      </BlueBorderBackground>
    </>
  );
};
