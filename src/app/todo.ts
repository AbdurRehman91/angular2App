export class Task { 
 id: number;
  title: string = '';
  description: string = '';
  complete = false;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
