import { account, databases, ID } from "../lib/appwrite";
import { useAppDispatch } from "../app/hook";
import { setLoggedInUser } from "../features/loginSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setIsLoading } from "../features/loadingSlice";
import { collectionId, dataBaseId } from "../constants/constant";

interface postArg {
	postId: string;
	title: string;
	description: string;
	images: string;
	type: string;
}

export default function useDbService() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setIsLoading(true));
	}, []);

	async function register(email: string, password: string, name: string) {
		await account.create(ID.unique(), email, password, name);
		await account.createEmailPasswordSession(email, password);
		dispatch(setLoggedInUser(await account.get()));
		navigate("/");
		dispatch(setIsLoading(false));
	}

	async function login(email: string, password: string) {
		await account.createEmailPasswordSession(email, password);
		dispatch(setLoggedInUser(await account.get()));
		navigate("/");
		dispatch(setIsLoading(false));
	}

	async function checkUserLogin() {
		dispatch(setLoggedInUser(await account.get()));
		dispatch(setIsLoading(false));
	}

	async function logout() {
		await account.deleteSession("current");
		dispatch(setLoggedInUser(null));
		navigate("/");
		dispatch(setIsLoading(false));
	}

	async function createPost({ postId, title, description, images, type }: postArg) {
		await databases.createDocument(dataBaseId, collectionId, postId, {
			postId,
			title,
			description,
			images,
			type
		});
	}

	async function listAllPost() {
		databases.listDocuments(
			dataBaseId,
			collectionId,
		);
	}

	return { register, login, checkUserLogin, logout, createPost, listAllPost };
}
