export class Subject {
  public Articles: any[];
  public Description: string;
  public ID: string;
  public IconName: string;
  public IsDelete: number;
  public QuestAnswers: any[];
  public Title: string;
  public Index: number;
  public SubjectType: number;
  public Videos: any[];

  constructor(id: string = '', title: string = '', iconName: string = '') {
    this.ID = id;
    this.Title = title;
    this.IconName = iconName;
  }
}
