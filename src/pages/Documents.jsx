import Shell from'../components/Shell';
import{DOCS_FRESHER}from'../utils/constants';

export default function Documents(){return <Shell><div className="page-head"><h1>Document Upload</h1><p>Upload And Review Required Candidate Documents.</p></div><div className="feature-grid">{DOCS_FRESHER.map(d=><article key={d}><span>📄</span><h3>{d}</h3><p>Awaiting Upload</p><input type="file"/></article>)}</div></Shell>}
