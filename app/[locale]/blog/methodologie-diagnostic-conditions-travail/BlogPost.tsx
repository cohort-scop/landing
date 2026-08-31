'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import type { ReactNode } from 'react';
import RelatedPosts from '../RelatedPosts';

const slug = 'methodologie-diagnostic-conditions-travail';

/** Corps de l'article, traduit fr/en. */
const content: Record<'fr' | 'en', ReactNode> = {
  fr: (
    <>
      <h2>1. Intention</h2>

      <p>
        Ce document expose le <strong>cadre méthodologique simple et opérationnel</strong> développé par Cohortes et visant à améliorer la qualité des diagnostics des conditions de travail à partir de témoignages libres écrits et oraux.
      </p>

      <p>
        Il s'adresse à des <strong>consultant·es, intervenant·es et cabinets de conseil</strong> qui utilisent ou souhaitent utiliser le témoignage comme matière première d'analyse et d'émergence de solutions.
      </p>

      <h2>2. Les faiblesses des démarches de diagnostic classiques</h2>

      <p>
        Dans de nombreuses démarches de diagnostic, le témoignage est remplacé, ou fortement contraint, par des <strong>dispositifs quantitatifs</strong> qui conduisent à appauvrir la collecte et restreindre le potentiel offert par la parole des collaborateur·ices. En témoignent l'envoi massif de questionnaires et la standardisation des possibilités de réponse.
      </p>

      <p>
        Sans remettre en cause la pertinence de la masse de données ainsi générées, il apparaît nécessaire d'adopter une <strong>approche qualitative</strong> dans le processus de récolte. Et de fait, le <strong>qualitatif</strong> est souvent perçu comme une alternative plus féconde, d'où l'importance accordée aux entretiens individuels, processus de collecte qualitative le plus souvent privilégié.
      </p>

      <p>
        Pourtant, l'entretien individuel est susceptible de générer de la tension : pour la personne interrogée, il s'agit de retraverser et de formuler une expérience parfois sensible, de savoir comment sélectionner les informations pertinentes, de chercher à comprendre ce qui est attendu de lui ou d'elle. Faute d'un cadre suffisamment clair et de pratique, faute d'impression d'être véritablement pris·e en compte dans le processus de collecte, le/la salarié·e peut avoir l'impression de ne pas être assez pris en compte ou éprouver du stress, ce qui conduit à des réponses peu représentatives de son parcours.
      </p>

      <p>
        S'ils ont une ambition importante, écouter les salarié·es, les aider à formuler des retours constructifs, ces dispositifs posent ainsi plusieurs problèmes structurels.
      </p>

      <h3>2.1 Des questions descendantes qui peuvent manquer l'essentiel</h3>

      <p>
        Les questionnaires reposent sur des <strong>énoncés construits en amont</strong> par les coordinateurs·ices de la démarche.
      </p>

      <p>Cela a deux conséquences majeures :</p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>les axes d'analyse sont définis avant d'avoir été mis à l'épreuve du terrain</li>
        <li>les sujets réels pour les personnes concernées peuvent ne jamais émerger</li>
      </ul>

      <p className="font-semibold">
        On mesure bien ce que l'on a pensé à demander, pas forcément ce qui compte réellement.
      </p>

      <h3>2.2 Des réponses formatées dans le quantitatif</h3>

      <p>
        Les échelles de valeur dans les questionnaires (par exemple de 0 à 4, ou de « pas du tout d'accord » à « tout à fait d'accord ») permettent un traitement statistique rapide, mais elles posent une question centrale :
      </p>

      <blockquote className="border-l-4 border-cohortes-orange pl-4 italic my-8 text-xl">
        Deux notes « 1 » racontent-elles pour autant le même ressenti, la même analyse, les mêmes leviers identifiés ?
      </blockquote>

      <p>
        Le chiffre masque la diversité de la réalité et la comparaison donne une illusion d'objectivité.
      </p>

      <h3>2.3 Un qualitatif proposé souvent trop tard</h3>

      <p>
        Les démarches qualitatives, via des entretiens individuels, sont reconnues pour leur richesse, mais elles rencontrent elles aussi des limites :
      </p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>elles sont longues et coûteuses</li>
        <li>le plus souvent, elles arrivent tard dans la mission</li>
        <li>elles sont menées avec peu de préparation faute de temps</li>
        <li>elles sont parfois déconnectées du quantitatif, ce qui rend difficile le croisement des données</li>
      </ul>

      <h2>3. La proposition de valeur de Cohortes : créer les conditions d'un témoignage vivant, structurant et collectif</h2>

      <p>
        Pour que la récolte de témoignages produise un diagnostic pertinent, et facteur d'encapacitation des salarié·es d'une organisation, il est nécessaire de donner une place centrale aux personnes qui témoignent. <strong>C'est l'objectif que poursuit Cohortes.</strong>
      </p>

      <p>
        Lorsque les personnes interrogées sont pleinement intégrées à la construction de la récolte, le quantitatif et le qualitatif deviennent complémentaires, l'un venant appuyer et éclairer l'autre.
      </p>

      <p>
        La méthodologie que se donne Cohortes repose ainsi sur la conviction que le témoignage a une importance majeure dans le <strong>bien-être</strong> des salarié·es et leur capacité à <strong>faire commun</strong> au sein de l'organisation.
      </p>

      <h3>3.1 Un outil asynchrone</h3>

      <p>L'outil Cohortes est une plateforme permettant de témoigner :</p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>quand la personne le souhaite</li>
        <li>au moment où le vécu est encore présent</li>
        <li>sans contrainte de durée ou de nombre de caractères</li>
      </ul>

      <p>Il s'agit ainsi de faire de la personne la dépositaire de son propre vécu.</p>

      <h3>3.2 Un enjeu de transparence et de communicabilité</h3>

      <p>
        Une fois collectés, les témoignages sont anonymisés et mis en commun sur la plateforme. L'accès aux témoignages de l'ensemble du groupe a plusieurs effets positifs :
      </p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>un sentiment de reconnaissance et de légitimité (<em>« je ne suis pas seul·e à éprouver tel sentiment »</em>)</li>
        <li>une compréhension des trajectoires d'autres personnes du groupe (<em>« je comprends comment telle situation conduit à tel sentiment »</em>)</li>
        <li>une conscience collective de ce qui structure l'organisation et en fait la culture</li>
      </ul>

      <p className="font-semibold">
        L'intelligence collective est ainsi mise à contribution pour que le groupe se sente plus solide et plus solidaire et puisse identifier des solutions ensemble.
      </p>

      <h3>3.3 L'importance du temps long</h3>

      <p>
        La collecte n'est pas qu'un acte ponctuel : elle peut devenir une <strong>pratique itérative</strong> favorisant l'essaimage des bonnes pratiques au sein de la structure. Utilisé sur le temps long, Cohortes vise à :
      </p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>améliorer la parole et le témoignage des salarié·es : se sentir outillé·e par la pratique à identifier des obstacles ou des difficultés dans son parcours</li>
        <li>enrichir ou préciser son récit, en gardant une archive de son propre parcours et en devenant en mesure de comprendre ses évolutions</li>
        <li>réagir implicitement ou explicitement à d'autres témoignages, en construisant des réseaux de sens dans les analyses</li>
      </ul>

      <p>
        Le temps long favorise ainsi la compréhension de l'évolution des situations et l'augmentation de l'engagement sur les sujets des conditions de travail et d'organisation.
      </p>

      <h3>3.4 Analytique et compréhension partagée</h3>

      <p>
        L'intelligence artificielle constitue un nouveau levier pour <strong>concilier et articuler approches quantitatives et qualitatives</strong>, sans les opposer. Cohortes l'utilise de manière à rendre possible le traitement de volumes importants de témoignages écrits / oraux libres à tout moment tout en préservant leur richesse, en offrant des clefs de compréhension accessibles.
      </p>

      <p>L'analyse assistée par l'IA offre un double bénéfice :</p>

      <p><strong>Pour les coordinateur·ices de la démarche</strong>, elle permet :</p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>d'identifier des signaux faibles</li>
        <li>de regrouper des idées ou des situations similaires, de comprendre ce qui polarise ou fait consensus</li>
        <li>de produire des indicateurs à partir de données non structurées, sans les réduire à des scores arbitraires</li>
      </ul>

      <p><strong>Pour les personnes qui témoignent ou assistent le témoignage</strong>, elle permet :</p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>de mieux comprendre les points de vue des autres parties prenantes</li>
        <li>de saisir le sens global de la démarche de témoignage</li>
        <li>de devenir alliées de la pratique</li>
      </ul>

      <h2>4. Les outils proposés</h2>

      <h3>4.1 L'ambition de la boîte à outils</h3>

      <p>
        Cohortes repose sur deux piliers : les <strong>témoignages individuels</strong> et les <strong>ateliers collectifs</strong>. Les deux sont vus comme entretenant un lien de <strong>complémentarité</strong> que l'itération, c'est-à-dire le fait de les répéter dans le temps, permet de renforcer.
      </p>

      <p>
        Cohortes est ainsi à comprendre et utiliser comme une boîte à outils permettant de rendre l'analyse des conditions de travail co-construite de façon dynamique.
      </p>

      <p>
        <strong>Quand la phase de témoignage individuel intervient en premier, en amont d'un atelier collectif,</strong> les participant·es peuvent arriver avec une matière déjà formulée, ce qui permet aussi aux facilitateur·ices d'identifier des thèmes émergents.
      </p>

      <p>
        <strong>Quand l'atelier collectif précède les entretiens individuels,</strong> il peut permettre d'approfondir les sujets ayant déjà émergé. Le groupe fait alors émerger des sujets qui méritent d'être approfondis, ce qui permet :
      </p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>d'aller dans la précision sur les points soulevés</li>
        <li>de faire de la place aux sujets qui n'ont pas émergé en groupe (certaines personnes ne s'expriment pas en collectif)</li>
        <li>de compléter ou nuancer ce qui a été dit</li>
      </ul>

      <p className="italic">
        Une bonne pratique : enregistrer les entretiens individuels et les retranscrire grâce à l'IA.
      </p>

      <h3>4.2 Le témoignage individuel : comment faire émerger la parole</h3>

      <p>
        Le témoignage individuel permet de comprendre précisément un parcours et des ressentis. Mais les conditions de travail ne sont jamais purement individuelles : elles sont le produit de procédés organisationnels, d'interactions entre personnes, de dynamiques collectives.
      </p>

      <h3>4.3 L'atelier collectif pour développer le pouvoir d'agir</h3>

      <p>
        Pour comprendre la racine des difficultés, il faut mettre en perspective les ressentis individuels avec la parole collective : sur quoi s'entend-on ? Qu'est-ce qui fonctionne et qu'est-ce qui dysfonctionne ?
      </p>

      <p>L'atelier collectif vise ainsi à :</p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>nommer ensemble ce qui fait obstacle ou ce qui porte</li>
        <li>révéler les convergences (<em>« on vit la même chose »</em>) et les divergences (<em>« je ne savais pas que tu le voyais comme ça »</em>)</li>
        <li>légitimer la parole : ce qui est dit en groupe prend une portée différente</li>
      </ul>

      <p className="font-semibold">
        Le groupe gagne en puissance et en conscience en inscrivant le partage de retour d'expérience comme méthode encapacitante.
      </p>

      <h3>4.4 Exemple d'atelier collectif : le Speed Boat, un rituel simple et éprouvé</h3>

      <p>
        Le <em>Speed Boat</em> est une méthode issue du monde Agile, habituellement utilisée pour les rétrospectives d'équipe. Appliquée au diagnostic des conditions de travail, elle offre un cadre intéressant pour l'exercice.
      </p>

      <p><strong>Le principe :</strong></p>

      <p>
        On représente une période vécue par une équipe comme un voyage sur un bateau vers une destination souhaitée.
      </p>

      <p>Chaque participant·e est invité·e à identifier :</p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li><strong>les forces / le vent :</strong> qu'est-ce qui nous fait avancer ?</li>
        <li><strong>les freins / l'ancre :</strong> qu'est-ce qui nous retient ?</li>
        <li><strong>les victoires / les trésors :</strong> qu'avons-nous déjà accompli ?</li>
        <li><strong>les menaces / les récifs :</strong> quels dangers voyons-nous venir ?</li>
        <li><strong>les objectifs / l'île :</strong> quels sont les objectifs à atteindre ?</li>
      </ul>

      <p><strong>Le déroulement :</strong></p>

      <ol className="list-decimal pl-6 mb-8 text-lg">
        <li>Donner 10 à 15 minutes pour que chacun·e écrive individuellement sur des post-it des témoignages autour des 5 axes.</li>
        <li>Ensuite, chacun·e à son tour vient au tableau présenter ses post-it à tout le monde.</li>
        <li>Le rôle du/de la coordinateur·ice ou du facilitateur·ice est de prendre des notes, pas de participer.</li>
        <li>Discuter collectivement de ce qui émerge, construire une représentation partagée de l'organisation.</li>
      </ol>

      <p><strong>Conditions de réussite :</strong></p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>Des groupes de personnes qui travaillent ensemble, constitués de moins de 10 personnes et n'étant composés que de personnes internes à l'organisation. Un cadre clair : on parle du collectif, pas des personnes.</li>
        <li>Une trace écrite accessible à tous·tes après l'atelier.</li>
      </ul>
    </>
  ),
  en: (
    <>
      <h2>1. Intent</h2>

      <p>
        This document sets out the <strong>simple, operational methodological framework</strong> developed by Cohortes to improve the quality of working conditions diagnoses based on free, written and oral testimonies.
      </p>

      <p>
        It is aimed at <strong>consultants, practitioners and advisory firms</strong> who use, or would like to use, testimony as the raw material for analysis and for the emergence of solutions.
      </p>

      <h2>2. The weaknesses of traditional diagnostic approaches</h2>

      <p>
        In many diagnostic approaches, testimony is replaced, or heavily constrained, by <strong>quantitative tools</strong> that end up impoverishing the data collected and curbing the potential offered by employees' own words. The mass distribution of questionnaires and the standardisation of response options bear witness to this.
      </p>

      <p>
        Without questioning the relevance of the sheer volume of data generated this way, it is clear that a <strong>qualitative approach</strong> needs to be adopted in the collection process. Indeed, the <strong>qualitative</strong> is often perceived as a more fruitful alternative, which explains the importance placed on individual interviews, the most commonly favoured qualitative collection process.
      </p>

      <p>
        Yet individual interviews are liable to generate tension: for the person being interviewed, it means revisiting and articulating an experience that can be sensitive, knowing how to select the relevant information, and trying to understand what is expected of them. Without a sufficiently clear framework and practice, without the feeling of being genuinely taken into account in the collection process, the employee may feel not sufficiently considered, or experience stress, leading to answers that are hardly representative of their journey.
      </p>

      <p>
        However ambitious their intent — listening to employees, helping them formulate constructive feedback — these tools therefore raise several structural problems.
      </p>

      <h3>2.1 Top-down questions that can miss what matters most</h3>

      <p>
        Questionnaires rely on <strong>statements drafted in advance</strong> by those coordinating the process.
      </p>

      <p>This has two major consequences:</p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>the analytical themes are defined before ever being tested in the field</li>
        <li>the issues that genuinely matter to the people concerned may never come to light</li>
      </ul>

      <p className="font-semibold">
        You measure what you thought to ask for, not necessarily what truly counts.
      </p>

      <h3>2.2 Responses moulded by the quantitative</h3>

      <p>
        The value scales used in questionnaires (from 0 to 4, for instance, or from "strongly disagree" to "strongly agree") allow for rapid statistical processing, but they raise a central question:
      </p>

      <blockquote className="border-l-4 border-cohortes-orange pl-4 italic my-8 text-xl">
        Do two "1" scores really tell the same story — the same feeling, the same analysis, the same levers identified?
      </blockquote>

      <p>
        The figure masks the diversity of reality, and comparison creates an illusion of objectivity.
      </p>

      <h3>2.3 Qualitative work often proposed too late</h3>

      <p>
        Qualitative approaches, through individual interviews, are recognised for their richness, but they too run into limits:
      </p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>they are long and costly</li>
        <li>most often, they come late in the assignment</li>
        <li>they are carried out with little preparation for lack of time</li>
        <li>they are sometimes disconnected from the quantitative work, making it difficult to cross-reference data</li>
      </ul>

      <h2>3. Cohortes' value proposition: creating the conditions for a living, structuring and collective testimony</h2>

      <p>
        For the collection of testimonies to produce a relevant diagnosis that also empowers the employees of an organisation, the people testifying must be placed at the very centre. <strong>That is precisely the goal Cohortes pursues.</strong>
      </p>

      <p>
        When the people interviewed are fully involved in shaping the collection process, the quantitative and the qualitative become complementary, each one supporting and illuminating the other.
      </p>

      <p>
        The methodology Cohortes has adopted rests on the conviction that testimony plays a major role in the <strong>well-being</strong> of employees and in their capacity to <strong>act together</strong> within the organisation.
      </p>

      <h3>3.1 An asynchronous tool</h3>

      <p>The Cohortes tool is a platform that allows people to testify:</p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>whenever they wish</li>
        <li>at the moment when the experience is still fresh</li>
        <li>without any constraint on duration or number of characters</li>
      </ul>

      <p>The aim is thus to make each person the custodian of their own lived experience.</p>

      <h3>3.2 A matter of transparency and shareability</h3>

      <p>
        Once collected, testimonies are anonymised and shared on the platform. Access to the testimonies of the whole group has several positive effects:
      </p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>a sense of recognition and legitimacy (<em>"I'm not the only one who feels this way"</em>)</li>
        <li>an understanding of other members' journeys (<em>"I understand how such a situation leads to such a feeling"</em>)</li>
        <li>a collective awareness of what structures the organisation and shapes its culture</li>
      </ul>

      <p className="font-semibold">
        Collective intelligence is thus called upon so that the group feels stronger and more united, and can identify solutions together.
      </p>

      <h3>3.3 The importance of the long term</h3>

      <p>
        Collection is not a one-off act: it can become an <strong>iterative practice</strong> that encourages the dissemination of good practices within the organisation. Used over the long term, Cohortes aims to:
      </p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>improve employees' expression and testimony: feeling equipped, through practice, to identify obstacles or difficulties along one's path</li>
        <li>enrich or refine one's narrative, keeping an archive of one's own journey and becoming able to understand how it evolves</li>
        <li>react, implicitly or explicitly, to other testimonies, building networks of meaning within the analyses</li>
      </ul>

      <p>
        The long term thus fosters an understanding of how situations evolve and increases engagement with working conditions and organisational matters.
      </p>

      <h3>3.4 Analytics and shared understanding</h3>

      <p>
        Artificial intelligence is a new lever for <strong>reconciling and articulating quantitative and qualitative approaches</strong> rather than pitting them against each other. Cohortes uses it to make it possible to process large volumes of free written or oral testimonies at any time, while preserving their richness and offering accessible keys to understanding.
      </p>

      <p>AI-assisted analysis offers a twofold benefit:</p>

      <p><strong>For those coordinating the process</strong>, it makes it possible to:</p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>identify weak signals</li>
        <li>group similar ideas or situations together, and understand what polarises or creates consensus</li>
        <li>produce indicators from unstructured data without reducing them to arbitrary scores</li>
      </ul>

      <p><strong>For those who testify or support testimony</strong>, it makes it possible to:</p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>better understand the viewpoints of other stakeholders</li>
        <li>grasp the overall meaning of the testimony process</li>
        <li>become allies of the practice</li>
      </ul>

      <h2>4. The tools on offer</h2>

      <h3>4.1 The ambition of the toolkit</h3>

      <p>
        Cohortes rests on two pillars: <strong>individual testimonies</strong> and <strong>collective workshops</strong>. Both are seen as maintaining a relationship of <strong>complementarity</strong> that iteration — that is, repeating them over time — helps to reinforce.
      </p>

      <p>
        Cohortes is thus to be understood and used as a toolkit for making the analysis of working conditions dynamically co-constructed.
      </p>

      <p>
        <strong>When the individual testimony phase comes first, ahead of a collective workshop,</strong> participants can arrive with material that is already articulated, which also enables facilitators to identify emerging themes.
      </p>

      <p>
        <strong>When the collective workshop precedes the individual interviews,</strong> it can serve to go deeper into the topics that have already emerged. The group then surfaces topics that deserve to be explored further, which makes it possible to:
      </p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>go into greater detail on the points raised</li>
        <li>make room for topics that did not emerge in the group (some people do not speak up in a collective setting)</li>
        <li>complete or nuance what has been said</li>
      </ul>

      <p className="italic">
        A good practice: record the individual interviews and transcribe them with the help of AI.
      </p>

      <h3>4.2 Individual testimony: how to bring the words out</h3>

      <p>
        Individual testimony makes it possible to understand a journey and its associated feelings with precision. But working conditions are never purely individual: they are the product of organisational processes, of interactions between people, of collective dynamics.
      </p>

      <h3>4.3 The collective workshop to develop the capacity to act</h3>

      <p>
        To understand the root of difficulties, individual feelings must be put into perspective alongside the collective voice: what do we agree on? What works and what does not?
      </p>

      <p>The collective workshop thus aims to:</p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>name together what stands in the way or what carries us forward</li>
        <li>reveal convergences (<em>"we are living the same thing"</em>) and divergences (<em>"I didn't know you saw it that way"</em>)</li>
        <li>legitimise speech: what is said in a group takes on a different weight</li>
      </ul>

      <p className="font-semibold">
        The group gains in power and awareness by making the sharing of experience an empowering method.
      </p>

      <h3>4.4 Example of a collective workshop: the Speed Boat, a simple and tried-and-tested ritual</h3>

      <p>
        The <em>Speed Boat</em> is a method from the Agile world, usually used for team retrospectives. Applied to diagnosing working conditions, it offers an interesting framework for the exercise.
      </p>

      <p><strong>The principle:</strong></p>

      <p>
        A period experienced by a team is represented as a boat journey towards a desired destination.
      </p>

      <p>Each participant is invited to identify:</p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li><strong>the forces / the wind:</strong> what is moving us forward?</li>
        <li><strong>the brakes / the anchor:</strong> what is holding us back?</li>
        <li><strong>the wins / the treasures:</strong> what have we already achieved?</li>
        <li><strong>the threats / the rocks:</strong> what dangers do we see coming?</li>
        <li><strong>the goals / the island:</strong> what objectives are we aiming for?</li>
      </ul>

      <p><strong>The process:</strong></p>

      <ol className="list-decimal pl-6 mb-8 text-lg">
        <li>Allow 10 to 15 minutes for each person to individually write testimonies on sticky notes around the 5 axes.</li>
        <li>Then, each person in turn comes to the board to present their sticky notes to everyone.</li>
        <li>The role of the coordinator or facilitator is to take notes, not to take part.</li>
        <li>Discuss collectively what emerges, and build a shared representation of the organisation.</li>
      </ol>

      <p><strong>Conditions for success:</strong></p>

      <ul className="list-disc pl-6 mb-8 text-lg">
        <li>Groups of people who work together, made up of fewer than 10 people and comprising only people internal to the organisation. A clear framework: we talk about the collective, not about individuals.</li>
        <li>A written record accessible to everyone after the workshop.</li>
      </ul>
    </>
  ),
};

export default function BlogPost() {
  const locale = useLocale() as 'fr' | 'en';
  const isEn = locale === 'en';
  const t = useTranslations('blog.posts.methodologie-diagnostic-conditions-travail');

  return (
    <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="container mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-cohortes-orange transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {isEn ? 'Back to the blog' : 'Retour au blog'}
        </Link>

        <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
          <span className="px-3 py-1 bg-cohortes-orange/10 text-cohortes-orange rounded-full font-semibold">
            {isEn ? 'Methodology' : 'Méthodologie'}
          </span>
          <time>
            {new Date('2025-12-24').toLocaleDateString(isEn ? 'en-GB' : 'fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>·</span>
          <span>{isEn ? '10 min read' : '10 min de lecture'}</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-cohortes-dark mb-8 leading-tight"
        >
          {t('title')}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-xl max-w-none [&_a]:text-blue-600 [&_a]:underline [&>p]:mb-8 [&_p]:text-lg [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-6 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-4"
        >
          {content[locale]}
        </motion.div>

        <RelatedPosts currentSlug={slug} />
      </div>
    </article>
  );
}
