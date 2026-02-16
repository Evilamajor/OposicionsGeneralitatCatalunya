import { useNavigate } from 'react-router-dom';
import './BusinessEnglishFitxes.css';

/**
 * BusinessEnglishFitxes – 7 fitxes d'estudi per al bloc Business English.
 * Segueix l'estructura visual de PlataformaPSCP (Bloc IV Fitxes).
 */

const FITXES = [
  {
    numero: 1,
    key: 'meetings',
    title: 'Meetings',
    icon: '🤝',
    sections: [
      {
        heading: 'Opening a meeting',
        items: [
          { label: 'Key expressions', content: '"Let\'s get started." · "Thank you all for coming." · "The purpose of today\'s meeting is to…"' },
          { label: 'Useful vocabulary', content: 'agenda, minutes, chairperson, attendees, quorum' },
          { label: 'Example', content: '"Good morning everyone. Shall we begin? The first item on the agenda is…"' },
        ],
      },
      {
        heading: 'During the meeting',
        items: [
          { label: 'Key expressions', content: '"Moving on to the next point…" · "Could you elaborate on that?" · "I\'d like to add…"' },
          { label: 'Useful vocabulary', content: 'motion, second, table (a topic), raise a point, adjourn' },
          { label: 'Example', content: '"If I may interrupt — I think we should consider the budget implications before proceeding."' },
        ],
      },
      {
        heading: 'Ending the meeting',
        items: [
          { label: 'Key expressions', content: '"To sum up…" · "Are there any other points?" · "Let\'s schedule a follow-up."' },
          { label: 'Useful vocabulary', content: 'action items, follow-up, deadline, wrap up, adjourn' },
          { label: 'Example', content: '"Thank you for your contributions. The minutes will be circulated by Friday."' },
        ],
      },
    ],
  },
  {
    numero: 2,
    key: 'presentations',
    title: 'Presentations',
    icon: '📊',
    sections: [
      {
        heading: 'Introduction',
        items: [
          { label: 'Signposting language', content: '"I\'d like to begin by…" · "My talk is divided into three parts." · "First, I\'ll outline…"' },
          { label: 'Professional tone', content: '"Good afternoon. I\'m here today to present our annual report on public procurement."' },
          { label: 'Useful vocabulary', content: 'overview, outline, objective, scope, background' },
        ],
      },
      {
        heading: 'Body of a presentation',
        items: [
          { label: 'Transition expressions', content: '"Now let\'s turn to…" · "This brings us to…" · "As you can see from this chart…"' },
          { label: 'Key expressions', content: '"A key finding is…" · "It\'s worth noting that…" · "Let me illustrate this with an example."' },
          { label: 'Example', content: '"Moving on to the second point — as the graph shows, digital service adoption has increased by 35%."' },
        ],
      },
      {
        heading: 'Ending a presentation',
        items: [
          { label: 'Key expressions', content: '"In conclusion…" · "To summarise the key takeaways…" · "I\'d be happy to take any questions."' },
          { label: 'Professional tone', content: '"Thank you for your attention. I\'m now open to questions or comments."' },
          { label: 'Useful vocabulary', content: 'wrap up, summarise, Q&A, takeaway, next steps' },
        ],
      },
    ],
  },
  {
    numero: 3,
    key: 'telephone',
    title: 'Telephone Skills',
    icon: '📞',
    sections: [
      {
        heading: 'Answering professionally',
        items: [
          { label: 'Key expressions', content: '"Good morning, Department of Finance. How may I help you?" · "This is [name] speaking."' },
          { label: 'Useful vocabulary', content: 'switchboard, extension, hold the line, put through, caller' },
          { label: 'Example', content: '"Good afternoon, Human Resources Department. Maria speaking. How can I assist you?"' },
        ],
      },
      {
        heading: 'Transferring calls',
        items: [
          { label: 'Key expressions', content: '"I\'ll put you through to…" · "Let me transfer you to the relevant department." · "Please hold while I connect you."' },
          { label: 'Useful vocabulary', content: 'redirect, connect, transfer, extension number, department' },
        ],
      },
      {
        heading: 'Taking messages',
        items: [
          { label: 'Key expressions', content: '"I\'m afraid she\'s not available at the moment. May I take a message?" · "Could I have your contact details?"' },
          { label: 'Useful vocabulary', content: 'callback, voicemail, return a call, leave a message, noted' },
        ],
      },
      {
        heading: 'Handling difficult calls',
        items: [
          { label: 'Key expressions', content: '"I understand your concern." · "Let me look into this for you." · "I apologise for the inconvenience."' },
          { label: 'Useful vocabulary', content: 'escalate, resolve, complaint, follow up, acknowledge' },
          { label: 'Example', content: '"I\'m sorry to hear about this issue. Let me take your reference number and escalate it to the responsible team."' },
        ],
      },
    ],
  },
  {
    numero: 4,
    key: 'videoconference',
    title: 'Videoconference & Discussions',
    icon: '💻',
    sections: [
      {
        heading: 'Managing turn-taking',
        items: [
          { label: 'Key expressions', content: '"I\'d like to hear from…" · "Shall we go around the table?" · "Please go ahead."' },
          { label: 'Useful vocabulary', content: 'moderator, participant, mute, unmute, raise hand' },
        ],
      },
      {
        heading: 'Interrupting politely',
        items: [
          { label: 'Key expressions', content: '"Sorry to interrupt, but…" · "If I may just add…" · "Could I come in here?"' },
          { label: 'Example', content: '"Excuse me — before we move on, I\'d like to raise a point about the timeline."' },
        ],
      },
      {
        heading: 'Agreeing / Disagreeing',
        items: [
          { label: 'Agreeing', content: '"I completely agree." · "That\'s a very good point." · "I\'m in favour of that proposal."' },
          { label: 'Disagreeing', content: '"I see your point, but…" · "I\'m not entirely convinced." · "With all due respect, I think…"' },
          { label: 'Useful vocabulary', content: 'consensus, compromise, proposal, counter-argument, standpoint' },
        ],
      },
      {
        heading: 'Technical issues phrases',
        items: [
          { label: 'Key expressions', content: '"I think you\'re on mute." · "We seem to have a connection issue." · "Could you repeat that? The audio dropped."' },
          { label: 'Useful vocabulary', content: 'bandwidth, screen share, lag, frozen screen, reconnect, breakout room' },
        ],
      },
    ],
  },
  {
    numero: 5,
    key: 'correspondence',
    title: 'Internal Correspondence',
    icon: '✉️',
    sections: [
      {
        heading: 'Formal email structure',
        items: [
          { label: 'Key expressions', content: '"Dear Mr/Ms…" · "I am writing to inform you that…" · "Please find attached…"' },
          { label: 'Useful vocabulary', content: 'subject line, recipient, CC, BCC, attachment, signature block' },
          { label: 'Example', content: '"Dear Ms García, I am writing with regard to your request dated 10 January. Please find the relevant documentation attached."' },
        ],
      },
      {
        heading: 'Semi-formal tone',
        items: [
          { label: 'Key expressions', content: '"Hi [Name]," · "Just a quick note to…" · "Thanks for getting back to me."' },
          { label: 'Example', content: '"Hi Joan, Thanks for the update. I\'ve reviewed the document and have a few comments — see below."' },
        ],
      },
      {
        heading: 'Requesting information',
        items: [
          { label: 'Key expressions', content: '"Could you please provide…" · "I would appreciate it if…" · "Would it be possible to…"' },
          { label: 'Useful vocabulary', content: 'clarify, specify, deadline, at your earliest convenience, further details' },
        ],
      },
      {
        heading: 'Confirmations',
        items: [
          { label: 'Key expressions', content: '"I can confirm that…" · "This is to acknowledge receipt of…" · "As agreed in our meeting…"' },
        ],
      },
      {
        heading: 'Attachments',
        items: [
          { label: 'Key expressions', content: '"Please find attached…" · "I have enclosed…" · "The attached document contains…"' },
          { label: 'Useful vocabulary', content: 'enclosed, herewith, appendix, annex, supporting documentation' },
        ],
      },
    ],
  },
  {
    numero: 6,
    key: 'invitations',
    title: 'Invitations, Suggestions & Complaints',
    icon: '📝',
    sections: [
      {
        heading: 'Making invitations',
        items: [
          { label: 'Key expressions', content: '"We would like to invite you to…" · "You are cordially invited to attend…" · "We hope you will be able to join us."' },
          { label: 'Useful vocabulary', content: 'venue, RSVP, attendance, guest list, confirm participation' },
        ],
      },
      {
        heading: 'Making suggestions',
        items: [
          { label: 'Key expressions', content: '"I would suggest that…" · "How about…?" · "One option might be to…" · "Have you considered…?"' },
          { label: 'Example', content: '"I would suggest scheduling a follow-up meeting to review the progress before the deadline."' },
        ],
      },
      {
        heading: 'Responding to suggestions',
        items: [
          { label: 'Accepting', content: '"That\'s a great idea." · "I think that would work well." · "Let\'s go with that."' },
          { label: 'Declining', content: '"I appreciate the suggestion, however…" · "That might not be feasible because…" · "Perhaps we could consider an alternative."' },
        ],
      },
      {
        heading: 'Making complaints diplomatically',
        items: [
          { label: 'Key expressions', content: '"I am writing to express my concern regarding…" · "Unfortunately, the service did not meet expectations." · "I would appreciate a prompt resolution."' },
          { label: 'Useful vocabulary', content: 'dissatisfaction, inconvenience, rectify, compensate, formal complaint' },
        ],
      },
      {
        heading: 'Responding to complaints',
        items: [
          { label: 'Key expressions', content: '"Thank you for bringing this to our attention." · "We sincerely apologise for…" · "We are taking steps to ensure this does not happen again."' },
          { label: 'Useful vocabulary', content: 'acknowledge, remedy, goodwill gesture, corrective action, assurance' },
          { label: 'Example', content: '"Thank you for your feedback. We have investigated the matter and would like to offer the following resolution…"' },
        ],
      },
    ],
  },
  {
    numero: 7,
    key: 'openings-closings',
    title: 'Openings & Closings',
    icon: '🔖',
    sections: [
      {
        heading: 'Email openings',
        items: [
          { label: 'Formal', content: '"Dear Sir/Madam," · "Dear Mr/Ms [Surname]," · "To whom it may concern,"' },
          { label: 'Semi-formal', content: '"Dear [First name]," · "Hello [Name]," · "Good morning/afternoon,"' },
          { label: 'After opening', content: '"I hope this email finds you well." · "Further to our conversation…" · "With reference to…"' },
        ],
      },
      {
        heading: 'Email closings',
        items: [
          { label: 'Before sign-off', content: '"Please do not hesitate to contact me." · "I look forward to hearing from you." · "Thank you for your time and consideration."' },
          { label: 'Useful vocabulary', content: 'at your convenience, in due course, prompt reply, further clarification' },
        ],
      },
      {
        heading: 'Formal vs semi-formal endings',
        items: [
          { label: 'Formal', content: '"Yours faithfully," (unknown recipient) · "Yours sincerely," (known recipient)' },
          { label: 'Semi-formal', content: '"Kind regards," · "Best regards," · "Many thanks,"' },
          { label: 'Note', content: 'In public administration correspondence, "Yours sincerely" or "Kind regards" are the most commonly used closings.' },
        ],
      },
      {
        heading: 'Professional sign-offs',
        items: [
          { label: 'Standard', content: '"Best regards, [Full name] · [Position] · [Department] · [Contact details]"' },
          { label: 'With disclaimer', content: '"This email is intended solely for the addressee. If you have received it in error, please notify the sender immediately."' },
          { label: 'Useful vocabulary', content: 'disclaimer, confidentiality notice, digital signature, position title, department' },
        ],
      },
    ],
  },
];

