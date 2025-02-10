import { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import PasswordInput from "./PasswordInput";
import useDbService from "../../lib/conf";

export default function Login() {
	const {login} = useDbService()
	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="bg-[url(/src/assets/loginbg.jpg)] bg-center bg-cover h-screen w-full">
			<Form
				className="w-full max-w-md flex flex-col gap-4 bg-black backdrop-blur-md bg-opacity-20 rounded-3xl p-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				validationBehavior="native"
			>
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
						onPress={() => login(email, password)}
					>
						Login
					</Button>
				</div>
			</Form>
		</div>
	);
}
