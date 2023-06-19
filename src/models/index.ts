export interface IExercise {
  id: number,
  date: string, 
  distance: string
}

export interface IProps {
  name: string, 
  setName: (val: string) => void, 
  timeZone: number, 
  setTimeZone: (val: number) => void, 
  handleClick: () => void
};

export interface ButtonProps {
  handleDelete: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}