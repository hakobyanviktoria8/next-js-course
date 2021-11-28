import React from "react";
import {useRouter} from "next/router";
import Head from "next/head";

const Course = () => {
    const route = useRouter();
    const query = route.query.id
    console.log(route, "route")

    return (
        <div>
            <Head>
                <title>{query}</title>
            </Head>
            Every Course {query}
        </div>
    )
};

export default Course