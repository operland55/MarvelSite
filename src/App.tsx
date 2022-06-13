import { useEffect, useState } from "react";
import md5 from "md5";
function App() {
	const [count, setCount] = useState([]);
	const populic = "caa49ff91d303d668440678b64c5d9ee";
	const api = `a1555a12f90da8b7f7b3c2db2c64c5043cd92b8f`;
	// const hash = "a6dd2fae7926a00f97ac7206e7e676ef";
	const time = Number(new Date());

	const hash = md5(time + api + populic);

	// 19a1555a12f90da8b7f7b3c2db2c64c
	// 5043cd92b8fcaa49ff91d303d668440678b64c5d9ee
	// 1655111640145a1555a12f90da8b7f7b3c2db2c64c5043cd92b8fcaa49ff91d303d668440678b64c5d9ee
	// 1caa49ff91d303d668440678b64c5d9eea1555a12f90da8b7f7b3c2db2c64c5043cd92b8f
	const getMarvel = async () => {
		const getApi = await fetch(
			`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=caa49ff91d303d668440678b64c5d9ee&hash=${hash}`
		);
		const data = await getApi.json();
		setCount(data);
	};

	useEffect(() => {
		getMarvel();
		console.log(count);
	}, []);

	console.log(count);
	return (
		<div className="App">
			<div></div>
		</div>
	);
}

export default App;
