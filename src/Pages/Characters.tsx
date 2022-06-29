import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { hash, MarvelApi, time } from "../api";
import Header from "../Components/Header";
import Search from "../Components/Search";
const Wrapper = styled.div`
	width: 100vw;
	height: 100%;
	padding: 15px;
`;

const Box = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 20px;
`;
const BoxContent = styled.div`
	width: 100px;
	height: 130px;
	background-color: #fff;
`;
const BoxImg = styled.img`
	width: 100%;
	height: 100px;
	object-fit: cover;
`;
const BoxTitle = styled.p`
	font-size: 15px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
function Characters() {
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
			<Header title="Characters" />
			<Search />
			<Box>
				{data.map((i, key) => {
					return (
						<Link to={`${i.id}`} key={key}>
							<BoxContent>
								<BoxImg
									src={i.thumbnail.path + "/portrait_medium.jpg"}
								></BoxImg>
								<BoxTitle>{i.name}</BoxTitle>
							</BoxContent>
						</Link>
					);
				})}
			</Box>
		</Wrapper>
	);
}

export default Characters;
