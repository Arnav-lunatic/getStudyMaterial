import { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import { account, ID } from "../lib/appwrite";

interface user {
	name: string;
}

export default function Login() {

	const [loggedInUser, setLoggedInUser] = useState<user | null>(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	async function login(email: string, password: string) {
		await account.createEmailPasswordSession(email, password);
		setLoggedInUser(await account.get());
	}

	return (
		<div className="bg-[url(/src/assets/loginbg.jpg)] bg-center bg-cover h-screen w-full">
			<Form
				className="w-full max-w-md flex flex-col gap-4 bg-black backdrop-blur-md bg-opacity-20 rounded-3xl p-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				validationBehavior="native"
			>
				<p>
					{loggedInUser
						? `Logged in as ${loggedInUser.name}`
						: "Not logged in"}
				</p>
				<Input
					isRequired
					errorMessage="Please enter a valid username"
					label="Username"
					labelPlacement="outside"
					name="username"
					placeholder="Enter your username"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<Input
					isRequired
					errorMessage="Please enter a valid email"
					label="Email"
					labelPlacement="outside"
					name="email"
					placeholder="Enter your email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<Input
					isRequired
					errorMessage="Please enter password"
					label="Password"
					labelPlacement="outside"
					name="password"
					placeholder="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<div className="flex gap-2">
					<Button
						color="primary"
						onPress={() => login(email, password)}
					>
						Login
					</Button>
					<Button
						color="primary"
						onPress={async () => {
							await account.create(
								ID.unique(),
								email,
								password,
								name
							);
							login(email, password);
						}}
					>
						Register
					</Button>
					<Button
						type="reset"
						variant="flat"
						onPress={async () => {
							await account.deleteSession("current");
							setLoggedInUser(null);
						}}
					>
						Logout
					</Button>
				</div>
			</Form>
		</div>
	);
}
