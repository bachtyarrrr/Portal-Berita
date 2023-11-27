import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewList from "@/Components/Homepage/NewList";
import Paginator from "@/Components/Homepage/Paginator";

export default function Homepage(props) {
    console.log(props)
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                <NewList news={props.news.data} />
            </div>
            <div className="flex justify-center items-center">
                <Paginator />
            </div>
        </div>
    );
}
