import type { StateCreator } from "zustand";
import { persist } from "zustand/middleware";

import type { AuthSlice, GlobalStore } from "../types";

export const initialState: AuthSlice = {
	token: null,
};

export const createAuthSlice: StateCreator<
	GlobalStore,
	[["zustand/devtools", never]],
	// biome-ignore lint/suspicious/noExplicitAny: any is necessary for zustand config
	any,
	AuthSlice
> = persist(() => initialState, { name: "auth" });
