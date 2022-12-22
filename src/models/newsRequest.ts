interface IPage {
  title: string;
  text: string;
}
export interface CreateNewsRequest {
  header: string;
  date: string;
  imageSrc: string;
  page: IPage;
}
