"use client";

import { ReactNode } from "react";
import { SWRConfig } from "swr";
import { fetcher } from "@/shared/api";

export const SWRProvider = ({ children }: { children: ReactNode }) => {
    return <SWRConfig value={{ fetcher: fetcher }}>{children}</SWRConfig>;
};
