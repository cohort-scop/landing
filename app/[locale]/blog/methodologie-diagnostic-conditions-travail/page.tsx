'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <>
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="container mx-auto max-w-3xl">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-cohortes-orange transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour au blog
          </Link>

          {/* Metadata */}
          <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
            <span className="px-3 py-1 bg-cohortes-orange/10 text-cohortes-orange rounded-full font-semibold">
              Méthodologie
            </span>
            <time>24 décembre 2025</time>
            <span>·</span>
            <span>10 min de lecture</span>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-cohortes-dark mb-8 leading-tight"
          >
            Un cadre méthodologique pour un meilleur diagnostic des conditions de travail
          </motion.h1>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-xl max-w-none [&_a]:text-blue-600 [&_a]:underline [&>p]:mb-8 [&_p]:text-lg [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-6 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-4"
          >
            <h2>1. Intention</h2>

            <p>
              Ce document expose le <strong>cadre méthodologique simple et opérationnel</strong> développé par Cohortes et visant à améliorer la qualité des diagnostics des conditions de travail à partir de témoignages libres écrits et oraux.
            </p>

            <p>
              Il s'adresse à des <strong>consultant·es, intervenant·es et cabinets de conseil</strong> qui utilisent ou souhaitent utiliser le témoignage comme matière première d'analyse et d'émergence de solutions.
            </p>

            <h2>2. Les faiblesses des démarches de diagnostic classiques</h2>

            <p>
              Dans de nombreuses démarches de diagnostic, le témoignage est remplacé – ou fortement contraint – par des <strong>dispositifs quantitatifs</strong> qui conduisent à appauvrir la collecte et restreindre le potentiel offert par la parole des collaborateur·ices. En témoignent l'envoi massif de questionnaires et la standardisation des possibilités de réponse.
            </p>

            <p>
              Sans remettre en cause la pertinence de la masse de données ainsi générées, il apparaît nécessaire d'adopter une <strong>approche qualitative</strong> dans le processus de récolte. Et de fait, le <strong>qualitatif</strong> est souvent perçu comme une alternative plus féconde, d'où l'importance accordée aux entretiens individuels, processus de collecte qualitative le plus souvent privilégié.
            </p>

            <p>
              Pourtant, l'entretien individuel est susceptible de générer de la tension : pour la personne interrogée, il s'agit de retraverser et de formuler une expérience parfois sensible, de savoir comment sélectionner les informations pertinentes, de chercher à comprendre ce qui est attendu de lui ou d'elle. Faute d'un cadre suffisamment clair et de pratique, faute d'impression d'être véritablement pris·e en compte dans le processus de collecte, le/la salarié·e peut avoir l'impression de ne pas être assez pris en compte ou éprouver du stress, ce qui conduit à des réponses peu représentatives de son parcours.
            </p>

            <p>
              S'ils ont une ambition importante – écouter les salarié·es, les aider à formuler des retours constructifs –, ces dispositifs posent ainsi plusieurs problèmes structurels.
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
          </motion.div>
        </div>
      </article>
    </>
  );
}
