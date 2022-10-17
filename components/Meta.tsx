import Head from "next/head";
import React from "react";

type MetaType = {
    title: string;
    description?: string;
};

function Meta({ title, description }: MetaType) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
    );
}

export default Meta;
