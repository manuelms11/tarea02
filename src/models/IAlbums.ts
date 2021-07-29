import IPhoto from "./IPhoto";

export default interface IAlbums{
    userId: number;
    id:     number;
    title:  string;
    thumbnaiUrl?: string;
    url?:  string;
}