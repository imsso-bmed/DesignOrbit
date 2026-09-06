import Link from "next/link";import Article from "./article";
export default function Page(){return <main><header className="header"><Link className="brand" href="/">DESIGN ORBIT</Link><nav><Link href="/journal">Journal</Link><a href="mailto:designorbitkr@gmail.com">Contact</a></nav></header><Article/></main>}
