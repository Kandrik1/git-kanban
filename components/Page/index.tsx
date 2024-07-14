import {PropsWithChildren} from "react";
import {PageConfig} from "../../types/global";
import Head from "next/head";

export default function Page({children, title, withHeader}: PropsWithChildren<PageConfig>) {
    return (
        <div>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            <div className="relative w-full min-h-screen overflow-hidden">
                <div className="h-20 w-full bg-black text-white px-10 py-4 flex justify-between items-center">
                    {withHeader ? (
                        <p>Header</p>
                    ) : (<p>
                        None
                    </p>)}
                </div>
                {children}
            </div>
        </div>
    )
}