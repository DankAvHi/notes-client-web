"use client";

import { SWRConfig } from "swr";
import { fetcher } from "@/shared";
import { ReactNode } from "react";

export const SWRProvider = ({ children }: { children: ReactNode }) => {
    return <SWRConfig value={{ fetcher: fetcher }}>{children}</SWRConfig>;
};
