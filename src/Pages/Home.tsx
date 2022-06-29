import { useEffect, useState } from "react";
import md5 from "md5";
import Loading from "../Loading";
import styled from "styled-components";
import { MarvelApi } from "../api";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: red;
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
const MainImgDiv = styled.div`
	flex: 1;
	background-image: url("../스파이더맨.jpg");
	background-size: 100% 100%;
	background-repeat: no-repeat;
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
function Home() {
	const [isLoading, setLoading] = useState(true);

	const ImgFile = [
		{
			img: "../IronMan.png",
			title: "Comic",
		},
		{
			img: "../IronMan.png",
			title: "Characters",
		},
		{
			img: "../IronMan.png",
			title: "Events",
		},
		{
			img: "../IronMan.png",
			title: "Series",
		},
		{
			img: "../IronMan.png",
			title: "Stories",
		},
		{
			img: "../IronMan.png",
			title: "Comic",
		},
	];

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return (
		<Wrapper>
			<Content>
				{isLoading ? (
					<Loading></Loading>
				) : (
					<BoxContent>
						<Title>Marvel</Title>

						<MainContent>
							<MainImgDiv></MainImgDiv>

							<MainTitleDiv>Spider-Man SIRES</MainTitleDiv>
						</MainContent>
						{ImgFile.map((i, index) => {
							return (
								<Link to={`/${i.title}`}>
									<Box key={index}>
										<img src={i.img}></img>
										<p>{i.title}</p>
									</Box>
								</Link>
							);
						})}
					</BoxContent>
				)}
			</Content>
		</Wrapper>
	);
}

export default Home;
