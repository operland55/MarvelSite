import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { hash, MarvelInfo, time } from "../api";

const Id = styled.h1`
	color: #fff;
`;
function CharactersInfo() {
	const [info, setInfo] = useState<MarvelInfo>([]);
	const Id = useParams();

	useEffect(() => {
		const getInfo = async () => {
			const getCharacterInfo = await fetch(`
      https://gateway.marvel.com:443/v1/public/characters/${Id.charactersId}?ts=${time}&apikey=caa49ff91d303d668440678b64c5d9ee&hash=${hash}
      `);
			const data = await getCharacterInfo.json();
			setInfo(data);
		};
		getInfo();
	}, []);

	console.log(info);
	console.log(Id);

	return (
		<>
			{
				<div>
					<img
						src={info.data?.results[0]?.thumbnail.path + "/portrait_medium.jpg"}
					></img>
					<h1>
						{info.data?.results.map((item, key) => {
							return (
								<div>
									<h1>{item.description}</h1>
									<h1>{item.stories.available}</h1>
									<h1>{item.comics.items[0].resourceURI}</h1>
									<h1>{item.stories.collectionURI}</h1>
								</div>
							);
						})}
					</h1>
				</div>
			}
		</>
	);
}

export default CharactersInfo;
