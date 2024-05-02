import { SettingCategory } from "@/interfaces/settings";
import lyrics from "./lyrics";

export default <SettingCategory>{
  title: "Plugins",
  groups: [
    {
      title: "Lyrics Finder",
      desc: "Finds and displays lyrics from the internet.",
      settings: lyrics,
      experimental: true,
    },
  ],
};
