import { MeasureData } from "@/data-model";
import { BaseApi } from "./base-api";

class MeasureApi extends BaseApi<MeasureData> {
  constructor() {
    super("Measures");
  }
}

export const measureApi = new MeasureApi();
