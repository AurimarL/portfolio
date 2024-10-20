import { useState } from "react";
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function useForm(initialValues: any) {
	const [values, setValues] = useState(initialValues);

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const handleChange = (e: any) => {
		const { name, value } = e.target;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		setValues((prevValues: any) => ({
			...prevValues,
			[name]: value,
		}));
	};

	const resetForm = () => {
		setValues(initialValues);
	};

	return {
		values,
		handleChange,
		resetForm,
	};
}

export default useForm;
