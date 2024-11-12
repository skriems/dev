/// remix utility types

declare global {
  /** Gives you the infered type from the loader's json response.
   *
   * similar to how `useLoaderData<typeof loader>` does it.
   *
   * @example
   * type MyResponseData = LoaderData<typeof loader>
   */
  // the any is needed, otherwise TS cannot properly infer the type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type LoaderData<T> = T extends (...args: any[]) => infer ReturnValue
    ? ReturnValue extends Promise<infer Response>
    ? Response extends { json: () => Promise<infer Json> }
    ? Awaited<Json>
    : never
    : never
    : never
}

export { }
