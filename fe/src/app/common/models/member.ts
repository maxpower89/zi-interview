export interface Member {
  id: string;
  name: string;
  email?:string;
  imageUrl?: string;
  description?: string;
  selected?: boolean;
}
