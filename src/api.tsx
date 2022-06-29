import md5 from "md5";

export const publicKey = "caa49ff91d303d668440678b64c5d9ee";
export const privateKey = `a1555a12f90da8b7f7b3c2db2c64c5043cd92b8f`;

export const time = Number(new Date());
export const hash = md5(time + privateKey + publicKey);
export interface MarvelApi {
	comics: {
		available: number;
		collectionURI: string;
		items: [];
		returned: number;
	};
	events: {
		available: number;
		collectionURI: string;
		items: [];
		returned: number;
	};
	id: number;
	modified: string;
	name: string;
	resourceURI: string;
	series: {
		available: number;
		collectionURI: string;
		items: [];
		returned: number;
	};
	stories: {
		available: number;
		collectionURI: string;
		items: [];
		returned: number;
	};
	thumbnail: { path: string; extension: string };
	urls: [];
}

export interface MarvelInfo {

	data: {
		offset: number;
		limit: number;
		total: number;
		count: number;
		results: [
			{
				id: number;
				name: string;
				description: string;
				modified: string;
				thumbnail: {
					path: string;
					extension: string;
				};
				resourceURI: string;
				comics: {
					available: number;
					collectionURI: string;
					items: [
						{
							resourceURI: string;
							name: string;
						},
						{
							resourceURI: string;
							name: string;
						},
						{
							resourceURI: string;
							name: string;
						},
						{
							resourceURI: string;
							name: string;
						},
						{
							resourceURI: string;
							name: string;
						},
						{
							resourceURI: string;
							name: string;
						},
						{
							resourceURI: string;
							name: string;
						},
						{
							resourceURI: string;
							name: string;
						},
						{
							resourceURI: string;
							name: string;
						},
						{
							resourceURI: string;
							name: string;
						},
						{
							resourceURI: string;
							name: string;
						},
						{
							resourceURI: string;
							name: string;
						}
					];
					returned: number;
				};
				series: {
					available: number;
					collectionURI: string;
					items: [
						{
							resourceURI: string;
							name: string;
						},
						{
							resourceURI: string;
							name: string;
						},
						{
							resourceURI: string;
							name: string;
						}
					];
					returned: number;
				};
				stories: {
					available: number;
					collectionURI: string;
					items: [
						{
							resourceURI: string;
							name: string;
							type: string;
						},
						{
							resourceURI: string;
							name: string;
							type: string;
						},
						{
							resourceURI: string;
							name: string;
							type: string;
						},
						{
							resourceURI: string;
							name: string;
							type: string;
						},
						{
							resourceURI: string;
							name: string;
							type: string;
						},
						{
							resourceURI: string;
							name: string;
							type: string;
						},
						{
							resourceURI: string;
							name: string;
							type: string;
						},
						{
							resourceURI: string;
							name: string;
							type: string;
						},
						{
							resourceURI: string;
							name: string;
							type: string;
						},
						{
							resourceURI: string;
							name: string;
							type: string;
						},
						{
							resourceURI: string;
							name: string;
							type: string;
						},
						{
							resourceURI: string;
							name: string;
							type: string;
						},
						{
							resourceURI: string;
							name: string;
							type: string;
						},
						{
							resourceURI: string;
							name: string;
							type: string;
						},
						{
							resourceURI: string;
							name: string;
							type: string;
						},
						{
							resourceURI: string;
							name: string;
							type: string;
						},
						{
							resourceURI: string;
							name: string;
							type: string;
						},
						{
							resourceURI: string;
							name: string;
							type: string;
						},
						{
							resourceURI: string;
							name: string;
							type: string;
						},
						{
							resourceURI: string;
							name: string;
							type: string;
						}
					];
					returned: number;
				};
				events: {
					available: number;
					collectionURI: string;
					items: [
						{
							resourceURI: string;
							name: string;
						}
					];
					returned: number;
				};
				urls: [
					{
						type: string;
						url: string;
					},
					{
						type: string;
						url: string;
					},
					{
						type: string;
						url: string;
					}
				];
			}
		];
	};
}

