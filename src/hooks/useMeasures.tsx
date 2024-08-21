import { useQuery } from "@tanstack/react-query";

type MeasureData = {
  id: string;
  name: string;
  shortName?: string;
};

class Measure {
  constructor(readonly _measure: MeasureData) {}

  get id() {
    return this._measure.id;
  }

  get name() {
    return this._measure.name;
  }

  get shortName() {
    return this._measure.shortName;
  }

  get extendedName() {
    return `${this.name} (${this.shortName})`;
  }

  static fromData(data: MeasureData) {
    return new Measure(data);
  }
}

const measures: MeasureData[] = [
  {
    id: "1",
    name: "Grams",
    shortName: "g",
  },
  {
    id: "2",
    name: "Milliliters",
    shortName: "ml",
  },
  {
    id: "3",
    name: "Each",
    shortName: "ea",
  },
];

export const getMeasures = async (): Promise<Measure[]> => {
  return measures.map(Measure.fromData);
};

export const useMeasures = () => {
  return useQuery({
    queryKey: ["measures"],
    queryFn: getMeasures,
  });
};
