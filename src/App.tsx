import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.tsx/NavBar";
import { useEffect } from "react";
import useDbService from "./lib/conf";
import { Progress } from "@heroui/react";
import { useAppSelector } from "./app/hook";

const App = () => {
	const { checkUserLogin } = useDbService();
	const isLoading = useAppSelector((state) => state.loader.isLoading)

	useEffect(() => {
		checkUserLogin();
	}, []);

	return (
		<div className="dark max-w-[1600px] w-full m-auto p-1">
			{isLoading && <Progress isIndeterminate aria-label="Loading..." color="default" className="w-full max-w-[1600px] fixed top-0 left-1/2 -translate-x-1/2" size="sm" />}
			<NavBar />
			<Outlet />
		</div>
	);
};

export default App;
