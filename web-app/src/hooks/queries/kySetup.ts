import { useGlobalStore } from "@/store/store";
import ky from "ky";

export const query = ky.create({
	prefixUrl: "http://localhost:3000",
	hooks: {
		beforeRequest: [
			(request) => {
				request.headers.set(
					"Authorization",
					`Bearer ${useGlobalStore.getState().token}`,
				);
			},
		],
	},
	throwHttpErrors: false,
});
