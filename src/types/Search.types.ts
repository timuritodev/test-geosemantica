import { IData } from "./Addres.types";

export interface ISearch {
  coordinates: string;
}

export interface ISearchState {
  status: "idle" | "success" | "loading" | "failed";
  error: string | undefined;
  address: IData;
}
