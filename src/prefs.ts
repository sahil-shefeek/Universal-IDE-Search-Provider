import Gio from "gi://Gio";
import Adw from "gi://Adw";

import {
  ExtensionPreferences,
  gettext as _,
} from "resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js";

type Window = Adw.PreferencesWindow & {
  _settings: Gio.Settings | null;
};

export default class ExamplePreferences extends ExtensionPreferences {
  _settings: Gio.Settings | null = null;

  fillPreferencesWindow(window: Window) {
    // Create a settings object
    window._settings = this.getSettings();

    // --- Page 1: Search & Appearance ---
    const page1 = new Adw.PreferencesPage({
      title: _("Search & Appearance"),
      icon_name: "preferences-desktop-display-symbolic",
    });
    window.add(page1);

    const groupAppearance = new Adw.PreferencesGroup({
      title: _("Appearance & Behavior"),
    });
    page1.add(groupAppearance);

    const overrideResultsOrder = new Adw.SwitchRow({
      title: _("Override Results Order"),
      subtitle: _("Prioritize workspaces in search results. Requires restart."),
    });
    groupAppearance.add(overrideResultsOrder);
    window._settings.bind(
      "override-results-order",
      overrideResultsOrder,
      "active",
      Gio.SettingsBindFlags.DEFAULT,
    );

    const showSuffix = new Adw.SwitchRow({
      title: _("Show Suffix"),
      subtitle: _(
        "Show a suffix next to the workspace name (e.g., Remote, Codespaces).",
      ),
    });
    groupAppearance.add(showSuffix);
    window._settings.bind(
      "suffix",
      showSuffix,
      "active",
      Gio.SettingsBindFlags.DEFAULT,
    );

    // --- Page 2: IDEs & Workspaces ---
    const page2 = new Adw.PreferencesPage({
      title: _("IDEs & Workspaces"),
      icon_name: "folder-code-symbolic",
    });
    window.add(page2);

    const groupIdes = new Adw.PreferencesGroup({
      title: _("Enabled IDEs"),
    });
    page2.add(groupIdes);

    const enableVscode = new Adw.SwitchRow({
      title: _("Visual Studio Code"),
    });
    groupIdes.add(enableVscode);
    window._settings.bind(
      "enable-vscode",
      enableVscode,
      "active",
      Gio.SettingsBindFlags.DEFAULT,
    );

    const enableVscodium = new Adw.SwitchRow({
      title: _("VSCodium"),
    });
    groupIdes.add(enableVscodium);
    window._settings.bind(
      "enable-vscodium",
      enableVscodium,
      "active",
      Gio.SettingsBindFlags.DEFAULT,
    );

    const enableAntigravity = new Adw.SwitchRow({
      title: _("Google Antigravity"),
    });
    groupIdes.add(enableAntigravity);
    window._settings.bind(
      "enable-antigravity",
      enableAntigravity,
      "active",
      Gio.SettingsBindFlags.DEFAULT,
    );

    const groupVirtualEnvs = new Adw.PreferencesGroup({
      title: _("Virtual Environments"),
    });
    page2.add(groupVirtualEnvs);

    const includeDevContainers = new Adw.SwitchRow({
      title: _("Include Dev Containers"),
    });
    groupVirtualEnvs.add(includeDevContainers);
    window._settings.bind(
      "include-dev-containers",
      includeDevContainers,
      "active",
      Gio.SettingsBindFlags.DEFAULT,
    );

    const includeCodeSpaces = new Adw.SwitchRow({
      title: _("Include Code Spaces"),
    });
    groupVirtualEnvs.add(includeCodeSpaces);
    window._settings.bind(
      "include-code-spaces",
      includeCodeSpaces,
      "active",
      Gio.SettingsBindFlags.DEFAULT,
    );

    const includeGithub = new Adw.SwitchRow({
      title: _("Include GitHub Virtual File Systems"),
    });
    groupVirtualEnvs.add(includeGithub);
    window._settings.bind(
      "include-github",
      includeGithub,
      "active",
      Gio.SettingsBindFlags.DEFAULT,
    );
  }
}
