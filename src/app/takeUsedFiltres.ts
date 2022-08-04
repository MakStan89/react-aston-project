export const takeUsedFiltres = (obj: {[key: string]: string | number;}): { [key: string]: string } =>
	Object.fromEntries(
		Object.entries(obj).filter((item) => item[1])
			.map((item) => [item[0], item[1].toString()])
	);
	
