export type TCallBack = { (...args: any): void };
export enum TContentType {
	JSON,
	IMG,
}

export interface IContentData {
	url: string;
	type: TContentType;

	callBack: TCallBack;
	postProcess(data: any): any;
}

export class GithubData implements IContentData {
	public type: TContentType = TContentType.JSON;
	constructor(public url: string, public callBack: TCallBack) {
		this.callBack = (data: any) => {
			callBack(this.postProcess(data));
		};
	}

	postProcess(data: any) {
		return data;
	}
}
export class ImgData implements IContentData {
	public type: TContentType = TContentType.IMG;
	constructor(public url: string, public callBack: TCallBack) {
		this.callBack = (data: any) => {
			callBack(this.postProcess(data));
		};
	}

	postProcess(data: any) {
		return data;
	}
}

export default IContentData;
