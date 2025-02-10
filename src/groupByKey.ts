type GroupsMap<T> = {
  [key: string]: T[];
};

type ObjStrKeys = {
  [key: string]: string | number;
};

export function groupByKey<T extends ObjStrKeys>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((element) => {
    const groupKey = String(element[key]);

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(element);
  });

  return result;
}
