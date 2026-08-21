import { createContext, useContext, useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/lib/theme-provider.tsx
var ThemeContext = createContext({
	theme: "light",
	toggleTheme: () => {}
});
var ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");
	useEffect(() => {
		const root = window.document.documentElement;
		if (theme === "dark") root.classList.add("dark");
		else root.classList.remove("dark");
	}, [theme]);
	const toggleTheme = () => {
		setTheme((prev) => prev === "light" ? "dark" : "light");
	};
	return /* @__PURE__ */ jsx(ThemeContext.Provider, {
		value: {
			theme,
			toggleTheme
		},
		children
	});
};
var useTheme = () => useContext(ThemeContext);
//#endregion
export { useTheme as n, ThemeProvider as t };