export default function BusinessEnglishFitxes() {
  const navigate = useNavigate();

  return (
    <div className="be-fitxes">
      {/* Header */}
      <div className="be-fitxes-header">
        <h2 className="be-fitxes-title">Business English — Fitxes d&rsquo;estudi</h2>
        <p className="be-fitxes-subtitle">
          Anglès professional per a la gestió pública: expressions, vocabulari i exemples pràctics.
        </p>
      </div>

      {/* Cards grid */}
      <div className="be-fitxes-grid">
        {FITXES.map((fitxa) => (
          <div
            key={fitxa.key}
            className="be-fitxes-card be-fitxes-card--clickable"
            onClick={() => navigate(`/bloc/business-english/fitxes/${fitxa.key}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(`/bloc/business-english/fitxes/${fitxa.key}`)}
          >
            <div className="be-fitxes-card-icon">{fitxa.icon}</div>
            <h3 className="be-fitxes-card-title">
              Fitxa {fitxa.numero}: {fitxa.title}
            </h3>
            <div className="be-fitxes-card-body">
              {fitxa.sections.map((section, sIdx) => (
                <div key={sIdx} className="be-fitxes-section">
                  <h4 className="be-fitxes-section-heading">{section.heading}</h4>
                  <ul>
                    {section.items.map((item, iIdx) => (
                      <li key={iIdx}>
                        <strong>{item.label}:</strong>{' '}
                        <span className="be-fitxes-item-content">{item.content}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
