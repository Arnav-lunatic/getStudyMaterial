import { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import PasswordInput from "./PasswordInput";
import { nanoid } from "nanoid";
import useDbService from "../../lib/conf";

export default function Register() {
	const { register } = useDbService()
	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("user-" + nanoid(10));	

	return (
		<div className="bg-[url(/src/assets/loginbg.jpg)] bg-center bg-cover h-screen w-full">
			<Form
				className="w-full max-w-md flex flex-col gap-4 bg-black backdrop-blur-md bg-opacity-20 rounded-3xl p-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				validationBehavior="native"
			>
				<Input
					isRequired
					errorMessage="Please enter a valid username"
					label="Username"
					labelPlacement="outside"
					name="username"
					placeholder="Enter your username"
					type="text"
					onFocus={(e) => e.target.select()}
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

				<PasswordInput password={password} setPassword={setPassword} />

				<div className="flex gap-2">
					<Button
						color="primary"
						onPress={() => register(email, password, name)}
					>
						Register
					</Button>
				</div>
			</Form>
		</div>
	);
}
