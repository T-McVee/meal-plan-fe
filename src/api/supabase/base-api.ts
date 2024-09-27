import { supabase } from "@/core/supaBaseClient";

export class BaseApi<T> {
  private readonly _listName: string;

  constructor(listName: string) {
    this._listName = listName;
  }

  async getAll(): Promise<T[]> {
    const { data, error } = await supabase.from(this._listName).select();

    if (error) {
      console.error(`Error fetching from ${this._listName}`, error);
      throw error;
    }

    return data;
  }

  async create(item: T): Promise<void> {
    const { error } = await supabase.from(this._listName).insert(item);

    if (error) {
      console.error(`Error creating ${this._listName}`, error);
      throw error;
    }
  }
}
