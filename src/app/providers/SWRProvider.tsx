"use client";

import { fetcher } from "@/shared/api";
import { ReactNode } from "react";
import { SWRConfig } from "swr";

export const SWRProvider = ({ children }: { children: ReactNode }) => {
    return <SWRConfig value={{ fetcher: fetcher }}>{children}</SWRConfig>;
};
