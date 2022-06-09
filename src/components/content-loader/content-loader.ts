import {
	IContentData,
	TContentType,
} from "@/components/content-loader/content-data";

class ContentLoader {
	private _queue: IContentData[] = [];

	constructor() {}

	public Add(data: IContentData): void {
		this._queue.push(data);
	}

	public Run(): boolean {
		const query: IContentData | undefined = this._queue.pop();
		if (!query) return false;

		this[query.type === TContentType.IMG ? "imgQuery" : "jsonQuery"](query)
			.then((data) => {
				query.callBack(data);
				this.Run();
			})
			.catch((reason) => console.log(reason));
		return false;
	}

	private async jsonQuery(query: IContentData): Promise<object> {
		const response = await fetch(query.url).then((response) =>
			response.json()
		);
		return {
			query,
			response,
		};
	}

	private async imgQuery(query: IContentData): Promise<object> {
		const response = await this.preloadImage(query.url).then(
			(response) => "loaded"
		);
		return {
			query,
			response,
		};
	}

	private preloadImage(src: string) {
		return new Promise((r) => {
			const image = new Image();
			image.onload = r;
			image.onerror = r;
			image.src = src;
		});
	}
}

export default ContentLoader;
