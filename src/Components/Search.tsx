import md5 from "md5";
import React from "react";
import styled from "styled-components";
import { hash, time } from "../api";

const SearchInput = styled.input`
	padding: 15px;
	width: 100%;
	margin: 15px 0;
	border: none;
`;
function Search() {
	const getSearch = async (name: string) => {
		const getinfo = await fetch(
			`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&ts=${time}&apikey=caa49ff91d303d668440678b64c5d9ee&hash=${hash}`
		);
		const data = await getinfo.json();
	};

	return (
		<>
			<SearchInput></SearchInput>
		</>
	);
}

export default Search;
