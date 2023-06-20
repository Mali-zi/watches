export interface IWatch {
  id: number,
  name: string, 
  timeZone: number,
}
export interface IProps1 {
  name: string, 
  setName: (val: string) => void, 
  timeZone: number, 
  setTimeZone: (val: number) => void, 
  handleClick: () => void,
};
export interface IProps2 {
  watches: IWatch[], 
  setWatches: (val: IWatch[]) => void,
  time: Date,
};
export interface ButtonProps {
  handleDelete: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export interface IProps3 {
  time: Date;
  timeZone: number, 
}
