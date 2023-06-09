import { Injector, Logger, settings } from "replugged";

import { defaultSettings } from "./lib/consts";

export const PluginLogger = Logger.plugin("PlatformSimulator");

export const SettingValues = await settings.init("dev.tharki.PlatformSimulator", defaultSettings);

export const PluginInjector = new Injector();

import { registerSettings } from "./Components/Settings";

import { applyInjections } from "./patches/index";

export const start = (): void => {
  registerSettings();
  applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings";
