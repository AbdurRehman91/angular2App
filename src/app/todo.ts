export class NewTask 
{
  id: number;
  title: string = '';
  description: string = '';
  dateCreated: string = '';
  dateUpdated: string = '';
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
