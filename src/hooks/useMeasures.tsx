import { useQuery } from "@tanstack/react-query";
import { MeasureData } from "@/data-model";
import { measureApi } from "@/api/supabase/measure-api";

export class Measure {
  constructor(readonly _measure: MeasureData) {}

  get id() {
    return this._measure.id;
  }

  get name() {
    return this._measure.unit_name;
  }

  get shortName() {
    return this._measure.abbreviation;
  }

  get extendedName() {
    return `${this.name} (${this.shortName})`;
  }

  static fromData(data: MeasureData) {
    return new Measure(data);
  }
}

export const useMeasures = () => {
  const measures = useQuery({
    queryKey: ["measures"],
    queryFn: async () => {
      const data = await measureApi.getAll();
      const measures = data.map(Measure.fromData);
      return measures;
    },
  });

  return measures;
};
