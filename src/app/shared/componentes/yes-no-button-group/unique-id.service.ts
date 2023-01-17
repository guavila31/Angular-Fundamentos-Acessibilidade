import { Injectable } from "@angular/core";
import * as uuid from 'uuid'

@Injectable({providedIn: 'root'})
export class UniqueIdService {

  public generateUniqueIdWithPrefix(prefix: string): string {
    const uniqueId = this.generateIUniqueId();
    return `${prefix}-${uniqueId}`;
  }
  private generateIUniqueId(): string {
    return uuid.v1();
  }
}
