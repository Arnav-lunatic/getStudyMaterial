import { Button } from "@heroui/react";

export default function NavBar() {
	return (
		<div className="flex justify-between items-center px-4 py-2 fixed top-1 right-2 left-2 bg-black bg-opacity-20 backdrop-blur-lg rounded-lg">
			<h1>GetStudyMaterial</h1>

			<Button color="primary" variant="ghost">
				Ghost
			</Button>
		</div>
	);
}
