interface IPage {
  title: string;
  text: string;
}
export interface News {
  id: number;
  header: string;
  date: string;
  imageSrc: string;
  page: IPage;
}
