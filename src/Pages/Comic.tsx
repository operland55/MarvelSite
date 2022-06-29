import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { hash, MarvelApi, time } from "../api";
import md5 from "md5";
import Header from "../Components/Header";

const Wrapper = styled.div`
	width: 100vw;
	height: 100%;
	padding: 15px;
`;
const Box = styled.div`
	width: 100vw;
	height: 300px;
`;

function Comic() {
	const [data, setData] = useState<MarvelApi[]>([]);

	useEffect(() => {
		const getMarvel = async () => {
			const getapi = await fetch(
				`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=caa49ff91d303d668440678b64c5d9ee&hash=${hash}`
			);
			const data = await getapi.json();
			setData(data.data.results);
		};
		getMarvel();
	}, []);
	console.log(data);
	return (
		<Wrapper>
			<Header title="Comic" />
			{data.map((i, key) => {
				return (
					<Box key={key}>
						<img src={i.thumbnail.path + "/portrait_medium.jpg"}></img>
					</Box>
				);
			})}
		</Wrapper>
	);
}

export default Comic;
