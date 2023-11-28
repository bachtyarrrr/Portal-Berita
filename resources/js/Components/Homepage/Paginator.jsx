import { Link } from "@inertiajs/react";

const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="btn-group">
            {prev ?
                <Link href={prev} className="btn btn-outline">
                    «
                </Link> :
                <Link href={prev} className="btn btn-outline" disabled="true">
                    «
                </Link>
            }
            <button className="btn btn-outline cursor-default">{current}</button>
            {next ?
                <Link href={next} className="btn btn-outline">
                    »
                </Link> : <Link href={next} className="btn btn-outline" disabled="true">
                    »
                </Link>
            }
        </div>
    );
};

export default Paginator;
