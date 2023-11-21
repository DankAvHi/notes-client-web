// eslint-disable-next-line @typescript-eslint/ban-types
type ArgumentTypes<F extends Function> = F extends (...args: infer A) => unknown ? A : never;

export const fetcher = async (...args: ArgumentTypes<typeof fetch>) => {
    const url = `http://localhost:3000/${args[0]}`;

    const init = args[1];

    const newArgs = [url, init] as const;

    return fetch(...newArgs).then((res) => res.json());
};
