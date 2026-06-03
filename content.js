/* ═══════════════════════════════════════════════════════
   CONTENU ÉDITORIAL — Lux Modernis · Page Anniversaire
   Modifiez librement les textes et la liste des GIFs ici.
═══════════════════════════════════════════════════════ */

/* ── GIFs affichés aléatoirement sur l'écran récompense (> 80%) ── */
const GIFS = [
  './assets/giphy-1.gif',
  './assets/giphy-2.gif',
  './assets/giphy-3.gif',
  './assets/giphy-4.gif',
  './assets/giphy-5.webp',
];

/* ── Messages par tranche de score (0%, 10%, 20% … 100%) ── */
const MSGS = [
  /* 0%  */ "Silence complet. Le Steinway a demandé sa retraite.",
  /* 10% */ "Prestissimo chaotique. Même Satie demande un remboursement.",
  /* 20% */ "Andante confuso — vous cherchez le Do, il se cache.",
  /* 30% */ "Moderato approximatif. Quelques mesures prometteuses, noyées dans le bruit.",
  /* 40% */ "Le purgatoire du solfège. Ni faux, ni juste — l'entre-deux.",
  /* 50% */ "Allegretto timide. La mélodie se dessine, en pointillés.",
  /* 60% */ "Forte et presque juste. Les touches commencent à sourire.",
  /* 70% */ "Bravissimo ! Une hésitation ou deux, mais le maestro approuve.",
  /* 80% */ "Quasi perfetto. Chopin hoche la tête, la salle applaudit.",
  /* 90% */ "Virtuoso ! Une seule fausse note... mais quel talent naturel.",
  /* 100%*/ "Da Capo ! Maestro absolu. Vous êtes la musique.",
];

/* ── Textes de l'écran récompense (> 80%) ── */
const TXT_REWARD = {
  eyebrow : "Lux Modernis",
  title   : "Joyeux\nAnni-\nversaire",   // \n = saut de ligne (<br>)
  team    : "À toute l'équipe — merci de briller chaque jour.",
  btnClose: "Rejouer →",
};

/* ── Textes de l'écran résultat ordinaire (≤ 80%) ── */
const TXT_REVEAL = {
  sub     : "La mélodie n'a pas encore livré son secret.",
  btnClose: "Réessayer →",
};

/* ── Textes de l'interface principale ── */
const TXT_UI = {
  title   : "Jouez.",
  hint    : "Jouez cette mélodie pour révéler la surprise",
  btnDemo : "Écouter →",
  btnReset: "Recommencer",
  kbWhite : "Blanches : Q  S  D  F  G  H  J  K  L  M",
  kbBlack : "Noires    : Z  E      T  Y  U      O  P",
};
