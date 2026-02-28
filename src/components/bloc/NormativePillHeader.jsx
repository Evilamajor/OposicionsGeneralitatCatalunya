import TooltipNormatiu from './TooltipNormatiu';

const renderReference = (reference) => {
  if (!reference || !reference.tipus || !reference.referencia) {
    return reference?.label || '';
  }

  return (
    <TooltipNormatiu
      key={`${reference.tipus}-${reference.referencia}`}
      tipus={reference.tipus}
      referencia={reference.referencia}
    >
      {reference.label}
    </TooltipNormatiu>
  );
};

export default function NormativePillHeader({ categories }) {
  return (
    <>
      {categories.map((category) => (
        <span className="pill" key={category.title}>
          <b>{category.title}: </b>
          {category.references?.length > 0
            ? category.references.map((reference, index) => (
              <span key={`${category.title}-${reference.tipus || 'text'}-${reference.referencia || index}`}>
                {index > 0 ? ' · ' : ''}
                {renderReference(reference)}
              </span>
            ))
            : category.fallback}
        </span>
      ))}
    </>
  );
}
