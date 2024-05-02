import useSettingsStore from "@/stores/settings";

import { SettingCategory } from "@/interfaces/settings";
import * as strings from "../strings";
import contextChildrenShowMode from "./context-children-show-mode";
import extendWidth from "./extend-width";
import nowPlaying from "./now-playing-group";
import sidebarSettings from "./sidebar";
import rootDirSettings from "./root-dirs";
import albums from "./albums";
import separators from "./separators";
import tracks from "./tracks";
import circularArtistImg from "./circular-artist-img";
import quickactions from "./quickactions";
import layout from "./layout";
import folderlistmode from "./folderlistmode";

const npStrings = strings.nowPlayingStrings;
const rootRootStrings = strings.manageRootDirsStrings;

export default {
  title: "General",
  groups: [
    {
      settings: quickactions,
    },
    {
      title: "UI Settings",
      desc: "Settings for various parts of the user interface.",
      settings: [
        ...layout,
        ...extendWidth,
        ...sidebarSettings,
        circularArtistImg,
        ...contextChildrenShowMode,
        ...folderlistmode,
      ],
    },
    {
      title: npStrings.title,
      desc: npStrings.desc,
      settings: [...nowPlaying],
      show_if: () => !useSettingsStore().is_alt_layout,
    },
    {
      title: rootRootStrings.title,
      desc: rootRootStrings.desc,
      settings: [...rootDirSettings],
    },
    {
      // null means settings table is not created yet
      show_if: () => useSettingsStore().feat !== null,
      title: "Track settings",
      desc: "Settings relating to track information",
      settings: [...tracks],
    },
    {
      // null means settings table is not created yet
      show_if: () => useSettingsStore().feat !== null,
      title: "Album settings",
      desc: "Settings relating to album information",
      settings: [...albums],
    },
    {
      // null means settings table is not created yet
      show_if: () => useSettingsStore().feat !== null,
      title: "Separators",
      desc: "Customize artist separators",
      settings: [separators],
    },
  ],
} as SettingCategory;

// ENHANCEMENT: Decouple components from Group.vue and pass them as part of the Setting interface (maybe?)
