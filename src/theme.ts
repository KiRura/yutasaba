import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

export const system = createSystem(
	defaultConfig,
	defineConfig({
		theme: {
			tokens: {
				fonts: {
					body: {
						value: "var(--font-inter), var(--font-noto-sans-jp), sans-serif",
					},
					heading: {
						value: "var(--font-inter), var(--font-noto-sans-jp), sans-serif",
					},
				},
			},
		},
	}),
);
