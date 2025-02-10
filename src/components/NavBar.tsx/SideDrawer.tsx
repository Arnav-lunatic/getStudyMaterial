import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
	Button,
	User,
} from "@heroui/react";
import { useAppSelector } from "../../app/hook";
import useDbService from "../../lib/conf";
import { useNavigate } from "react-router-dom";

interface props {
	isOpen: boolean;
	onOpenChange: () => void;
}

export default function SideDrawer({ isOpen, onOpenChange }: props) {
	const { logout } = useDbService();
	const navigate = useNavigate()

	const loggedInUser = useAppSelector((state) => state.login.loggedInUser);

	const sideBarButtons = [
		{
			name: "Home",
			action: () => {
				onOpenChange()
				navigate('/')
			},
		},
		{
			name: "Create Post",
			action: () => {
				onOpenChange()
				navigate("/upload")
			},
		},
	]

	return (
		<Drawer
			className="dark bg-opacity-45 backdrop-blur-md"
			isOpen={isOpen}
			size="sm"
			onOpenChange={onOpenChange}
		>
			<DrawerContent>
				{() => (
					<>
						<DrawerHeader className="flex items-center justify-between m-6 bg-white bg-opacity-5 rounded-xl ">
							<User
								avatarProps={{
									src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
								}}
								description={
									loggedInUser ? loggedInUser.email : ""
								}
								name={loggedInUser ? loggedInUser.name : ""}
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="20"
								width="10"
								viewBox="0 0 256 512"
							>
								<path
									fill="#ffffff"
									d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
								/>
							</svg>
						</DrawerHeader>

						<DrawerBody>
							{
								sideBarButtons.map((button, index) => {
									return (
										<Button
											key={index}
											className="font-semibold text-lg"
											onPress={button.action}
											color="default" variant="shadow">
											{button.name}
										</Button>
									)
								})
							}
						</DrawerBody>

						<DrawerFooter className="w-full">
							<Button
								className="w-1/2 m-auto"
								onPress={logout}
								color="default"
							>
								Logout
							</Button>
						</DrawerFooter>
					</>
				)}
			</DrawerContent>
		</Drawer>
	);
}
