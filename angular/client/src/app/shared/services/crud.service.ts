import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ApiService } from './api.service';

export abstract class CrudService {
  protected listSource = new BehaviorSubject<[]>([]);

  list$ = this.listSource.asObservable();

  constructor(protected api: ApiService, protected path: string) {}

  create(obj: Object): Observable<any> {
    return this.api.post(this.path, obj);
  }

  update(obj: Object): Observable<any> {
    return this.api.put(this.path, obj);
  }

  findOne(id: string): Observable<any> {
    return this.api.get(`${this.path}/${id}`);
  }

  findAll(args?: any): Observable<any> {
    return this.api
      .get(this.path, args)
      .pipe(tap((data) => this.listSource.next(data)));
  }

  delete(id: string): Observable<any> {
    return this.api.delete(`${this.path}/${id}`);
  }

  disable(id: string): Observable<any> {
    return this.api.put(`${this.path}/disable/${id}`);
  }

  clear() {
    this.listSource.next([]);
  }
}
