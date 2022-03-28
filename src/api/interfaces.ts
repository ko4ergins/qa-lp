export interface IApiRes {
   ok: boolean;
   json: { [key: string]: any };
   status: number;
}

export interface IApiErr extends Omit<IApiRes, 'json'> {
   json: { detail: string };
}
