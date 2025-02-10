import { Button, Input, Radio, RadioGroup, Textarea } from "@heroui/react";
import { useState } from "react";

export default function UploadPage() {
	const [images, setImages] = useState<string[]>([]);

	const handleImgFileChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const files = event.target.files;
		if (files) {
			const imageUrls = Array.from(files).map((file) =>
				URL.createObjectURL(file)
			);
            setImages((prevImages) => [...prevImages, ...imageUrls]); // Append new images
            console.log(images);
            
		}
	};

	const removeImage = (index: number) => {
		setImages((prevImages) => prevImages.filter((_, i) => i !== index));
	};

	const [pdfFiles, setPdfFiles] = useState<{ name: string; url: string }[]>(
		[]
	);

	const handlePdfFileChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const files = event.target.files;
		if (files) {
			const newFiles = Array.from(files).map((file) => ({
				name: file.name,
				url: URL.createObjectURL(file),
			}));
			setPdfFiles((prevFiles) => [...prevFiles, ...newFiles]); // Append new PDFs
		}
	};

	const removePdf = (index: number) => {
		setPdfFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
	};

	return (
		<div className="flex flex-col items-center justify-center mt-20 gap-4 w-full">
			<div className="w-full max-w-[800px] space-y-3">
				<Input
					label="Title"
					placeholder="Enter the title"
					type="email"
				/>

				<Textarea
					label="Description"
					placeholder="Enter the description"
				/>
			</div>

			<RadioGroup label="Select the type :-" orientation="horizontal">
				<Radio value="buenos-aires">Questions</Radio>
				<Radio value="san-francisco">Previous Year Paper</Radio>
				<Radio value="london">Notes</Radio>
			</RadioGroup>

			<h1 className="text-xl font-bold">Add Images</h1>
			<div className="flex gap-3 border p-2 rounded-md w-full max-w-[800px]">
				{images.map((image, index) => (
					<div key={index} className="relative w-24">
						<img
							src={image}
							alt={`Uploaded ${index}`}
							className="w-24 h-24 object-cover rounded-lg shadow"
						/>
						<button
							onClick={() => removeImage(index)}
							className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full hover:bg-red-600"
						>
							✕
						</button>
					</div>
				))}

				<label
					htmlFor="multi-image-upload"
					className="flex items-center justify-center cursor-pointer bg-zinc-700 text-white rounded-lg shadow-md hover:bg-zinc-600 transition w-24 h-24"
				>
					<svg
						className=""
						xmlns="http://www.w3.org/2000/svg"
						height="56"
						width="49"
						viewBox="0 0 448 512"
					>
						<path
							fill="#ffffff"
							d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
						/>
					</svg>
				</label>
				<input
					id="multi-image-upload"
					type="file"
					accept="image/*"
					multiple
					className="hidden"
					onChange={handleImgFileChange}
				/>
			</div>

			<div className="flex gap-2">
				{pdfFiles.map((file, index) => (
					<div
						key={index}
						className="flex justify-between gap-1 items-center p-2 bg-zinc-800 rounded-lg shadow"
					>
						<a
							href={file.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 dark:text-blue-400 hover:underline truncate"
						>
							{file.name}
						</a>
						<button
							onClick={() => removePdf(index)}
							className="bg-red-500 text-white text-xs px-2 py-1 rounded-full hover:bg-red-600"
						>
							✕
						</button>
					</div>
				))}

				<label
					htmlFor="pdf-upload"
					className="cursor-pointer bg-zinc-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-zinc-600 transition"
				>
					Upload PDFs
				</label>
				<input
					id="pdf-upload"
					type="file"
					accept="application/pdf"
					multiple
					className="hidden"
					onChange={handlePdfFileChange}
				/>
            </div>
            <Button color="primary">Upload</Button>
		</div>
	);
}
