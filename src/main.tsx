import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HeroUIProvider } from "@heroui/react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import { Home, Login, Register, UploadPage } from "./components/index";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<Home />} />
			<Route path="login" element={<Login />} />
			<Route path="register" element={<Register />} />
			<Route path="upload" element={<UploadPage />} />
		</Route>
	)
);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HeroUIProvider>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</HeroUIProvider>
	</StrictMode>
);
