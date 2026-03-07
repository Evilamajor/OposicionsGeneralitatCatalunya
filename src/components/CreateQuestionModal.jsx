import { useMemo, useState } from 'react';
import { isDev } from '../utils/env';
import './CreateQuestionModal.css';

const EMPTY_FORM = {
  question: '',
  options: ['', '', '', ''],
  correctAnswer: null,
  explanationCorrect: '',
  explanationIncorrect: '',
};

function CreateQuestionModal({ isOpen, onClose, onSave }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [touched, setTouched] = useState(false);

  const isValid = useMemo(() => {
    const hasQuestion = form.question.trim().length > 0;
    const hasOptions = form.options.length === 4 && form.options.every((option) => option.trim().length > 0);
    const hasCorrect = typeof form.correctAnswer === 'number' && form.correctAnswer >= 0 && form.correctAnswer <= 3;
    const hasExplanationCorrect = form.explanationCorrect.trim().length > 0;
    const hasExplanationIncorrect = form.explanationIncorrect.trim().length > 0;

    return hasQuestion && hasOptions && hasCorrect && hasExplanationCorrect && hasExplanationIncorrect;
  }, [form]);

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setTouched(false);
  };

  const handleOptionChange = (index, value) => {
    setForm((prev) => {
      const nextOptions = [...prev.options];
      nextOptions[index] = value;
      return {
        ...prev,
        options: nextOptions,
      };
    });
  };

  const handleSave = () => {
    if (!isDev) return;
    setTouched(true);
    if (!isValid) return;

    onSave({
      question: form.question.trim(),
      options: form.options.map((option) => option.trim()),
      correctAnswer: form.correctAnswer,
      explanationCorrect: form.explanationCorrect.trim(),
      explanationIncorrect: form.explanationIncorrect.trim(),
    });

    resetForm();
  };

  const handleCancel = () => {
    resetForm();
    onClose();
  };

  if (!isDev || !isOpen) return null;

  return (
    <div className="create-question-backdrop" role="presentation" onClick={handleCancel}>
      <div className="create-question-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
        <h3>Nova pregunta ASK</h3>

        <label htmlFor="custom-question-text">Pregunta</label>
        <input
          id="custom-question-text"
          type="text"
          value={form.question}
          onChange={(event) => setForm((prev) => ({ ...prev, question: event.target.value }))}
          placeholder="Escriu l'enunciat de la pregunta"
        />

        <div className="create-question-options">
          {form.options.map((option, index) => (
            <div key={`option-${index}`} className="create-question-option-row">
              <label htmlFor={`custom-option-${index}`}>Opció {String.fromCharCode(65 + index)}</label>
              <input
                id={`custom-option-${index}`}
                type="text"
                value={option}
                onChange={(event) => handleOptionChange(index, event.target.value)}
                placeholder={`Text opció ${String.fromCharCode(65 + index)}`}
              />
              <label className="create-question-radio">
                <input
                  type="radio"
                  name="custom-correct-answer"
                  checked={form.correctAnswer === index}
                  onChange={() => setForm((prev) => ({ ...prev, correctAnswer: index }))}
                />
                Correcta
              </label>
            </div>
          ))}
        </div>

        <label htmlFor="custom-explanation-correct">Explicació correcta</label>
        <textarea
          id="custom-explanation-correct"
          value={form.explanationCorrect}
          onChange={(event) => setForm((prev) => ({ ...prev, explanationCorrect: event.target.value }))}
        />

        <label htmlFor="custom-explanation-incorrect">Explicació incorrecta</label>
        <textarea
          id="custom-explanation-incorrect"
          value={form.explanationIncorrect}
          onChange={(event) => setForm((prev) => ({ ...prev, explanationIncorrect: event.target.value }))}
        />

        {touched && !isValid && (
          <p className="create-question-error">
            Revisa el formulari: pregunta, 4 opcions, resposta correcta i dues explicacions són obligatoris.
          </p>
        )}

        <div className="create-question-actions">
          <button type="button" onClick={handleSave}>Guardar</button>
          <button type="button" onClick={handleCancel}>Cancel·lar</button>
        </div>
      </div>
    </div>
  );
}

export default CreateQuestionModal;
