import { atom } from "recoil";

export const showMenuState = atom<boolean>({
  key: "showMenuState",
  default: false,
});

export const scrollPosState = atom<number>({
  key: "scrollPosState",
  default: 0,
});

export const currentRouteState = atom<string | null>({
  key: "currentRouteState",
  default: null,
});
