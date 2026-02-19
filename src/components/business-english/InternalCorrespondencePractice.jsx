import { NavLink } from 'react-router-dom';
import ReorderExercise from './ReorderExercise';
import './BusinessEnglishTheme.css';
import './InternalCorrespondencePractice.css';

const EXERCISE_SECTIONS = [
  {
    section: 'requesting',
    title: 'Requesting Information',
    instruction: 'Click the word blocks to build the sentence in the correct order.',
    sentences: [
      {
        correctSentence: 'Can you send me the updated budget report by Friday?',
        words: ['me', 'send', 'Friday?', 'the updated budget report', 'Can', 'by', 'you'],
      },
      {
        correctSentence: 'Could you please confirm receipt of the invoice?',
        words: ['confirm', 'the invoice?', 'please', 'receipt of', 'Could', 'you'],
      },
      {
        correctSentence: 'Would you be able to provide the latest sales figures?',
        words: ['provide', 'the latest sales figures?', 'to', 'Would', 'be able', 'you'],
      },
      {
        correctSentence: 'Can you clarify the deadline for submission?',
        words: ['clarify', 'the deadline', 'Can', 'submission?', 'for', 'you'],
      },
      {
        correctSentence: 'Could I have an update on the procurement process?',
        words: ['I', 'the procurement process?', 'have', 'Could', 'on', 'an update'],
      },
      {
        correctSentence: 'Would you mind sending the revised schedule?',
        words: ['sending', 'the revised schedule?', 'Would', 'mind', 'you'],
      },
      {
        correctSentence: 'Can you forward the contract details to me?',
        words: ['the contract details', 'forward', 'Can', 'to me?', 'you'],
      },
      {
        correctSentence: 'Could you share the final version of the report?',
        words: ['the final version', 'share', 'of the report?', 'Could', 'you'],
      },
      {
        correctSentence: 'May I request a copy of the signed agreement?',
        words: ['a copy', 'request', 'May', 'of the signed agreement?', 'I'],
      },
      {
        correctSentence: 'Would you please inform us of any changes?',
        words: ['please', 'inform us', 'of any changes?', 'Would', 'you'],
      },
    ],
  },
  {
    section: 'giving',
    title: 'Giving Information',
    instruction: 'Arrange the blocks to create a clear and professional statement.',
    sentences: [
      {
        correctSentence: 'Please find attached the updated document.',
        words: ['the updated document.', 'find', 'attached', 'Please'],
      },
      {
        correctSentence: 'I would like to inform you that the meeting has been rescheduled.',
        words: ['to inform you', 'I', 'that the meeting', 'has been rescheduled.', 'would like'],
      },
      {
        correctSentence: 'The report has been finalized and approved.',
        words: ['been finalized', 'The report', 'and approved.', 'has'],
      },
      {
        correctSentence: 'As requested, here is the revised version.',
        words: ['the revised version.', 'As requested,', 'is', 'here'],
      },
      {
        correctSentence: 'We have completed the review process.',
        words: ['the review process.', 'We', 'completed', 'have'],
      },
      {
        correctSentence: 'The contract will be signed tomorrow.',
        words: ['be signed', 'tomorrow.', 'The contract', 'will'],
      },
      {
        correctSentence: 'The budget has been updated accordingly.',
        words: ['updated', 'The budget', 'accordingly.', 'has been'],
      },
      {
        correctSentence: 'Kindly note that the deadline has changed.',
        words: ['that the deadline', 'Kindly', 'has changed.', 'note'],
      },
      {
        correctSentence: 'The issue has now been resolved.',
        words: ['has now', 'been resolved.', 'The issue'],
      },
      {
        correctSentence: 'Further information will be provided shortly.',
        words: ['will be provided', 'Further information', 'shortly.'],
      },
    ],
  },
  {
    section: 'meeting',
    title: 'Arranging a Meeting',
    instruction: 'Put each phrase into the right place to complete the meeting request.',
    sentences: [
      {
        correctSentence: 'Would you be available for a meeting next Tuesday?',
        words: ['next Tuesday?', 'Would', 'for a meeting', 'be available', 'you'],
      },
      {
        correctSentence: 'Can we schedule a call for tomorrow afternoon?',
        words: ['for tomorrow afternoon?', 'Can', 'a call', 'we schedule'],
      },
      {
        correctSentence: 'I would like to arrange a meeting to discuss the proposal.',
        words: ['to arrange', 'the proposal.', 'I', 'a meeting', 'would like', 'to discuss'],
      },
      {
        correctSentence: 'Are you free on Thursday at 11 a.m.?',
        words: ['on Thursday', 'Are', 'at 11 a.m.?', 'you free'],
      },
      {
        correctSentence: 'Could we meet to review the project status?',
        words: ['the project status?', 'Could', 'to review', 'we meet'],
      },
      {
        correctSentence: 'Let us set up a meeting next week.',
        words: ['a meeting', 'next week.', 'Let us', 'set up'],
      },
      {
        correctSentence: 'Would Friday at 9 a.m. work for you?',
        words: ['work for you?', 'Would', 'Friday', 'at 9 a.m.'],
      },
      {
        correctSentence: 'Please confirm your availability for Monday.',
        words: ['your availability', 'for Monday.', 'Please confirm'],
      },
      {
        correctSentence: 'Can we postpone the meeting until Wednesday?',
        words: ['the meeting', 'Can', 'until Wednesday?', 'we postpone'],
      },
      {
        correctSentence: 'I suggest arranging a follow-up meeting soon.',
        words: ['arranging', 'soon.', 'a follow-up meeting', 'I suggest'],
      },
    ],
  },
];

export default function InternalCorrespondencePractice() {
  return (
    <div className="icp-page">
      <div className="icp-header-card">
        <div>
          <h2 className="icp-title">Internal Correspondence Practice</h2>
          <p className="icp-subtitle">Build accurate business sentences by ordering the blocks correctly.</p>
        </div>
        <NavLink to="/bloc/business-english/fitxes" className="icp-back-link">
          ← Back to Business English
        </NavLink>
      </div>

      <div className="icp-grid">
        {EXERCISE_SECTIONS.map((section) => (
          <section key={section.title} className="icp-card">
            <ReorderExercise
              title={section.title}
              instruction={section.instruction}
              section={section.section}
              sentences={section.sentences}
            />
          </section>
        ))}
      </div>
    </div>
  );
}
