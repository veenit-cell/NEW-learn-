import React from "react";
import {
  AlignCenter,
  AlignLeft,
  Bell,
  Bold,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  Download,
  Eye,
  FileText,
  HelpCircle,
  Italic,
  LayoutDashboard,
  List,
  Mail,
  MessageCircle,
  MoreHorizontal,
  PenLine,
  Plus,
  Search,
  Sparkles,
  Underline,
  User
} from "lucide-react";

const sidebarItems = [
  { label: "Profile", icon: User, active: true },
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Resume Templates", icon: FileText },
  { label: "My Resumes", icon: FileText, badge: "Active: Professional PDF" },
  { label: "Cover Letters", icon: Mail },
  { label: "Job Search", icon: Briefcase },
  { label: "Help", icon: HelpCircle }
];

const toolbarActions = [
  { label: "Switch Template", icon: PenLine },
  { label: "AI Review", icon: Sparkles },
  { label: "Live Preview", icon: Eye },
  { label: "Check Grammar", icon: CheckCircle2 }
];

const competencies = ["Core Competencies", "Tags", "Past Companies", "Ecommerce", "Solutions"];

const skillBars = [
  { label: "Raising skills", value: 82 },
  { label: "Renewing skills", value: 76 },
  { label: "Upscaling rating", value: 68 },
  { label: "Persuasion", value: 88 }
];

const suggestions = [
  "Add mentoring and enabling customer adoption in descriptions.",
  "Add cross-functional sessions, analysis and feedback signals.",
  "Mention success assets and ability to derive and tailor solutions.",
  "Add to subtitle with an exception and enrich text editor."
];

function App() {
  return (
    <main className="resume-app">
      <aside className="sidebar" aria-label="ResumeForge navigation">
        <a className="brand" href="#top" aria-label="ResumeForge home">
          <span className="brand-mark">R</span>
          <span>ResumeForge</span>
        </a>

        <button className="account-switcher" type="button">
          <span className="avatar avatar-small">A</span>
          <span>
            Accessom
            <small>Workspace</small>
          </span>
          <ChevronDown size={16} />
        </button>

        <nav className="side-nav">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <a className={item.active ? "nav-item active" : "nav-item"} href="#top" key={item.label}>
                <Icon size={18} />
                <span>
                  {item.label}
                  {item.badge && <small>{item.badge}</small>}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="profile-card">
          <span>Profile Status:</span>
          <strong>85% Complete</strong>
          <small>(Update Contact)</small>
          <div className="progress-track" aria-hidden="true">
            <span style={{ width: "85%" }} />
          </div>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar" id="top">
          <div className="search-box">
            <Search size={17} />
            <input aria-label="Search resumes" placeholder="Search resumes, jobs, templates..." />
          </div>
          <button className="icon-button" type="button" aria-label="Notifications">
            <Bell size={19} />
            <span />
          </button>
        </header>

        <section className="builder-header">
          <div>
            <p className="eyebrow">Resume Builder</p>
            <h1>Alex Johnson - Senior Project Manager</h1>
          </div>
          <button className="primary-button mobile-download" type="button">
            <Download size={17} />
            Download PDF
          </button>
        </section>

        <section className="toolbar" aria-label="Builder tools">
          <div className="toolbar-group">
            {toolbarActions.map((action) => {
              const Icon = action.icon;
              return (
                <button type="button" key={action.label}>
                  <Icon size={15} />
                  {action.label}
                </button>
              );
            })}
          </div>
          <div className="toolbar-group align-right">
            <label>
              <span>Font</span>
              <select aria-label="Font">
                <option>Lato</option>
                <option>Inter</option>
                <option>Georgia</option>
              </select>
            </label>
            <label>
              <span>Style</span>
              <select aria-label="Style">
                <option>Professional</option>
                <option>Modern</option>
                <option>Minimal</option>
              </select>
            </label>
            <button className="primary-button desktop-download" type="button">
              <Download size={16} />
              Download PDF
            </button>
          </div>
        </section>

        <div className="builder-grid">
          <ResumePreview />
          <EditPanel />
        </div>
      </section>

      <button className="chat-button" type="button" aria-label="Open support chat">
        <MessageCircle size={24} />
      </button>
    </main>
  );
}

function ResumePreview() {
  return (
    <article className="resume-paper" aria-label="Resume preview">
      <header className="resume-hero">
        <span className="avatar avatar-large">AJ</span>
        <div>
          <h2>Alex Johnson</h2>
          <p>Senior Project Manager</p>
          <ul>
            <li>+1 423-215-9839</li>
            <li>resume@gmail.com</li>
            <li>linkedin.com/alexj</li>
          </ul>
        </div>
        <span className="clarity-score">Executive Clarity</span>
      </header>

      <ResumeSection title="Summary">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Strong coordination, stakeholder
          communication and delivery focus across product, operations and customer success teams.
        </p>
      </ResumeSection>

      <ResumeSection title="Core Competencies">
        <div className="pill-list">
          {competencies.map((competency) => (
            <span key={competency}>{competency}</span>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Experience">
        <div className="resume-row">
          <h3>TechForward Inc.</h3>
          <span>July 2015 - Nov 2015</span>
        </div>
        <ul className="resume-bullets">
          <li>Led operational projects across customer, product and finance stakeholders.</li>
          <li>Designed delivery dashboards and helped teams resolve blockers faster.</li>
          <li>Improved executive reporting and reduced manual follow-up cycles.</li>
        </ul>
      </ResumeSection>

      <ResumeSection title="Education">
        <h3>University of California</h3>
        <p>University of California, Education</p>
      </ResumeSection>

      <ResumeSection title="Skills">
        <div className="skill-grid">
          {skillBars.map((skill) => (
            <div className="skill-row" key={skill.label}>
              <span>{skill.label}</span>
              <div className="mini-track">
                <span style={{ width: `${skill.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </ResumeSection>
    </article>
  );
}

function ResumeSection({ title, children }) {
  return (
    <section className="resume-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function EditPanel() {
  return (
    <aside className="edit-panel" aria-label="Edit experience">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Edit Experience</p>
          <h2>TechForward Inc.</h2>
        </div>
        <button className="ghost-icon" type="button" aria-label="More options">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <label className="field-label">
        Company
        <input value="TechForward Inc." readOnly />
      </label>

      <div className="editor-card">
        <div className="format-bar" aria-label="Formatting tools">
          {[Bold, Italic, Underline, AlignLeft, AlignCenter, List].map((Icon, index) => (
            <button type="button" key={index} aria-label={`Format option ${index + 1}`}>
              <Icon size={15} />
            </button>
          ))}
        </div>
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion}>{suggestion}</li>
          ))}
        </ul>
      </div>

      <div className="suggestion-footer">
        <button className="secondary-button" type="button">
          Add to
        </button>
        <button className="ghost-icon" type="button" aria-label="More suggestions">
          <MoreHorizontal size={18} />
        </button>
        <button className="primary-button" type="button">
          <Plus size={16} />
          Add
        </button>
      </div>
    </aside>
  );
}

export default App;
