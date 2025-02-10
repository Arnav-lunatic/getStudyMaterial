import { Avatar, Button, useDisclosure } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hook";
import SideDrawer from "./SideDrawer";

export default function NavBar() {
	const navigate = useNavigate();
	const loggedInUser = useAppSelector((state) => state.login.loggedInUser);
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<div className="flex justify-between items-center px-4 py-2 fixed top-1 left-1/2 -translate-x-1/2 bg-black bg-opacity-20 backdrop-blur-lg rounded-lg max-w-[1600px] w-full">
			<h1>GetStudyMaterial</h1>

			{loggedInUser ? (
				<div className="flex gap-2">
					<h1 className="font-bold text-xl">{loggedInUser.name}</h1>
					<Avatar
						onClick={onOpen}
						isBordered
						src="https://i.pravatar.cc/150?u=a04258114e29026708c"
						className="cursor-pointer"
					/>
					<SideDrawer isOpen={isOpen} onOpenChange={onOpenChange} />
				</div>
			) : (
				<div className="flex gap-4">
					<Button
						onPress={() => navigate("/login")}
						color="primary"
						variant="ghost"
					>
						Login
					</Button>
					<Button
						onPress={() => navigate("/register")}
						color="primary"
						variant="ghost"
					>
						Register
					</Button>
				</div>
			)}
		</div>
	);
}
