export async function to<T>(
  prom: Promise<T>
): Promise<[undefined, T] | [any, null]> {
  return prom
    .then((data) => [undefined, data] as [undefined, T])
    .catch((err) => [err, null]);
}
