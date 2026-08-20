import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./LandingPage.css";

const journey = [
  ["01", "Create Profile", "Candidate registration, role selection and secure account verification."],
  ["02", "Build Background", "Education, current employer and previous employer details in one guided flow."],
  ["03", "Upload Evidence", "Identity, academic and employment documents attached to the candidate profile."],
  ["04", "HR Verification", "Review, approve, reject, re-upload and track the complete verification trail."],
];

export default function LandingPage() {
  return <>
    <Navbar />
    <main className="vx-landing vx-reference-home">
      <section className="vx-ref-hero">
        <div className="vx-ref-hero-orb" aria-hidden="true" />
        <div className="vx-ref-dot-cloud vx-ref-dots-one" aria-hidden="true" />
        <div className="vx-ref-dot-cloud vx-ref-dots-two" aria-hidden="true" />

        <div className="vx-ref-copy page-enter">
          <div className="vx-ref-eyebrow"><span /> Smart Candidate Verification Platform</div>
          <h1>From Application To <span>Verified Confidence.</span></h1>
          <p>Verify-X brings Candidate Onboarding, Education and Employment Details, Document Intelligence and HR Verification into one polished workflow.</p>
          <div className="vx-ref-actions">
            <Link to="/candidate-login" className="vx-ref-btn vx-ref-btn-primary">Candidate Login</Link>
            <Link to="/admin-login" className="vx-ref-btn vx-ref-btn-light">HR Login</Link>
          </div>
          <div className="vx-ref-trust">
            <span>✓ Guided Onboarding</span>
            <span>✓ Smart Document Extraction</span>
            <span>✓ Local Workflow Persistence</span>
          </div>
        </div>

        <div className="vx-ref-illustration page-enter" aria-hidden="true">
          <div className="vx-ref-person person-left"><i className="head"/><i className="body"/><i className="leg leg-a"/><i className="leg leg-b"/></div>
          <div className="vx-ref-person person-right"><i className="head"/><i className="body"/><i className="leg leg-a"/><i className="leg leg-b"/></div>
          <div className="vx-ref-folder"><span className="folder-tab"/><span className="folder-body"/></div>
          <div className="vx-ref-document"><span/><span/><span/><span/></div>
          <div className="vx-ref-search-mark">✓</div>
          <div className="vx-ref-plant"><i/><i/><i/></div>
        </div>
      </section>

      <section className="vx-ref-strip">
        <span>Candidate Onboarding</span><i>•</i><span>Education Verification</span><i>•</i><span>Employment History</span><i>•</i><span>Document Review</span><i>•</i><span>HR Decision</span>
      </section>

      <section className="vx-ref-journey">
        <div className="vx-ref-journey-top">
          <div className="vx-ref-section-copy">
            <span>How Verify-X Works</span>
            <h2>A verification Journey That <strong>Feels Simple.</strong></h2>
            <p>Every Step Is Structured So Candidates Know What To Do Next And HR Teams Get Cleaner, Review-Ready Information.</p>
          </div>
          <div className="vx-ref-process-art" aria-hidden="true">
            <div className="process-sheet"><i/><i/><i/></div>
            <div className="process-shield">✓</div>
            <span className="process-node node-a">●</span>
            <span className="process-node node-b">●</span>
            <span className="process-node node-c">●</span>
            <span className="process-node node-d">●</span>
          </div>
        </div>
        <div className="vx-ref-journey-grid">
          {journey.map(([n,t,d]) => <article key={n}>
            <span className="vx-ref-step-icon">{n}</span>
            <h3>{t}</h3>
            <p>{d}</p>
            <b className="vx-ref-arrow">→</b>
          </article>)}
        </div>
      </section>

      <section className="vx-ref-intelligence">
        <div className="vx-ref-intelligence-copy">
          <span>Document Intelligence</span>
          <h2>Upload Once.<br/>Fill Smarter.</h2>
          <p>The New Onboarding Flow Can Use Document Extraction To Populate Supported Fields From Academic Documents, Reducing Repeated Typing And Helping Candidates Review Information Before Submission.</p>
          <div className="vx-ref-mini-features"><span>Board & School</span><span>Roll Number</span><span>Passing Year</span><span>Percentage</span></div>
        </div>
        <div className="vx-ref-card-stack" aria-hidden="true">
          <div className="stack-card stack-back"/>
          <div className="stack-card stack-mid"/>
          <div className="stack-card stack-front"><i className="avatar"/><i/><i/><i/><strong>Auto-Filled ✓</strong></div>
          <div className="stack-check">✓</div>
        </div>
      </section>

      <section className="vx-ref-cta">
        <div className="vx-ref-cta-copy"><span>Ready To Continue?</span><h2>Choose your Verify-X Workspace.</h2></div>
        <Link to="/candidate-login" className="vx-ref-workspace-card"><i>●</i><div><h3>Candidate Login</h3><p>Build And Track Your Verified Profile</p><b>Continue →</b></div></Link>
        <Link to="/admin-login" className="vx-ref-workspace-card"><i>●●</i><div><h3>HR Login</h3><p>Review And Manage Candidate Checks</p><b>Continue →</b></div></Link>
      </section>
    </main>
    <Footer />
  </>;
}
