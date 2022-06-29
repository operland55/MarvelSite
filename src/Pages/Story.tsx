import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { hash, MarvelApi, time } from "../api";
import Header from "../Components/Header";

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: red;
	display: flex;
	flex-direction: column;
	gap: 30px;
`;
const Content = styled.div`
	padding: 20px;
`;
const Title = styled.h1`
	font-family: "Fascinate", cursive;
	font-size: 3.5rem;
	color: #fff;
	text-align: center;
	padding: 10px;
`;
const MainContent = styled.div`
	width: 100%;
	padding: 5px;
	height: 100px;
	border-radius: 8px;
	background-color: #fff;
	display: flex;
`;

const MainTitleDiv = styled.div`
	width: 60%;
	flex: 2;
`;
const BoxContent = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	justify-content: center;
`;

const Box = styled.div`
	width: 150px;
	height: 110px;
	border-radius: 8px;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	p {
		font-family: "Fascinate", cursive;
		font-size: 12px;
		text-transform: uppercase;
	}
	img {
		width: 60%;
		&:hover {
			transform: scale(1.2);
		}
	}
`;
function Story() {
	const [data, setData] = useState<MarvelApi[]>([]);

	const imgData = useMemo(() => {
		return data.filter((i) => !i.thumbnail.path.includes("not"));
	}, []);

	const getStory = async () => {
		const getStoryIp = await fetch(
			`https://gateway.marvel.com:443/v1/public/series?ts=${time}&apikey=caa49ff91d303d668440678b64c5d9ee&hash=${hash}`
		);
		const data = await getStoryIp.json();
		setData(data.data.results);
	};

	useEffect(() => {
		getStory();
	}, []);
	console.log(imgData);
	return (
		<Wrapper>
			<Header title="Story" />
			{imgData.map((i, key) => {
				return (
					<Box key={key}>
						<img src={i.thumbnail.path + "/portrait_medium.jpg"}></img>
					</Box>
				);
			})}
		</Wrapper>
	);
}

export default Story;
