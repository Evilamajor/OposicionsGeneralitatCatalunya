import ComingSoon from './ComingSoon';

/**
 * FitxesEstudi – generic "Fitxes d'estudi" placeholder for blocs
 * that don't yet have a dedicated fitxes component.
 *
 * Shows a ComingSoon message with the bloc title and a hint about
 * the expected content format.
 */

/** Bloc-specific descriptions for the placeholder */
const BLOC_HINTS = {
  'bloc-1': 'Marc institucional: Constitució, Estatut, institucions.',
  'bloc-2': 'Dret administratiu: fonts, acte administratiu, procediment.',
  'bloc-3': 'Règim jurídic: òrgans, competències, responsabilitat patrimonial.',
  'bloc-5': 'Gestió econòmica: pressupostos, despesa pública, control financer.',
  'bloc-6': 'Funció pública: empleat públic, drets, règim disciplinari.',
  'bloc-7': 'Transparència i administració digital: bon govern, protecció de dades.',
};

export default function FitxesEstudi({ blocId }) {
  const hint = BLOC_HINTS[blocId] || '';

  return (
    <ComingSoon
      sectionName="Fitxes d'estudi"
      hint={`Contingut en preparació — properament disponible. ${hint}`}
    />
  );
}
